import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';
import ProductDetails from '../components/ProductDetails';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import ErrorBoundary from '../components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { 
        index: true, 
        element: <Home />,
        errorElement: <ErrorBoundary /> 
      },
      { 
        path: 'products', 
        element: <ProductsPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: 'products/:id', 
        element: <ProductDetails />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: 'services', 
        element: <ServicesPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: 'contact', 
        element: <ContactPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: 'about', 
        element: <AboutPage />,
        errorElement: <ErrorBoundary />
      },
    ],
  },
]); 