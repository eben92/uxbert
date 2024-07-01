import { cn } from "@/lib/utils";
import { CircleArrowDown } from "lucide-react";
import { SimpleButton, SimpleButtonProps } from "../ui/button";

export function DownloadButton({
  iconSize,
  className,
  ...props
}: Readonly<SimpleButtonProps>) {
  return (
    <SimpleButton className={cn("text-muted-foreground", className)} {...props}>
      <CircleArrowDown size={iconSize ?? 18} fill="none" />
    </SimpleButton>
  );
}
