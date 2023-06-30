import React from 'react';
import { addToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const ItemCard = ({item}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    const cartItem = {
      id: item["Variant SKU"],
      name: item["Title"],
      price: item["Variant Price"],
      quantity: 1,
    };
    console.log(cartItem);
    dispatch(addToCart(cartItem));
  };  
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-orange-100">
      <img alt={"something"} src={item["Image Src"] }></img>
      <h2 className="font-bold text-xl">{item["Title"]}</h2>
      <button className="p-2 m-2 bg-gray-500 text-white rounded-lg" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
    </div>
  )
}

export default ItemCard