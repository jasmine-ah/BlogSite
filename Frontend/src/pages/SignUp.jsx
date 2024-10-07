import React,{useState} from "react";
import {Link} from 'react-router-dom';
function SignUp(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
const handleSubmit=(e)=>{
    e.preventDefault
}
return(
<section className='min-h-screen flex items-center justify-center bg-[#f1f1f1] px-4'>
    <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
    <h2 className='text-3xl font-bold text-[#3a5b64] mb-6 text-center'>Create an Account</h2>
    <form onSubmit={handleSubmit} className='space-y-6'>
    <div>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Full Name</label>
        <input id='name' name='name' type='text' required onChange={(e)=> setName(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
    </div>
    <div>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
        <input id='email' name='email' type='email' required onChange={(e)=> setEmail(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
    </div>
    <div>
        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
        <input id='password' name='password' type='password' required onChange={(e)=> setPassword(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
    </div>

    <div>
        <label htmlFor='confirm-password' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
        <input id='confirm-password' name='confirm-password' type='password' required className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#549289]'/>
    </div>
    <button type='submit' className='w-full bg-[#04cbae] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#039f8e] transition duration-300'>Sign Up</button>
    <p className='text-sm text-center text-gray-600 mt-4'>
        Already have an account?{' '}
        <Link to='/login' className='text-[#04cbae] hover:text-[#039f8e] transition duration-300'>Log In</Link>
    </p>
    </form>
    </div>
</section>

)
}
export default SignUp;