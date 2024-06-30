import { useAudioPlayer } from "@/hooks/use-audio-player";
import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForwardIcon,
} from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

export function AudioControl() {
  const { togglePlayPause, playing, isReady, isLoading } = useAudioPlayer();

  return (
    <div className="flex flex-col md:w-[250px] items-center gap-4">
      <div className="flex items-center gap-4 ">
        <ControlButton disabled>
          <Shuffle size={18} />
        </ControlButton>

        <ControlButton className="text-gray-300">
          <SkipBack size={18} fill="currentColor" />
        </ControlButton>

        <ControlButton
          onClick={togglePlayPause}
          disabled={!isReady}
          className={
            isLoading
              ? "cursor-wait"
              : "bg-primary rounded-full text-black h-8 w-8 flex items-center justify-center"
          }
        >
          {playing ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" />
          )}
        </ControlButton>

        <ControlButton className="text-gray-300">
          <SkipForwardIcon fill="currentColor" size={18} />
        </ControlButton>

        <ControlButton disabled>
          <Repeat size={18} />
        </ControlButton>
      </div>
    </div>
  );
}

interface ControllButtonProps extends ButtonProps {}

export function ControlButton({ children, ...props }: ControllButtonProps) {
  return (
    <button
      className="text-muted-foreground disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
}
