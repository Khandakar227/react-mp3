import AudioPlayer from "./AudioPlayer";
import VolumeButton from "./components/VolumeButton";
import LoopButton from "./components/LoopButton";
import PlatPauseButton from "./components/PlayPauseButton";
import NextButton from "./components/NextButton";
import PrevButton from "./components/PrevButton";
import ShuffleButton from "./components/ShuffleButton";
import TrackSlider from "./components/TrackSlider";

import AudioProvider, { useAudio } from "./audioContext";
import { AudioContextProps, AudioPlayerProps, Loop } from "./AudioPlayer.types";

export {AudioProvider, useAudio, LoopButton, VolumeButton, PlatPauseButton, NextButton, PrevButton, ShuffleButton, TrackSlider}
export type { AudioContextProps, AudioPlayerProps, Loop };

export default AudioPlayer;