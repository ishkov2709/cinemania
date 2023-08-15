import 'modern-normalize/modern-normalize.css';
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animations/kayframes.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
