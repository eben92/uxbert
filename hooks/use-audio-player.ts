"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import {
  Action,
  ActionTypes,
  initStateFromHowl,
  reducer as audioStateReducer,
} from "./utils/audio-player-state";
import { useHowlEventSync } from "./use-howl-event-sync";
import { HowlInstanceManagerSingleton } from "./utils/howl-instance-manager";
import { AudioPlayer, LoadArguments } from "./utils/types";

export function useAudioPlayer(): AudioPlayer {
  const howlManager = useRef(HowlInstanceManagerSingleton.getInstance());

  //    Custom hook for managing audio player state.
  const [state, dispatch] = useHowlEventSync(
    howlManager.current,
    useReducer(
      audioStateReducer,
      howlManager.current.getHowl(),
      initStateFromHowl
    )
  );

  useEffect(() => {
    const howlOnMount = howlManager.current.getHowl();
    if (howlOnMount !== undefined) {
      dispatch({ type: ActionTypes.START_LOAD, howl: howlOnMount });
      if (howlOnMount.state() === "loaded") {
        dispatch({ type: ActionTypes.ON_LOAD, howl: howlOnMount });
      }
    }

    function sync(action: Action) {
      dispatch(action);
    }

    const subscriptionId = howlManager.current.subscribe(sync);

    return () => {
      howlManager.current.unsubscribe(subscriptionId);
    };
  }, []);

  const load = useCallback((...[src, options = {}]: LoadArguments) => {
    // the HowlInstanceManager will intercept this newly created howl and broadcast it to registered hooks
    howlManager.current.createHowl({
      src,
      ...options,
    });
  }, []);

  /**
   * Seeks to the specified time in the audio player.
   *
   * @param seconds - The time in seconds to seek to.
   */
  const seek = useCallback((seconds: number) => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return;
    }

    howl.seek(seconds);
  }, []);

  /**
   * Retrieves the current position of the audio player.
   * @returns The current position in seconds.
   */
  const getPosition = useCallback(() => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return 0;
    }

    return howl.seek() ?? 0;
  }, []);

  /**
   * Plays the audio.
   */
  const play = useCallback(() => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return;
    }

    howl.play();
  }, []);

  /**
   * Pauses the audio playback.
   */
  const pause = useCallback(() => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return;
    }

    howl.pause();
  }, []);

  /**
   * Toggles the play/pause state of the audio player.
   */
  const togglePlayPause = useCallback(() => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return;
    }

    if (state.playing) {
      howl.pause();
    } else {
      howl.play();
    }
  }, [state]);

  /**
   * Stops the audio playback.
   */
  const stop = useCallback(() => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return;
    }

    howl.stop();
  }, []);

  /**
   * Sets the volume of the audio player.
   * @param vol - The volume level to set.
   */
  const setVolume = useCallback((vol: number) => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      console.log("Howl is undefined");
      return;
    }

    howl.volume(vol);
  }, []);

  /**
   * Mutes or unmutes the audio player.
   *
   * @param muteOnOff - A boolean value indicating whether to mute or unmute the audio player.
   */
  const mute = useCallback((muteOnOff: boolean) => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      console.log("Howl is undefined");
      return;
    }

    howl.mute(muteOnOff);
  }, []);

  /**
   * Toggles the loop functionality of the audio player.
   *
   * @param loopOnOff - A boolean value indicating whether to enable or disable loop.
   */
  const loop = useCallback((loopOnOff: boolean) => {
    const howl = howlManager.current.getHowl();
    if (howl === undefined) {
      return;
    }

    howlManager.current.broadcast({
      type: ActionTypes.ON_LOOP,
      howl,
      toggleValue: loopOnOff,
    });
  }, []);

  return {
    ...state,
    load,
    seek,
    getPosition,
    play,
    pause,
    togglePlayPause,
    stop,
    mute,
    setVolume,
    loop,
  };
}
