import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar(){
const [nav, setNav] = useState(false);
const location = useLocation();

const handleNav = () => {
setNav(!nav);
};

    return(
<header className='md:sticky top-0 z-40'>
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-8 text-[#00c7ab] bg-[rgb(241,241,241)]'>
    <h1 className='w-full text-3xl font-bold text-[#00c7ab]'>BlogSite.</h1>
<ul className='hidden sm:hidden md:flex'>
    <li className='p-4 hover:text-xl'><Link to="/">Home</Link></li>
    <li className='p-4 hover:text-xl'><Link to="/">Blog</Link></li>
    <li className='p-4 hover:text-xl'><a href="#About">About</a></li>
    <li className='p-4 hover:text-xl'><a href="#services">Services</a></li>
    <li className='p-4 hover:text-xl'><a href="#footer">Contact</a></li>
    <Link to="/signup" className='text-center pt-3 px-2 hover:bg-[#039f8e] bg-[#00c7ab] text-white rounded'>SignUp</Link>
    </ul>
    </div>

    <div onClick={handleNav} className=' fixed right-10 top-10 block sm:block md:hidden text-[#348278]'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[80%] sm:flex md:hidden h-full border-r border-r-[#f1f1f1] text-[#00c7ab] bg-[#f1f1f1] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl m-6 font-semibold text-[#00c7ab]'>BlogSite.</h1>
        <ul className='uppercase'>
        <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><Link to="/" onClick={handleNav}>Home</Link></li>
        <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><Link to="/" onClick={handleNav}>Blog</Link></li>
        <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><a href="#About" onClick={handleNav}>About</a></li>
        <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><a href="#services" onClick={handleNav}>Services</a></li>
        <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><a href="#footer" onClick={handleNav}>Contact</a></li>
        <li className='p-4 border-b border-[#00c7ab] hover:text-white hover:bg-[#00c7ab]'><Link to="/signup" onClick={handleNav}>Signup</Link></li>
        </ul>
    </div>
</header>)
}

export default NavBar;