import { ENV } from "@/lib/constants";
import { GenreProps } from "@/types";

type Props = {
  params: { id: string };
};

type DeezerResponse = {
  data: GenreProps[];
};

async function getData() {
  const res = await fetch(ENV.API_URL + `/genre`, {
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
    const genres = data.data;

    return Response.json({
      results: genres,
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
