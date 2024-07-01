import { ENV } from "@/lib/constants";
import { PlaylistProps } from "@/types";

type Props = {
  params: { id: string };
};

type DeezerResponse = {
  data: PlaylistProps[];
};

async function getData() {
  const res = await fetch(ENV.API_URL + `/user/6134877461/playlists`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const err = await res?.json();
    console.log("=======>", err);
    throw new Error("Failed to fetch playlists");
  }

  const d = (await res.json()) as DeezerResponse;

  return d;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const data = await getData();

    return Response.json({
      results: data.data,
      status: 200,
      message: "playlists fetched successfully",
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch playlists",
        status: 500,
        results: null,
      }),
      {
        status: 500,
      }
    );
  }
}
