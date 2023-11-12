import { db } from "@/db"
import { giveaway } from "drizzle/schema"

export async function GET() {
    try {
        const result = await db.select().from(giveaway).orderBy(giveaway.id)

        return Response.json(result)
    } catch (error) {
        console.log("GET /api/giveaway error", error)

        return new Response("Internal Server Error", {
            status: 500,
        })
    }
}
