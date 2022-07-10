import React, { CSSProperties, HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import ShuffleIcon from '../icons/ShuffleIcon';

export default memo(function ShuffleButton({ color, ...props }: { color?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
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
        stroke={color}
        color={color}
      />
      <span
        data-name="no"
        style={{ '--buttonTextColor': color } as CSSProperties}
      >
        {shuffle ? '' : 'x'}
      </span>
    </button>
  );
})
