"use client";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { useLocalSearchParams } from "@/hooks/use-local-search-params";
import { getTracks } from "@/services/local-services";
import { TrackProps } from "@/types/chart";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type PlayerProps = {
  currentTrack: TrackProps | undefined;
};

const PlayerContext = createContext<PlayerProps>({} as PlayerProps);

export const usePlayerContext = () => useContext<PlayerProps>(PlayerContext);

export function PlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<TrackProps | undefined>();
  const { load } = useAudioPlayer();

  const [searchParams] = useLocalSearchParams();

  const isPlaying = searchParams.get("play") === "true";

  const tracklists = useMemo(() => {
    return getTracks();
  }, [getTracks]);

  useEffect(() => {
    setCurrentTrack(tracklists[currentTrackIndex]);
  }, [currentTrackIndex]);

  useEffect(() => {
    if (tracklists.length === 0) return;

    load(tracklists[currentTrackIndex]?.preview ?? "", {
      autoplay: isPlaying,
      onend: () => {
        setCurrentTrackIndex((index) => {
          if (index === tracklists.length - 1) {
            return 0;
          }

          return index + 1;
        });
      },
    });
  }, [load, tracklists]);

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
