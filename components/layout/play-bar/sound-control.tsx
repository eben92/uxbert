"use client";

import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import {
  Maximize2,
  Menu,
  MonitorSpeaker,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useCallback } from "react";
import { ControlButton } from "./audio-control";
import {
  getMuteState,
  getVolume,
  saveMuteState,
  saveVolume,
} from "@/services/local-services";

export function SoundControl() {
  const { setVolume, mute, muted } = useAudioPlayer();

  const handleChange = useCallback(
    (v: number[]) => {
      const volValue = parseFloat(Number(v[0] / 100).toFixed(2));
      saveVolume(volValue);
      return setVolume(volValue);
    },
    [setVolume]
  );

  const sessionVolume = getVolume();

  return (
    <div className="flex items-center w-full gap-2">
      <ControlButton disabled>
        <Menu size={18} />
      </ControlButton>

      <ControlButton disabled>
        <MonitorSpeaker size={18} />
      </ControlButton>

      <ControlButton
        onClick={() => {
          mute(!muted);
          saveMuteState(!muted);
        }}
      >
        <Speaker volume={sessionVolume} muted={getMuteState()} />
      </ControlButton>

      <div className="flex-shrink-0 flex-1">
        <Slider
          className="cursor-grab"
          value={[sessionVolume * 100]}
          max={100}
          step={1}
          onValueChange={handleChange}
        />
      </div>
      <ControlButton disabled>
        <Maximize2 size={18} />
      </ControlButton>
    </div>
  );
}

function Speaker({ volume, muted }: { volume: number; muted: boolean }) {
  if (volume === 0 || muted) {
    return <VolumeX size={18} />;
  }

  if (volume < 0.5) {
    return <Volume1 size={18} />;
  }

  return <Volume2 size={18} />;
}
