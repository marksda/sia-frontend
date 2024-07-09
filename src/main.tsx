// import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Provider } from 'react-redux';
import { persistor, store } from './app/redux-store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { HomeScreen } from './scenes/home/home-page.component.tsx';
import { SignInScreen } from './scenes/auth/sign-in.component.tsx';


const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "home",
        element: <HomeScreen />,
      },
      {
        path: "login",
        element: <SignInScreen />,
      },
    ]
  }
]);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
      </FluentProvider>
    </PersistGate>    
  </Provider>    
);

function Layout() {
  return <Outlet />;
}
