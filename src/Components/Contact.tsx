import type { IconType } from "react-icons";
import {motion} from "framer-motion"
import { FaMailBulk, FaPhoneVolume, FaSearchLocation  }  from "react-icons/fa";

interface Form {
  label: string,
  type: string,
  placeholder: string
}

interface Contact {
  smallDetails: string
  myIcon: IconType
}


const myForm:Form[] = [{
  label: 'Your Name',
  type: 'name',
  placeholder: 'Enter your name'
},
{
  label: 'Your Email',
  type: 'Email',
  placeholder: 'Enter your email'
}
]

const contactMe:Contact[] = [
  {
  smallDetails: "toniaakinsanmi@gmail.com",
  myIcon: FaMailBulk
  },
  {
  smallDetails: "+234 906 328 2444",
  myIcon: FaPhoneVolume
  },
  {
  smallDetails: "Osun State, Nigeria",
  myIcon: FaSearchLocation
  } 
]




const Contact = () => {

 

  const onSubmit = async (event:any) => {
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
      alert(res.message)
      form.reset()
    }
  };


  return <div  className="text-white bg-black py-10 ">
    <div id="contact" >
      <motion.div 
        initial={{scale: 0.5, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{ duration: 1.5}}
       className=" w-full mx-auto lg:px-30 md:px-15 px-5 mt-10">
        <h1 className="sm:text-4xl text-3xl text-center font-bold">Get in touch</h1>
        <div className="md:grid grid-row grid-cols-2 lg:gap-15 md:gap-10 py-15">
          <div className="flex flex-col gap-5 md:pt-15 pt-0">
            <div className="flex flex-col gap-5">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium bg-gradient-to-r from-purple-600 to-orange-600 w-fit text-transparent bg-clip-text">Let's talk</h1>
              <p>I'm currently available to take on new projects, so feel free to send me a message
                about anything that you want me to work on. You can contact anytime. 
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {contactMe.map((eachContact, id)=> {
                return (
                  <div key={id} className="flex gap-2 items-center">
                    <eachContact.myIcon size={20} />
                    <small>{eachContact.smallDetails}</small>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <form onSubmit={onSubmit}>
              {myForm.map((form, id) => {
                return (
                  <div key={id} className="flex flex-col gap-5 mt-5">
                    <label>{form.label}</label>
                    <input type={form.type} name="name" placeholder={form.placeholder} required className={`bg-neutral-800 w-full py-3 px-2`}/>
                  </div>
                )
              })}
              <div className="mt-5">
                <label className="">Message</label>
                <textarea placeholder="Enter your message" className="bg-neutral-800 w-full px-2 pb-20 mt-5 py-2 "/>
              </div>
              <button type="submit"  className="px-7 mt-5 p-2 w-fit rounded-full bg-gradient-to-r from-purple-600 to-orange-600 cursor-pointer">Submit now</button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  </div>;
};

export default Contact;
