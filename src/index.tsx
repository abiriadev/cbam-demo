import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './locales/i18n.ts';
import './styles/global.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

const reduxStore = store;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
