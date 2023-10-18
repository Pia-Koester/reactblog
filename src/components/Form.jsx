
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import BlogCard from "./BlogCard"


// create the blog array with objects for each item 
// use useState to store the information

export default function Form() {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
   const [blogs, setBlogs] = useState([{id: 1, title : "Test", description: "Test TEst", image: "img", comments : []}]);
console.log(blogs)
const submitting = () => {
    console.log("ich mache was")
    setBlogs(
        (prevblogs)=> {
            return [...prevblogs, {title, description, image: img, comments:[]}] // ich bruache nur title und description, weil der name und der wert gleich heißen, bei image ist das anders
        }
    )

    setTitle("");
    setImg("");
    setDescription("");}
    return (
        <div>
         <form >  
            <div className="inputform">    
            <TextField id="outlined" label="Title" variant="outlined" type="text" placeholder = "Your Title" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} />
         <TextField id="outlined-basic" label="Description" variant="outlined" type="text" placeholder = "Your Description" value={description} onChange={(e) => {
          setDescription(e.target.value);
        }}/>
         <TextField id="outlined-basic" label="Image" variant="outlined" type="text" placeholder = "Your Image" value={img} onChange={(e) => {
          setImg(e.target.value);
        }}/>
         </div>  
            <Button variant="outlined" onClick={submitting} >Submit</Button> 
        
            </form>
            <div className="blog__container">

               { blogs.map(  
                (blog) =>  <BlogCard title={blog.title} img={blog.img} description={blog.description}/>
               )}
            
          
            
            </div>
         
            
        </div>
    )
}