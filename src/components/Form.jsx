import BlogCard from "./BlogCard";

// create the blog array with objects for each item 
// use useState to store the information

export default function Form() {
    
    return (
        <div>
         <form>
            <input type="text" placeholder = "Your Blog Title" />
            <input type="text" placeholder = "Your Image" />
            <input type="text" placeholder = "Your Description" />
            <input type="date"  />
            </form>
        <BlogCard/> /* once there is the blog array then use the map function to create each card */
        </div>
    )
}