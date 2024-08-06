import BlogCard from "../components/BlogCard"

const Blogs = () => {
  return (
    <div>
        <BlogCard
           authorName="Ashutosh"
           title="Title of the blog"
           content="it is the content of the blog."
           publishedDate="2nd Feb 2024"     
        />
    </div>
  )
}

export default Blogs