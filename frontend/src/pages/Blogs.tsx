import { Appbar } from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {
  const {loading, blogs} = useBlogs();
  if(loading){
    return(
      <div>
        loading...
      </div>
    )
  }
  return (
    <div>
      <Appbar/>
      <div className="flex justify-center">
        
        <div className="max-w-xl">
            {
              blogs.map(blog => <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content="it is the content of the blog.How an ugly single page website makes $5000 a month without affiliate marketing"
                publishedDate="2nd Feb 2024"     
              />)
            }
            
          
        </div>
      </div>
    </div>
  )
}

export default Blogs