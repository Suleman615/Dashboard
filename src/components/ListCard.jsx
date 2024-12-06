import { Trash2, Pencil } from 'lucide-react';
import { useContext } from 'react';
import ProductContext from '../utils/ProductContext';
import { Link, useNavigate } from 'react-router-dom';




const ListCard = ({ singleProduct }) => {

    const { product, updateProductDetails, resetProductDetails } = useContext(ProductContext);
    const navigate = useNavigate();


    const handleEdit = (e) => {
        e.preventDefault(); // Prevent immediate navigation
        updateProductDetails(singleProduct); 
        navigate('/updateProduct'); // Navigate programmatically
    }


    return (
        <>
            <div className='bg-light h-20 rounded-lg w-full flex justify-between items-center px-2' >
                <div className='flex gap-4 items-center'>
                    <img className='h-16 rounded-lg' src={singleProduct.previewImage} alt="" />
                    <h3 className='font-semibold text-lg '>{singleProduct.name}</h3>
                </div>
                <p><b>$</b>{singleProduct.price}</p>
                <p><i> {singleProduct.discount}%<b >OFF</b></i></p>
                <section className='flex gap-3 items-center'>
                    <Trash2 className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
                  <Pencil onClick={(e) => handleEdit(e)} className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
                </section>
            </div>
        </>
    )
}

export default ListCard;