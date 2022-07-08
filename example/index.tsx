import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer, { AudioProvider } from 'react-mp3';

const App = () => {
  const src = [
    {title: "Sample 1", url: "https://filesamples.com/samples/audio/mp3/sample3.mp3"},
    {title: "", url: "https://filesamples.com/samples/audio/mp3/sample4.mp3"},
    {title: "Sample 3", url: "https://filesamples.com/samples/audio/mp3/sample2.mp3"},
];
  return (
    <AudioProvider>
      < AudioPlayer src={src}/>
      <button> Click </button>
    </AudioProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
