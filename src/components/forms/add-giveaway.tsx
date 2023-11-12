"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { dashboardConfig } from "@/config/dashboard"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { saveGiveaway } from "@/app/_actions/server"

function AddGiveaway() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const formSchema = z.object({
    title: z
      .string({
        required_error: "A title is required.",
      })
      .min(2, {
        message: "Title must be at least 2 characters.",
      }),
    description: z
      .string({
        required_error: "A description is required.",
      })
      .min(2, {
        message: "Description must be at least 2 characters.",
      }),
    type: z.string({
      required_error: "A type is required.",
    }),
    no_keys: z.number({
      required_error: "A key count is required.",
    }),
    picture: z
      .any()
      .refine((file) => file?.size <= 400000, `Max image size is 4MB.`)
      .refine(
        (file) =>
          ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
            file?.type
          ),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
    start_date: z
      .date({
        required_error: "A start date is required.",
      })
      .refine((date) => {
        return date <= new Date()
      }, "Date must not be in the future."),
    end_date: z
      .date({
        required_error: "A end date is required.",
      })
      .refine((date) => {
        return date <= new Date()
      }, "Date must not be in the future."),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "",
      picture: "",
      start_date: new Date(),
      end_date: new Date(),
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add Giveaway</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new giveaway</DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          {/* action={saveGiveaway} */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-2 space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" type="text" />
            </div>

            <div className="mb-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Type your message here."
              />
            </div>

            <div className="mb-2 flex flex-col gap-2">
              <Label htmlFor="type">Type</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="giveaway-type"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {value
                      ? dashboardConfig.giveaway_type.find(
                          (type) => type.value === value
                        )?.label
                      : "Select type..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[360px] p-0">
                  <Command>
                    <CommandInput placeholder="Search type..." />
                    <CommandEmpty>No type found.</CommandEmpty>
                    <CommandGroup>
                      {dashboardConfig.giveaway_type.map((type) => (
                        <CommandItem
                          key={type.value}
                          value={type.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === type.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {type.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <Label htmlFor="total_key">Number of keys</Label>
              <Input id="total_key" type="number" defaultValue={0} min={0} />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <Label htmlFor="date">Giveaway Start Date</Label>
              <DatePicker />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <Label htmlFor="date">Giveaway End Date</Label>
              <DatePicker />
            </div>

            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AddGiveaway
