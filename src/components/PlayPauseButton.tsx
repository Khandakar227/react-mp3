import React, { CSSProperties, HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';

interface ButtonProps extends Partial<HTMLAttributes<HTMLButtonElement>> {
  bgColor: string;
}

export default memo(function PlayPauseButton({ color, bgColor, style, ...props }: ButtonProps) {
  const { isPlaying, setIsPlaying } = useAudio();

  if (!isPlaying)
    return (
      <button
      {...props} style={{...style, "--buttonBgColor": bgColor} as CSSProperties}
       name="play" onClick={() => setIsPlaying(true)} title="Play">
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
