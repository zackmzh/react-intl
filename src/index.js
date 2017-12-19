import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';

let frLocaleData = require('react-intl/locale-data/fr');
addLocaleData(frLocaleData);

let i18nConfig = {
  locale: 'fr',
  messages: {
    'app.welcome' : "Bienvenue !",
    'app.greeting_message' : "Salut {name}, ca va ?"
  }
};

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
  <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
    <App />
  </IntlProvider>,
  (document.getElementById('root'))
);
registerServiceWorker();
