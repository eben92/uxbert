import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserCard() {
  return (
    <div className="flex items-center pr-2 md:pr-4 p-1 gap-2  rounded-3xl bg-black">
      <Avatar className="h-7 w-7">
        <AvatarImage src="/avatar-1.png" alt="" />
        <AvatarFallback className="text-xs">EB</AvatarFallback>
      </Avatar>
      <div className="flex gap-2 items-center">
        <p className="text-xs hidden md:block">ebenezer</p>
        <ChevronDown size={14} />
      </div>
    </div>
  );
}
