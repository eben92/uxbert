import { SliderButton } from "@/components/shared/navigation";
import { UserCard } from "@/components/shared/user-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";

export default function SearchPage() {
  return (
    <main className="pb-8">
      <div className=" flex flex-col gap-4">
        <div className="flex px-4 py-4 md:px-6 items-center bg-black justify-between w-full">
          <div className="flex items-center gap-4">
            <SliderButton />
            <div className="relative">
              <span className="absolute left-2 text-black top-2">
                <Search size={24} className="" />
              </span>
              <Input
                className="pl-10 text-base bg-primary text-black rounded-3xl md:min-w-[300px] lg:min-w-[500px]"
                placeholder="Artists, songs, or podcasts"
              />
            </div>
          </div>
          <UserCard />
        </div>
        <div className="px-4 md:px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Label className="text-2xl font-bold">Recent searches</Label>
            <div className="grid gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
              {Array.from({ length: 2 }).map((_, i) => (
                <RecentSearch key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Your top genress</Label>
            </div>

            <Genres />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Browse all</Label>
            </div>

            <BroswerAll />
          </div>
        </div>
      </div>
    </main>
  );
}

function CategoryCard() {
  return (
    <div>
      <Card>
        <CardContent className="px-0 pb-0">
          <Image
            src="/playlist-2.png"
            className="rounded w-full object-cover aspect-square"
            alt=""
            width={150}
            height={150}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function BroswerAll() {
  return (
    <div className="grid grid-cols-6 gap-4 md:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <CategoryCard key={i} />
      ))}
    </div>
  );
}

export function Genres() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className=" aspect-video p-0">
                  <Image
                    src="/playlist-2.png"
                    className="aspect-video w-full object-cover rounded"
                    alt=""
                    width={150}
                    height={150}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function RecentSearch() {
  return (
    <button className="flex flex-col relative bg-white/5 rounded items-center justify-start px-0  text-sm gap-4">
      <Button
        className="absolute top-4 right-4 h-9 w-9"
        variant={"ghost"}
        size={"round"}
      >
        <X size={24} />
      </Button>
      <Card className="flex flex-col  items-center gap-2 justify-center">
        <CardHeader className="flex px-4 pb-0 flex-col gap-2 pt-4">
          <div>
            <Image
              src="/playlist-2.png"
              className=" rounded-full w-full"
              alt=""
              width={150}
              height={150}
            />
          </div>
          <CardTitle className="text-lg text-start">The Chainsmokers</CardTitle>
        </CardHeader>
        <CardContent className="pb-4 w-full px-4">
          <CardDescription className="text-start">Artist</CardDescription>
        </CardContent>
      </Card>
    </button>
  );
}
