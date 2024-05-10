import React from 'react';
import Button from 'react-bootstrap/Button';
import { useCart } from './CartContext';
import Navbar1 from './Navbar';
import "./context.css";
import SimpleImageSlider from "react-simple-image-slider";

function Usecontext1() {
    let data = require('./product2.json');
    const { cart, totalQuantity, totalAmount, addToCart, removeFromCart, updateQuantity } = useCart();

    return (
        <div>
            <Navbar1 value={totalQuantity}></Navbar1>
            <div class="cards">
                {data.products.map(product => (
                    <div key={product.id} className="container">
                        <div className="card">
                            <SimpleImageSlider
                                width={300}
                                height={250}
                                images={product.images}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                                autoPlayDelay={100}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{product.title}</h4>
                                <h5>{product.category}</h5>
                                <p className="card-text">Price$: {product.price}</p>
                                <Button variant="outline-dark" onClick={() => addToCart(product.id, product.price)}>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Cart</h2>
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{data.products.find(product => product.id === item.id).title}</p>
                        <p>Price: ${item.price}</p>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                        <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                        <p>Total Price: ${item.price * item.quantity}</p>
                    </div>
                ))}
                <h3>Total Quantity: {totalQuantity}</h3>
                <h3>Total Amount: ${totalAmount}</h3>
            </div>
        </div>
    );
}

export default Usecontext1;
