import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactImageText } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactImageText backgroundImage={ null } textSet="Aries"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
