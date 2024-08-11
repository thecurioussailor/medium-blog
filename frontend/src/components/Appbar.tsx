import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { TfiWrite } from "react-icons/tfi";
import { useEffect, useState } from "react";
import axios from "axios";
export const Appbar = () => {

    const [signedIn, setSignedIn] = useState(Boolean(localStorage.getItem("token")));
    const [clickAvatar, setClickAvatar] = useState(false)
    
    return(
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={"/blogs"} className="flex flex-col text-xl justify-center cursor-pointer">
                FastBlogg
            </Link>
            <div className="flex">
                <Link to={"/publish"}>
                    <button className="pr-6">
                        <div className="flex flex-row justify-center text-slate-500 items-center">
                        <TfiWrite />
                        <span className="pl-1">Write</span>
                        </div>
                    </button>
                </Link>
                    {signedIn === true ? <div onClick={() => setClickAvatar(!clickAvatar)} className="flex flex-col relative"><Avatar name="Ashutosh" size="big" /> <span className={`${!clickAvatar ? "hidden": "block"} `}>Log out</span></div> : <Link to={"/signin"}><div className="text-slate-500 ">Sign In</div></Link>}
            </div>
        </div>
    )
}