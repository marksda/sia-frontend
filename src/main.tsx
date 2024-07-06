// import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Provider } from 'react-redux';
import { persistor, store } from './app/redux-store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <ErrorPage />
  // },
  // {
  //   path: "login",
  //   element: <LoginPage />,
  // },
]);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FluentProvider theme={webLightTheme}>
        <App />
        <RouterProvider router={router} />
      </FluentProvider>
    </PersistGate>    
  </Provider>    
);
