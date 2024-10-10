import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft, FaPlus, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

function DisplayPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const Navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/blogpost/all');
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setLoading(false);
        }
    };

    const handleClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        Navigate("/login");
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Posts</h1>
                        <p className="text-xl text-gray-600 mb-8">Discover latest blog posts from our community.</p>
                    </div>

                    <div className="flex items-center mb-8">
                        <Link to='/blogpost' className="text-lg font-semibold text-blue-500 hover:text-blue-700 mr-4">
                            <FaPlus className="mr-2"/> Add New Blog Post
                        </Link>
                    </div>

                    {loading ? (
                        <div className="text-xl font-bold text-gray-800 text-center">Loading...</div>
                    ) : posts.length === 0 ? (
                        <div className="text-xl font-bold text-gray-800 text-center">No posts found.</div>
                    ) : (
                        <motion.div animate={{ y: [50, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, index) => (
                                    <motion.div 
                                        key={index} 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                                            <div className="p-6">
                                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h2>
                                                <p className="text-gray-700 mb-4">{post.content.substring(0, 150)}...</p>
                                                <div className="text-gray-500 text-sm flex items-center">
                                                    <span>Written by</span>
                                                    <span className="font-bold pl-2">{post.author}</span>
                                                </div>
                                                <div className="text-gray-500 text-xs mt-2">
                                                    {new Date(post.createdAt).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 flex justify-between items-center">
                                                <Link to={`/post/${post._id}`} className="text-[#00c7ab] font-semibold hover:underline">Read More</Link>
                                                {/* <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-600">
                                                    <FaTrashAlt />
                                                </button> */}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex items-right mb-8">
                        
                        <button onClick={handleClick} className="text-lg font-semibold mt-3 text-red-500 hover:text-red-700">
                            <FaSignOutAlt className="mr-2"/> Log Out
                        </button>
                    </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </motion.div>
    );
}

export default DisplayPost;
