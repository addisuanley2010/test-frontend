import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import CreateMusic from './components/CreateMusic';
import Statistics from './components/Statistics';
import UpdateMusic from './components/UpdateMusic';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout />
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
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
        <ToastContainer />
    <RouterProvider router={router} />
  </Provider>
);
