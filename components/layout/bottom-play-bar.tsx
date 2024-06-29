import {
  Heart,
  Maximize2,
  Menu,
  MonitorSpeaker,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForwardIcon,
  Volume1,
} from "lucide-react";
import { Button, ButtonProps } from "../ui/button";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { Slider } from "../ui/slider";

export default function PlayBar() {
  return (
    <div className="flex px-4 md:px-6 justify-between items-center py-6 w-full bg-white/5">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <Label className="text-sm">Song Title</Label>
          <Label className="text-xs text-muted-foreground">Artist</Label>
        </div>
        <Button variant={"ghost"} size={"round"}>
          <Heart className="" fill="green" stroke="0" />
        </Button>
      </div>
      <Controlls />

      <div className="w-[200px]">
        <OtherControls />
      </div>
    </div>
  );
}

interface ControllButtonProps extends ButtonProps {}

function ControllButton({ children, ...props }: ControllButtonProps) {
  return (
    <button className="text-muted-foreground" {...props}>
      {children}
    </button>
  );
}

function Controlls() {
  return (
    <div className="flex flex-col md:w-[250px] items-center gap-4">
      <div className="flex items-center gap-4 ">
        <ControllButton>
          <Shuffle size={18} />
        </ControllButton>
        <ControllButton>
          <SkipBack size={18} />
        </ControllButton>
        <ControllButton>
          <Play size={18} />
        </ControllButton>
        <ControllButton>
          <SkipForwardIcon size={18} />
        </ControllButton>

        <ControllButton>
          <Repeat size={18} />
        </ControllButton>
      </div>

      <SongProgress />
    </div>
  );
}

function SongProgress() {
  return (
    <div className="flex items-center w-full gap-4">
      <Label className="text-xs text-muted-foreground">0:00</Label>
      <Progress className="h-1" value={33} />
      <Label className="text-xs text-muted-foreground">3:00</Label>
    </div>
  );
}

function OtherControls() {
  return (
    <div className="flex items-center w-full gap-2">
      <ControllButton>
        <Menu size={18} />
      </ControllButton>
      <ControllButton>
        <MonitorSpeaker size={18} />
      </ControllButton>

      <ControllButton>
        <Volume1 size={18} />
      </ControllButton>

      <div className="flex-shrink-0 flex-1">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <ControllButton>
        <Maximize2 size={18} />
      </ControllButton>
    </div>
  );
}
