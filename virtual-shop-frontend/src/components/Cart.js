import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from '../utils/cartSlice';
import ItemCard from './ItemCard';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  const handleOnRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleOnEmpty = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <ul>
        {cartItems.map((item,index) => (
          <div>
            <li>
              <ItemCard key={index} item={item} />
            </li>
            <li>
              <button className="p-2 m-2 bg-red-600" onClick={() => {handleOnRemove()}}>
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
      <button className="p-2 m-2 bg-red-900" onClick={()=>{
        handleOnEmpty()
      }}>Clear Cart</button>
    </div>
  );
}

export default Cart