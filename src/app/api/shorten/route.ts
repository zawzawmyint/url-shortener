import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

function generateShortCode() {
  return Math.random().toString(36).substring(2, 8);
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    console.log("url:", url);

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Check if the URL already exists in the database and return it if it does
    const existingUrl = await prisma.url.findFirst({ where: { longUrl: url } });
    if (existingUrl) {
      return NextResponse.json(
        {
          createdAt: existingUrl.createdAt,
          shortUrl: `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/${existingUrl.shortCode}`,
        },
        { status: 200 }
      );
    }

    // Generate a new short code and create a new shortened URL record in the database
    const shortCode = generateShortCode();

    // Create a new shortened URL record in the database
    const shortened = await prisma.url.create({
      data: {
        longUrl: url,
        shortCode,
      },
    });

    // Revalidate the home page
    revalidatePath("/");

    // Return the new shortened URL record
    return NextResponse.json({
      createdAt: shortened.createdAt,
      shortUrl: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/${shortened.shortCode}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to shorten URL" },
      { status: 500 }
    );
  }
}
