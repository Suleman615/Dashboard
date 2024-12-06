import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Home, Store, ImagePlus, ArrowUpFromLine } from 'lucide-react';

import logo from '../assets/logo.png'
import profile from '../assets/profile.jpeg'


import React from 'react'

const Sidebar = () => {

    const [sidebar, setSidbar] = useState(true)
    const [currentPage, setCurrentPage] = useState('home')

    return (
        <div className={`hidden pb-10 bg  md:block max-h-[100vh]  sticky top-0    thin-scrollbar   overflow-y-scroll bg-medium  ${(sidebar) ? 'w-80' : 'w-20'}`}>

            {/* ************ Logo *********** */}
            <div className='my-2 p-3  flex justify-between items-center bg-light'>
                <img className={`h-10 ${(sidebar) ? 'visible' : 'hidden'}`} src={logo} alt="" />
                <div onClick={() => setSidbar(!sidebar)} className={`h-4 w-8 rounded-full mx-auto cursor-pointer flex ${(sidebar) ? 'justify-end bg-medium' : 'justify-start bg-white'} `}><div className='bg-brown h-4 w-4 rounded-full'></div></div>
            </div>
            <hr />

            {/* ********* Profile **********/}
            <div className='p-4 flex gap-4 items-center'>
                <Link onClick={() => setCurrentPage('')} to='/profile'><img className='h-10 w-10 rounded-full' src={profile} alt="" /></Link>
                <span className={`${(sidebar) ? 'visible' : 'hidden'}`}>
                    <h1 className='font-bold -mb-2'>User Name</h1>
                    <p className='m-0'>secondary info</p>
                </span>
            </div>

            {/* ******** Page Routes ***********/}
            <div className='px-4 flex flex-col gap-4'>
                <Link onClick={() => setCurrentPage('home')} to='/' className={`flex  gap-8 hover:text-brown ${(currentPage === 'home') ? 'text-brown' : 'text-black'}`}><Home /><p className={`font-semibold ${(sidebar) ? 'visible' : 'hidden'}`}>Home</p></Link>
                <Link onClick={() => setCurrentPage('shop')} to='/shop' className={`flex  gap-8 hover:text-brown ${(currentPage === 'shop') ? 'text-brown' : 'text-black'}`}><Store /><p className={`font-semibold ${(sidebar) ? 'visible' : 'hidden'}`}>My Shop</p></Link>
                <Link onClick={() => setCurrentPage('addProduct')} to='/addProduct' className={`flex  gap-8 hover:text-brown ${(currentPage === 'addProduct') ? 'text-brown' : 'text-black'}`}><ImagePlus /><p className={`font-semibold ${(sidebar) ? 'visible' : 'hidden'}`}>Add Product</p></Link>
                {/* <Link onClick={() => setCurrentPage('updateProduct')} to='/updateProduct' className={`flex  gap-8 hover:text-brown ${(currentPage === 'updateProduct') ? 'text-brown' : 'text-black'}`}><ArrowUpFromLine /><p className={`font-semibold ${(sidebar) ? 'visible' : 'hidden'}`}>Update Product</p></Link> */}


            </div>

        </div>)
}

export default Sidebar