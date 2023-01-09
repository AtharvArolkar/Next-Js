import { ProductsContextProvider } from "../components/ProductsContext";
import "../styles/globals.css";
import CartState from "../context/CartState";

export default function App({ Component, pageProps }) {
  return (
    <CartState>
      <Component {...pageProps} />
    </CartState>
  );
}
