import React, { CSSProperties, HTMLAttributes } from 'react';
import { useAudio } from '../audioContext';
import LoopIcon from '../icons/LoopIcon';

export default function LoopButton({ color, ...props }: { color?: string, props?:HTMLAttributes<HTMLButtonElement> }) {
  const { loop, setLoop } = useAudio();

  /**
   * Change loop to repeat > no-repeat > repeat all
   */
  const onLoop = () => {
    if (loop === 'no-repeat') setLoop('repeat-once');
    else if (loop === 'repeat-once') setLoop('repeat-all');
    else setLoop('no-repeat');
  };
  return (
    <button
      {...props}
      name="loop"
      onClick={onLoop}
      title={
        loop === 'repeat-once'
          ? 'Repeat one'
          : loop === 'no-repeat'
          ? 'No repeat'
          : 'Repeat all'
      }
    >
      <LoopIcon
        height={12}
        width={12}
        stroke={color}
        color={color}
      />
      <span
        data-name="no"
        style={{ '--buttonTextColor': color } as CSSProperties}
      >
        {loop === 'repeat-once' ? 1 : loop === 'no-repeat' ? 'x' : ''}
      </span>
    </button>
  );
}
