import { TrackProps } from "@/types/tracks";

/**
 * Retrieves the value of the "track" item from the session storage.
 * @returns The value of the "track" item, or null if it doesn't exist.
 */
export function getTrack() {
  return sessionStorage.getItem("track");
}

/**
 * Saves the track object to the session storage.
 * @param track - The track object to be saved.
 */
export function saveTrack(track: TrackProps) {
  sessionStorage.setItem("track", JSON.stringify(track));
}

/**
 * Removes the "track" item from the sessionStorage.
 */
export function removeTrack() {
  sessionStorage.removeItem("track");
}

/**
 * Retrieves the tracks from the session storage.
 * @returns An array of TrackProps objects representing the tracks.
 */
export function getTracks(): TrackProps[] {
  return JSON.parse(sessionStorage.getItem("tracks") || "[]");
}

/**
 * Saves the tracks to the session storage.
 * @param tracks - An array of TrackProps objects representing the tracks to be saved.
 */
export function saveTracks(tracks: TrackProps[]) {
  sessionStorage.setItem("tracks", JSON.stringify(tracks));
}

/**
 * Removes the "tracks" item from the session storage.
 */
export function removeTracks() {
  sessionStorage.removeItem("tracks");
}
