import { db } from "@/db"
import { insertPlayersSchema } from "@/db/schema/players"
import { eq } from "drizzle-orm"
import { players } from "drizzle/schema"

export async function GET() {
  try {
    const result = await db.select().from(players).orderBy(players.id)
    return Response.json(result)
  } catch (error) {
    console.log("GET /api/players error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedBody = insertPlayersSchema.parse(body)
    await db.insert(players).values({
      name: validatedBody.name,
      discordId: validatedBody.discordId,
      email: validatedBody.email,
      cfxId: validatedBody.cfxId,
      lastLoginIp: validatedBody.lastLoginIp,
      lastLoginDate: validatedBody.lastLoginDate,
    })

    return new Response("Player created successfully", {
      status: 200,
    })
  } catch (error) {
    console.log("POST /api/players error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const validatedBody = insertPlayersSchema.parse(body)

    if (validatedBody.id !== undefined) {
      await db
        .update(players)
        .set({
          name: validatedBody.name,
          discordId: validatedBody.discordId,
          email: validatedBody.email,
          cfxId: validatedBody.cfxId,
          lastLoginIp: validatedBody.lastLoginIp,
          lastLoginDate: validatedBody.lastLoginDate,
        })
        .where(eq(players.id, validatedBody.id))

      return new Response("Player updated successfully", {
        status: 200,
      })
    } else {
      return new Response("Player id not found", {
        status: 400,
      })
    }
  } catch (error) {
    console.log("PUT /api/players error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const validatedBody = insertPlayersSchema.parse(body)

    if (validatedBody.id !== undefined) {
      await db.delete(players).where(eq(players.id, validatedBody.id))

      return new Response("Player deleted successfully", {
        status: 200,
      })
    } else {
      return new Response("Player id not found", {
        status: 400,
      })
    }
  } catch (error) {
    console.log("DELETE /api/players error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}
