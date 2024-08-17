import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-gray-700 p-4 flex items-center justify-center ">
            
            <ul className="flex space-x-4 items-center justify-between">
                
                <li className="flex items-center justify-between text-3xl font-bold ">
                
                    <Link href="/" className="text-blue-950 hover:bg-gray-400 mx-4">Home</Link>
                    <Link href="/about" className="text-blue-950 hover:bg-gray-400 mx-4">About</Link>
                    <Link href="/projects" className="text-blue-950 hover:bg-gray-400 mx-4">Projects</Link>
                    <Link href="/contact" className="text-blue-950 hover:bg-gray-400 mx-4">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}