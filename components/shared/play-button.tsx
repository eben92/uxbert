import { CircleArrowDown, Download, Heart, Play } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
  iconSize?: number;
}

function Btn({ className, children, ...props }: Props) {
  return (
    <button
      className={cn("flex  items-center justify-center", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function PlayButton({ iconSize, className, ...props }: Props) {
  return (
    <Btn
      size={"icon"}
      variant={"ghost"}
      className={cn(
        "text-muted-foreground rounded-full h-full shadow-2xl hover:scale-105 transition-all ease-in bg-[#65D36E] text-black  ",
        className
      )}
      {...props}
    >
      <Play size={iconSize ?? 18} fill="currentColor" />
    </Btn>
  );
}

export function LikeButton({ iconSize, className, ...props }: Props) {
  return (
    <Btn
      size={"icon"}
      className={cn("text-muted-foreground", className)}
      variant={"ghost"}
      {...props}
    >
      <Heart size={iconSize ?? 18} fill="none" />
    </Btn>
  );
}
export function DownloadButton({ iconSize, className, ...props }: Props) {
  return (
    <Btn
      size={"icon"}
      className={cn("text-muted-foreground", className)}
      variant={"ghost"}
      {...props}
    >
      <CircleArrowDown size={iconSize ?? 18} fill="none" />
    </Btn>
  );
}
