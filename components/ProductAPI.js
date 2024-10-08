import { set } from "mongoose";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../redux/actions/action";

export default function ProductAPI(props) {
  // Consuming the data from the store
  const getCart = useSelector((state) => {
    return state.cartReducer.cart;
  });

  const [cart, setCart] = useState(getCart);

  useEffect(() => {
    setCart(getCart);
    if (navigator.onLine) {
      console.log("You currently online! -> Product List Page");
      localStorage.setItem("cart", JSON.stringify(getCart));
    } else {
      console.log("Your are Offline now! -> Product List Page");
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [getCart]);

  // Adding an item to the cart
  const dispatch = useDispatch();

  const myLoader = ({ src }) => {
    return props.product.images[0];
  };

  const addToCart = (product) => {
    // Adding the item to the redux store
    dispatch(ADD(product));
    setCart((prevCart) => {
      return [...prevCart, product];
    });

    alert(`${product.title} has been added to the cart!`);
  };

  return (
    <div className="w-64 p-1 border rounded-xl p-2">
      <div className="bg-white p-5 rounded-xl flex h-80 justify-center items-center">
        {/* {console.log(props.product.images[0])} */}
        <Image
          className="rounded-xl"
          loader={myLoader}
          src={props.product.images[0]}
          alt=""
          width="240"
          height="240"
        />
      </div>
      <div className="h-auto"></div>
      <div className=" h-40 relative">
        <div className="mt-2">
          <h3 className="font-bold text-lg">{props.product.title}</h3>
        </div>
        <p className="text-sm mt-1 leading-5">
          {props.product.description.slice(0, 100)}...
        </p>
        <div className="h-auto"></div>
        <div className="flex absolute pt-2 inset-x-0 bottom-0">
          <div className="flex-grow text-2xl font-bold">
            ${props.product.price}
          </div>
          <button
            onClick={() => {
              addToCart(props.product);
            }}
            className="bg-black text-white py-1 px-3 rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
