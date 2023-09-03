import 'modern-normalize/modern-normalize.css';
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animations/kayframes.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react';
import { TailSpin } from 'react-loader-spinner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <BrowserRouter basename="cinemania">
        <Provider store={store}>
          <PersistGate
            loading={
              <TailSpin
                height="80"
                width="80"
                color="#08B275"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{ padding: '40px 0', display: 'flex', justifyContent: 'center' }}
                wrapperClass=""
                visible={true}
              />
            }
            persistor={persistor}
          >
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
