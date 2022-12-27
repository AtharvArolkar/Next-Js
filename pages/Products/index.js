// import { getServerSideProps } from "..";
import { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import ProductAPI from "../../components/ProductAPI";

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
    return(
        <Layout>
            <div>
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