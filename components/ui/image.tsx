"use client";

import type { ComponentProps } from "react";
import * as React from "react";
import NextImage from "next/image";

import { cn } from "@/lib/utils";

interface ImageProps extends ComponentProps<typeof NextImage> {}

export function Image({ className, alt, src, ...props }: ImageProps) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <NextImage
      alt={alt ?? "image"}
      className={cn(
        className,
        "duration-700 ease-in-out",
        isLoading ? "scale-100 blur-sm" : "scale-100 blur-0"
      )}
      onLoad={() => setLoading(false)}
      src={
        src ??
        "https://e-cdns-images.dzcdn.net/images/misc//56x56-000000-80-0-0.jpg"
      }
      {...props}
    />
  );
}
