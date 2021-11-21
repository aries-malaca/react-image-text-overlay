import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactImageText } from '../src/index';

const App = () => {
  return (
    <div>
      <ReactImageText backgroundImage={ require('./assets/images/park.jpg') } textSet="Park Shim Hye" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
