import { TrackProps } from "@/types/tracks";

/**
 * Saves the volume value to the local storage.
 * @param volume - The volume value to be saved.
 */
export function saveVolume(volume: number) {
  localStorage.setItem("volume", volume.toString());
}

/**
 * Retrieves the volume value from the local storage.
 * If the volume value is not found, it defaults to 1.
 *
 * @returns The volume value as a floating-point number.
 */
export function getVolume() {
  return parseFloat(localStorage.getItem("volume") || "1");
}

/**
 * Saves the mute state to the local storage.
 * @param mute - A boolean value indicating whether the mute state should be saved or not.
 */
export function saveMute(mute: boolean) {
  localStorage.setItem("mute", mute.toString());
}

/**
 * Retrieves the value of the "mute" key from the local storage.
 * @returns {boolean} The value of the "mute" key. Returns true if the value is "true", false otherwise.
 */
export function getMute() {
  return localStorage.getItem("mute") === "true";
}

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
