import AudioPlayer from './AudioPlayer';
import VolumeButton from './components/VolumeButton';
import LoopButton from './components/LoopButton';
import PlatPauseButton from './components/PlayPauseButton';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';
import ShuffleButton from './components/ShuffleButton';
import TrackSlider from './components/TrackSlider';
import LoopIcon from './icons/LoopIcon';
import NextIcon from './icons/NextIcon';
import PauseIcon from './icons/PauseIcon';
import PlayIcon from './icons/PlayIcon';
import PrevIcon from './icons/PrevIcon';
import ShuffleIcon from './icons/ShuffleIcon';
import SpeakerIcon from './icons/SpeakerIcon';
import SpeakerOffIcon from './icons/SpeakerOffIcon';

import AudioProvider, { useAudio } from './audioContext';
import { AudioContextProps, AudioPlayerProps, Loop } from './AudioPlayer.types';

export {
  AudioProvider,
  useAudio,
  LoopButton,
  VolumeButton,
  PlatPauseButton,
  NextButton,
  PrevButton,
  ShuffleButton,
  TrackSlider,
  LoopIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  ShuffleIcon,
  SpeakerIcon,
  SpeakerOffIcon,
};
export type { AudioContextProps, AudioPlayerProps, Loop };

export default AudioPlayer;
