import { FaPerson, FaCopyright } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../assets/Logo.png"

interface footerLinks {
  link: string
}

const myFooter:footerLinks[] = [
  {link: "Terms of Service"},
  {link: "Privacy Policy"},
  {link: "Connect with me"}
]

const Footer = () => {

  const onSuBmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form = event.target;

    formData.append("access_key", "bda4aeaf-3a84-44d9-8ef6-16e2b8ae6e65");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Thanks for subscribing!")
      form.reset()
    }
  };

  return (
    <div className="w-full bg-black text-white py-10">
      <div className="mt-10 md:px-10 px-5">
        <div className="grid md:grid-cols-2 grid-rows-1 lg:gap-60 md:gap-10 gap-5 items-center">
          <div className="pr-4 flex flex-col gap-3">
            <AnchorLink className="anchor-link" offset={100} href={"#home"}><img  src={Logo} alt="" className="lg:w-[130px] w-[100px]" /></AnchorLink>
            <p>
              I'm a creative and flexible web developer with experience in HTML,
              CSS, JS, React, and WordPress. I specialize in building custom
              websites and converting business ideas into digital realities.
            </p>
          </div>
          
          <form onSubmit={onSuBmit} >
            <div className="gap-5 flex lg:flex-row w-full">
              <FaPerson className="absolute z-5 transform translate-3"/>
              <input type="email" name="email" placeholder="Enter your email" className="bg-neutral-800 relative items-center w-full p-2 pl-10 pr-15 rounded-full cursor-pointer hover:border-white hover:border-1" />
              <button type="submit" className="p-2 px-5 w-fit rounded-full bg-gradient-to-r from-purple-600 to-orange-600 cursor-pointer hover:scale-110 duration-300">Subscribe</button>
            </div>  
          </form>
          
        </div>

        <div className="w-full my-5 h-0.5 rounded-full bg-neutral-700"></div>

        <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="flex gap-1 items-center">
                <FaCopyright size={12}/> 
                <small><span className="text-[15px] pr-1">2025</span>Tonia Akinsanmi. All rights reserved</small>
            </div>
            <div className="flex gap-5 justify-between ">
              {myFooter.map((footerLink, id)=>{
                return (
                  <div key={id} >
                    <small className="hover:bg-gradient-to-r from-purple-500 to-orange-500 hover:bg-clip-text hover:text-transparent duration-200 cursor-pointer hover:w-fit hover:border-b-white hover:border-b-1">{footerLink.link}</small>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
