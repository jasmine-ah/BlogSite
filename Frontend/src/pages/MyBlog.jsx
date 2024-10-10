import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight, FaPlus, FaTrashAlt } from 'react-icons/fa';

function MyBlog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const name = localStorage.getItem('name');

    useEffect(() => {
        console.log("Attempting to fetch posts");
        if (name) {
            fetchPosts();
        } else {
            setError("No user logged in.");
            setLoading(false);
        }
    }, [name]);

    const fetchPosts = async () => {
        try {
            console.log("Fetching posts for author:", name);
            const response = await axios.get(`http://localhost:3001/blogpost/${name}`);
            console.log("Response received:", response.data);
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching my posts:", error);
            setError("Failed to fetch your blog posts. Please check your internet connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate("/login");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`http://localhost:3001/blogpost/${postId}`);
            setPosts(prevPosts => prevPosts.filter(post => post._id.toString() !== postId));
            alert("Post deleted successfully");
        } catch (error) {
            console.error("Error deleting post:", error.response?.data || error.message);
            alert("Failed to delete post. Please try again.");
        }
    };

    return (
        <>
            <section className="py-12 bg-gradient-to-b from-skyblue-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 w-full">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">My Blog Posts</h1>
                        <div className="flex space-x-4">
                            <Link to='/blogpost'>
                                <button className='flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition duration-300'>
                                    <FaPlus className="mr-2" /> Add New Blog
                                </button>
                            </Link>
                            <Link to="/displaypost">
                                <button className='flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition duration-300'>
                                    <FaLongArrowAltRight className="mr-2" /> All Posts
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map(post => (
                            <div key={post._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                                    <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
                                    <div className="text-gray-500 text-sm flex justify-between items-center">
                                        <p>Written by <span className="font-bold">{post.author}</span></p>
                                        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 flex justify-between items-center">
                                    <Link to={`/post/${post._id}`} className="text-teal-500 font-semibold hover:underline">
                                        Read More
                                    </Link>
                                    <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-600 transition duration-300">
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyBlog;
