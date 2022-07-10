import React from 'react';
import { PlayIcon, PauseIcon, useAudio } from 'react-mp3';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Section({ src }: { src: MediaMetadataInit[] }) {
  const { isPlaying, setIsPlaying, trackIndex, setTrackIndex } = useAudio();

  function playTrack(index: number) {
    if (index === trackIndex) setIsPlaying(!isPlaying);
    else setIsPlaying(true);
  }
  console.log(isPlaying);
  return (
    <div className="my-3 px-2">
      Setup entry point of your react app (i.e. App.jsx / App.tsx)
      <div className="max-h-72 overflow-scroll">
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {`import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer, { AudioProvider } from 'react-mp3';
import Component from './Component';
import './output.css';

const App = () => {
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
      title: 'Sample 3',
      url: 'https://filesamples.com/samples/audio/mp3/sample2.mp3',
    },
  ];

  return (
    <AudioProvider>
        <Component src={src} />

        <div
          style={{ position: 'fixed', bottom: '0', left: '0', width: '100%' }}
        >
          <AudioPlayer
            src={src}
            className="bg-white"
            buttonColor="black"
            trackSliderBg="white"
            trackSliderColor="black"
          />
        </div>
    </AudioProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
`}
        </SyntaxHighlighter>
      </div>
      <br />
      Then inside your <code>Component.jsx</code>
      <div className="max-h-72 overflow-scroll">
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {`import React from 'react';
import { PlayIcon, PauseIcon, useAudio } from 'react-mp3';

export default function Component({ src }) { //An array of audio url, artist name, title etc.

  const { isPlaying, setIsPlaying, trackIndex, setTrackIndex } = useAudio();
  //Play or pause any audio
  function playTrack(index: number) {
    if (index === trackIndex) setIsPlaying(!isPlaying);
    else setIsPlaying(true);
  }

  return (
    <div className="my-3 px-2">
    {src.map((audio, i) => (
      // DOn't bother the CSS for now
      <div key={i} className="flex gap-3 my-2 shadow shadow-zinc-500 rounded">
        <img
          className="w-20 sm:w-32"
          // If no audio cover was provided then use the default cover
          src={audio.artwork?.at(0)?.src || 'https://fakeimg.pl/200x300/'}
          // Fallback audio cover if img is failed to load
          onError={function (e) {
            e.currentTarget.src = 'https://fakeimg.pl/200x300/';
          }}
          alt={audio?.title}
        />
        
        <div className='grid justify-items-stretch items-stretch py-2'>
          <h2 className="text-l sm:text-xl font-bold text-ellipsis">
            {audio.title}
          </h2>
          <h4 className="text-sm sm:text-l text-opacity-75">
            {audio.artist}
          </h4>

          <div onClick={() => setTrackIndex(i)}>
            <button className="bg-emerald-300 p-3 rounded shadow" onClick={() => playTrack(i)}>
              
              {trackIndex === i && isPlaying ? (
                <PauseIcon className="stroke-black" />
              ) : (
                <PlayIcon className="stroke-black" />
              )}
            </button>
          </div>
        </div>
      </div>
    ))}
    </div>
      `}
        </SyntaxHighlighter>
      </div>
      {src.map((audio, i) => (
        <div key={i} className="flex gap-3 my-2 shadow shadow-zinc-500 rounded">
          <img
            className="w-20 sm:w-32"
            src={audio.artwork?.at(0)?.src || 'https://fakeimg.pl/200x300/'}
            onError={function (e) {
              e.currentTarget.src = 'https://fakeimg.pl/200x300/';
            }}
            alt={audio?.title}
          />
          <div className="grid justify-items-stretch items-stretch py-2">
            <h2 className="text-l sm:text-xl font-bold text-ellipsis">
              {audio.title}
            </h2>
            <h4 className="text-sm sm:text-l text-opacity-75">
              {audio.artist}
            </h4>
            <div onClick={() => setTrackIndex(i)}>
              <button
                className="bg-emerald-300 p-3 rounded shadow"
                onClick={() => playTrack(i)}
              >
                {trackIndex === i && isPlaying ? (
                  <PauseIcon className="stroke-black" />
                ) : (
                  <PlayIcon className="stroke-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
