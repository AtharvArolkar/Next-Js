// import { getServerSideProps } from "..";
import { useEffect, useState } from "react";
// import Header from "../../components/Header";
// import Layout from "../../components/Layout";
// import Product from "../../components/Product";
import ProductAPI from "../components/ProductAPI";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from 'next/script'

export default function Products({products}){
    const[phrase, setPhrase] =useState([]);
    // console.log(typeof(products))
    // products.map(p => p.description)
    
    const categoryNames = [... new Set(products.map(p => p.category))]
    // const categoryNames = products.map(p => p.category)
    console.log(categoryNames)
    // if(phrase){
    //     products=products.filter(p => p.name.toLowerCase().includes(phrase))
    // }
    // .
    // useEffect(() => {
      
    //   window.OneSignal = window.OneSignal || [];
    //   OneSignal.push(function () {
    //     // OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' };
    //     // OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
    //     // OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKUpdaterWorker.js'
    //     OneSignal.init({
    //       appId: "1dc2c7d5-bf47-4500-8bfe-d5eed854a86e",
    //     });
    //   });
    // }, [])
    return(
        <Layout>  
          {/* <Head>
          
          </Head> */}
          <div>
        <button className={`addbutton btn waves-effect waves-light`} >Add to home screen
            {/* <i className="material-icons right">send</i> */}
          </button>
          {categoryNames.map(catName => 
            <div key={catName}>
              {products.find(p => p.category === catName) && (
                <div className="mb-20">
                  <h2 className='text-2xl py-5 capitalize'><b>{catName}</b></h2>
                  <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
                    {products.filter(p => p.category === catName).map(product =>(
                      <div key={product._id} className='px-5 snap-start grid-cols-4'>
                        {/* {console.log(product)}
                        {console.log("Hello"+product.title)} */}
                        <ProductAPI product={product}/>
                        {/* <Product product/> */}
                        {/* <Product */}
                      </div>
             ))     }
             </div>
                </div>
              )}
             
            </div>
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
        </Layout>
    )
}

export async function getServerSideProps(){
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    })
    const response = await fetch('https://dummyjson.com/products',{agent})
    const data= await response.json()
    const data1=[...data.products]
    console.log(data1)
    return(
        {
            props:{
                products:data1,
            }
        }
    )
}
