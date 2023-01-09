import Image from "next/image";
import { useContext } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CartContext from "../context/CartContext";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Layout>
        <h1>The cart is currently Empty!</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      {cart?.map((product) => {
        return (
          <div className="w-64 p-1 border rounded-xl p-2">
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
                <button className="bg-black text-white py-1 px-3 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
