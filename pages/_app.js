import "../styles/globals.css";

import CartState from "../context/CartState";

import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CartState>
        <Component {...pageProps} />
      </CartState>
    </Provider>
  );
}
