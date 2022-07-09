import React, { HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import { PrevIcon } from '../icons/PrevIcon';

export default memo(function PrevButton({ totalTrack, color, ...props }: { totalTrack: number,color?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
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
    {...props}
      name="previous"
      title="Previous track"
      onClick={() => toPrevTrack()}
    >
      <PrevIcon stroke={color} color={color} />
    </button>
  );
})
