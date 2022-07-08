import React, { useRef, useState, useEffect, SyntheticEvent, CSSProperties } from "react";
import { useAudio } from "./audioContext";
import { AudioPlayerProps } from "./AudioPlayer.types";
import LoopIcon from "./icons/LoopIcon";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PrevIcon from "./icons/PrevIcon";
import ShuffleIcon from "./icons/ShuffleIcon";
import SpeakerIcon from "./icons/SpeakerIcon";
import SpeakerOffIcon from "./icons/SpeakerOffIcon";
import "./index.css";
import TrackSlider from "./TrackSlider";

export default function AudioPlayer({
  showTime = true,
  trackSliderColor = "#021C1E",
  trackSliderBg = "#6FB98F",
  buttonColor= "#000",
  src,
  ...props
}: AudioPlayerProps) {
  const [duration, setDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const {
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    loop,
    setLoop,
    shuffle,
    setShuffle,
    volume,
    setVolume,
  } = useAudio();

  const audioRef = useRef({} as HTMLAudioElement);

  useEffect(() => {
    if (!audioRef.current.tagName) return;

    if (!isPlaying) audioRef.current.pause();
    else audioRef.current.play();
  }, [isPlaying, trackIndex]);

  //set track number to 0 if src changes
  useEffect(() => {
    if (!audioRef.current.tagName) return;
    setTrackIndex(0);
  }, [src, setTrackIndex]);
  //Set audio volume if changes
  useEffect(() => {
    if (!audioRef.current.tagName) return;

    audioRef.current.volume = volume;
  }, [volume])

  const onScrub = (value: string) => {
    audioRef.current.currentTime = isNaN(+value) ? 0 : +value;
    setTrackProgress(audioRef.current.currentTime);
  };
  function onLoadedMetadata(e: SyntheticEvent<HTMLAudioElement, Event>) {
    if (!audioRef.current.tagName) return;
    setVolume(props.volume ?? 1);
    audioRef.current.volume = volume;
    setDuration(audioRef.current.duration);
    setLoop(props.loop || "no-repeat");
    //props.onLoadedMetadata(e);
  }

  function onTimeUpdate() {
    setTrackProgress(audioRef.current.currentTime ?? 0);
  }
  function onEnded() {
    setTrackProgress(audioRef.current.currentTime ?? 0);
    switch (loop) {
      case "repeat-all":
        if (!shuffle) toNextTrack();
        else toShuffledTrack();
        break;
      case "repeat-once":
        audioRef.current.play();
        break;
      default:
        setIsPlaying(false);
    }
  }
  /**
   * Go to previous tag
   */
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) setTrackIndex(0);
    else setTrackIndex(trackIndex - 1);
  };
  /**
   * Go to next track
   */
  const toNextTrack = () => {
    if (trackIndex < src.length - 1) setTrackIndex(trackIndex + 1);
    else setTrackIndex(0);
  };
  /**
   * select a random track
   */
  function toShuffledTrack() {
    const trackNum = Math.floor(Math.random() * src.length);
    setTrackIndex(trackNum);
  }
  /**
   * Change loop to repeat > no-repeat > repeat all
   */
  const onLoop = () => {
    if (loop === "no-repeat") setLoop("repeat-once");
    else if (loop === "repeat-once") setLoop("repeat-all");
    else setLoop("no-repeat");
  };

  const displayDuration = (time: number) => {
    function padZero(v: number) {
      return v < 10 ? "0" + v : v;
    }
    const sec = Math.round(time % 60);
    const min = Math.round((time / 60) % 60);
    const hr = Math.round((time / (60 * 60)) % 24);
    return (
      (hr ? padZero(time ? hr : 0) + ":" : "") +
      padZero(time ? min : 0) +
      ":" +
      padZero(time ? sec : 0)
    );
  };
  return (
    <div className={props.className} style={props.style} data-type="audioplayer">
      <audio
        src={src[trackIndex]?.url}
        ref={audioRef}
        hidden={true}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      ></audio>
      <div data-type="media">
          <TrackSlider
            duration={duration}
            onScrub={onScrub}
            trackProgress={trackProgress}
            trackSliderColor={trackSliderColor}
            trackSliderBg={trackSliderBg}
          />
        {showTime ? (
          <div className="time">
            <small>
              <time>{displayDuration(audioRef.current.currentTime)}</time>
            </small>
            <small>
              <time>{displayDuration(duration)}</time>
            </small>
          </div>
        ) : (
          ""
        )}
      </div>
      <div data-type="control-wrapper">
        <div data-type="control">
          <button
            name="shuffle"
            title={shuffle ? "Shuffle" : "No shuffle"}
            onClick={() => setShuffle(!shuffle)}
          >
            <ShuffleIcon height={12} width={12} stroke={buttonColor} color={buttonColor} />
            <span data-name="no" style={{"--buttonTextColor": buttonColor} as CSSProperties}>{shuffle ? "" : "x"}</span>
          </button>
          <button
            name="previous"
            title="Previous track"
            onClick={() => toPrevTrack()}
          >
            <PrevIcon stroke={buttonColor} color={buttonColor} />
          </button>

          {!isPlaying ? (
            <button name="play" onClick={() => setIsPlaying(true)} title="Play">
              <PlayIcon height={22} width={22} stroke={buttonColor} color={buttonColor} />
            </button>
          ) : (
            <button
              name="pause"
              onClick={() => setIsPlaying(false)}
              title="Pause"
            >
              <PauseIcon height={22} width={22} stroke={buttonColor} color={buttonColor} />
            </button>
          )}
          <button name="next" title="Next track" onClick={() => toNextTrack()}>
            <NextIcon stroke={buttonColor} color={buttonColor} />
          </button>
          <button
            name="loop"
            onClick={onLoop}
            title={
              loop === "repeat-once"
                ? "Repeat one"
                : loop === "no-repeat"
                ? "No repeat"
                : "Repeat all"
            }
          >
            <LoopIcon height={12} width={12} stroke={buttonColor} color={buttonColor} />
            <span data-name="no" style={{"--buttonTextColor": buttonColor} as CSSProperties}>{loop === "repeat-once" ? 1 : loop === "no-repeat" ? "x" : ""}</span>
          </button>
        </div>
        <button name="volume" onClick={() => setVolume(volume > 0 ? 0: 1)}>
            {volume > 0 ? (
              <SpeakerIcon height={12} width={12} stroke={buttonColor} />
            ) : (
              <SpeakerOffIcon height={12} width={12} stroke={buttonColor} />
            )}
          </button>
      </div>
    </div>
  );
}
