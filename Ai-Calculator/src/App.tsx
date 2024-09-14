import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screens/home';

import './index.css';

const paths = [
    {
        path: '/',
        element: (
          <Home/>
        ),
    },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
    return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter}/>
    </MantineProvider>
    )
};

export default App;