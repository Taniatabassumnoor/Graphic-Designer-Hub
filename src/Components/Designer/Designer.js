import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Designer.css';

const Designer = (props) => {
  const { image, name, email, phone, salary, Portfolio } = props.designer;
  return (
    <div className="designer ">
      <div className="row ">
        <div className="col-md-9 col-lg-9 col-sm-7">
          
        </div>
        <div className="col-md-3 col-lg-3 col-sm-5 cart-main">
          <div className="cart" ></div>
        </div>
      </div>
      <div className="single-designer card-design  ">
        <div>
          <img src={image} alt="" />
        </div> <br />
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Salary: {salary}</p>
        <p>Phone: {phone}</p>
        <p>Portfolio Website: {Portfolio}</p>
        <button onClick={() => props.handleAddToCart(props.designer)} class="button"> <FontAwesomeIcon icon={faShoppingCart} /> Hire Designer</button>
      </div>
    </div>
  );
};

export default Designer;