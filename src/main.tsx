// import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './features/state-engine/redux-store.ts';
import AkutansiApp from './app/AkutansiApp.tsx';


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FluentProvider theme={webLightTheme}>
        <BrowserRouter>
          <AkutansiApp />
        </BrowserRouter>
      </FluentProvider>
    </PersistGate>    
  </Provider>    
);

