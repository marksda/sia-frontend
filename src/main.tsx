// import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Provider } from 'react-redux';
import { persistor, store } from './app/redux-store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import HomeApp from './scenes/home/home-page.component.tsx';


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FluentProvider theme={webLightTheme}>
        <BrowserRouter>
          <HomeApp />
        </BrowserRouter>
      </FluentProvider>
    </PersistGate>    
  </Provider>    
);

