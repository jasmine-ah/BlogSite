import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function MainPage(){
return(
    <div className='text-[#00c7ab] bg-[#f1f1f1] font-light'>
{/************************************  hero section ********************************************/}
<section id="hero" className='h-[730px] flex justify-between'>
    <div className='py-[200px] px-[80px]'>
<h1 className='text-7xl font-bold text-left'>Discover <span className='text-[#3a5b64]'>Your</span> Voice </h1>
<p className='text-2xl text-[#3a5b64] py-4 px-4'>Empower Your Story Through Blogging</p>
<button className='px-6 py-3 mx-[90px] my-4 text-xl font-semibold text-[#3a5b64] hover:text-white bg-gradient-to-br from-[#00c7ab] to-[#ede8f5] rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1'>
    Get Started
</button>
</div>
<img src="BlogPost.png" alt="/" className='h-[730px] px-10'/>
</section>

{/***************************************  About section ********************************************/}
<section id='About' className='h-[600px] bg-gradient-to-br from-[#04cbae] via-[#3a5b64] to-[#f1f1f1] text-[#3a5b64] flex flex-col items-center justify-center px-8'>
    <div className='max-w-4xl text-center'>
    <h2 className='text-5xl font-bold mb-6 text-[#04cbae]'>About Us</h2>
    <p className='text-lg leading-relaxed text-[#e2e2e2]'>
    Welcome to our blog, a place where creativity meets purpose. We share insights, stories, and discoveries to inspire personal growth, curiosity, and innovation. 
    Our content ranges from the latest tech trends to lifestyle advice, all designed to make your journey more meaningful.
    </p>
    <p className='text-lg leading-relaxed mt-6 text-[#e2e2e2]'>
    With a focus on storytelling, we aim to foster connections and encourage thoughtful conversations. 
    Whether you're here to learn something new, find inspiration, or simply enjoy a well-crafted story, we're honored to be part of your experience.
    </p>
    <p className='text-lg leading-relaxed mt-6 text-[#e2e2e2]'>
    Join us as we explore new ideas, embrace change, and grow together. This is more than just a blog—it's a community.
    </p>
    </div>
</section>

{/***************************************  Contact section ********************************************/}
<section id='contact' className='h-[500px] bg-gradient-to-br from-[#f1f1f1] to-[#e2e2e2] flex flex-col items-center justify-center px-8'>
    <div className='max-w-3xl w-full text-center'>
    <h2 className='text-4xl font-bold mb-6 text-[#04cbae]'>Get in Touch</h2>
    <p className='text-lg text-[#3a5b64] mb-8'>
    We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
    </p>
    <form className='w-full flex flex-col gap-4'>
    <div className='flex flex-col sm:flex-row gap-4'>
        <input type='text' placeholder='Your Name' className='w-full px-4 py-2 text-[#3a5b64] border border-[#3a5b64] rounded-lg focus:outline-none focus:border-[#04cbae]' />
        <input type='email' placeholder='Your Email' className='w-full px-4 py-2 text-[#3a5b64] border border-[#3a5b64] rounded-lg focus:outline-none focus:border-[#04cbae]' />
    </div>
    <textarea placeholder='Your Message' rows='4' className='w-full px-4 py-2 text-[#3a5b64] border border-[#3a5b64] rounded-lg focus:outline-none focus:border-[#cbfcf5]'></textarea>
    <button type='submit' className='self-center px-6 py-2 bg-[#04cbae] text-white font-semibold rounded-lg hover:bg-[#039f8e] transition duration-300'>
        Send Message
    </button>
    </form>
    </div>
</section>

{/***************************************  Footer section ********************************************/}
<footer className='bg-[#3a5b64] text-[#f1f1f1] py-8'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center'>
    <div className='mb-6 md:mb-0 text-center md:text-left'>
    <h3 className='text-2xl font-bold text-[#04cbae]'>BlogSite</h3>
    <p className='mt-2 text-sm'>
        A creative platform where ideas, innovation, and exploration thrive. Join us on a journey of discovery and inspiration.
    </p>
    </div>
    <div className='flex space-x-8 text-sm'>
    <a href='#about' className='hover:text-[#04cbae] transition duration-300'>About</a>
    <a href='#services' className='hover:text-[#04cbae] transition duration-300'>Services</a>
    <a href='#contact' className='hover:text-[#04cbae] transition duration-300'>Contact</a>
    <a href='#blog' className='hover:text-[#04cbae] transition duration-300'>Blog</a>
    </div>
    <div className='flex space-x-6 mt-6 md:mt-0'>
    <a href='#' className='text-[#04cbae] hover:text-white transition duration-300'>
        <i className='fab fa-facebook-f'></i>
    </a>
    <a href='#' className='text-[#04cbae] hover:text-white transition duration-300'>
        <i className='fab fa-twitter'></i>
    </a>
    <a href='#' className='text-[#04cbae] hover:text-white transition duration-300'>
        <i className='fab fa-instagram'></i>
    </a>
    <a href='#' className='text-[#04cbae] hover:text-white transition duration-300'>
        <i className='fab fa-linkedin-in'></i>
    </a>
    </div>
    </div>
    <div className='mt-8 border-t border-[#f1f1f1] pt-4 text-center text-sm'>
    <p>2024 BlogSite. All rights reserved.</p>
    </div>
</footer>
    </div>
)

}
export default MainPage;