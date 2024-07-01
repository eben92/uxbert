import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import { SimpleButton, SimpleButtonProps } from "../ui/button";

interface Props extends SimpleButtonProps {
  isPlaying?: boolean;
}

export function PlayButton({
  iconSize,
  isPlaying,
  className,
  ...props
}: Readonly<Props>) {
  return (
    <SimpleButton
      size={"icon"}
      variant={"ghost"}
      className={cn(
        "text-muted-foreground rounded-full h-full shadow-2xl hover:scale-105 transition-all ease-in bg-[#65D36E] text-black  ",
        className
      )}
      {...props}
    >
      {isPlaying ? (
        <Pause size={iconSize ?? 18} fill="currentColor" />
      ) : (
        <Play size={iconSize ?? 18} fill="currentColor" />
      )}
    </SimpleButton>
  );
}
