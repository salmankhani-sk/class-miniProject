export default function Projects(){
    const projects = [{name: 'Seka Solution', link:'https://sekasolution-dev.vercel.app/'},{name:'Class',link:"www.dkfjalkdfjf.com"}]
    return(
        <div className="container mx-auto py-20">
            <h1 className="text-4xl font-bold text-gray-700 text-center">My Projects </h1>
            <ul className="mt-4 text-center">
                {projects.map((project,index)=>(
                    <li key={index} className="text-xl font-semibold text-blue-300 hover:underline">
                        <a href={project.link}>{project.name}</a>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}