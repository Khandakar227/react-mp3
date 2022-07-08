import React, { HTMLAttributes } from 'react';
import { useAudio } from '../audioContext';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';

export default function PlayPauseButton({ buttonColor, ...props }: { buttonColor?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
  const { isPlaying, setIsPlaying } = useAudio();

  if (!isPlaying)
    return (
      <button {...props} name="play" onClick={() => setIsPlaying(true)} title="Play">
        <PlayIcon
          height={22}
          width={22}
          stroke={buttonColor}
          color={buttonColor}
        />
      </button>
    );
  return (
    <button name="pause" onClick={() => setIsPlaying(false)} title="Pause">
      <PauseIcon
        height={22}
        width={22}
        stroke={buttonColor}
        color={buttonColor}
      />
    </button>
  );
}
