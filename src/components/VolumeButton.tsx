import React, { CSSProperties, HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import SpeakerIcon from '../icons/SpeakerIcon';
import SpeakerOffIcon from '../icons/SpeakerOffIcon';

interface ButtonProps extends Partial<HTMLAttributes<HTMLButtonElement>> {
  bgColor: string;
}

export default memo(function VolumeButton({ color, bgColor, style, ...props }: ButtonProps) {
  const { volume, setVolume } = useAudio();
  return (
    <button
    {...props} style={{...style, "--buttonBgColor": bgColor} as CSSProperties}
    name="volume" onClick={() => setVolume(volume > 0 ? 0 : 1)}>
      {volume > 0 ? (
        <SpeakerIcon height={12} width={12} stroke={color} />
      ) : (
        <SpeakerOffIcon height={12} width={12} stroke={color} />
      )}
    </button>
  );
})
