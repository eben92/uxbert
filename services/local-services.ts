import { TrackProps } from "@/types/chart";

export function getTrack() {
  return sessionStorage.getItem("track");
}

export function setTrack(track: TrackProps) {
  sessionStorage.setItem("track", JSON.stringify(track));
}

export function removeTrack() {
  sessionStorage.removeItem("track");
}

export function getTracks(): TrackProps[] {
  return JSON.parse(sessionStorage.getItem("tracks") || "[]");
}

export function setTracks(tracks: TrackProps[]) {
  sessionStorage.setItem("tracks", JSON.stringify(tracks));
}

export function removeTracks() {
  sessionStorage.removeItem("tracks");
}
