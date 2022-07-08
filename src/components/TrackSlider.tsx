import React, { CSSProperties } from "react";

export default function TrackSlider({
  duration,
  trackProgress,
  className,
  trackSliderColor="gold",
  trackSliderBg="#eee",
  onScrub
}: {
  duration: number;
  trackProgress: number;
  trackSliderColor?: string,
  trackSliderBg?: string,
  className?: string;
  onScrub: Function
}) {
  return (
    <div className="trackSlider-wraper">
      <progress
        max={duration}
        className="trackslider"
        style={{"--trackslider-color": trackSliderColor, "--trackslider-bg": trackSliderBg} as CSSProperties}
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
