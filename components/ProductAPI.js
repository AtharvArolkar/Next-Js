import { set } from 'mongoose'
import Image from 'next/image'
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'
export default function ProductAPI(props){
    // console.log(picture[0])
    // const pic=picture.split(",")
   
    // console.log({props})
    const myLoader=({src})=>{
      return props.product.images[0];
    }
    return (
        <div className='w-64 p-1 border rounded-xl p-2'>
              <div className='bg-white p-5 rounded-xl flex h-80 justify-center items-center'>
                {/* {console.log(props.product.images[0])} */}
                <Image className='rounded-xl' loader={myLoader} src={props.product.images[0]} alt='' width='240' height='240'/>
              </div>
              <div className='h-auto'></div>
              <div className=' h-40 relative'>
                <div className='mt-2'>
                  <h3 className='font-bold text-lg'>{props.product.title}</h3>
                </div>
                <p className='text-sm mt-1 leading-5'>{props.product.description.slice(0,100)}...</p>
                <div className='h-auto'></div>
                <div className='flex absolute pt-2 inset-x-0 bottom-0'>
                  <div className='flex-grow text-2xl font-bold'>${props.product.price}</div>
                  <button onClick="" className='bg-black text-white py-1 px-3 rounded-xl'>Add To Cart</button>
                </div>
              </div>
            </div>
    )
}

