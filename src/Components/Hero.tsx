import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiDownload } from "react-icons/hi";
import profile from "../assets/profile.png";
import { motion} from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-black text-white w-full py-10 md:pt-35 pt-20 scroll-mt-20">
      <div id="home" >
          <motion.div
          initial={{scale: 0.5, opacity: 0}}
          animate={{scale: 1, opacity:1}}
          transition={{duration: 1.5}}
          className="flex flex-col lg:max-w-[50%] md:max-w-[70%] max-w-[75%] mx-auto items-center gap-5"
        >
          <img
            src={profile}
            alt=""
            className="lg:max-w-[250px] md:max-w-[170px] max-w-[120px] items-center "
          />
          <div>
            <h1 className="lg:text-[40px] md:text-[30px] text-[25px]  items-center font-medium text-center">
              <span className="bg-gradient-to-r lg:text-5xl md:text-4xl text-3xl from-purple-600 to-orange-600 text-transparent bg-clip-text min-h-0">
                I'm Tonia,
              </span>{" "}
              a frontend developer & WordPress designer.
            </h1>

            <p className="text-center">
              I'm a creative and flexible web developer with experience in HTML,
              CSS, JS, React, and WordPress. I specialize in building custom
              websites and converting business ideas into digital realities.
            </p>
          </div>
          <div className="sm:flex flex-row gap-5 relative z-6">
            <button className="sm:w-fit w-full bg-gradient-to-r from-purple-700 to-orange-600 rounded-full cursor-pointer px-5 py-2 transition hover:scale-105 transform duration-300  ">
              <AnchorLink className="anchor-link" offset={50} href={"#contact"}>
                Contact Me
              </AnchorLink>
            </button>

            <a
              href="/tonia-portfolio/cv.pdf"
              download={true}
              className="sm:w-fit w-full rounded-full flex items-center gap-2 px-5 py-2 sm:my-0 my-3 border border-orange-600 cursor-pointer "
            >
              My resume
              <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
