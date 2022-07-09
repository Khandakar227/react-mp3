import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from '../src';

const src = [
  {title: "Dragon Ball Z Kai", url: "https://docs.google.com/uc?export=download&id=1MsLjRUh90mwFWwsx_WZsFlWu3GwWdVAu"},
  {title: "Sun flower - Post Malone", url: "https://docs.google.com/uc?export=download&id=1p1YXZNWTE6FTLDmS_AU83NEMpf4gfxQn"},
  {title: "Sample 3", url: "https://filesamples.com/samples/audio/mp3/sample2.mp3"},
];

describe('AudioPlayer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AudioPlayer src={src} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
