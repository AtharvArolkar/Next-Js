// import { getServerSideProps } from "..";

import { useEffect, useState } from "react";

// import Header from "../../components/Header";

// import Layout from "../../components/Layout";

// import Product from "../../components/Product";

import Layout from "../components/Layout";

import Head from "next/head";

import Script from "next/script";

import ProductAPI from "../components/ProductAPI";

export default function Products({ products }) {
  const [phrase, setPhrase] = useState([]);

  // console.log(typeof(products))

  // products.map(p => p.description)

  useEffect(() => {
    // Storing the products into the IndexedDB

    const indexedDB =
      window.indexedDB ||
      window.mozIndexedBD ||
      window.webkitIndexedDB ||
      window.shimIndexedDB ||
      window.msIndexedDB;

    const request = indexedDB.open("olivelaDB", 1);

    accessIndexedDB(request, "products", products);
  }, []);

  // Writing into the IndexedDB

  const accessIndexedDB = (request, table, data) => {
    // Handling Error

    request.onerror = (evt) => {
      console.log("An error occurred with IndexedDB", evt);
    };

    // Runs whenever a new DB is created or when the existing db version is changed

    request.onupgradeneeded = () => {
      const db = request.result; // Reference to cars db

      const store = db.createObjectStore(table, { keyPath: "id" });

      store.createIndex("id", ["id"], { unique: false });
    };

    request.onsuccess = () => {
      const db = request.result;

      const transaction = db.transaction(table, "readwrite");

      const store = transaction.objectStore(table);

      // Adding data to the db

      //   console.log(data);

      data.map((product) => {
        store.put({
          id: product.id,

          title: product.title,

          description: product.description,
        });
      });
    };
  };

  const categoryNames = [...new Set(products.map((p) => p.category))];

  // const categoryNames = products.map(p => p.category)

  console.log(categoryNames);

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

  return (
    <Layout>
      {/* <Head>

         

          </Head> */}

      <div>
        {categoryNames.map((catName) => (
          <div key={catName}>
            {products.find((p) => p.category === catName) && (
              <div className="mb-20">
                <h2 className="text-2xl py-5 capitalize">
                  <b>{catName}</b>
                </h2>

                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products

                    .filter((p) => p.category === catName)

                    .map((product) => (
                      <div
                        key={product._id}
                        className="px-5 snap-start grid-cols-4"
                      >
                        {/* {console.log(product)}

                        {console.log("Hello"+product.title)} */}

                        <ProductAPI product={product} />

                        {/* <Product product/> */}

                        {/* <Product */}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const https = require("https");

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const response = await fetch("https://dummyjson.com/products", { agent });

  const data = await response.json();

  const data1 = [...data.products];

  return {
    props: {
      products: data1,
    },
  };
}
