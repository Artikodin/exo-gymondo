import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './app/app';

// StrictMode tag as been removed to avoid conflict with material UI
// see : https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
ReactDOM.render(<App />, document.getElementById('root'));
