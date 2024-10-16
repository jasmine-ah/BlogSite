import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        // confirmpassword: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        // if (!formData.name || !/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(formData.name)) {
        //     errors.name = 'Invalid name';
        // }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (formData.password.length < 6) {
            errors.password = 'Password should be at least 6 characters long';
        }
        if (formData.confirmpassword !== formData.password) {
            errors.confirmpassword = 'Passwords do not match';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        axios.post('http://localhost:3001/signup', formData)
            .then(result => {
                console.log(result);
                Navigate('/login');
                alert('Successfully registered!');
            })
            .catch(err => {
                console.error(err);
                alert('Registration failed. Please try again.');
            });
    };

    return (
        <section className='min-h-screen flex items-center justify-center bg-[#f1f1f1] px-4'>
            <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
                <h2 className='text-3xl font-bold text-[#3a5b64] mb-6 text-center'>Create an Account</h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Full Name</label>
                        <input id='name' name='name' type='text' value={formData.name} required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`mt-1 block w-full px-4 py-2 border-b border-[#04cbae] rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae] ${errors.name ? 'border-red-500' : ''}`} />
                        {errors.name && <p className='text-sm text-red-600'>{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
                        <input id='email' name='email' type='email' value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`mt-1 block w-full px-4 py-2 border-b border-[#04cbae] rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae] ${errors.email ? 'border-red-500' : ''}`} />
                        {errors.email && <p className='text-sm text-red-600'>{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                        <input id='password' name='password' type='password' value={formData.password} required onChange={(e) => setFormData({ ...formData, password: e.target.value })} className={`mt-1 block w-full px-4 py-2 border-b border-[#04cbae] rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae] ${errors.password ? 'border-red-500' : ''}`} />
                        {errors.password && <p className='text-sm text-red-600'>{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor='confirmpassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                        <input id='confirmpassword' name='confirmpassword' type='password' value={formData.confirmpassword} required onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })} className={`mt-1 block w-full px-4 py-2 border-b border-[#04cbae] rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#549289] ${errors.confirmpassword ? 'border-red-500' : ''}`} />
                        {errors.confirmpassword && <p className='text-sm text-red-600'>{errors.confirmpassword}</p>}
                    </div>

                    <button type='submit' className='w-full bg-[#04cbae] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#039f8e] transition duration-300'>Sign Up</button>
                    <p className='text-sm text-center text-gray-600 mt-4'>
                        Already have an account?{' '}
                        <Link to='/login' className='text-[#04cbae] hover:text-[#039f8e] transition duration-300'>Log In</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
