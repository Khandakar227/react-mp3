import React, { CSSProperties } from "react";

export default function TrackSlider({
  duration,
  trackProgress,
  className,
  color="gold",
  bgColor="#eee",
  onScrub
}: {
  duration: number;
  trackProgress: number;
  color?: string,
  bgColor?: string,
  className?: string;
  onScrub: Function
}) {
  return (
    <div data-type="trackSlider-wraper">
      <progress
        max={duration}
        data-type="trackslider"
        style={{"--trackslider-color": color, "--trackslider-bg": bgColor} as CSSProperties}
        value={isNaN(trackProgress) ? 0 : trackProgress}
      ></progress>
      <input
        type="range"
        step={0.5}
        value={isNaN(trackProgress) ? 0 : trackProgress}
        min={0}
        max={duration}
        onChange={(e: { target: { value: string } }) => onScrub(e.target.value)}
      />
    </div>
  );
}
