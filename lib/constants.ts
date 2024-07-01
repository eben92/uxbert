export const ENV = {
  API_URL: process.env.DEEZER_BASE_URL ?? "https://api.deezer.com",
  API_KEY: process.env.DEEZER_API_KEY as string,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
} as const;
