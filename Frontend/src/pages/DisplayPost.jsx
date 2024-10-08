import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'; // Import icon for delete

function DisplayPost() {
const [posts, setPosts] = useState([]);
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
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

    axios.post('http://localhost:3001/blogpost', { title, content, author: name },
    { headers: { 'Authorization': `Bearer ${token}` } })
    .then(result => {
        alert("Blog post submitted successfully!");
        Navigate('/displaypost');
    })
    .catch(err => {
        alert('Failed to submit blog post. Please try again.');
    });
};

const handleDelete = async (postTitle) => {
    try {
    await axios.delete(`http://localhost:3001/blogpost/${postTitle}`);
    setPosts(posts.filter(post => post._Title !== postTitle));
    } catch (error) {
    console.error("Error deleting post:", error);
    }
};

return (
    <>

    <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
            <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#3a5b64] mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content.substring(0, 150)}...</p>
                <div className="text-gray-500 text-sm flex justify-between items-center">
                    <p>Written by <span className="font-bold">{post.author}</span></p>
                    <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                </div>
                <div className="bg-gray-50 p-4 flex justify-between items-center">
                <a href={`/post/${post._id}`} className="text-[#04cbae] font-semibold hover:underline">Read More</a>
                <button onClick={() => handleDelete(post._Title)} className="text-red-500 hover:text-red-600">
                    <FaTrashAlt />
            </button>
                </div>
        </div>
            ))}
        </div>
        </div>
    </section>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-skyblue-200 to-lightblue-100 px-4">
  <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-8 text-primary-color">New Blog </h2>
    
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-800">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter your blog post title"
        />
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-800">Content</label>
        <textarea
          id="content"
          name="content"
          rows="6"
          required
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Blog content goes here..."
        />
      </div>
      
      <button type="submit" className="btn btn-primary w-[40%] align-center justify-center bg-[#00c7ab]">
        Publish Blog Post
      </button>
    </form>
  </div>
</section>
    </>
  );
}

export default DisplayPost;
