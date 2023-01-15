import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import Script from "next/script";
import Head from "next/head";
import CartContext from "../context/CartContext";
import { useSelector } from "react-redux";

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  const [cart, setCart] = useState([]);
  const { selectedProducts } = useContext(ProductsContext);
  console.log(path);
  const [phrase, setPhrase] = useState([]);
  const [cartQuant, setCartQuant] = useState(0);

  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      // OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' };
      // OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
      // OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKUpdaterWorker.js'
      OneSignal.init({
        appId: "1dc2c7d5-bf47-4500-8bfe-d5eed854a86e",
      });
    });
  }, []);

  // Consuming the data from the store
  const getCart = useSelector((state) => {
    return state.cartReducer.cart;
  });

  useEffect(() => {
    setCart(getCart);
    setCartQuant(getCart.length);
  }, [getCart]);

  return (
    <>
      <header className="sticky  bg-neutral-400  p-1 w-full text-black rounded-xl mt-1">
        <title>BuyBuy</title>
        <meta name="description" content="BuyBuy" />
        <link rel="icon" href="/icon.ico" />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className=" flex space-x-12">
          <h3 className="text-2xl bg-white items-center">
            <b>BuyBuy</b>
          </h3>
          <Link
            href={"/"}
            className={
              (path === "/" ? "text-gray-400 " : "") +
              "flex justify-center items-center"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Home</span>
          </Link>

          {/* <Link href={'/Products'} className={(path === '/Products'?'text-gray-400 ':'')+'flex right-0 '}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>

            <span>Products</span>
            </Link> */}

          <Link
            href={"/charity"}
            className={
              (path === "/charity" ? "text-gray-400 " : "") +
              "flex justify-center items-center right-0"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>Our Charities</span>
          </Link>

          <Link
            href={"/checkout"}
            className={
              (path === "/checkout" ? "text-gray-400 " : "") +
              "flex justify-center items-center "
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span class="relative inline-flex">
              Cart
              {/* Items quantity display */}
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -right-5 dark:border-gray-900">
                {cartQuant}
              </div>
            </span>
          </Link>
          {path === "/" ? (
            <div className="w-full flex justify-end items-center">
              <button
                className={`addbutton btn waves-effect waves-light flex right-0`}
              >
                Add to home screen
                <i className="material-icons right">file_download</i>
              </button>
            </div>
          ) : (
            <div></div>
          )}

          <Script>
            {`
            let deferredPrompt;
            const addBtn = document.querySelector(".addbutton");
            console.log(addBtn);
            addBtn.style.display = "none";
            
            window.addEventListener("beforeinstallprompt", (e) => {
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                deferredPrompt = e;
                // Update UI to notify the user they can add to home screen
                addBtn.style.display = "block";
                listenToUserAction();
            });
            
            // listen to install button clic
            function listenToUserAction() {
                addBtn.addEventListener("click", presentAddToHome);
            }
            
            // addBtn.addEventListener("click", (e) => {
            
            function presentAddToHome() {
                // hide our user interface that shows our A2HS button
                addBtn.style.display = "none";
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === "accepted") {
                        console.log("User accepted the A2HS prompt");
                    } else {
                        console.log("User dismissed the A2HS prompt");
                    }
                    deferredPrompt = null;
                });
            };
        `}
          </Script>
        </div>
      </header>
    </>
  );
}
