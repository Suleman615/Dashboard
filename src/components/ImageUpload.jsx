import { useState, useEffect } from "react";
import { X } from 'lucide-react'


function ImageUpload({ product, updateProduct }) {


    const [images, setImages] = useState([]);
    const [color, setColor] = useState("")


    function handleImageChange(e) {

        // Get selected files from the input
        const selectedImages = Array.from(e.target.files);

        // Update the state with the new images
        setImages([...images, ...selectedImages]);



        let productImages = { ...product }
        productImages.allImages = [...selectedImages]
        updateProduct(productImages)
    };

    const removeImage = (nmbr) => {

        let tempImages = [...images]

        tempImages.splice(nmbr, 1)
        setImages(tempImages)


        let productImages = { ...product }
        productImages.allImages = [...tempImages]
        updateProduct(productImages)

    }



    const handlePreview = (event) => {
        const file = event.target.files[0];
        if (file) {
            const blob = new Blob([file], { type: file.type });
            const productUpdate = { ...product }
            productUpdate.previewImage = blob
            updateProduct(productUpdate);
        }

    };

    const ProductColor = (v) => {
        setColor(v)

        let productImages = { ...product }
        productImages.color = ""
        productImages.colorType = v
        updateProduct(productImages)

    }

    const handleColor = (e) => {
        let productImages = { ...product }
        productImages.color = e.target.value
        updateProduct(productImages)
    }



    return (
        <div className='border rounded-md my-3 p-2 w-full'>


            <p className='mx-6'>Add a single image for preview of your product <br /><label className='cursor-pointer underline text-blue-700 hover:text-brown' htmlFor="previewImage">Click Here</label> to upload Preview image:</p>
            <input onChange={(e) => handlePreview(e)} id="previewImage" className='border  border-green-600 w-fit hidden' type="file" />


            {product.previewImage ?
                <img
                    className='rounded-md my-4 mx-6'
                    src={product.previewImage ? URL.createObjectURL(product.previewImage) : ''}
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

            <span className="flex flex-col overflow-hidden w-full">
                <p className="my-2">Select Product Color</p>
                <span>
                    <input
                        className="accent-brown"
                        type="radio"
                        name="product_color"
                        id="singleColor"
                        value="single"
                        onChange={() => ProductColor("single")}
                    />
                    <label className="mx-2" htmlFor="singleColor">Single Color</label>
                </span>
                <span>
                    <input
                        className="accent-brown"
                        type="radio"
                        name="product_color"
                        id="multiColor"
                        value="multi"
                        onChange={() => ProductColor("multi")}
                    />
                    <label className="mx-2" htmlFor="multiColor">Multi Color</label>
                </span>
            </span>

            {
                color === "single" && <span className='flex flex-col overflow-hidden  gap-2 w-full'>
                    <label htmlFor="colors">Select Colors</label>
                    <input value="#000000" onChange={(e) => handleColor(e)} className=' border-0  outline-none w-40 h-10 shrink-0 bg-amber-400 text-green-800  p-1 rounded-md ' type="color" name="color" id="color" />

                </span>
            }





        </div>


    )
}


export default ImageUpload;