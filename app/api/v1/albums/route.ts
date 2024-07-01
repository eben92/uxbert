import { ENV } from "@/lib/constants";
import { TrackProps } from "@/types";

type Props = {
  params: { id: string };
};

type DeezerResponse = {
  tracks: {
    data: TrackProps[];
  };
};

async function getData() {
  const res = await fetch(ENV.API_URL + `/chart/albums?limit=10`, {
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

export async function GET(_request: Request, { params }: Props) {
  try {
    const data = await getData();
    const albums = data.tracks.data.map((track) => ({
      ...track.album,
      preview: track.preview,
      artist: track.artist,
    }));

    return Response.json({
      results: albums,
      status: 200,
      message: "Albums fetched successfully",
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch albums",
        status: 500,
        results: null,
      }),
      {
        status: 500,
      }
    );
  }
}
