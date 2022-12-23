import { set } from 'mongoose'
import Image from 'next/image'
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'
export default function ProductAPI(props){
    const {setSelectedProducts} =useContext(ProductsContext)
    // console.log(picture[0])
    // const pic=picture.split(",")
    function addProduct(){
        setSelectedProducts(prev => [...prev,_id])
    }
    // console.log({props})
    const myLoader=({src})=>{
      return props.product.images[0];
    }
    return (
        <div className='w-64'>
              <div className='bg-blue-100 p-5 rounded-xl h-70 w-70' >
                {console.log(props.product.images[0])}
                <Image loader={myLoader} src={props.product.images[0]} alt='' width='240' height='240'/>
              </div>
              <div className='mt-2'>
                <h3 className='font-bold text-lg'>{props.product.title}</h3>
              </div>
              <p className='text-sm mt-1 leading-5'>{props.product.description}</p>
              <div className='flex mt-1'>
                <div className='flex-grow text-2xl font-bold'>${props.product.price}</div>
                <button onClick={addProduct} className='bg-black text-white py-1 px-3 rounded-xl'>Add To Cart</button>
              </div>
            </div>
    )
}

