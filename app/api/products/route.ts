import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, description, imageUrl, price } = body
  } catch (error) {
    console.error("Error in POST /api/products:", error)
    return NextResponse.json(
      { error: "Failed to create Product" },
      { status: 500 }
    )
  }
}
