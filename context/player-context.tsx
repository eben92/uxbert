"use client";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import {
  getMuteState,
  getRecentlyPlayed,
  getTracks,
  getVolume,
  saveToRecentlyPlayed,
  saveTracks,
} from "@/services/local-services";
import { TrackProps } from "@/types/tracks";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type PlayerProps = {
  currentTrack: TrackProps | undefined;
  recentlyPlay: TrackProps[];

  currentTrackIndex: number;
  loadTracks: (tracks: TrackProps[], trackIndex: number) => void;
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
  const [currentTracklist, setCurrentTracklist] = useState<TrackProps[]>([]);

  const [recentlyPlay, setRecentlyPlayed] = useState<TrackProps[]>([]);

  const { load } = useAudioPlayer();

  const savedTracks = useMemo(() => getTracks(), [getTracks]);

  useMemo(() => {
    if (!currentTracklist.length && savedTracks.length) {
      setCurrentTracklist(savedTracks);
    }
  }, [savedTracks]);

  useEffect(() => {
    setCurrentTrack(currentTracklist[currentTrackIndex]);
  }, [currentTrackIndex]);

  useEffect(() => {
    const rPlayed = getRecentlyPlayed();
    setRecentlyPlayed(rPlayed);
  }, []);

  useEffect(() => {
    if (!currentTrack) return;

    const res = saveToRecentlyPlayed(currentTrack);
    setRecentlyPlayed(res);
  }, [currentTrack]);

  useEffect(() => {
    if (currentTracklist.length === 0) return;

    load(currentTracklist[currentTrackIndex]?.preview ?? "", {
      autoplay: true,
      initialVolume: getVolume(),
      initialMute: getMuteState(),
      onend: () => {
        setCurrentTrackIndex((index) => {
          if (index === currentTracklist.length - 1) {
            return 0;
          }

          return index + 1;
        });
      },
    });
  }, [load, currentTracklist, currentTrackIndex]);

  function loadTracks(tracks: TrackProps[], trackIndex: number) {
    setCurrentTrackIndex(trackIndex);
    setCurrentTrack(tracks?.[trackIndex ?? 0]);
    setCurrentTracklist(tracks);

    if (tracks.length > 1) saveTracks(tracks ?? []);
  }

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        loadTracks,
        currentTrackIndex,
        recentlyPlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
