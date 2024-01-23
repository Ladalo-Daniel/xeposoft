"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ContactForm from "./ContactForm"

export function ContactModalForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Contact us</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[600px] w-[90vw] rounded-md dark:ring-1">
        <DialogHeader>
          <DialogTitle className=" text-4xl text-yellow-700 text-center">Contact us</DialogTitle>
          <DialogDescription className=" text-center">
            We&apos;re active to here what you want us to do for you
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
