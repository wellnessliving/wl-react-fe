import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import Home from './routes/Home.tsx';
import Report from './routes/Report.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'report',
        element: <Report />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
