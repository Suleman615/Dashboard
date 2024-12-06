import ProductDetails from '../components/ProductDetails'
import { Topbar } from '../components/Topbar'





function AddProduct({}) {


    return (
        <div className='bg-light py-2 '>
            <Topbar target={'Product Details'} />
           <ProductDetails/>
        </div>)
}

export default AddProduct