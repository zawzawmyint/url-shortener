import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ shortCode: string }>;
}) {
  const { shortCode } = await params;
  const url = await prisma.url.findUnique({
    where: { shortCode },
  });

  if (!url) {
    return <div>URL not found</div>;
  }

  await prisma.url.update({
    where: { id: url.id },
    data: { clicks: { increment: 1 } },
  });

  redirect(url.longUrl);
}
