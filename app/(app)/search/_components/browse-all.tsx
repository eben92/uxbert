import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function BroswerAll() {
  return (
    <div className="grid grid-cols-6 gap-4 md:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <CategoryCard key={i} />
      ))}
    </div>
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
