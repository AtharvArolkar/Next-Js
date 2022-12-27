import { ProductsContextProvider } from '../components/ProductsContext'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  
  // useEffect(() => {
  //   window.OneSignal = window.OneSignal || [];
  //   OneSignal.push(function () {
  //     OneSignal.init({
  //       appId: "1dc2c7d5-bf47-4500-8bfe-d5eed854a86e",
  //     });
  //   });
  // }, [sub])

  return (
<Component {...pageProps} />
  )
}
