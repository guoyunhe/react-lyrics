import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Lyrics } from '../stories/Lyrics.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Lyrics />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
