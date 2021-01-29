import React from 'react';
import ReactDOM from 'react-dom';
import Lyrics from '../src/Lyrics';

describe('<Lyrics/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Lyrics
        time={0}
        lyrics={
          '[00:01.11]Arise ye workers from your slumbers\n[00:02.33]Arise ye prisoners of want'
        }
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
