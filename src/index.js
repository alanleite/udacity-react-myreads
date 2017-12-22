import React from 'react';
import ReactDOM from 'react-dom';
// styles
import 'semantic-ui-css/semantic.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './index.css';
// components
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
