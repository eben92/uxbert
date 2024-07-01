import { generateColorFromImage } from "@/app/api/_helpers/generate-color-from-image";
import { ENV } from "@/lib/constants";
import { PlaylistProps, TrackProps } from "@/types";

type Props = {
  params: { id: string };
};

interface DeezerResponse extends PlaylistProps {
  tracks: {
    data: TrackProps[];
  };
}

async function getPlaylist(id: string) {
  const res = await fetch(ENV.API_URL + `/playlist/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch playlist");
  }

  const d = (await res.json()) as DeezerResponse;

  return d;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const playlist = await getPlaylist(params.id);
    const imageColor = await generateColorFromImage(playlist.picture_medium);

    return Response.json({
      result: {
        ...imageColor,
        playlist,
      },
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch playlist", { status: 500 });
  }
}
