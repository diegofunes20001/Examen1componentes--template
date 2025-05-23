
import React, { createContext, useContext, useState } from 'react';

type MenuItem = {
  id: string;
  name: string;
  price: number;
};

type OrderContextType = {
  cartItems: MenuItem[];
  deletedItems: MenuItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const OrderContext = createContext<OrderContextType>({
  cartItems: [],
  deletedItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [deletedItems, setDeletedItems] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    if (itemToRemove) {
      setDeletedItems(prev => [...prev, itemToRemove]);
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <OrderContext.Provider value={{ cartItems, deletedItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);