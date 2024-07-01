import { cn } from "@/lib/utils";
import { CircleArrowDown } from "lucide-react";
import { SimpleButton, SimpleButtonProps } from "../ui/button";

export function DownloadButton({
  iconSize,
  className,
  ...props
}: Readonly<SimpleButtonProps>) {
  return (
    <SimpleButton
      size={"icon"}
      className={cn("text-muted-foreground", className)}
      variant={"ghost"}
      {...props}
    >
      <CircleArrowDown size={iconSize ?? 18} fill="none" />
    </SimpleButton>
  );
}
