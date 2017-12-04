import React from 'react';
import ReactDOM from 'react-dom';
// styles
import 'semantic-ui-css/semantic.css'
import 'react-id-swiper/src/styles/css/swiper.css'
import './index.css';
// components
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
