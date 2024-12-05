import React,{useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate}from 'react-router-dom';
import API_URL from "../apiConfig";
function Login(){
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const Navigate=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${API_URL}/login`,{email,password})
    .then(result=>{console.log(result)
        if(result.status===200){
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('name', result.data.name);
            localStorage.setItem('email', result.data.email);
            Navigate('/myblog')
        }
        else {
            alert('Incorrect credentials!!!Please insert again');
        }
    
    })
    .catch(err=>{
        //console.error('Error:', err.response?.data || err.message);
        alert('Incorrect credentials!!!Please insert again');

    });
        //console.log(err))
}

    return(
        <section className="min-h-screen flex items-center justify-center bg-[#f1f1f1] px-4">
<div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
    <h2 className='text-3xl font-bold text-[#3a5b64] mb-6 text-center'>Login</h2>
    <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
        {/* <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label> */}
        <input id='email' name='email' type='text' placeholder="Email" required onChange={(e)=> setEmail(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
        </div>
        <div>
        {/* <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label> */}
        <input id='password' name='password' type='password' placeholder="Password" required onChange={(e)=> setPassword(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
    </div>
    <button type='submit' className='w-full bg-[#04cbae] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#039f8e] transition duration-300'>Login</button>
    <p className='text-sm text-center text-gray-600 mt-4'>
        Don't have an account?{' '}<Link to='/signup' className='text-[#04cbae] hover:text-[#039f8e] transition duration-300'>Sign up</Link>
    </p>
    </form>
</div>

        </section>
    )
}
export default Login;