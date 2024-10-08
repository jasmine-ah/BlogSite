import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const Navigate = useNavigate();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blogpost');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    if (!name) {
        alert('No author name found. Please login.');
        return;
    }

    axios.post('http://localhost:3001/blogpost', { 
        title, 
        content,
        author: name},
        {
            headers: { 
                'Authorization': `Bearer ${token}` 
            }
})
    .then(result => {
        console.log(result);
        alert("Blog post submitted successfully!");
        Navigate('/displaypost');
    })
    .catch(err => {
        console.error('Error submitting blog post:', err);
        alert('Failed to submit blog post. Please try again.');
    });
};

    return (
    <div>
    <section className="min-h-screen flex items-center justify-center bg-[#f1f1f1] px-4">
    <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-[#3a5b64] mb-6 text-center'>Create New Blog Post</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
            <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Title</label>
            <input id='title' name='title' type='text' required onChange={(e) => setTitle(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
        </div>
        <div>
            <label htmlFor='content' className='block text-sm font-medium text-gray-700'>Content</label>
            <textarea id='content' name='content' rows="4" required onChange={(e) => setContent(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#04cbae] focus:border-[#04cbae]'/>
        </div>
        <button type='submit' className='w-full bg-[#04cbae] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#039f8e] transition duration-300'>Publish Blog Post</button>
        </form>
    </div>
    </section>

    <section>
    <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <div key={post._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
                            <p className="text-gray-500 text-sm">
                                Written by <span className="font-semibold">{post.author}</span> on {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4">
                            <a href={`/post/${post._id}`} className="text-teal-500 hover:text-teal-600 font-semibold">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </div>
  );
}

export default BlogPost;
