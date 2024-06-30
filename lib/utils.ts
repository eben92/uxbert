import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function secondsToMinutes(seconds: number) {
  return new Date(seconds * 1000)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");
}
