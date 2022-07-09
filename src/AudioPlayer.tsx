import React, { useRef, useState, useEffect, SyntheticEvent } from "react";
import { useAudio } from "./audioContext";
import { AudioPlayerProps } from "./AudioPlayer.types";
import "./index.css";
import TrackSlider from "./components/TrackSlider";
import PlayPauseButton from "./components/PlayPauseButton";
import ShuffleButton from "./components/ShuffleButton";
import PrevButton from "./components/PrevButton";
import NextButton from "./components/NextButton";
import LoopButton from "./components/LoopButton";
import VolumeButton from "./components/VolumeButton";

export default function AudioPlayer({
  showTime = true,
  showShuffle = true,
  showVolume = true,
  showNext = true,
  showPrev = true,
  showLoop = true,
  trackSliderColor = "#021C1E",
  trackSliderBg = "#6FB98F",
  buttonColor = "#000",
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
    volume,
    setVolume,
  } = useAudio();

  const audioRef = useRef({} as HTMLAudioElement);

  useEffect(() => {
    if (!audioRef.current.tagName) return;

    if (!isPlaying) audioRef.current.pause();
    else {
      audioRef.current.play().then(() => showMediaSession(src[trackIndex], src.length));
    }
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
  const showMediaSession = (metadata:MediaMetadataInit, numOfTracks: number) => {
    if (!('mediaSession' in navigator)) return
    
    navigator.mediaSession.metadata = new MediaMetadata(metadata);
    
    navigator.mediaSession.setActionHandler('play', function() {
      setIsPlaying(true);
      navigator.mediaSession.playbackState = "playing";
    });
    
    navigator.mediaSession.setActionHandler('pause', function() {
      setIsPlaying(false);
      navigator.mediaSession.playbackState  = "paused";
    });
    navigator.mediaSession.setActionHandler('stop', function() {
      setIsPlaying(false);
    })
    navigator.mediaSession.setActionHandler('previoustrack', toPrevTrack);
    navigator.mediaSession.setActionHandler('nexttrack', toNextTrack)
  }
  return (
    <div className={props.className} style={props.style} data-type="audioplayer">
      <audio
        src={src[trackIndex]?.url}
        ref={audioRef}
        preload="auto"
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      ></audio>
      <div data-type="media">
          <TrackSlider
            duration={duration}
            onScrub={onScrub}
            trackProgress={trackProgress}
            color={trackSliderColor}
            bgColor={trackSliderBg}
          />
        {showTime ? (
          <div data-type="time">
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
          {showShuffle ? <ShuffleButton color={buttonColor}/> : ""}
          {showPrev ? <PrevButton color={buttonColor}  /> : ""}
          <PlayPauseButton color={buttonColor} />
          {showNext ? <NextButton color={buttonColor}  totalTrack={src.length}/> : ""}
          {showLoop ? <LoopButton color={buttonColor}  /> : ""}
        </div>
        {showVolume ? <VolumeButton color={buttonColor}  /> : ""}
      </div>
    </div>
  );
}
