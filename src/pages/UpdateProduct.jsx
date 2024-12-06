import React from 'react'
import { Topbar } from '../components/Topbar'
import ProductDetails from '../components/ProductDetails'

const UpdateProduct = () => {


    const productTempelate = {
        name: 'Product Name',
        subtext: 'Subtext',
        price: 5634,
        category: 'Orange',
        otherCategory: '',
        discount: 0,
        metaTitle: '',
        metaKeywords: '',
        Decscription: 'This is default description',
        previewImage: '',
        colorType: "single",
        allImages: [],
        color: '#ec4d18',


    }
  return (



    <div className='bg-light py-2 '>
        <Topbar target={'Update Product'} />
        <ProductDetails editData={productTempelate}/>
    </div>
  )
}

export default UpdateProduct