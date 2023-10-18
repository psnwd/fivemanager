import { db } from "@/db"
import { insertWhitelistSchema } from "@/db/schema/whitelist"
import { eq } from "drizzle-orm"
import { whitelist } from "drizzle/schema"

export const runtime = "edge"

export async function GET(request: Request) {
  // get all whitelists
  const result = await db
    .select()
    .from(whitelist)
    .where(eq(whitelist.approvedStatus, 0))
    .orderBy(whitelist.id)

  return Response.json({ result })
}

export async function POST(request: Request) {
  const body = await request.json()
  const validatedBody = insertWhitelistSchema.parse(body)
  await db.insert(whitelist).values({
    discordId: validatedBody.discordId,
    discordName: validatedBody.discordName,
    steamId: validatedBody.steamId,
    fiveMId: validatedBody.fiveMId,
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
