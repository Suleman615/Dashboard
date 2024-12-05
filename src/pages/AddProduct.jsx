import { useState } from 'react';
import { Topbar } from '../components/Topbar'
import { DollarSign, Tag } from 'lucide-react'
import ImageUpload from '../components/ImageUpload';




function AddProduct() {
    const [productData, setProductData] = useState({
        name: '',
        subtext: '',
        price: 0,
        category: '',
        otherCategory:'',
        discount: 0,
        metaTitle: '',
        metaKeywords: '',
        Decscriprion: '',
        previewImage: '',
        colorType:"",
        allImages: [],
        color: '',
            
        
    })



    const handleProduct = () => {
        console.log(productData)
        
    }




    const addColor = () => {
        let allProducts = { ...productData }
        let tempImages = allProducts.Images
        let newColor = {
            color: '',
            previewImage: '',
            allImages: []
        }
        tempImages.push(newColor)
        allProducts.Images === tempImages
        setProductData(allProducts)
    }


    return (
        <div className='bg-light py-2 '>
            <Topbar target={'Product Details'} />
            <div className={`py-2 px-3 page-height overflow-y-scroll thin-scrollbar`}>
                <div className='bg-white px-6 rounded-md'>
                    <h1 className='border-b text-lg  text-grey py-3'>About Product</h1>
                    <form className='font-medium' action="" method="post">


                        {/* **************** About Product ************** */}
                        <div className='my-6  flex flex-col md:flex-row gap-x-10 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 gap-y-8 flex-wrap  '>
                            <span className='flex w-[80vw] md:w-2/5 flex-col gap-1'>
                                <label htmlFor="productName">Product Name</label>
                                <input onChange={(e) => { setProductData({ ...productData, name: e.target.value }) }} className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="productName" />
                            </span>

                            <span className='flex flex-col  gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="subText">Sub Text</label>
                                <input onChange={(e) => { setProductData({ ...productData, subtext: e.target.value }) }} className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="subText" />
                            </span>

                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="category">Category</label>
                                <select onChange={(e) => { setProductData({ ...productData, category: e.target.value }) }} className=' border focus:outline-brown w-[80vw] md:w-auto text-md p-1 pe-2 rounded-md' type="text" name="" id="category" >
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                    <option value="orange">Orange</option>
                                    <option value="other">Other</option>
                                </select>
                            </span>


                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="otherCategory">Category</label>
                                <input
                                    value={productData.category === 'other' ? productData.otherCategory || '' : productData.category}
                                    onChange={(e) => {
                                        const { value } = e.target;

                                        if (productData.category === 'other') {
                                            // Set the value for 'other' category, but store it separately in a new field (e.g., otherCategory)
                                            setProductData({ ...productData, otherCategory: value });
                                        } else {
                                            // If it's not 'other', update the category as normal
                                            setProductData({ ...productData, category: value });
                                        }
                                    }}
                                    placeholder={productData.category === 'other' ? 'Please Enter category' : productData.category || 'Enter category'}
                                    className='border focus:outline-brown text-md p-1 rounded-md'
                                    type="text"
                                    name="otherCategory"
                                    id="otherCategory"
                                />
                            </span>

                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="price">Price</label>
                                <span className='flex  bg-light  rounded-md items-center border' >
                                    <DollarSign size={24} className='inline flex-shrink-0 text-grey mx-2 ' />
                                    <input onChange={(e) => { setProductData({ ...productData, price: e.target.value }) }} className='w-[90%] border-s focus:outline-brown text-md p-1  rounded-e-md' type="text" name="" id="price" />
                                </span>
                            </span>

                            <span className='flex flex-col gap-1 max-w-[80vw] md:w-2/5'>
                                <label htmlFor="discount">Discount</label>
                                <span className='flex bg-light  rounded-md items-center border' >
                                    <Tag size={24} className='inline flex-shrink-0 text-grey mx-2 ' />
                                    <input onChange={(e) => { setProductData({ ...productData, discount: e.target.value }) }} className='w-[90%] border-s focus:outline-brown text-md p-1  rounded-e-md' type="text" name="" id="discount" />
                                </span>
                            </span>


                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="metaTitle">Meta Title</label>
                                <input onChange={(e) => { setProductData({ ...productData, metaTitle: e.target.value }) }} className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="metaTitle" />
                            </span>
                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="metaKeyword">Meta Keyword</label>
                                <input onChange={(e) => { setProductData({ ...productData, metaKeywords: e.target.value }) }} className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="metaKeyword" />
                            </span>
                        </div>


                        <span className='flex flex-col gap-2 w-full'>
                            <label htmlFor="description">Product Description</label>
                            <textarea onChange={(e) => { setProductData({ ...productData, Decscriprion: e.target.value }) }} className='w- border focus:outline-brown text-md p-1 rounded-md' name="" id="description" rows="3"></textarea>
                        </span>


                        {/* **************** Image Upload And View ******************* */}



                        <ImageUpload   product={productData} updateProduct={setProductData} />

                        {/* <ImageAndColors /> */}

                        {/* **************** Add another Color of the Same Product****************** */}





                        <button type='button' className='border-2 rounded-md px-6 py-2 my-6'>Cancel</button>

                        <button type='button' onClick={() => handleProduct()} className='border-2 rounded-md px-6 py-2 my-6 mx-4 bg-medium hover:border-brown hover:text-brown'>Save</button>
                    </form>


                </div>

            </div>
        </div>)
}

export default AddProduct