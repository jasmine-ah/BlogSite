const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BlogSiteModel = require("./models/BlogSite");
const BlogPostModel= require("./models/BlogPost");
const app = express();

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


///////// singup route  ////////////

app.get('/signup', (req, res) => {
    res.status(405).json({ message: "GET method not allowed. Use POST instead." });
});


app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, and password are required" });
    }

    BlogSiteModel.create({ name, email, password })
        .then(user => res.json(user))
        .catch(err => {
            console.error("Signup error:", err);
            res.status(500).json({ message: "Signup failed" });
        });
});

/////////// login route  //////////////

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    BlogSiteModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("the user doesnot exist")
        }
    })
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

app.get('/blogpost', (req, res) => {
    BlogPostModel.find({})
      .then(posts => {
        // Sort the posts by creation date (newest first)
        const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
        // Send all posts as JSON response
        res.json(sortedPosts);
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        res.status(500).json({ message: "Failed to retrieve posts" });
      });
  });
  

  
  // DELETE route for removing individual posts
  app.delete('/blogpost/:title', async (req, res) => {
    try {
      const post = await BlogPost.findByIdAndRemove(req.params.title);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
