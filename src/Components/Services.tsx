import {FaArrowRight} from 'react-icons/fa';
import {motion} from "framer-motion"

interface services {
  id: string;
  title: string;
  content: string;
}

const myServices: services[] = [
  {
    id: "01",
    title: "Frontend Dev.",
    content:
      "From concept to code — I develop fully customized and responsive websites",
  },
  {
    id: "02",
    title: "Web Design",
    content:
      "From layout to launch — I design responsive, modern websites using WordPress.",
  },
  {
    id: "03",
    title: "WP Customization",
    content: "Tailor-made WordPress sites with Elementor, to fit your brand and business needs.",
  },
  {
    id: "04",
    title: "Graphic Design",
    content: "Custom graphics, banners, and visual assets that enhance your site’s appeal.",
  },
  {
    id: "05",
    title: "E-com Store Setup",
    content: "Fully functional online stores with product pages, cart, and checkout.",
  },
  {
    id: "06",
    title: "UI/UX Design",
    content: "I design intuitive, user-friendly interfaces that enhance user experience.",
  }
];

const Services = () => {
  return (
    <div className="w-full bg-black text-white md:px-15 px-5 pt-20">
      <motion.div 
       initial={{scale: 0.5, opacity: 0}}
       whileInView={{scale: 1, opacity: 1}}
       transition={{ duration: 1.5}}
       className='flex flex-col gap-10'>
        <h1 id="services" className=" text-center font-medium text-4xl">My Services</h1>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:px-25 md:px-5 gap-4 py-10">
            {myServices.map((service, id) => {
                return (
                <div key={id} className=" sm:py-4 py-0 sm:px-7 px-5 border-2 border-gray-400 rounded-sm w-full hover:bg-orange-950 hover:border-pink-700 hover:scale-105 hover:transform duration-300 cursor-pointer">
                    <h1 className="mt-5 font-medium text-sm py-5">{service.id}</h1>
                    <h1 className="sm:text-2xl text-[15px] font-bold bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit py-2">{service.title}</h1>
                    <p className="sm:flex hidden py-2">{service.content}</p>
                    <div className="mb-5 py-2 flex items-center gap-3">
                        <p> Learn More</p>
                        <FaArrowRight />
                    </div>
                </div>
                );
            })}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
