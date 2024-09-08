import React, { createContext, useState, useEffect } from 'react';

// Create CartContext
export const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  // Initialize cart state from local storage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cartItems to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Find if the product is already in the cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id);

      if (existingItemIndex >= 0) {
        // If the product is already in the cart, update the quantity
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];

        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1, // Increment the quantity by 1
        };
        return updatedItems;
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to update the quantity of a product
  const updateItemQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
