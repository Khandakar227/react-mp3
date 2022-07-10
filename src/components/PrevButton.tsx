import React, { CSSProperties, HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import { PrevIcon } from '../icons/PrevIcon';

interface ButtonProps extends Partial<HTMLAttributes<HTMLButtonElement>> {
  bgColor: string;
  totalTrack: number
}

export default memo(function PrevButton({ color, totalTrack, bgColor, style, ...props }: ButtonProps) {
  const { trackIndex, setTrackIndex } = useAudio();

  /**
   * Go to previous tag
   */
  const toPrevTrack = () => {
    if (trackIndex - 1 <= 0) setTrackIndex(totalTrack - 1);
    else setTrackIndex(trackIndex - 1);
  };
  
  return (
    <button
    {...props} style={{...style, "--buttonBgColor": bgColor} as CSSProperties}
      name="previous"
      title="Previous track"
      onClick={() => toPrevTrack()}
    >
      <PrevIcon stroke={color} color={color} />
    </button>
  );
})
