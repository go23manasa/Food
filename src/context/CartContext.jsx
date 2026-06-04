import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toastMsg, setToastMsg] = useState(null);
  const [toastExit, setToastExit] = useState(false);

  const showToast = useCallback((msg) => {
    setToastExit(false);
    setToastMsg(msg);

    setTimeout(() => {
      setToastExit(true);

      setTimeout(() => {
        setToastMsg(null);
      }, 350);
    }, 2200);
  }, []);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });

    showToast(item.name + ' added to cart!');
  }, [showToast]);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) =>
      prev.filter((i) => i.id !== id)
    );
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id
            ? { ...i, qty: i.qty + delta }
            : i
        )
        .filter((i) => i.qty > 0)
    );
  }, []);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        totalItems,
        totalPrice,
        toastMsg,
        toastExit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);