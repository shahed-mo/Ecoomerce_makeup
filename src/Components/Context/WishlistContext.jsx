import React, { createContext, useState, useEffect } from 'react';

// Create the WishlistContext
export const WishlistContext = createContext();

// WishlistProvider Component
export const WishlistProvider = ({ children }) => {
  // Initialize wishlist state from local storage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Persist wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  // Function to clear the wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
