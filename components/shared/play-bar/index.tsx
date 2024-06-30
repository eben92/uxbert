import { Heart } from "lucide-react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { AudioControl } from "./audio-control";
import { AudioProgress } from "./audio-progress";
import { SoundControl } from "./sound-control";

export default function PlayBar() {
  return (
    <div className="flex px-4 md:px-6 justify-between items-center py-6 w-full bg-white/5">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <Label className="text-sm">Song Title</Label>
          <Label className="text-xs text-muted-foreground">Artist</Label>
        </div>
        <Button variant={"ghost"} size={"round"} disabled>
          <Heart />
        </Button>
      </div>

      <div className="flex flex-col md:w-[250px] items-center gap-4">
        <AudioControl />
        <AudioProgress />
      </div>

      <div className="w-[200px]">
        <SoundControl />
      </div>
    </div>
  );
}
