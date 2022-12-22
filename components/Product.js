import { set } from 'mongoose'
import Image from 'next/image'
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'
export default function Product({_id,name, price,description,picture}){
    const {setSelectedProducts} =useContext(ProductsContext)
    function addProduct(){
        setSelectedProducts(prev => [...prev,_id])
    }
    return (
        <div className='w-64'>
              <div className='bg-blue-100 p-5 rounded-xl'>
                <Image src={picture} alt='' width='240' height='240'/>
              </div>
              <div className='mt-2'>
                <h3 className='font-bold text-lg'>{name}</h3>
              </div>
              <p className='text-sm mt-1 leading-5'>{description}</p>
              <div className='flex mt-1'>
                <div className='flex-grow text-2xl font-bold'>${price}</div>
                <button onClick={addProduct} className='bg-black text-white py-1 px-3 rounded-xl'>Add To Cart</button>
              </div>
            </div>
    )
}