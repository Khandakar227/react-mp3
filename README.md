# React-mp3

<!-- <img src="./docs/Logo.jpg" alt="Svelte mp3 Logo" /> -->

This is a light blazingly fast, simple audio player for react.
Here's a [Demo](https://react-mp3.netlify.app)

## Installation

    npm install --save react-mp3

## Quickstart

### Provider
Inside your root file App.tsx or App.jsx wrap around app with `AudioProvider`:

```jsx
//ES6
import {AudioProvider} from "react-mp3";

//CommonJS
const {AudioProvider} = require("react-mp3");
  ...

export default function App () {
  return (
      <AudioProvider>
          //Rest of the code...
      </AudioProvider>
  )
}
```

### AudioPlayer
Now import `AudioPlayer` from any of your component.

```jsx
//ES6
import AudioPlayer from "react-mp3";

//CommonJS
const AudioPlayer = require("react-mp3");
//...

export default function Component () {
//...

return (
    <AudioPlayer src={[
        {
            title: 'Sample',
            artist: 'John Doe',
            url: 'https://filesamples.com/samples/audio/mp3/sample2.mp3',
            artwork: [
              {src: 'https://i.picsum.photos/id/516/200/300.jpg?hmac=hMEuvTcrLNhrMSSGnaRit4YgalzJJ66stNu-UT70DKw'}
              ]
        }
        ]}/>
)
} 
```
### Hooks
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
### Components
react-mp3 offers usable components.

`LoopButton`:
a react button to loop audios.

`NextButton`:
a button to go to next track. takes total number of audio as an argument.

`PlayPauseButton`:
a button to go to play or pause current track.

`PrevButton`:
a button to go to previous track. takes total number of audio as an argument.

`ShuffleButton`:
a button to shuffle or unshuffle track.

`TrackSlider`:
a range slider.

`VolumeButton`:
a button to mute or unmute track.
### Icons
`LoopIcon`, `NextIcon`, `PlayIcon`,`PauseIcon`, `PrevIcon`, `ShuffleIcon`, `SpeakerIcon`,`SpeakerOffIcon`.

## Props

name | type | default | defination |
-----| ----- | ----- | ----------- |
`src` | `{ title: string; artist?: string; artwork?: { src: string;}[]; url: string;}` | `undefined` | An array of audio urls, titles, artists, and artworks. |
`volume` | `number` | 1 |Audio volume value between 0 and 1. |
`loop` | `"no-repeat \| "repeat-once" \| "repeat-all"` | `no-repeat` |  |
`shuffle` | `boolean` | `false` | Whether or not to shuffle audios. The default value is `false.`|
`trackSliderClassName`  | `string`| `undefined` | If you want to change the style of the trackslider, use className.|
`showTime`  | `boolean` | `true`| Show the elapsed time and duration. The default value is `true.` |
`showVolume`  | `boolean` | `true`  | Whether or not to show the volume button. The default value is `true.`|
`showPrev`  | `boolean` | `true`  | Show the previous button. The default value is `true.`|
`showNext`  | `boolean` | `true`  | Show the next button. The default value is `true.`| 
`showShuffle`  | `boolean` | `true`  | Show the shuffle button. The default value is `true.`|
`showCover`  | `boolean` | `true`  |Showcase the title, artist name, and artwork. The default value is `true.` |
`trackSliderColor`  | `string` | `#021C1E`  | Track slider`s color when there`s value|
`trackSliderBg`  | `string` | `#6FB98F`  | Background color of the track slider|
`buttonColor`  | `string` | `#000`  | The color of the audio player`s buttons|
`buttonBgColor`  | `string` | `#6fb98f`  | background color for buttons. Default is `#6fb98f` |
`currentTrackNum`  | `number` | `0`  | The current track number `0` as the opening track |
`onError`  | `ReactEventHandler<HTMLAudioElement>` | `null`  | Handle audio player related error with `onError` function |
`flexDirection`  | flex-direction CSS value | `"row"`  |track slider and controls position. The default value is `row`. |
`textColor`  | `string | `"#000"`  | The default value is `#000`. |

## Improvements
Feel free to update, issue, improve this package. Fork the repo, make your changes and pull request.