import { LikeButton } from "@/components/shared/play-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function PlaylistTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="max-w-0 pr-0">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="hidden sm:table-cell uppercase">
            Album
          </TableHead>
          <TableHead className="hidden md:table-cell uppercase">
            Date Added
          </TableHead>
          <TableHead className="text-right flex items-center justify-end">
            <Clock size={20} />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => (
          <TableRow key={i} className="cursor-pointer hover:bg-accent">
            <TableCell className="max-w-0 pr-0">{i + 1}</TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <Image src={"/playlist-1.png"} width={50} height={50} alt="" />
                <div className="flex flex-col font-medium">
                  Nixa
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    All day
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Ghost Is Here
            </TableCell>

            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell className=" table-cell ">
              <div className="flex items-center justify-end gap-6">
                <div className="hidden md:block">
                  <LikeButton />
                </div>
                <p>2:00</p>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
