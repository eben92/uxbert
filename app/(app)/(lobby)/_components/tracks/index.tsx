import { buttonVariants } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Link } from "lucide-react";
import ClientComponent from "./client";
import { ApiResponse, TrackProps } from "@/types";
import { ENV } from "@/lib/constants";

async function getData() {
  const res = await fetch(`${ENV.BASE_URL}/api/v1/tracks`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }

  const data = (await res.json()) as ApiResponse<TrackProps[]>;

  return data;
}

export default async function YourTopMixes() {
  const res = await getData();
  const data = res.results;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label className="text-2xl font-bold">Your top mixes</Label>
        <Link
          href="/"
          className={buttonVariants({
            className: "rounded text-sm text-muted-foreground",
            variant: "ghost",
          })}
        >
          View all
        </Link>
      </div>
      <ClientComponent data={data} />
    </div>
  );
}
