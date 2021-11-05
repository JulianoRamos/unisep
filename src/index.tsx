import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { makeServer } from './services/miragejs';

makeServer();

ReactDOM.render(<App />, document.getElementById('root'));
