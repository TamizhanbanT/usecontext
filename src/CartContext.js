import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let quantity = 0;
        let amount = 0;
        cart.forEach(item => {
            quantity += item.quantity;
            amount += item.quantity * item.price;
        });
        setTotalQuantity(quantity);
        setTotalAmount(amount);
    }, [cart]);

    const addToCart = (id, price) => {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex === -1) {
            setCart([...cart, { id, quantity: 1, price }]);
        } else {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity++;
            setCart(updatedCart);
        }
    };

    const removeFromCart = id => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, totalQuantity, totalAmount, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
