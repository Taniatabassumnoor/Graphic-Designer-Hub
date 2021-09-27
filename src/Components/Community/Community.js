import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Designer from '../Designer/Designer';
import './Community.css';

const Community = () => {
    const [designers, setDesigners] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDesigners(data));
    }, [])
    const handleAddToCart = (designer) => {
        const newCart = [...cart, designer];
        setCart(newCart);
    }


    return (

        <div >
            <h1 id="head"><b>Our Community Members</b></h1>
            <div className="community-container" >

                <div className="designer-container">
                    {
                        designers.map(designer => <Designer
                            key={designer.id}
                            designer={designer}
                            handleAddToCart={handleAddToCart}
                        ></Designer>)
                    }

                </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Community;