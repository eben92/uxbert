import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { ButtonProps, SimpleButton } from "../ui/button";

interface Props extends ButtonProps {
  iconSize?: number;
}

export function Favorite({ iconSize, className, ...props }: Props) {
  return (
    <SimpleButton
      size={"icon"}
      className={cn(
        "text-muted-foreground disabled:cursor-not-allowed",
        className
      )}
      variant={"ghost"}
      disabled
      {...props}
    >
      <Heart size={iconSize ?? 18} fill="none" />
    </SimpleButton>
  );
}
