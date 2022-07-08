import React, { CSSProperties, HTMLAttributes } from 'react';
import { useAudio } from '../audioContext';
import ShuffleIcon from '../icons/ShuffleIcon';

export default function ShuffleButton({ buttonColor, ...props }: { buttonColor?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
  const { shuffle, setShuffle } = useAudio();

  return (
    <button
      {...props}
      name="shuffle"
      title={shuffle ? 'Shuffle' : 'No shuffle'}
      onClick={() => setShuffle(!shuffle)}
    >
      <ShuffleIcon
        height={12}
        width={12}
        stroke={buttonColor}
        color={buttonColor}
      />
      <span
        data-name="no"
        style={{ '--buttonTextColor': buttonColor } as CSSProperties}
      >
        {shuffle ? '' : 'x'}
      </span>
    </button>
  );
}
