
interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
  return (
    <div>
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName}/>
            </div>
            <div className="font-extralight pl-2">
                {authorName}
            </div>
            <div className="pl-2 font-thin">
                 . {publishedDate}
            </div>
        </div>
        <div>
            {title}
        </div>
        <div>
            {content.slice(0, 100) + "..."}
        </div>
        <div>
            {`${Math.ceil(content.length / 100)} minutes`}
        </div>
        <div className="bg-slate-200 h-1 w-full">

        </div>
    </div>
  )
}

function Avatar({name}: {name: string}) {
    return(
        
<div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
    </span>
</div>

    )
}

export default BlogCard