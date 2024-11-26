import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThriftStorePage from './ThriftStorePage';

import CartPage from './CartPage';
import ExploreMorePage from './ExploreMorePage';  // Import ExploreMorePage
import { CartProvider } from './CartContext'; // Import CartProvider to manage cart state globally

// Route configuration for easier maintenance
const routes = [
  { path: '/', component: <ThriftStorePage /> },
  { path: '/cart', component: <CartPage /> },
  { path: '/explore-more', component: <ExploreMorePage /> }, // New route for Explore More page
 
];

const App = () => {
  return (
    <CartProvider> {/* Wrap the app with CartProvider to access cart data globally */}
      <Router>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

