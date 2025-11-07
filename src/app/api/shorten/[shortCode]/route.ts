import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { shortCode: string } }
) {
  try {
    const { shortCode } = await params;

    if (!shortCode) {
      return NextResponse.json(
        { error: "ShortCode is required" },
        { status: 400 }
      );
    }

    // Check if URL exists before deleting
    const existingUrl = await prisma.url.findUnique({
      where: { shortCode },
    });

    if (!existingUrl) {
      return NextResponse.json({ error: "URL not found" }, { status: 404 });
    }

    await prisma.url.delete({
      where: {
        shortCode,
      },
    });

    return NextResponse.json({
      message: "URL deleted successfully",
      deletedCode: shortCode,
    });
  } catch (error) {
    console.error("Error deleting URL:", error);
    return NextResponse.json(
      { error: "Failed to delete URL" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { shortCode: string } }
) {
  try {
    const { shortCode } = await params;

    if (!shortCode) {
      return NextResponse.json(
        { error: "ShortCode is required" },
        { status: 400 }
      );
    }

    // Check if URL exists before updating
    const existingUrl = await prisma.url.findUnique({
      where: { shortCode },
    });

    if (!existingUrl) {
      return NextResponse.json({ error: "URL not found" }, { status: 404 });
    }

    const { longUrl } = await request.json();

    if (!longUrl) {
      return NextResponse.json(
        { error: "LongUrl is required" },
        { status: 400 }
      );
    }

    // update shortcode

    await prisma.url.update({
      where: {
        shortCode,
      },
      data: {
        longUrl,
      },
    });

    return NextResponse.json({
      message: "URL updated successfully",
      updatedCode: shortCode,
    });
  } catch (error) {
    console.error("Error updating URL:", error);
    return NextResponse.json(
      { error: "Failed to update URL" },
      { status: 500 }
    );
  }
}
