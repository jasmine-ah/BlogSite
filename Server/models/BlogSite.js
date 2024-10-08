const mongoose=require('mongoose')
const BlogSiteSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const BlogSiteModel=mongoose.model("user",BlogSiteSchema)
module.exports=BlogSiteModel