import prisma from "@/lib/prisma";
import UrlList from "../components/url/UrlList";
import { wait } from "@/lib/helper";

// Make this page dynamic
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // fetch data from db
  await wait();
  const res = await prisma.url.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <UrlList shorteneds={res} />;
}
