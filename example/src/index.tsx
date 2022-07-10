import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AudioPlayer, { AudioProvider } from 'react-mp3';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Section from './Section';
import './output.css';

const combinations = [
  { text: 'text-black', bg: 'bg-emerald-400' },
  { text: 'text-white', bg: 'bg-red-700' },
  { text: 'text-orange-500', bg: 'bg-zinc-800' },
];

const App = () => {
  const [theme, setTheme] = useState({
    className: 'bg-white',
    buttonColor: 'black',
    buttonBgColor: '#6fb98f',
    textColor: '#000',
    trackSliderBg: 'white',
    trackSliderColor: 'black',
    flexDirection: 'row-reverse',
  });

  function changeTheme(index: number) {
    switch (index) {
      case 1:
        setTheme({
          className: 'bg-red-800',
          buttonColor: 'white',
          buttonBgColor: 'black',
          trackSliderBg: 'red',
          textColor: 'white',
          trackSliderColor: 'black',
          flexDirection: 'row-reverse',
        });
        break;
      case 2:
        setTheme({
        className: 'bg-zinc-800',
        buttonColor: 'rgb(249 115 22)',
        buttonBgColor: 'rgb(39 39 42)',
        textColor: 'rgb(249 115 22)',
        trackSliderBg: 'rgb(39 39 42)',
        trackSliderColor: 'rgb(249 115 22)',
        flexDirection: 'row',
        })
        break;
      default:
        setTheme({
          className: 'bg-white',
          buttonColor: 'black',
          buttonBgColor: '#6fb98f',
          textColor: 'black',
          trackSliderBg: 'white',
          trackSliderColor: 'black',
          flexDirection: 'row-reverse',
        });
        break;
    }
  }

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
      <main className="max-w-4xl mx-auto pb-32">
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
            buttonBgColor={theme.buttonBgColor}
            textColor={theme.textColor}
            trackSliderBg={theme.trackSliderBg}
            trackSliderColor={theme.trackSliderColor}
            flexDirection={
              theme.flexDirection as
                | 'row-reverse'
                | 'row'
                | 'column'
                | 'column-reverse'
            }
          />
        </div>
        <h2 className="text-xl font-extrabold py-4"> Customizing </h2>
        <h3> Color combination </h3>
        <hr className="text-opacity-80 my-1 mb-4" />
        <div className="grid gap-4 justify-start">
          {combinations.map((c, i) => (
            <button
              key={'button' + i}
              className={`py-2 font-bold px-4 shadow-black shadow-sm rounded ${c.bg} ${c.text}`}
              onClick={() => changeTheme(i)}
            >
              Combination {i + 1}
            </button>
          ))}
        </div>
        <div className='py-5 px-1'>
            <SyntaxHighlighter language='jsx' style={atomDark} showLineNumbers={true}>
{`<AudioPlayer
  src={src}
  className='${theme.className}'
  buttonColor='${theme.buttonColor}'
  buttonBgColor='${theme.buttonBgColor}'
  textColor='${theme.textColor}'
  trackSliderBg='${theme.trackSliderBg}'
  trackSliderColor='${theme.trackSliderColor}'
  flexDirection='${theme.flexDirection}'
/>`}
            </SyntaxHighlighter>
        </div>
      </main>
    </AudioProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

