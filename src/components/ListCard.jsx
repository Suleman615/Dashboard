import myimage from '../assets/profile.jpeg'
import { Trash2, Pencil } from 'lucide-react';




const ListCard = () => {

    let product = {
        image: myimage,
        name: "Product Name",
        price: 5656,
        discount: 67
    }

    return (
        <>
            <div className='bg-light h-20 rounded-lg w-full flex justify-between items-center px-2' >
                <div className='flex gap-4 items-center'>
                <img className='h-16 rounded-lg' src={product.image} alt="" srcset="" />
                <h3 className='font-semibold text-lg '>{product.name}</h3>
                </div>
                <p><b>$</b>{product.price}</p>
                <p><i> {product.discount}%<b >OFF</b></i></p>
                <section className='flex gap-3 items-center'>
                <Trash2 className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
            <Pencil className='cursor-pointer hover:bg-brown rounded-md p-2' size={40}/>
                </section>
            </div>
        </>
    )
}

export default ListCard;