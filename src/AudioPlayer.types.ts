import { Dispatch, SetStateAction, HTMLAttributes } from "react";

export interface AudioPlayerProps extends Partial<HTMLAttributes<HTMLDivElement>> {
  src: { title: string; url: string }[];
  volume?: number;
  loop?: Loop;
  trackSliderClassName?: string;
  showTime?: boolean;
  trackSliderColor?: string;
  trackSliderBg?: string;
  buttonColor?: string;
}

export interface AudioContextProps {
    trackIndex: number;
    setTrackIndex: Dispatch<SetStateAction<number>>;
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    loop:  "repeat-once" | "no-repeat" | "repeat-all";
    setLoop: Dispatch<SetStateAction< "repeat-once" | "no-repeat" | "repeat-all">>;
    shuffle: boolean;
    setShuffle: Dispatch<SetStateAction<boolean>>;
    volume: number;
    setVolume: Dispatch<SetStateAction<number>>;
}

export type Loop = "no-repeat" | "repeat-once" | "repeat-all";