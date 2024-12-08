import ProductDetails from '../components/ProductDetails'
import { Topbar } from '../components/Topbar'





function AddProduct() {
   // Initial product details
const initialProductState = {
    name: '',
    subtext: '',
    price: 0,
    category: '',
    otherCategory: '',
    discount: 0,
    metaTitle: '',
    metaKeywords: '',
    Decscription: '',
    previewImage: '',
    colorType: "",
    allImages: [],
    color: '#000000',
};




    return (
        <div className='bg-light py-2 '>
            <Topbar target={'New Product'} />
            <ProductDetails add={initialProductState}/>
        </div>)
}

export default AddProduct