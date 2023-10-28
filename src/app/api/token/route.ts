import { generateBearerToken } from "@/lib/utils"

export async function GET() {
  try {
    const result = {
      token: generateBearerToken(256),
      token_type: "Bearer",
      expires: 86400,
      scope: "read write",
      timestamp: Date.now(),
    }
    return Response.json(result)
  } catch (error) {
    console.log("GET /api/news error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}

// generate a new token
export async function POST() {
  try {
    const result = {
      token: generateBearerToken(256),
      token_type: "Bearer",
      expires: 86400,
      scope: "read write",
      timestamp: Date.now(),
    }
    return Response.json(result)
  } catch (error) {
    console.log("GET /api/news error", error)

    return new Response("Internal Server Error", {
      status: 500,
    })
  }
}
