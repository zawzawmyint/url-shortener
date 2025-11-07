import UrlForm from "@/components/url/UrlForm";
import { wait } from "@/lib/helper";

export default async function Page() {
  await wait();
  return <UrlForm />;
}
