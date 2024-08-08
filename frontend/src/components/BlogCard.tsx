import { Link } from "react-router-dom"

interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
        <div className="border-b p-4 border-slate-300 pb-4">
            <div className="flex items-center">
                    <Avatar size="small" name={authorName}/>
                <div className="font-extralight text-sm pl-2 ">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle/>
                </div>
                <div className="pl-2 text-sm text-slate-500 font-thin">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-2">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
  )
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name, size = "small"}: {name: string, size: "small" | "big"}) {
    return(
        
<div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-medium text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>

    )
}

export default BlogCard