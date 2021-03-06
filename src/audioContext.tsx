import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
} from "react";
import { AudioContextProps, Loop } from "./AudioPlayer.types";

const audioContext = createContext({} as AudioContextProps);

export const useAudio = () => {

  return useContext(audioContext);
};

export default function AudioProvider({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) {
  
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState<Loop>("no-repeat");
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(1);
  const audio = {trackIndex, setTrackIndex, isPlaying, setIsPlaying, loop, setLoop, shuffle, setShuffle, volume, setVolume}
  return (
    <audioContext.Provider value={audio}>{children}</audioContext.Provider>
  );
}