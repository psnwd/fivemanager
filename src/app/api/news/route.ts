import { db } from "@/db"
import { news } from "@/db/schema/news"

export async function GET() {
  try {
    const result = await db.select().from(news).orderBy(news.id)

    return Response.json(result)
  } catch (error) {
    console.log("GET /api/news error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}
