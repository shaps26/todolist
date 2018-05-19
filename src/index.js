import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accueil from './components/Accueil';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Accueil />, document.getElementById('root'));
registerServiceWorker();
