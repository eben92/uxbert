"use client";

import { Howl, HowlOptions } from "howler";

import { AudioLoadOptions } from "./types";
import { Action, ActionTypes } from "./audio-player-state";

export type AudioActionCallback = (action: Action) => void;

export class HowlInstanceManager {
  private callbacks: Map<string, AudioActionCallback> = new Map();
  private howl: Howl | undefined = undefined;
  private options: AudioLoadOptions = {};
  private subscriptionIndex = 0;

  /**
   * Subscribes to audio actions.
   *
   * @param cb - The callback function to be invoked when an audio action occurs.
   * @returns A string representing the subscription ID.
   */
  public subscribe(cb: AudioActionCallback): string {
    const id = (this.subscriptionIndex++).toString();
    this.callbacks.set(id, cb);
    return id;
  }

  /**
   * Removes a subscription callback with the specified subscription ID.
   * @param subscriptionId - The ID of the subscription to unsubscribe.
   */
  public unsubscribe(subscriptionId: string) {
    this.callbacks.delete(subscriptionId);
  }

  public getHowl() {
    return this.howl;
  }

  /**
   * Returns the number of connections in the Howl instance manager.
   * @returns The number of connections.
   */
  public getNumberOfConnections() {
    return this.callbacks.size;
  }

  /**
   * Creates a new Howl instance with the specified options.
   * @param options - The options for creating the Howl instance.
   * @returns The newly created Howl instance.
   */
  public createHowl(options: { src: string } & AudioLoadOptions) {
    this.destroyHowl();

    this.options = options;
    const { initialVolume, initialRate, initialMute, ...rest } = this.options;
    const newHowl = new Howl({
      mute: initialMute,
      volume: initialVolume,
      rate: initialRate,
      ...rest,
    } as HowlOptions);

    this.callbacks.forEach((cb) =>
      cb({ type: ActionTypes.START_LOAD, howl: newHowl })
    );
    this.howl = newHowl;
    return newHowl;
  }

  public destroyHowl() {
    if (this.options.onload) {
      this.howl?.off("load", this.options.onload);
    }

    if (this.options.onend) {
      this.howl?.off("end", this.options.onend);
    }

    if (this.options.onplay) {
      this.howl?.off("play", this.options.onplay);
    }

    if (this.options.onpause) {
      this.howl?.off("pause", this.options.onpause);
    }

    if (this.options.onstop) {
      this.howl?.off("stop", this.options.onstop);
    }

    this.howl?.unload();
  }

  /**
   * Broadcasts an action to all registered callbacks.
   * @param action - The action to be broadcasted.
   */
  public broadcast(action: Action) {
    this.callbacks.forEach((cb) => cb(action));
  }
}

export class HowlInstanceManagerSingleton {
  private static instance: HowlInstanceManager;

  public static getInstance() {
    if (this.instance === undefined) {
      HowlInstanceManagerSingleton.instance = new HowlInstanceManager();
    }

    return HowlInstanceManagerSingleton.instance;
  }
}
