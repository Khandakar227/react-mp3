import { Dispatch, SetStateAction, HTMLAttributes, SyntheticEvent, ReactEventHandler } from 'react';

export interface AudioPlayerProps
  extends Partial<Omit<HTMLAttributes<HTMLDivElement>, "onError">> {
  /**
   * Array of audio url, title, artist, artwork.
   */
  src: AudioPlayerSrc[];
  /**
   * Volume of the audio. value between 0-1.
   */
  volume?: number;
  /**
   * To repeat the whole audio or to repeat all audio or not. Default is `no-repeat`.
   */
  loop?: Loop;
  /**
   * Shuffle Audios or not. Default is `false`.
   */
  shuffle?: boolean;
  /**
   * className for the trackslider if you want to change it's style .
   */
  trackSliderClassName?: string;
  /**
   * Display elapsed time and duration. Default is `true`.
   */
  showTime?: boolean;
  /**
   * Display the volume button or not. Default is `true`.
   */
  showVolume?: boolean;
  /**
   * Display Previous track button. Default is `true`.
   */
  showPrev?: boolean;
  /**
   * Display Next track button. Default is `true`.
   */
  showNext?: boolean;
  /**
   * Display shuffle button. Default is `true`.
   */
  showShuffle?: boolean;
  /**
   * Track slider's color when there's value
   */
  trackSliderColor?: string;
  /**
   * Track slider's background color
   */
  trackSliderBg?: string;
  /**
   * Color of the buttons in audio player
   */
  buttonColor?: string;
  /**
   * Current track number. `0` as first track
   */
  currentTrackNum?: number;
  /**
   * Display title, artist name, and artwork. default is `true`.
   */
  showCover?: boolean;
  onError?: ReactEventHandler<HTMLAudioElement>;
  /**
   * track slider and controls position. Default is `row`.
   */
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "inherit" | "initial" | "unset"
  [key: string]: any;
}

export interface AudioContextProps {
  /**
   * Current number of track to be played. Initial value is 0.
   */
  trackIndex: number;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  /**
   * Check if audio is playing or not
   */
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  /**
   * Value of loop. Default is `no-repeat`
   */
  loop: 'repeat-once' | 'no-repeat' | 'repeat-all';
  setLoop: Dispatch<SetStateAction<'repeat-once' | 'no-repeat' | 'repeat-all'>>;
  shuffle: boolean;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}
export type AudioPlayerSrc = {
  title: string;
  artist?: string;
  artwork?: { src: string; [key: string]: any }[];
  url: string;
}
export type Loop = 'no-repeat' | 'repeat-once' | 'repeat-all';
