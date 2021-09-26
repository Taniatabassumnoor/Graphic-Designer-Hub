import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let person = '';
    
    for(const designer of cart){
        total = (total + designer.salary);
        person = (person + designer.name);
        
    }
    return (
        <div>
            <div>
            <h2 className="cart-style">Order Summary</h2>
            <h5>Designer Added :{props.cart.length} </h5>
            <br />
            <p>Total Cost: ${total}</p>
        </div>
        <div>
            <ul>
                <h3>Hired Designer</h3>
            <li className="person">{person}</li>
            </ul>
         
        </div>
        </div>
    );
};

export default Cart;