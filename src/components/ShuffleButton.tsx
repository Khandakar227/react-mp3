import React, { CSSProperties, HTMLAttributes, memo } from 'react';
import { useAudio } from '../audioContext';
import ShuffleIcon from '../icons/ShuffleIcon';

interface ButtonProps extends Partial<HTMLAttributes<HTMLButtonElement>> {
  bgColor: string;
}

export default memo(function ShuffleButton({
  color,
  bgColor,
  style,
  ...props
}: ButtonProps) {
  const { shuffle, setShuffle } = useAudio();

  return (
    <button
      {...props}
      style={{ ...style, '--buttonBgColor': bgColor } as CSSProperties}
      name="shuffle"
      title={shuffle ? 'Shuffle' : 'No shuffle'}
      onClick={() => setShuffle(!shuffle)}
    >
      <ShuffleIcon height={12} width={12} stroke={color} color={color} />
      <span
        data-name="no"
        style={{ '--buttonTextColor': color } as CSSProperties}
      >
        {shuffle ? '' : 'x'}
      </span>
    </button>
  );
});
