import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts the given number of seconds to a formatted time string.
 * If the number of seconds is less than an hour, the format is "Xmin".
 * If the number of seconds is an hour or more, the format is "Xhr Ymin".
 *
 * @param seconds - The number of seconds to convert.
 * @returns The formatted time string.
 */
export function secondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0) {
    return `${minutes}min`;
  }

  return `${hours}hr ${minutes}min`;
}

/**
 * Converts seconds to minutes.
 * @param seconds - The number of seconds to convert.
 * @returns A string representing the minutes in the format "MM:SS".
 */
export function secondsToMinutes(seconds: number) {
  return new Date(seconds * 1000)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");
}

/**
 * Formats the given time in seconds into a readable format.
 * If the time is Infinity, returns "--".
 * If the time is greater than or equal to 1 hour, displays the hours as well.
 *
 * @param seconds - The time in seconds to format.
 * @returns The formatted time as a string.
 */
export const formatTime = (seconds: number) => {
  if (seconds === Infinity) {
    return "--";
  }
  const floored = Math.floor(seconds);
  let from = 14;
  let length = 5;

  // display hours only if necessary.
  if (floored >= 3600) {
    from = 11;
    length = 8;
  }

  return new Date(floored * 1000).toISOString().substr(from, length);
};
