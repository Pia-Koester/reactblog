
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import BlogCard from "./BlogCard"


// create the blog array with objects for each item 
// use useState to store the information

export default function Form() {
   const [blogs, setBlogs] = useState([{id: 1, title : "Test", description: "Test TEst", image: "img"},{id: 1, title : "Test", description: "Test TEst", image: "img"},{id: 1, title : "Test", description: "Test TEst", image: "img"}]);

    return (
        <div>
         <form>  
            <div className="inputform">    
            <TextField id="outlined" label="Title" variant="outlined" type="text" placeholder = "Your Title"/>
         <TextField id="outlined-basic" label="Description" variant="outlined" type="text" placeholder = "Your Description"/>
         <TextField id="outlined-basic" label="Image" variant="outlined" type="text" placeholder = "Your Image"/>
         </div>  
            <Button variant="outlined" onClick={(e) =>{ console.log("Testnachricht")}}>Submit</Button>
        
            </form>
            <div className="blog__container">
                {/*mapping over the blogs array and for each item create one blogCard with the corresponding values formt eh object*/}
            <BlogCard title={blogs.title}/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            </div>
         
            
        </div>
    )
}