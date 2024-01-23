import { useState } from 'react';
import { Topbar } from '../components/Topbar'
import { DollarSign, Tag, X } from 'lucide-react'

function AddProduct() {



    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        // Get selected files from the input
        const selectedImages = Array.from(e.target.files);


        // Update the state with the new images
        setImages([...images, ...selectedImages]);
    };

    const removeImage = (nmbr) => {

        console.log("number is")
        let tempImages = [...images]

        tempImages.splice(nmbr, 1)
        setImages(tempImages)
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
                                <input className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="productName" />
                            </span>

                            <span className='flex flex-col  gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="subText">Sub Text</label>
                                <input className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="subText" />
                            </span>

                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="category">Category</label>
                                <select className=' border focus:outline-brown w-[80vw] md:w-auto text-md p-1 pe-2 rounded-md' type="text" name="" id="category" >
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                    <option value="orange">Orange</option>
                                    <option value="other">Other</option>
                                </select>
                            </span>


                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="otherCategory">Category</label>
                                <input className=' border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="otherCategory" />
                            </span>

                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="price">Price</label>
                                <span className='flex  bg-light  rounded-md items-center border' >
                                    <DollarSign size={24} className='inline flex-shrink-0 text-grey mx-2 ' />
                                    <input className='w-[90%] border-s focus:outline-brown text-md p-1  rounded-e-md' type="text" name="" id="price" />
                                </span>
                            </span>

                            <span className='flex flex-col gap-1 max-w-[80vw] md:w-2/5'>
                                <label htmlFor="discount">Discount</label>
                                <span className='flex bg-light  rounded-md items-center border' >
                                    <Tag size={24} className='inline flex-shrink-0 text-grey mx-2 ' />
                                    <input className='w-[90%] border-s focus:outline-brown text-md p-1  rounded-e-md' type="text" name="" id="discount" />
                                </span>
                            </span>


                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="metaTitle">Meta Title</label>
                                <input className='w- border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="metaTitle" />
                            </span>
                            <span className='flex flex-col gap-1 w-[80vw] md:w-2/5'>
                                <label htmlFor="metaKeyword">Meta Keyword</label>
                                <input className='w- border focus:outline-brown text-md p-1 rounded-md' type="text" name="" id="metaKeyword" />
                            </span>
                        </div>


                        <span className='flex flex-col gap-2 w-full'>
                            <label htmlFor="description">Product Description</label>
                            <textarea className='w- border focus:outline-brown text-md p-1 rounded-md' name="" id="description" rows="3"></textarea>
                        </span>


                        {/* **************** Image Upload And View ******************* */}
                        <span className='flex flex-col gap-2 my-4 border rounded-md p-2  '>
                            <p>You can upload Multiple pictures of your Product from different angles for Customers <label className='cursor-pointer underline text-blue-700 hover:text-brown' htmlFor="image">Click Here</label> to upload image:</p>
                            <input onChange={(e) => handleImageChange(e)} id="image" multiple className='border  border-green-600 w-fit hidden' type="file" />
                            <div>
                                <hr className='my-2' />
                                {images.length === 0 ? (
                                    <p>No images selected.</p>
                                ) : (
                                    <div className='flex gap-3 flex-wrap' >
                                        {images.map((image, index) => (
                                            <span className='relative' key={index}>
                                                <button type='button' onClick={() => removeImage(index)} className='absolute -right-1 cursor-pointer -top-1 bg-white rounded-full' >
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

                        {/* ******************** */}


                    </form>


                </div>

            </div>
        </div>)
}

export default AddProduct