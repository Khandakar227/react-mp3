import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch
} from "react";
import { AudioContextProps, Loop } from "./AudioPlayer.types";

//Creating multiple context for avoiding unnecessary render
const trackIndexContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => { }]);;
const loopContext = createContext<[Loop, Dispatch<SetStateAction<Loop>>]>(["no-repeat", () => { }]);
const isPlayingContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => { }]);
const shuffleContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => { }]);
const volumeContext = createContext<[number, Dispatch<SetStateAction<number>>]>([1, () => { }]);

export const useAudioProvider = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState<Loop>("no-repeat");
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(1);

  return {
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    loop,
    setLoop,
    shuffle,
    setShuffle,
    volume,
    setVolume,
  };
};

export const useAudio = ():AudioContextProps => {
  const [trackIndex, setTrackIndex] = useContext(trackIndexContext);
  const [loop, setLoop] = useContext(loopContext);
  const [isPlaying, setIsPlaying] = useContext(isPlayingContext);
  const [shuffle, setShuffle] = useContext(shuffleContext);
  const [volume, setVolume] = useContext(volumeContext);

  return {
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    loop,
    setLoop,
    shuffle,
    setShuffle,
    volume,
    setVolume,
  };
};

export default function AudioProvider({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) {
  const {
    trackIndex, setTrackIndex,
    isPlaying, setIsPlaying,
    loop, setLoop,
    shuffle, setShuffle,
    volume, setVolume, } = useAudioProvider();

  return (
    <trackIndexContext.Provider value={[trackIndex, setTrackIndex]}>
      <loopContext.Provider value={[loop, setLoop]}>
        <isPlayingContext.Provider value={[isPlaying, setIsPlaying]}>
          <shuffleContext.Provider value={[shuffle, setShuffle]}>
            <volumeContext.Provider value={[volume, setVolume]}>
              {children}
            </volumeContext.Provider>
          </shuffleContext.Provider>
        </isPlayingContext.Provider>
      </loopContext.Provider>
    </trackIndexContext.Provider>
  );
}
