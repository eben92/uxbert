import { AudioPlayerState } from "./audio-player-state";

export interface AudioPlayer extends AudioPlayerState {
  play: () => void;
  pause: () => void;
  togglePlayPause: () => void;
  stop: () => void;
  setVolume: (volume: number) => void;
  seek: (seconds: number) => void;
  mute: (muteOnOff: boolean) => void;
  loop: (loopOnOff: boolean) => void;
  getPosition: () => number;
  load: (...args: LoadArguments) => void;
}

export interface UserListeners {
  onstop?: () => void | undefined;
  onpause?: () => void | undefined;
  onload?: () => void | undefined;
  onend?: () => void | undefined;
  onplay?: () => void | undefined;
}

export interface AudioLoadOptions extends UserListeners {
  loop?: boolean;
  autoplay?: boolean;
  initialVolume?: number;
  initialMute?: boolean;
  initialRate?: number;
  format?: string;
  html5?: boolean;
}

export type LoadArguments = [src: string, options?: AudioLoadOptions];
