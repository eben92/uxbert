export const ENV = {
  API_URL: process.env.DEEZER_BASE_URL ?? "https://api.deezer.com",
  API_KEY: process.env.DEEZER_API_KEY as string,
} as const;
