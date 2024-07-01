import { ENV } from "@/lib/constants";
import { TrackProps } from "@/types";

type Props = {
  params: { id: string };
};

type DeezerResponse = {
  data: TrackProps[];
};

async function getData() {
  const res = await fetch(ENV.API_URL + `/chart/0/tracks`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const err = await res?.json();
    console.log("=======>", err);
    throw new Error("Failed to fetch tracks");
  }

  const d = (await res.json()) as DeezerResponse;

  return d;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const data = await getData();
    const tracks = data.data;

    return Response.json({
      results: tracks,
      status: 200,
      message: "tracks fetched successfully",
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch tracks",
        status: 500,
        results: null,
      }),
      {
        status: 500,
      }
    );
  }
}
