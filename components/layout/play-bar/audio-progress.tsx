"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { formatTime } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

export function AudioProgress() {
  const { getPosition, duration, seek } = useAudioPlayer();
  const [pos, setPos] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    // Animates the audio progress bar.
    const animate = () => {
      setPos(getPosition());

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function getMusicProgress() {
    return (pos / duration) * 100;
  }

  const handleChange = useCallback(
    (v: number[]) => {
      const seekV = parseFloat(Number(v[0] / 100).toFixed(2));
      return seek(seekV * duration);
    },
    [seek, pos]
  );

  return (
    <div className="flex items-center w-full gap-4">
      <Label className="text-xs text-muted-foreground">{formatTime(pos)}</Label>

      <Slider
        className="cursor-grab"
        max={100}
        step={1}
        value={[getMusicProgress()]}
        onValueChange={handleChange}
      />
      <Label className="text-xs text-muted-foreground">
        {formatTime(duration)}
      </Label>
    </div>
  );
}
