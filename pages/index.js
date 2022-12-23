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

// const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  // const [proInfo, setProInfo] = useState([]);
  const[phrase, setPhrase] =useState([]);
  // useEffect(()=>{
  //   fetch('api/products')
  //   .then(response => response.json())
  //   .then(json => setProInfo(json));
  // },[])
  // console.log(proInfo)
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "1dc2c7d5-bf47-4500-8bfe-d5eed854a86e",
      });
    });
  })

  const categoryNames = [... new Set(products.map(p => p.category))]
  console.log(categoryNames)
  // let productList;
  if(phrase){
    products=products.filter(p => p.name.toLowerCase().includes(phrase))
  }
  return (
    <Layout>
      <Header/>
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type='text' placeholder="Search for Products" className='bg-gray-100 w-full py-2 px-4 rounded-xl'/>
        <div>
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
        </div>
        
    </Layout>
  )
}

export async function getServerSideProps(){
  await initMangoose();
  const products= await findAllProducts()
  return {
    props:{
      products: JSON.parse(JSON.stringify( products)),
    }
  }
}
