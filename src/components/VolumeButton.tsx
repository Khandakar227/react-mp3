import React, { HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import SpeakerIcon from '../icons/SpeakerIcon';
import SpeakerOffIcon from '../icons/SpeakerOffIcon';

export default memo(function VolumeButton({ color, ...props }: { color?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
  const { volume, setVolume } = useAudio();
  return (
    <button {...props} name="volume" onClick={() => setVolume(volume > 0 ? 0 : 1)}>
      {volume > 0 ? (
        <SpeakerIcon height={12} width={12} stroke={color} />
      ) : (
        <SpeakerOffIcon height={12} width={12} stroke={color} />
      )}
    </button>
  );
})
