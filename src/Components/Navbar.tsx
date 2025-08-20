import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/Logo.png"

interface Menu {
  menuItem: string;
  menuId: string;
}

export const myMenu: Menu[] = [
  { menuItem: "Home", menuId: "home" },
  { menuItem: "About Me", menuId: "about-me" },
  { menuItem: "Services", menuId: "services" },
  { menuItem: "Portfolio", menuId: "portfolio" },
  { menuItem: "Contact", menuId: "contact" },
];

const Navbar = () => {
  const [, setMyMenus] = useState("");

  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <div className="  bg-black text-white w-full py-1">
      <div className="bg-black text-white w-full fixed top-0 left-0 z-20 h-25">
        <div className="flex justify-between md:px-10 sm:px-20 px-5 py-2 items-center">
          {/* /////////Logo Section/////////// */}
          <div className="lg:w-[130px] md:w-[90px] w-[60px] bg-transparent">
            <AnchorLink className="anchor-link" offset={100} href={"#home"}>
              <img src={logo} alt="" />
            </AnchorLink>
          </div>
          {/* ///////////////Menu/////////////// */}
          <div>
            <ul className="md:flex hidden lg:gap-10 sm:gap-5 ">
              {myMenu.map((menu, id) => {
                return (
                  <div key={id}>
                    <li className="hover:text-gray-300 cursor-pointer hover:border-b-1 hover:border-orange-200 hover:transform duration-300">
                      <AnchorLink
                        className="anchor-link"
                        offset={100}
                        href={`#${menu.menuId}`}
                      >
                        <p onClick={() => setMyMenus(menu.menuItem)}>
                          {menu.menuItem}
                        </p>{" "}
                      </AnchorLink>{" "}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div
            onClick={() => {
              handleNavbar();
            }}
            className="block md:hidden"
          >
            {navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        
          {/* ///////////////Contact Me Button///////////// */}
          <div className="md:flex hidden bg-gradient-to-r from-purple-600 to-orange-600 rounded-full md:px-5 px-2 py-2 transition hover:scale-105 transform duration-300 cursor-pointer">
            <button className="text-sm">
              {" "}
              <AnchorLink className="anchor-link" offset={100} href={"#contact"}>
                Contact Me
              </AnchorLink>
            </button>
          </div>
        </div>
      
      </div>
{/* \///////////////Sidebar Section///////////// */}
      <div className="w-full relative z-5 ">
        <div className="absolute w-full h-scree top-0"></div>
        <div className={ 
              navbar ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-black ease-in-out duration-500"
              : "fixed left-[-100%]"
          } >
          <div>
            
            <AnchorLink offset={100} href={"#home"}><img
              onClick={(()=>{
                handleNavbar()
              })}
              src={logo}
              alt=""
              className="md:w-[130] w-[100px] px-5 py-5"
            /></AnchorLink>
            <ul className="flex flex-col gap-10 px-10 py-10">
              {myMenu.map((menu, id) => {
                return (
                  <div key={id} >
                    <li onClick={(()=>{
                    handleNavbar()
                  })}
                   className="hover:text-gray-300 cursor-pointer hover:border-b-1 hover:border-orange-200 hover:transform duration-300">
                      <AnchorLink
                        className="anchor-link"
                        offset={50}
                        href={`#${menu.menuId}`}
                      >
                        <p onClick={() => setMyMenus(menu.menuItem)}>
                          {menu.menuItem}
                        </p>{" "}
                      </AnchorLink>{" "}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

// {menu.menuItem === menu.menuItem ? <FaLink /> : '' }
