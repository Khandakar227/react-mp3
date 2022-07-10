import React, { HTMLAttributes, memo } from 'react'
import { useAudio } from '../audioContext';
import NextIcon from '../icons/NextIcon'

export default memo(function NextButton({ totalTrack, color, ...props }: { totalTrack: number, color?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
    const {trackIndex, setTrackIndex} = useAudio();
    
  /**
   * Go to next track
   */
  const toNextTrack = () => {
    if (trackIndex < totalTrack - 1) setTrackIndex(trackIndex + 1);
    else setTrackIndex(0);
  };

  return (
    <button {...props} name="next" title="Next track" onClick={() => toNextTrack()}>
    <NextIcon stroke={color} color={color} />
  </button>
  )
})
