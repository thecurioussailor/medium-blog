import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { TfiWrite } from "react-icons/tfi";
export const Appbar = () => {

    return(
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={"/blogs"} className="flex flex-col text-xl justify-center cursor-pointer">
                FastBlogg
            </Link>
            <div>
                <Link to={"/publish"}>
                    <button className="pr-6">
                        <div className="flex flex-row justify-center text-slate-500 items-center">
                        <TfiWrite />
                        <span className="pl-1">Write</span>
                        </div>
                    </button>
                </Link>
                <Avatar name="Ashutosh" size="big" />
            </div>
        </div>
    )
}