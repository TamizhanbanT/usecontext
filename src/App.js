import React from 'react';
import { CartProvider } from './CartContext';
import Usecontext1 from './Usecontext';

function App() {
    return (
        <CartProvider>
            <Usecontext1 />
        </CartProvider>
    );
}

export default App;
