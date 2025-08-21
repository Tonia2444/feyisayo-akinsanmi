import {FaArrowRight} from 'react-icons/fa'
import {motion} from "framer-motion"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"

interface Projects {
    image: string
}

const myProjects:Projects[] = [
    {image: `${project3}`},
    {image: `${project2}`},
    {image: `${project1}`},
    {image: `${project4}`},
    {image: `${project5}`},
    {image: `${project3}`}
]


const Projects = () => {
  return (
    <div className="bg-black text-white py-10 w-full">
        <motion.div
         initial={{scale: 0.5, opacity: 0}}
         whileInView={{scale: 1, opacity: 1}}
         transition={{ duration: 1.5}}
         id='portfolio' className='flex flex-col mx-auto items-center gap-5'>
            <h1 className="md:text-4xl text-3xl font-medium text-center py-2 mt-15">My latest work</h1>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:px-25 md:px-15 px-5 py-10 md:p-5 p-0 gap-6 w-full">
                {myProjects.map((project, id) => {
                    return (
                        <div key={id} className="">
                            <img src={project.image} alt="" className="w-full sm:h-[200px] h-[150px] object-cover overflow-hidden rounded-sm bg-blend-overlay hover:border-2 hover:border-gray-300 hover:scale-103 duration-300" /> 
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center items-center gap-2 border-1 border-gray-300 w-fit p-3 px-6 rounded-full hover:gap-5 duration-300 cursor-pointer'>
                <p className=''> Show More </p>
                <FaArrowRight />   
            </div>
        </motion.div>
    </div>
  )
}

export default Projects