import { db } from "@/db"
import { supports } from "@/db/schema/supports"

export async function GET() {
  try {
    const result = await db.select().from(supports).orderBy(supports.id)
    return Response.json(result)
  } catch (error) {
    console.log("GET /api/news error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}
