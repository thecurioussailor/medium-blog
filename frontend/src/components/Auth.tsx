import { Link } from "react-router-dom"
import { SignupInput } from "@thecurioussailor/medium-common"
import { ChangeEvent, useState } from "react"
function Auth( {type}: {type: "signup" | "signin"}) {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        Already have an account? 
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                    </div>
                </div>
                <div className="pt-5">
                    <LabelledInput label="Name" placeholder="Harkirat Singh..." onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value,
                        }))
                    }}/>
                    <LabelledInput label="Email" placeholder="harkiratsing@gmail.com" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value,
                        }))
                    }}/>
                    <LabelledInput label="Password" type="password" placeholder="123456" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value,
                        }))
                    }}/>
                    <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) =>  void;
    type?: string;
}
function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){

    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 pt-2">{label}</label>
            <input onChange={onChange} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
        
    )
}
export default Auth