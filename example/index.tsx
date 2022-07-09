import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer, { AudioProvider } from 'react-mp3';

const App = () => {
  const src = [
    {title: "Sun flower - Post Malone", url: "https://docs.google.com/uc?export=download&id=1p1YXZNWTE6FTLDmS_AU83NEMpf4gfxQn"},
    {title: "Dragon Ball Z Kai", url: "https://docs.google.com/uc?export=download&id=1MsLjRUh90mwFWwsx_WZsFlWu3GwWdVAu"},
    {title: "Sample 3", url: "https://filesamples.com/samples/audio/mp3/sample2.mp3"},
];
console.log()
  return (
    <AudioProvider>
      {/* <img src='https://docs.google.com/uc?export=download&id=1so6xudJQuelDSgIIaJXTPNHYV9H6R8dE' alt='Dragon Ball Z Kai'/> */}
      < AudioPlayer src={src} buttonColor="black" trackSliderBg='white' trackSliderColor='purple'/>
      <button> Click </button>
    </AudioProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
