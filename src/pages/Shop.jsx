import { useState } from 'react';
import myimage from '../assets/profile.jpeg'
import { Topbar } from '../components/Topbar'
import { LayoutGrid, List } from 'lucide-react';
import GridCard  from '../components/GridCard';
import ListCard  from '../components/ListCard';



const Shop = () => {


    const [layout, setLayout] = useState('grid')
    
    const productTempelate = {
        name: 'Product Name',
        subtext: 'Subtext',
        price: 5634,
        category: 'Orange',
        otherCategory: '',
        discount: 0,
        metaTitle: '',
        metaKeywords: '',
        Decscription: 'This is default description',
        previewImage: myimage,
        colorType: "single",
        allImages: [],
        color: '#ec4d18',
      }

    return (
        <div className='overflow-hidden h-screen  '>
            <Topbar target={'My Shop'} />

            {/* layout options */}
            <div className='bg-light h-10 flex justify-end items-center   px-2'>
                <LayoutGrid onClick={() => setLayout('grid')} className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
                <hr className='rotate-90 border-black h-1  w-8' />
                <List onClick={() => setLayout('list')} className='cursor-pointer hover:bg-brown rounded-md p-2' size={40} />
            </div>


            {/* products */}
           <div className='  page-height overflow-y-scroll thin-scrollbar   '>
           {(layout === 'grid') ?
                // Grid layout 
                <div className='flex flex-wrap justify-center  gap-8 my-10 mx-5 items-center '>
                    <GridCard singleProduct={productTempelate} />
                    <GridCard singleProduct={productTempelate} />
                    <GridCard singleProduct={productTempelate} />
                    <GridCard singleProduct={productTempelate} />
                    <GridCard singleProduct={productTempelate} />
                    <GridCard singleProduct={productTempelate} />
                    <GridCard singleProduct={productTempelate} />

                    

                </div>

                // list layout 
                :  <div className='flex flex-col gap-4 m-10  justify-start items-start'>
                    
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>
                <ListCard singleProduct={productTempelate}/>




            </div>
            }
            
           </div>

        </div>)
}

export default Shop