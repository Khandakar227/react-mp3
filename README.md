# React-mp3

<!-- <img src="./docs/Logo.jpg" alt="Svelte mp3 Logo" /> -->

This is a light blazingly fast, simple audio player for react.

## Installation

    npm install --save react-mp3

## Quickstart

Inside your root file App.tsx or App.jsx wrap around your root component with `AudioProvider`:

```jsx
import {AudioProvider} from "react-mp3;

  ...

  return (
      <AudioProvider>
          //Rest of the code...
      </AudioProvider>
  )
```

Now import `AudioPlayer` from any of your component.

    ```jsx
    import AudioPlayer from "react-mp3";

    //...

    return (
        <AudioPlayer src={[
            {
                title: "Sample", url: "https://filesamples.com/samples/audio/mp3/sample2.mp3"
            }
            ]}/>
    )
    ```

Now you can use `useAudio` hook to change audio track, play, pause and much more from anywhere in your react app.
Inside your component file Component.jsx:

```jsx
import { useAudio } from "react-mp3";

export default function Component() {
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
    //etc...
  } = useAudio();

  //....

}
```
## Props
