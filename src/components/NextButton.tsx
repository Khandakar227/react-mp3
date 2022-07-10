import React, { CSSProperties, HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import NextIcon from '../icons/NextIcon';

interface ButtonProps extends Partial<HTMLAttributes<HTMLButtonElement>> {
  totalTrack: number;
  bgColor: string;
}

export default memo(function NextButton({
  totalTrack,
  style,
  bgColor,
  color,
  ...props
}: ButtonProps) {
  const { trackIndex, setTrackIndex } = useAudio();

  /**
   * Go to next track
   */
  const toNextTrack = () => {
    if (trackIndex < totalTrack - 1) setTrackIndex(trackIndex + 1);
    else setTrackIndex(0);
  };

  return (
    <button
      {...props}
      style={{ ...style, '--buttonBgColor': bgColor } as CSSProperties}
      name="next"
      title="Next track"
      onClick={() => toNextTrack()}
    >
      <NextIcon stroke={color} color={color} />
    </button>
  );
});
