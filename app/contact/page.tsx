"use client"
import { useState } from "react"
export default function Contact(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleSubmit = (e : any) =>{
        e.preventDefault();
        alert('Form submitted')
    }
    return(
        <div className="bg-gray-200 min-h-screen">
            <div className="container mx-auto py-20">
                <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Me</h1>
                <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto p-8 bg-white shadow-md rounded-md flex flex-col ">
                    <input type="text" placeholder="Name" value={formData.name} onChange={(e)=> setFormData({ ...formData , name: e.target.value})} className="my-8"/>
                    <input type="email" placeholder="Email" value={formData.email} onChange={(e)=> setFormData({...formData , email: e.target.value})} className="my-8"/>
                    <input type="message" placeholder="Message" value={formData.message} onChange={(e)=> setFormData({...formData , message: e.target.value})} className="my-8" />
                    <button type="button" className="btn border rounded-md bg-slate-600 hover:bg-slate-500 w-20 items-center mx-auto " >Submit</button>

                </form>
            </div>
        </div>
    )
}