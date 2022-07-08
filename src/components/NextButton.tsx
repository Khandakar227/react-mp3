import React, { HTMLAttributes } from 'react'
import { useAudio } from '../audioContext';
import NextIcon from '../icons/NextIcon'

export default function NextButton({ totalTrack, buttonColor, ...props }: { totalTrack: number, buttonColor?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
    const {trackIndex, setTrackIndex} = useAudio()
  /**
   * Go to next track
   */
  const toNextTrack = () => {
    if (trackIndex < totalTrack - 1) setTrackIndex(trackIndex + 1);
    else setTrackIndex(0);
  };

  return (
    <button {...props} name="next" title="Next track" onClick={() => toNextTrack()}>
    <NextIcon stroke={buttonColor} color={buttonColor} />
  </button>
  )
}
