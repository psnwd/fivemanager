import { db } from "@/db"
import { insertWhitelistSchema } from "@/db/schema/whitelist"
import { eq } from "drizzle-orm"
import { whitelist } from "drizzle/schema"

export async function GET() {
  const result = await db
    .select()
    .from(whitelist)
    .where(eq(whitelist.approvedStatus, 0))
    .orderBy(whitelist.id)

  return Response.json(result)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validatedBody = insertWhitelistSchema.parse(body)
  await db.insert(whitelist).values({
    discordId: validatedBody.discordId,
    discordName: validatedBody.discordName,
    steamId: validatedBody.steamId,
    fiveMid: validatedBody.fiveMId,
    reason: validatedBody.reason,
    message: validatedBody.message,
    date: validatedBody.date,
    ip: validatedBody.ip,
    approvedStatus: 0,
  })

  return new Response("Whitelist created successfully", {
    status: 200,
  })
}

// update whitelist data
export async function PUT(request: Request) {
  const body = await request.json()
  const validatedBody = insertWhitelistSchema.parse(body)

  if (validatedBody.id !== undefined) {
    await db
      .update(whitelist)
      .set({
        discordId: validatedBody.discordId,
        discordName: validatedBody.discordName,
        steamId: validatedBody.steamId,
        fiveMid: validatedBody.fiveMId,
        reason: validatedBody.reason,
        message: validatedBody.message,
        date: validatedBody.date,
        ip: validatedBody.ip,
        approvedStatus: 0,
      })
      .where(eq(whitelist.id, validatedBody.id))

    return new Response("Whitelist updated successfully", {
      status: 200,
    })
  } else {
    return new Response("Invalid or missing 'id' in the request body", {
      status: 400,
    })
  }
}

// update whitelist set approvedStatus = 1 where id = 1
export async function PATCH(request: Request) {
  const body = await request.json()
  const validatedBody = insertWhitelistSchema.parse(body)

  if (validatedBody.id !== undefined) {
    await db
      .update(whitelist)
      .set({
        approvedStatus: 1,
      })
      .where(eq(whitelist.id, validatedBody.id))
  } else {
    return new Response("Invalid or missing 'id' in the request body", {
      status: 400,
    })
  }

  return new Response("Whitelist updated successfully", {
    status: 200,
  })
}

// delete whitelist where id = 1
export async function DELETE(request: Request) {
  const body = await request.json()
  const validatedBody = insertWhitelistSchema.parse(body)

  if (validatedBody.id !== undefined) {
    await db.delete(whitelist).where(eq(whitelist.id, validatedBody.id))
  } else {
    return new Response("Invalid or missing 'id' in the request body", {
      status: 400,
    })
  }

  return new Response("Whitelist deleted successfully", {
    status: 200,
  })
}
