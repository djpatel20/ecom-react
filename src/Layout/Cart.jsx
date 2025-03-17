import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Store.css";
import { deleteCart } from "../Redux/Slice";


const Cart = () => {
  const cartProduct = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const removeCart = (cartId) =>{
    dispatch(deleteCart(cartId))
  }


  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartProduct.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartProduct.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-price">${item.price}</p>
              </div>
              <button className="remove-btn" onClick={()=>removeCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

