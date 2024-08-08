import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog";

function Blog() {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });
  if(loading || !blog){
    return <div>
      loading...
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog