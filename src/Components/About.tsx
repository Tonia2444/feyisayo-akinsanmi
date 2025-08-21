import {motion} from "framer-motion";
import IMG_7687 from "../assets/IMG_7687.jpeg"


interface Skills {
    skill: string
    percentage: number
}

interface Testimonials {
    quantity: string
    title: string
    lineWidth?: number
}

const myTestimonials:Testimonials[] = [
    {
        quantity: "5+",
        title: "YEARS OF EXPERIENCE",
        lineWidth: 15
    },
    {
        quantity: "20+",
        title: "PROJECT COMPLETED",
        lineWidth: 15
    },
    {
        quantity: "40+",
        title: "HAPPY CLIENTS"
    }
]

const mySkills:Skills[] = [
    {
        skill: "React JS",
        percentage: 65
    },
    {
        skill: "HTML & CSS",
        percentage: 80
    },
    {
        skill: "Wordpress",
        percentage: 95
    },
    {
        skill: "Elementor",
        percentage: 85
    },
    {
        skill: "e-Com Setup",
        percentage: 60
    }
]


const About = () => {
  return (
    <div  className="w-full py-10 bg-black text-white">
      <motion.div 
      initial={{scale: 0.5, opacity: 0}}
      whileInView={{scale: 1, opacity: 1}}
      transition={{ duration: 1.5}}
      id="about-me">
        <h1 className="font-medium sm:text-4xl text-3xl  text-center lg:my-15 my-10">About me</h1>
        <div className=" ">
            <div className="flex justify-center lg:px-40 md:px-20 px-5 gap-10 mx-auto">
                <div className="w-full lg:flex hidden">
                    <img src={IMG_7687} alt="" className="w-full h-full object-cover " />
                </div>
                <div>
                    <div className="flex flex-col gap-3">
                    <p>
                        I’m a creative and detail-oriented web developer with a strong
                        foundation in HTML, CSS, JavaScript, TypeScript, and React, I
                        build fast, responsive, and visually engaging web interfaces. I
                        also specialize in WordPress design using tools like Elementor,
                        WPBakery, and custom themes to create flexible, easy-to-manage
                        websites.
                    </p>
                    <p>
                        If you're looking for someone who combines technical development skills
                        with creative design thinking, let’s talk. I’m currently open
                        to freelance, part-time, or full-time opportunities.
                    </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        {mySkills.map((mySkill, id) => {
                            return (
                                <div key={id} className="flex gap-5 justify- items-center w-full hover:scale-105 duration-200">
                                    <div className="basis-[25%]"><h4>{mySkill.skill}</h4></div>
                                    <div className="w-full">
                                        <div className={`bg-gradient-to-r h-1 from-purple-800 to-orange-700 h- rounded-full  `} style={{ width: `${mySkill.percentage}%` }}></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between nth-last-[div]:border-none md:mx-auto mx-0 lg:px-40 md:px-20 px-5 mt-10 w-full">
                {myTestimonials.map((testimonial, id) => {
                    return (
                        <div key={id} className="md:border-r-1  md:border-b-0 border-b-1 md:nth-last-[3n+1]:border-none pt-4">
                                <div className="lg:pr-25 md:pr-10">
                                    <h1 className="text-4xl w-fit font-medium  bg-[linear-gradient(90deg,purple_20%,oklch(55.3%_0.195_38.402)_30%)] text-transparent bg-clip-text ">{testimonial.quantity}</h1>
                                    <p>{testimonial.title}</p>
                                </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
