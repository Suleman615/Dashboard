import myimage from '../assets/profile.jpeg'
import { Trash2, Pencil } from 'lucide-react';




const GridCard = () => {

    let product = {
        image: myimage,
        name: "product Name",
        price: 5656,
        discount: 67
    }


    return (
        <div className='p-2 bg-light rounded-lg  '>
            <img src={product.image} alt=""  className='rounded-lg' />
            <h3 className='mt-4'>{product.name}</h3>
            <section className='flex justify-between items-center'>
                <p> <b>$</b>{product.price}</p>
                <p>{product.discount} %<b>OFF</b></p>
            </section>
            <section className='flex item items-center justify-between gap-4 my-2 '>
            <Trash2 className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
            <Pencil className='cursor-pointer hover:bg-brown rounded-md p-2' size={40}/>
            </section>
        </div>
    )
}

export default GridCard;