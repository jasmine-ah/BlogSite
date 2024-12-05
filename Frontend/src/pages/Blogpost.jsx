import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../apiConfig";
function BlogPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');

        if (!name) {
            alert('No author name found. Please login.');
            return;
        }

        try {
            await axios.post(`${API_URL}/blogpost`, { title, content, author: name }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            alert("Blog post submitted successfully!");
            navigate('/myblog');
        } catch (err) {
            console.error(err);
            alert('Failed to submit blog post. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-skyblue-50 to-lightblue-100">
            <section className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-12 text-primary-color">New Blog Post</h1>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-4xl w-full mx-auto">
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your blog post title"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            rows="6"
                            required
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Blog content goes here..."
                        />
                    </div>

                    <button type="submit" className="w-full bg-[#00c7ab] text-white rounded-md py-2 px-4 font-semibold hover:bg-opacity-90 transition-colors duration-300">
                        Publish Blog Post
                    </button>
                </form>
            </section>
        </div>
    );
}

export default BlogPost;
