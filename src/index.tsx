import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import CreateMusic from './components/CreateMusic';
import Statistics from './components/Statistics';
import UpdateMusic from './components/UpdateMusic';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout />
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "/home", element: <Home /> },
      { path: "/create-music", element: <CreateMusic /> },
      { path: "/statistics", element: <Statistics /> },
            { path: "/edit-music/:id", element: <UpdateMusic /> },




    ]
  }
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
