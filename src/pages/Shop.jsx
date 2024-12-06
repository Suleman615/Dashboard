import { useState } from 'react';
import { Topbar } from '../components/Topbar'
import { LayoutGrid, List } from 'lucide-react';
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';



const Shop = () => {
    const [layout, setLayout] = useState('grid')
    
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
                    <GridCard />
                    <GridCard />
                    <GridCard />
                    <GridCard />
                    <GridCard />
                    <GridCard />
                    <GridCard />

                    

                </div>

                // list layout 
                :  <div className='flex flex-col gap-4 m-10  justify-start items-start'>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>




            </div>
            }
            
           </div>

        </div>)
}

export default Shop