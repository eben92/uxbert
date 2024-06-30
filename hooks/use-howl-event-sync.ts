"use client";

import {
  Dispatch,
  ReducerAction,
  ReducerState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  Action,
  ActionTypes,
  AudioPlayerState,
  reducer,
} from "./utils/audio-player-state";
import { HowlInstanceManager } from "./utils/howl-instance-manager";
import { HowlErrorCallback } from "howler";

export function useHowlEventSync(
  howlManager: HowlInstanceManager,
  [state, dispatch]: [AudioPlayerState, Dispatch<Action>]
): [ReducerState<typeof reducer>, Dispatch<ReducerAction<typeof reducer>>] {
  //  Callback function for handling load events.
  const onLoad = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_LOAD, howl });
  }, [dispatch, howlManager]);

  // Callback function for handling error events.
  const onError: HowlErrorCallback = useCallback(
    (_: number, errorCode: unknown) => {
      dispatch({
        type: ActionTypes.ON_ERROR,
        message: errorCode as string,
      });
    },
    [dispatch]
  );

  // Callback function for handling play events.
  const onPlay = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_PLAY, howl });
  }, [dispatch, howlManager]);

  // Callback function for handling pause events.
  const onPause = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_PAUSE, howl });
  }, [dispatch, howlManager]);

  // Callback function for handling end events.
  const onEnd = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_END, howl });
  }, [dispatch, howlManager]);

  // Callback function for handling stop events.
  const onStop = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_STOP, howl });
  }, [dispatch, howlManager]);

  // Callback function for handling mute changes.
  const onMute = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_MUTE, howl });
  }, [dispatch, howlManager]);

  // Callback function for handling volume changes.
  const onVolume = useCallback(() => {
    const howl = howlManager.getHowl();
    if (howl === undefined) return;
    dispatch({ type: ActionTypes.ON_VOLUME, howl });
  }, [dispatch, howlManager]);

  useEffect(() => {
    return () => {
      const howl = howlManager.getHowl();
      // howl?.off("load", onLoad)
      howl?.off("loaderror", onError);
      howl?.off("playerror", onError);
      howl?.off("play", onPlay);
      howl?.off("pause", onPause);
      howl?.off("end", onEnd);
      howl?.off("stop", onStop);
      howl?.off("mute", onMute);
      howl?.off("volume", onVolume);
    };
  }, []);

  // using ref because i don't want identity of dispatch function to change
  const wrappedDispatch = useRef((action: Action) => {
    if (action.type === ActionTypes.START_LOAD) {
      const { howl } = action;
      // set up event listening
      howl.once("load", onLoad);
      howl.on("loaderror", onError);
      howl.on("playerror", onError);
      howl.on("play", onPlay);
      howl.on("pause", onPause);
      howl.on("end", onEnd);
      howl.on("stop", onStop);
      howl.on("mute", onMute);
      howl.on("volume", onVolume);
    }

    dispatch(action);
  });

  return [state, wrappedDispatch.current];
}
