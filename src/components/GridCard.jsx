import { Trash2, Pencil } from 'lucide-react';
import { useContext } from 'react';
import ProductContext from '../utils/ProductContext';
import { Link, useNavigate } from 'react-router-dom';




const GridCard = ({ singleProduct }) => {

    const { product, updateProductDetails, resetProductDetails } = useContext(ProductContext);
    const navigate = useNavigate();


    const handleEdit = (e) => {
        e.preventDefault(); // Prevent immediate navigation
        updateProductDetails(singleProduct); 
        navigate('/updateProduct'); // Navigate programmatically
    }




    return (
        <div className='p-2 bg-light rounded-lg  '>
            <img src={singleProduct.previewImage} alt="" className='rounded-lg' />
            <h3 className='mt-4'>{singleProduct.name}</h3>
            <section className='flex justify-between items-center'>
                <p> <b>$</b>{singleProduct.price}</p>
                <p>{singleProduct.discount} %<b>OFF</b></p>
            </section>
            <section className='flex item items-center justify-between gap-4 my-2 '>
                <Trash2 className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
               <Pencil onClick={(e) => handleEdit(e)} className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
            </section>
        </div>
    )
}

export default GridCard;