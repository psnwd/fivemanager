"use client"

import React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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
import { TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

function Giveaway() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  async function onSubmit(formData: FormData) {
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  return (
    <TabsContent value="giveaways" className="space-y-4">
      <Dialog>
        <DialogTrigger>
          <Button variant={"outline"}>Add Giveaway</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new giveaway</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <form action={onSubmit}>
              <div className="mb-2 space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" />
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
                              setValue(
                                currentValue === value ? "" : currentValue
                              )
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === type.value
                                  ? "opacity-100"
                                  : "opacity-0"
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
    </TabsContent>
  )
}

export default Giveaway
