import { ENV } from "@/lib/constants";
import { AlbumProps, PlaylistProps, TrackProps } from "@/types";
import { NextRequest } from "next/server";

type Props = {
  params: { id: string };
};

type DeezerResponse = {
  data: (PlaylistProps | AlbumProps | TrackProps)[];
};

async function getData(q: string) {
  const res = await fetch(ENV.API_URL + `/search?q=${q}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const err = await res?.json();
    console.log("=======>", err);
    throw new Error("Failed to fetch albums");
  }

  const d = (await res.json()) as DeezerResponse;

  return d;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const q = request.nextUrl.searchParams.get("q") as string;

    const data = await getData(q);
    const res = data.data;

    return Response.json({
      results: res,
      status: 200,
      message: "Genres fetched successfully",
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch genres",
        status: 500,
        results: null,
      }),
      {
        status: 500,
      }
    );
  }
}
