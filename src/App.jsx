import React from 'react';
import './Styles/NAV.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/HOME/Home';
import Pages from './Components/Page/Page';
import Blog from './Components/Blog/Blog';
import Shop from './Components/Shop/Shop';
import Portfolio from './Components/PROTFILIO/Protifilio';
import Contact from './Components/Contact/Contact';
import Cart from './Components/cart/Cart';
import { CartProvider } from './Components/Context/CartContext';
import { WishlistProvider } from './Components/Context/WishlistContext';
import Stand from './Components/Standard/Stand';
import Wishlist from './Components/Wishlist/Wishlist';
import Filter_by_Category from './Components/filterbycaregory/Filter_by_Category';
import Checkout from './Components/Checkout/Checkout';
import Detail from './Components/details/Detail'


function App() {
  const Routing = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'pages',
          element: <Pages />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'shop',
          element: <Shop />,
          children: [
            {
              path: 'cart',
              element: <Cart />,
            },
            {
              path: 'standard',
              element: <Stand />,
            },
            {
              path: 'whishlist',
              element: <Wishlist />
            },
            {
              path:'Filter-by-Category',
              element:<Filter_by_Category />
            },
            {
              path:'checkout',
              element:<Checkout/>
            },
            {
              path: 'Detail/:id',
              element: <Detail />,
            }
          ],
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        
      ],
    },
  ]);

  return (
    <WishlistProvider>
    <CartProvider>
     
        <RouterProvider router={Routing} />
    </CartProvider>
    </WishlistProvider>
  );
}

export default App;
