import React, { createContext, useState, useContext,useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider component to wrap around your application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Initialize cart from localStorage when the app loads
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse and set cart if data exists in localStorage
    }
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
    }
  }, [cart]);

  // Add item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove one quantity of the item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          // Decrease quantity by 1
          return { ...item, quantity: item.quantity - 1 };
        } else if (item.id === itemId && item.quantity === 1) {
          // If quantity is 1, remove the item completely
          return null;
        }
        return item;
      }).filter(Boolean); // Remove null items from the array

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

