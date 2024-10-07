import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
<header className='md:sticky top-0 z-40'>
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-8 text-[#00c7ab] bg-[#f1f1f1]'>
    <h1 className='w-full text-3xl font-bold text-[#00c7ab]'>BlogSite.</h1>
<ul className='sm:hidden md:flex'>
    <li className='p-4 hover:text-xl'><Link to="/">Home</Link></li>
    <li className='p-4 hover:text-xl'><Link to="/">Blog</Link></li>
    <li className='p-4 hover:text-xl'><Link to="/">About</Link></li>
    <li className='p-4 hover:text-xl'><Link to="/">Services</Link></li>
    <li className='p-4 hover:text-xl'><Link to="/">Contact</Link></li>
    <Link to="/signup" className='text-center pt-3 px-2 hover:bg-[#039f8e] bg-[#00c7ab] text-white rounded'>SignUp</Link>
    </ul>
    </div>
</header>


    )
}

export default NavBar;