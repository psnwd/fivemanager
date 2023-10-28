import { db } from "@/db"
import { eq, or } from "drizzle-orm"
import { players } from "drizzle/schema"

// export const runtime = "edge"

// get specific player with id, name, discordId, email or cfxId next js 13 route
export async function GET(request: Request) {
  try {
    const { id, name, discordId, email, cfxId } = await request.json()
    const result = await db
      .select()
      .from(players)
      .where(eq(players.id, id))
      .where(or(eq(players.name, name)))
      .where(or(eq(players.discordId, discordId)))
      .where(or(or(eq(players.email, email))))
      .where(or(eq(players.name, name)))
      .where(or(or(eq(players.cfxId, cfxId))))
      .orderBy(players.id)

    return Response.json({ result })
  } catch (error) {
    console.log("GET /api/players error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}
