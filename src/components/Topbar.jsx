import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.jpeg'



export const Topbar = ({ target }) => {
    return (
        <div className="h-16 flex bg-medium    justify-between items-center px-4 ">
            <h1 className='font-bold text-lg font-serif'>{target}</h1>
            <span className='flex gap-4 items-center' > <Bell className='cursor-pointer hover:text-brown' />
                <Link to='/' ><img className='h-10 w-10 rounded-full' src={profile} alt="" /></Link></span>
        </div>
    )
}
