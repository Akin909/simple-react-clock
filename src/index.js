import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
body, html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: inherit;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
