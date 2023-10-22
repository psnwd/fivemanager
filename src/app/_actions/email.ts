"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/db"
import { newsletter } from "@/db/schema/newsletter"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"
import { type z } from "zod"

import { resend } from "@/lib/resend"
import { updateEmailPreferencesSchema } from "@/lib/validations/email"
import NewsletterWelcomeEmail from "@/components/emails/welcome-email"

export async function updateEmailPreferencesAction(
  rawInput: z.infer<typeof updateEmailPreferencesSchema>
) {
  const input = updateEmailPreferencesSchema.parse(rawInput)

  const newsletterPreference = await db.query.newsletter.findFirst({
    where: eq(newsletter.token, input.token),
  })

  if (!newsletterPreference) {
    throw new Error("Email not found.")
  }

  // TODO: Get user from session
  const user = {
    id: "1",
    firstName: "BlackCAT",
  }

  if (input.newsletter && !newsletterPreference?.newsletter) {
    await resend.emails.send({
      from: env.EMAIL_FROM_ADDRESS,
      to: newsletterPreference.email,
      subject: "Welcome to our newsletter",
      react: NewsletterWelcomeEmail({
        firstName: user?.firstName ?? undefined,
        fromEmail: env.EMAIL_FROM_ADDRESS,
        token: input.token,
        serverName: "",
      }),
    })
  }

  await db
    .update(newsletter)
    .set({
      ...input,
      userId: user?.id,
    })
    .where(eq(newsletter.token, input.token))

  revalidatePath("/")
}
