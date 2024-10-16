const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BlogSiteModel = require("./models/BlogSite");
const BlogPostModel= require("./models/BlogPost");
const app = express();
const bcrypt=require('bcryptjs');

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200 
};
app.use(express.json());
app.use(cors(corsOptions)); 
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; connect-src 'self';"
    );
    next();
});


mongoose.connect("mongodb://localhost:27017/BlogSite")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));


///////// signup route  ////////////

app.get('/signup', (req, res) => {
    res.status(405).json({ message: "GET method not allowed. Use POST instead." });
});


app.post('/signup', async(req, res) => {
    const { name, email, password } = req.body;
    const existingUser=await BlogSiteModel.findOne({email:email});

    if(existingUser){
        return res.status(401).json({ message: "Invalid password" });
    }

    if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, and password are required" });
    }



    const salt=await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    BlogSiteModel.create({ name, email, password: hashedPassword })
        .then(user => res.json(user))
        .catch(err => {
            console.error("Signup error:", err);
            res.status(500).json({ message: "Signup failed" });
        });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await BlogSiteModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        } 
        res.json({
            name: user.name,
            _id: user._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//////// create blog///////////
app.post("/blogpost",(req,res)=>{
    const{title,content,author}=req.body;
    
    if (!title || !content || !author) {
        return res.status(400).json({ message: "Title, content, and author are required" });
    }

    BlogPostModel.create({ title, content, author, createdAt: new Date() })
        .then(post => res.json(post))
        .catch(err => {
            console.error("Error creating post:", err);
            res.status(500).json({ message: "Failed to create post" });
        });
});

////////////display posts/////////////

app.get('/blogpost/all', (req, res) => {
    BlogPostModel.find({})
    .then(posts => {
        const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.json(sortedPosts);
    })
    .catch(err => {
        console.error("Error fetching posts:", err);
        res.status(500).json({ message: "Failed to retrieve posts" });
    });
});


app.get('/blogpost/:name', async (req, res) => {
    try {
        const { name } = req.params;
        console.log("Fetching posts for author:", name);  

        const posts = await BlogPostModel.find({ author: name })
            .sort({ createdAt: -1 });

        if (posts.length === 0) {
            console.log("No posts found for this author.");
        } else {
            console.log("Posts found:", posts);
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        res.status(500).json({ error: "Failed to fetch blog posts" });
    }
});


const router = express.Router();

app.delete('/blogpost/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        
        const post = await BlogPostModel.findByIdAndDelete(id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error('Error deleting post:', err.message);
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
});

module.exports = router;



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
