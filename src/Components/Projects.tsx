import {FaArrowRight} from 'react-icons/fa'
import {motion} from "framer-motion"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project66 from "../assets/project66.jpg"

interface Projects {
    image: string,
    link: string
}

const myProjects:Projects[] = [
    {image: `${project3}`,
link: "https://napharm.org/"},
    {image: `${project2}`,
link: "https://oyinbatfo.com/"},
    {image: `${project1}`,
link: "https://broadpayment.com/"},
    {image: `${project4}`,
link: "https://igrow.ng/"},
    {image: `${project5}`,
link: "https://napharm.org/"},
    {image: `${project66}`,
link: "https://Tonia2444.github.io/tonia-portfolio"}
]


const Projects = () => {
  return (
    <div className="bg-black text-white py-10 w-full">
        <div id="portfolio" >
            <motion.div
            initial={{scale: 0.5, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{ duration: 1.5}}
            className='flex flex-col mx-auto items-center gap-5'>
                <h1 className="md:text-4xl text-3xl font-medium text-center py-2 mt-15">My latest work</h1>
                <div className="grid lg:grid-cols-3 grid-cols-2 lg:px-25 md:px-15 px-5 py-10 md:p-5 p-0 gap-6 w-full">
                    {myProjects.map((project, id) => {
                        return (
                            <div key={id} className="">
                                <a href={project.link}> 
                                <img src={project.image} alt="" className="w-full sm:h-[200px] h-[150px] object-cover overflow-hidden border border-gray-800 rounded-sm bg-blend-overlay hover:border-2 hover:border-gray-300 hover:scale-103 duration-300 hover:bg-red-500 opacity-100 hover:opacity-40 cursor-pointer "/>  
                                </a> 
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
    </div>
  )
}

export default Projects