import type { Metadata } from "next"

import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "FiveManager | Contact",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

function page() {
  return (
    <>
      <div className="my-3 flex flex-col items-center">
        <div className="mb-5 text-2xl font-bold uppercase">Contact</div>
        <ContactForm />
      </div>
    </>
  )
}

export default page
