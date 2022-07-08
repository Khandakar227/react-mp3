import AudioPlayer from "./AudioPlayer";
import AudioProvider, { useAudio } from "./audioContext";
import { AudioContextProps, AudioPlayerProps, Loop } from "./AudioPlayer.types";

export {AudioProvider, useAudio}
export type { AudioContextProps, AudioPlayerProps, Loop };

export default AudioPlayer;