import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
// import { ThemeProvider } from '@mui/material/styles';
// import { theme } from 'theme';
// import AOS from 'aos';
// AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/petly-service">
        <Provider store={store}>
          {/* <ThemeProvider theme={theme}> */}
          <App />
          {/* </ThemeProvider> */}
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
