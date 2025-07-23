import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.label === product.label);
      if (existing) {
        return prevItems.map((item) =>
          item.label === product.label
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (label) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.label !== label)
    );
  };

  const updateQuantity = (label, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.label === label ? { ...item, quantity } : item
      )
    );
  };


  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
