import { useState } from 'react';
import { Topbar } from '../components/Topbar'
import { DollarSign, Tag, X } from 'lucide-react'




function AddProduct() {
    const [productData, setProductData] = useState({
        name: '',
        subtext: '',
        price: 0,
        category: '',
        discount: 0,
        metaTitle: '',
        metaKeywords: '',
        Decscriprion: '',
        Images: [{
            color: '',
            previewImage: '',
            allImages: []
        }],
    })



    const handleProduct = () => {
        console.log(productData)
        console.log('here')
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



    function ImageAndColors({ color, myIndex }) {


        const [images, setImages] = useState([]);


        const handleImageChange = (e) => {
            // Get selected files from the input
            console.log("here")
            const selectedImages = Array.from(e.target.files);
            // Update the state with the new images
            setImages([...images, ...selectedImages]);

            console.log(images + "images ")


            let productImages = { ...productData }


            color.allImages = [...images]
            productImages.Images[myIndex] = color
            setProductData(productImages)
        };

        const removeImage = (nmbr) => {

            let tempImages = [...images]

            tempImages.splice(nmbr, 1)
            setImages(tempImages)
        }



        const handlePreview = (event) => {
            const file = event.target.files[0];

            if (file) {
                const blob = new Blob([file], { type: file.type });
                color.previewImage = blob
                const productUpdate = { ...productData }
                productUpdate.Images[myIndex] = color
                console.log(myIndex + "index")
                console.log(color)
                setProductData(productUpdate);
            }

        };


        return (
            <div className='border rounded-md my-3 p-2 w-full'>
                <p className='mx-6'>Add a single image for preview of your product <br /><label className='cursor-pointer underline text-blue-700 hover:text-brown' htmlFor="previewImage">Click Here</label> to upload Preview image:</p>
                <input onChange={(e) => handlePreview(e)} id="previewImage" className='border  border-green-600 w-fit hidden' type="file" />

                {color.previewImage ?
                    <img
                        className='rounded-md my-4 mx-6'
                        src={productData.Images[myIndex].previewImage ? URL.createObjectURL(productData.Images[myIndex].previewImage) : ''}
                        alt={`Product`}
                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                    /> : <p className='mx-6'>No Image Selected</p>
                }



                <span className='flex flex-col gap-2 my-4 border rounded-md p-2  '>
                    <p>You can upload Multiple pictures of your Product from different angles for Customers. <br /><label className='cursor-pointer underline text-blue-700 hover:text-brown' htmlFor="image">Click Here</label> to upload image:</p>
                    <input onChange={(e) => handleImageChange(e)} id="image" multiple className='border  border-green-600 w-fit hidden' type="file" />
                    <div>
                        <hr className='my-2' />
                        {images.length === 0 ? (
                            <p>No images selected.</p>
                        ) : (
                            <div className='flex gap-3 md:gap-5 flex-wrap p-0 md:p-6 ' >
                                {images.map((image, index) => (
                                    <span className='relative ' key={index}>
                                        <button type='button' onClick={() => removeImage(index)} className='absolute -right-2 cursor-pointer -top-2 bg-white rounded-full' >
                                            <X />
                                        </button>
                                        <img
                                            className='rounded-md'
                                            src={URL.createObjectURL(image)}
                                            alt={`Product Image ${index + 1}`}
                                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                                        />
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </span>

                {/* ******** Color Selection************ */}

                <span className='flex flex-col overflow-hidden  gap-2 w-full'>
                    <label htmlFor="color">Product Color</label>
                    <input value="#000" onChange={() => { handleProduct }} className=' border-0  outline-none w-40 h-10 shrink-0 bg-amber-400 text-green-800  p-1 rounded-md ' type="color" name="color" id="color" />
                </span>

            </div>


        )
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
                                <input onChange={() => { handleProduct }} className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="otherCategory" />
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



                        {productData.Images.map((colors, index) => (<ImageAndColors key={index} color={colors} myIndex={index} />))}

                        {/* <ImageAndColors /> */}

                        {/* **************** Add another Color of the Same Product****************** */}

                        <button type='button' onClick={() => addColor()} className='mx-auto block border-2 px-3 py-2 rounded-md text-brown border-brown hover:bg-brown hover:text-white hover:border-light' >+ Add New Color</button>




                        <button type='button' className='border-2 rounded-md px-6 py-2 my-6'>Cancel</button>

                        <button type='button' onClick={() => handleProduct()} className='border-2 rounded-md px-6 py-2 my-6 mx-4 bg-medium hover:border-brown hover:text-brown'>Save</button>
                    </form>


                </div>

            </div>
        </div>)
}

export default AddProduct