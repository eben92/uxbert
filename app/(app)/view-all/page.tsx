import { generateColorFromImage } from "@/app/api/_helpers/generate-color-from-image";
import { generateStylesFromValues } from "@/app/api/_helpers/utils";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";
import ViewAll from "./_component/view-all";

type Props = {
  searchParams: { album: string };
  params: { id: string };
};

export default async function ViewAllPage({ searchParams }: Readonly<Props>) {
  const res = searchParams.album
    ? await generateColorFromImage(searchParams.album)
    : null;

  const gradientStyle = generateStylesFromValues(
    res?.value ?? [255, 255, 255, 0.5],
    res?.hex ?? "#000"
  ) as CSSProperties;

  return (
    <main
      className={cn(
        " flex flex-col gap-10 py-8 bg-gradient-to-b h-full to-60%"
      )}
      style={gradientStyle}
    >
      <ViewAll />
    </main>
  );
}
