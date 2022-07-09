import React, { HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';

export default memo(function PlayPauseButton({ color, ...props }: { color?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
  const { isPlaying, setIsPlaying } = useAudio();

  if (!isPlaying)
    return (
      <button {...props} name="play" onClick={() => setIsPlaying(true)} title="Play">
        <PlayIcon
          height={22}
          width={22}
          stroke={color}
          color={color}
        />
      </button>
    );
  return (
    <button {...props} name="pause" onClick={() => setIsPlaying(false)} title="Pause">
      <PauseIcon
        height={22}
        width={22}
        stroke={color}
        color={color}
      />
    </button>
  );
})
