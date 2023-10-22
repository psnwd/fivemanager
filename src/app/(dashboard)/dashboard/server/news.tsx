"use client"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

function News() {
  return (
    <>
      <TabsContent value="news" className="space-y-4">
        <div>
          <Dialog>
            <DialogTrigger>
              <Button variant={"outline"}>Add News</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new news</DialogTitle>
                <DialogDescription>
                  <div className="mt-2 flex flex-col gap-3">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Type your message here."
                      />
                    </div>

                    <div>
                      <Label htmlFor="picture">Picture</Label>
                      <Input id="picture" type="file" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <Label htmlFor="date">Date</Label>
                      <DatePicker />
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button>Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </TabsContent>
    </>
  )
}

export default News