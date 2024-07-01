"use client";
import { CachedProps } from "@/context/search-context";
import { TrackProps } from "@/types/tracks";

/**
 * Saves the volume value to the session  storage.
 * @param volume - The volume value to be saved.
 */
export function saveVolume(volume: number) {
  sessionStorage.setItem("volume", volume.toString());
}

/**
 * Retrieves the volume value from the session  storage.
 * If the volume value is not found, it defaults to 1.
 *
 * @returns The volume value as a floating-point number.
 */
export function getVolume() {
  if (typeof window === "undefined") {
    return 1;
  }
  return parseFloat(sessionStorage.getItem("volume") || "1");
}

/**
 * Saves the mute state to the session  storage.
 * @param mute - A boolean value indicating whether the mute state should be saved or not.
 */
export function saveMuteState(mute: boolean) {
  sessionStorage.setItem("mute", mute.toString());
}

/**
 * Retrieves the value of the "mute" key from the session storage.
 * @returns {boolean} The value of the "mute" key. Returns true if the value is "true", false otherwise.
 */
export function getMuteState() {
  if (typeof window === "undefined") {
    return false;
  }

  return sessionStorage.getItem("mute") === "true";
}

/**
 * Retrieves the value of the "track" item from the session storage.
 * @returns The value of the "track" item, or null if it doesn't exist.
 */
export function getTrack(): TrackProps | null {
  if (typeof window === "undefined") {
    return null;
  }

  const d = sessionStorage.getItem("track");

  if (d) {
    return JSON.parse(d);
  }
  return null;
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
  if (typeof window === "undefined") {
    return [];
  }

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

/**
 * Retrieves the recently played tracks from session storage.
 * @returns An array of TrackProps representing the recently played tracks.
 */
export function getRecentlyPlayed(): TrackProps[] {
  return JSON.parse(sessionStorage.getItem("recentlyPlayed") || "[]");
}

/**
 * Saves the recently played tracks to the session storage.
 * @param recentlyPlayed - An array of TrackProps representing the recently played tracks.
 */
function saveRecentlyPlayed(recentlyPlayed: TrackProps[]) {
  sessionStorage.setItem("recentlyPlayed", JSON.stringify(recentlyPlayed));
}

/**
 * Saves a track to the recently played list.
 * If the track is already in the list, it is moved to the top.
 * If the list exceeds 10 tracks, the oldest track is removed.
 * @param track - The track to be saved.
 * @returns The updated recently played list.
 */
export function saveToRecentlyPlayed(track: TrackProps): TrackProps[] {
  const recentlyPlayed = getRecentlyPlayed();

  const alreadyPlayed = recentlyPlayed.find((t) => t.id === track.id);
  if (alreadyPlayed) {
    // move it to the top
    const newRecentlyPlayed = recentlyPlayed.filter((t) => t.id !== track.id);
    const nList = [track, ...newRecentlyPlayed];
    saveRecentlyPlayed(nList);
    return nList;
  }

  if (recentlyPlayed.length >= 10) {
    recentlyPlayed.pop();
  }

  const newRecentlyPlayed = [track, ...recentlyPlayed];
  saveRecentlyPlayed(newRecentlyPlayed);

  return newRecentlyPlayed;
}

export function saveSearchResults(results: TrackProps[]) {
  const id = generateRandomID();

  sessionStorage.setItem(
    "local_playlist",
    JSON.stringify({ data: results, id })
  );
}

export function getSearchResults(): CachedProps {
  if (typeof window === "undefined") {
    return {
      data: [],
      id: "",
    };
  }

  return JSON.parse(sessionStorage.getItem("local_playlist") || "{}");
}

function generateRandomID() {
  return Math.random().toString(36).substr(2, 9);
}
