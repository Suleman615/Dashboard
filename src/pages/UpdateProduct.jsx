import React, { useContext, useState } from 'react'
import { Topbar } from '../components/Topbar'
import ProductDetails from '../components/ProductDetails'
import ProductContext from '../utils/ProductContext';


const UpdateProduct = () => {


  const { product, updateProductDetails, resetProductDetails } = useContext(ProductContext);


  return (



    <div className='bg-light py-2 '>
      <Topbar target={'Update Product'} />
      <ProductDetails editData={product} />
    </div>
  )
}

export default UpdateProduct