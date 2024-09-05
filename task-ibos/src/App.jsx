import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Store from './pages/Store';
import Layout from './components/common/Layout';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]
  }
]);
const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
