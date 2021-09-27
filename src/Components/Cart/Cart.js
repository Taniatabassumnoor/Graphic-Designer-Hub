import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let person = '';
    for (const designer of cart) {
        total = (total + designer.salary);
        person = (person + designer.name);
    }
    return (
        <div>
            <div>
                <h2>Hired Details</h2>
                <h5>Designer Added :{props.cart.length} </h5>
                <p>Total Cost: ${total.toFixed(2)}</p>
                <p><b>Selected Designer Name</b></p>
                <ol> 
                {   
                    cart.map(person=><li><h6> {person.name}</h6></li>)
                }
                </ol>
            </div>
            <div>
                <ul>
                    <li className="person"></li>
                </ul>

            </div>
        </div>
    );
};

export default Cart;