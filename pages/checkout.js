import Image from "next/image";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CartContext from "../context/CartContext";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  let amount = 0;

  if (cart.length === 0) {
    return (
      <Layout>
        <h1>The cart is currently Empty!</h1>
      </Layout>
    );
  }

  // Increment the quantity of the product in the cart
  const incrementQuant = (product) => {
    const newCart = cart.filter((item) => {
      return item.title !== product.title;
    });
    // Finding the base price
    const intialPrice = product.price / product.quantity;
    product.quantity += 1;
    // Calculating the new cost based on the quantity
    product.price += intialPrice;
    setCart([...newCart, product]);
  };

  // Decrement the quantity of the product in the cart
  const decrementQuant = (product) => {
    if (product.quantity === 0) {
      alert("Quantity cannot be negative!");
      return;
    }
    if (product.quantity === 1) {
      const newCart = cart.filter((item) => {
        return item.title !== product.title;
      });
      //   product.quantity -= 1;
      setCart(newCart);
      return;
    }
    const newCart = cart.filter((item) => {
      return item.title !== product.title;
    });
    // Finding the base price
    const intialPrice = product.price / product.quantity;
    product.quantity -= 1;
    // Calculating the new cost based on the quantity
    product.price -= intialPrice;
    setCart([...newCart, product]);
  };

  return (
    <Layout>
      {cart?.map((product) => {
        amount += product.price;
        return (
          <div
            className="w-64 p-1 border rounded-xl p-2 my-10"
            key={product.title}
          >
            {/* <div className="bg-white p-5 rounded-xl flex h-80 justify-center items-center">
              <Image
                className="rounded-xl"
                src={product.images[0]}
                alt=""
                width="240"
                height="240"
              />
            </div> */}
            <div className="h-auto"></div>
            <div className=" h-40 relative">
              <div className="mt-2">
                <h3 className="font-bold text-lg">{product.title}</h3>
              </div>
              <p className="text-sm mt-1 leading-5">
                {product.description.slice(0, 100)}...
              </p>
              <div className="h-auto"></div>
              <div className="flex absolute pt-2 inset-x-0 bottom-0">
                <div className="flex-grow text-2xl font-bold">
                  ${product.price}
                </div>
                <div className="flex mx-5">
                  <button
                    className="bg-black text-white py-1 px-3 rounded-xl"
                    onClick={() => {
                      decrementQuant(product);
                    }}
                  >
                    -
                  </button>
                  <p className="mx-5">{product?.quantity}</p>
                  <button
                    className="bg-black text-white py-1 px-3 rounded-xl"
                    onClick={() => {
                      incrementQuant(product);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button className="bg-black text-white py-1 px-3 rounded-xl">
              Buy Now
            </button>
          </div>
        );
      })}
      <div className="flex justify-center flex-col">
        <h3>Your total amount is: ${amount}</h3>
        <button className="bg-black text-white py-5 px-25 rounded-xl">
          Checkout
        </button>
      </div>
    </Layout>
  );
}
