import { db } from "@/db"
import { newsletter } from "@/db/schema/newsletter"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"
import { type ErrorResponse } from "resend"
import { z } from "zod"

import { resend } from "@/lib/resend"
import { subscribeToNewsletterSchema } from "@/lib/validations/email"
import NewsletterWelcomeEmail from "@/components/emails/welcome-email"

export async function POST(req: Request) {
  const input = subscribeToNewsletterSchema.parse(await req.json())

  try {
    const newsletterPreference = await db.query.newsletter.findFirst({
      where: eq(newsletter.email, input.email),
    })

    if (newsletterPreference) {
      return new Response("You are already subscribed to the newsletter.", {
        status: 409,
      })
    }

    const user = {
      id: "1",
      firstName: "BlackCAT",
    }

    const subject = input.subject ?? "Welcome to our newsletter"

    // If email preference exists, update it and send the email
    if (newsletterPreference) {
      await db
        .update(newsletter)
        .set({
          newsletter: true,
        })
        .where(eq(newsletter.email, input.email))

      await resend.emails.send({
        from: env.EMAIL_FROM_ADDRESS,
        to: input.email,
        subject,
        react: NewsletterWelcomeEmail({
          firstName: user?.firstName ?? undefined,
          fromEmail: env.EMAIL_FROM_ADDRESS,
          token: newsletter.token.toString(),
          serverName: "BlackCAT",
        }),
      })
    } else {
      // If email preference does not exist, create it and send the email
      await resend.emails.send({
        from: env.EMAIL_FROM_ADDRESS,
        to: input.email,
        subject,
        react: NewsletterWelcomeEmail({
          firstName: user?.firstName ?? undefined,
          fromEmail: env.EMAIL_FROM_ADDRESS,
          token: input.token,
          serverName: "BlackCAT",
        }),
      })

      await db.insert(newsletter).values({
        email: input.email,
        token: input.token,
        userId: user?.id,
        newsletter: true,
      })
    }

    return new Response(null, { status: 200 })
  } catch (err) {
    console.error(err)

    if (err instanceof z.ZodError) {
      return new Response(err.message, { status: 422 })
    }

    const resendError = err as ErrorResponse

    if (resendError?.error?.message) {
      return new Response(resendError.error.message, { status: 429 })
    }

    if (err instanceof Error) {
      return new Response(err.message, { status: 500 })
    }

    return new Response("Something went wrong", { status: 500 })
  }
}
