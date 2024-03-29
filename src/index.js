import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app.js';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
<ContextProvider> <App /> </ContextProvider>,
document.getElementById('root'))