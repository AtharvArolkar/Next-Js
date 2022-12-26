import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { initMangoose } from '../lib/mongoose';
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { findAllProducts } from './api/products';
import Products from './Products';

// const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  // const[phrase, setPhrase] =useState([]);
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "1dc2c7d5-bf47-4500-8bfe-d5eed854a86e",
      });
    });
  }, [])

  const categoryNames = [... new Set(products.map(p => p.category))]
  console.log(categoryNames)
  // let productList;
  // if(phrase){
  //   products=products.filter(p => p.name.toLowerCase().includes(phrase))
  // }
  return (
    <Layout>
      {/* <input value={phrase} onChange={e => setPhrase(e.target.value)} type='text' placeholder="Search for Products" className='bg-gray-100 w-full py-2 px-4 rounded-xl'/> */}
        {/* <div>
          {categoryNames.map(catName => 
            <div key={catName}>
              {products.find(p => p.category === catName) && (
                <div>
                  <h2 className='text-2xl py-5 capitalize'>{catName}</h2>
                  <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
                    {products.filter(p => p.category === catName).map(product =>(
                      <div key={product._id} className='px-5 snap-start'>
                        <Product {...product}/>
                      </div>
             ))     }
             </div>
                </div>
              )}
             
            </div>
          )}  
        </div> */}
        {/* <Products/> */}
        {/* <Head>
        <meta
          name="description"
          content="Integrating OneSignal with a Next.js app."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script> */}
        {/* <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script>
          window.OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
            OneSignal.init({
              appId: "1dc2c7d5-bf47-4500-8bfe-d5eed854a86e",
            })
          });
</script> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="/Push-Notification-OneSignal-main/public/js/index.js"></script>
      </Head> */}

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>

        </a>
      </footer> 
        
    </Layout>
  )
}

export async function getServerSideProps(){
  await initMangoose();
  const products= await findAllProducts()
  const p=JSON.parse(JSON.stringify( products))
  console.log(p)
  return {
    props:{
      products: p,
    }
  }
}
