import { generateColorFromImage } from "@/app/api/_helpers/generate-color-from-image";
import { generateStylesFromValues } from "@/app/api/_helpers/utils";
import { ENV } from "@/lib/constants";
import { AlbumProps, TrackProps } from "@/types";

type Props = {
  params: { id: string };
};

interface DeezerResponse extends AlbumProps {
  tracks: {
    data: TrackProps[];
  };
}

async function getData(id: string) {
  const res = await fetch(ENV.API_URL + `/album/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch playlist");
  }

  const d = (await res.json()) as DeezerResponse;

  return d;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const album = await getData(params.id);
    const imageColor = await generateColorFromImage(album.cover_medium);

    return Response.json({
      results: {
        ...album,
        tracks: album.tracks.data,
        imageColor: {
          ...imageColor,
          style: generateStylesFromValues(imageColor.value, imageColor.hex),
        },
      },
      status: 200,
      message: `Album with id: ${params.id} fetched successfully`,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch album with id: " + params.id,
        status: 500,
        results: null,
      }),
      {
        status: 500,
      }
    );
  }
}
