# React Image Text Overlay

React component that activates overlay text to an image usign CSS and html.

## Install
`yarn add react-image-text-overlay` or `npm install react-image-text-overlay`

## Example

```
import React from 'react';
import { ReactImageText } from '../src/index';

const App = () => {
  return (
    <div>
      <ReactImageText backgroundImage={ require('./assets/images/park.jpg') } textSet="Park Shim Hye" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

Thank You!!!