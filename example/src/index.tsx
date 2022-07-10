import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer, { AudioProvider } from 'react-mp3';
import Section from './Section';
import './output.css';

const App = () => {
  const [theme, setTheme] = useState({
    className: 'bg-white',
    buttonColor: 'black',
    trackSliderBg: 'white',
    trackSliderColor: 'black',
    flexDirection: 'row-reverse',
  });

  const src = [
    {
      title: 'Sun flower (Spider-man into the spider verse)',
      artist: 'Post Malone',
      url: 'https://docs.google.com/uc?e=download&id=1p1YXZNWTE6FTLDmS_AU83NEMpf4gfxQn',
      artwork: [
        {
          src: 'https://docs.google.com/uc?export=download&id=1Q4jkHpdpfgOTpKgvVWsRC3frvPxr7jXN',
        },
      ],
    },
    {
      title: 'Dragon Ball Z Kai',
      url: 'https://docs.google.com/uc?e=download&id=1MsLjRUh90mwFWwsx_WZsFlWu3GwWdVAu',
      artwork: [
        {
          src: 'https://docs.google.com/uc?export=download&id=1so6xudJQuelDSgIIaJXTPNHYV9H6R8dE',
        },
      ],
    },
    {
      title:
        'STEINS;GATE The Movie - Load Region of Déjà vu Ending - Itsumo Kono Basho de',
      artist: 'Ayane',
      url: 'https://docs.google.com/uc?e=download&id=1Q6yKApfw95ZGic8e7nagXVZLAgP2pgAz',
      artwork: [
        {
          src: 'https://docs.google.com/uc?export=download&id=1Ys3TOfFodeEPmJDyeJWVWUJJLL1n8KnM',
        },
      ],
    },
    {
      title: 'Sample Audio',
      url: 'https://filesamples.com/samples/audio/mp3/sample2.mp3',
    },
  ];

  return (
    <AudioProvider>
      <main className="max-w-4xl mx-auto pb-16">
        <div className="flex gap-2 justify-start items-center p-1 mx-auto">
          <img src="/react-mp3.png" alt="React-mp3 logo" className="h-16" />
          <h1 className="flex-auto font-bold text-2xl sm:text-3xl">
            Demo for React mp3
          </h1>
        </div>
        <hr />
        <p className="py-3">
          Look at the bottom of the screen. <b>react-mp3</b> is very flexible
          and versatile. You can customize it in many different ways. Using{' '}
          <b>useAudio() </b>
          hook you can change your audio players state from any child component.
        </p>
        <Section src={src} />

        <div
          style={{ position: 'fixed', bottom: '0', left: '0', width: '100%' }}
        >
          <AudioPlayer
            src={src}
            className={theme.className}
            buttonColor={theme.buttonColor}
            trackSliderBg={theme.trackSliderBg}
            trackSliderColor={theme.trackSliderColor}
            flexDirection={theme.flexDirection as "row-reverse" | "row" | "column" | "column-reverse"}
          />

        </div>
        <h2 className="text-xl font-extrabold py-4"> Customizing </h2>
        <h3> Color combination </h3>
        <hr className='text-opacity-80 my-1 mb-4'/>
        <div className='grid gap-4 justify-start'>
          <button className='py-2 font-bold px-4 shadow-black shadow-sm rounded'>Combination 1</button>
          <button className='py-2 font-bold px-4 shadow-black shadow-sm rounded'>Combination 2</button>
          <button className='py-2 font-bold px-4 shadow-black shadow-sm rounded'>Combination 3</button>

        </div>
      </main>
    </AudioProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
