import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Order from './pages/Order';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Gallery',
        element: <GalleryPage />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Order',
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
