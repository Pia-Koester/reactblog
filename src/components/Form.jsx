
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import BlogCard from "./BlogCard"


// create the blog array with objects for each item 
// use useState to store the information

export default function Form() {
   const [blogs, setBlogs] = useState([{id: 1, title : "Test", description: "Test TEst", image: "img"}]);

    return (
        <div>
         <form>        
            <TextField id="outlined" label="Title" variant="outlined" type="text" placeholder = "Your Title"/>
         <TextField id="outlined-basic" label="Description" variant="outlined" type="text" placeholder = "Your Description"/>
         <TextField id="outlined-basic" label="Image" variant="outlined" type="text" placeholder = "Your Image"/>
            <Button variant="outlined" onClick={(e) =>{ console.log("Testnachricht")}}>Submit</Button>
        
            </form>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
         
            
        </div>
    )
}