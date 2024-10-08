import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function MainPage(){
return(
    <div className='text-[#00c7ab] bg-[#f1f1f1] font-light'>
{/************************************  hero section ********************************************/}
<section id="hero" className="flex flex-col md:flex-row h-auto md:h-[730px]">
  <div className="flex flex-col justify-center items-start py-10 md:py-20 px-6 md:px-20 md:w-1/2">
    <h1 className="text-5xl md:text-7xl font-bold text-left">
      Discover <span className="text-[#3a5b64]">Your</span> Voice
    </h1>
    <p className="text-lg md:text-2xl text-[#3a5b64] py-4">
      Empower Your Story Through Blogging
    </p>
    <button className="hidden sm:hidden md:flex px-6 py-3 my-4 text-lg md:text-xl font-semibold text-[#3a5b64] hover:text-white bg-gradient-to-br from-[#00c7ab] to-[#ede8f5] rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      Get Started
    </button>
  </div>
  <div className="flex justify-center items-center md:w-1/2">
    <img src="BlogPost.png" alt="Blog Post" className="h-auto max-w-full" />
  </div>
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

{/* **************************************  Services Section  ****************************************** */}
<section id="services" className="py-[150px] bg-white text-center">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#04cbae] mb-12">
            Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            
            <div className="service-card p-8 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
            <i className="fas fa-pen-nib text-6xl text-[#04cbae] mb-4"></i>
            <h3 className="text-2xl font-semibold text-[#3a5b64] mb-2">Creative Writing</h3>
            <p className="text-[#3a5b64]">
                Unleash your creativity with our intuitive writing tools and create stories that inspire and connect with others.
            </p>
            </div>

            <div className="service-card p-8 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
            <i className="fas fa-laptop-code text-6xl text-[#04cbae] mb-4"></i>
            <h3 className="text-2xl font-semibold text-[#3a5b64] mb-2">Tech & Development</h3>
            <p className="text-[#3a5b64]">
                Stay updated with the latest trends in technology and learn how to develop cutting-edge software solutions.
            </p>
            </div>

            <div className="service-card p-8 bg-[#f1f1f1] shadow-lg rounded-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
            <i className="fas fa-chart-line text-6xl text-[#04cbae] mb-4"></i>
            <h3 className="text-2xl font-semibold text-[#3a5b64] mb-2">Marketing & Growth</h3>
            <p className="text-[#3a5b64]">
                Learn the best marketing strategies to grow your personal brand or business with actionable insights and advice.
            </p>
            </div>
        </div>
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
<footer id="footer" className='bg-[#3a5b64] text-[#f1f1f1] py-8'>
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