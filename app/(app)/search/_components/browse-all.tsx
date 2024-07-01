import { Card, CardContent } from "@/components/ui/card";
import { ENV } from "@/lib/constants";
import { ApiResponse, GenreProps } from "@/types";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${ENV.BASE_URL}/api/v1/genres`, {
    // cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }

  const data = (await res.json()) as ApiResponse<GenreProps[]>;

  return data;
}

export default async function BroswerAll() {
  const res = await getData();
  const data = res.results;

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {data.map((genre) => (
        <button className="p-1 cursor-not-allowed w-full h-full">
          <Card>
            <CardContent className=" aspect-video relative p-0">
              <Image
                src={genre.picture_medium}
                alt=""
                className="aspect-video w-full object-cover rounded"
                width={150}
                height={150}
              />
              <div className="bg-black/55  absolute inset-x-0 inset-y-0" />
              <p className="absolute font-bold text-xl md:text-2xl left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                {genre.name}
              </p>
            </CardContent>
          </Card>
        </button>
      ))}
    </div>
  );
}
