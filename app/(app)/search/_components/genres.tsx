import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ENV } from "@/lib/constants";
import { ApiResponse, GenreProps } from "@/types";

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

export default async function Genres() {
  const res = await getData();
  const data = res.results;

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {data.map((genre, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/3">
            <button className="p-1 w-full h-full">
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
                  <p className="absolute font-bold text-xl sm:text-2xl md:text-4xl left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                    {genre.name}
                  </p>
                </CardContent>
              </Card>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block" />
    </Carousel>
  );
}
