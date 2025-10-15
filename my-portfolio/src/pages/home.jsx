import NavBar from "../components/navBar"
import { NavLink } from "react-router-dom"
import ContactBtn from "../components/Home/contactBtn"
import { linkdata } from "../../data"


import mAvt from "../assets/cat-mobile.png"
import lAvt from "../assets/cat-laptop.png"



export default function Home() {
    return(
        <>
            <NavBar/>
            
            <div className=" mt-20 gap-10 lg:grid lg:grid-cols-6 lg:items-center lg:mt-30 lg:mx-20">

                <div className="linkicon">
                    <div className="flex flex-col gap-3 lg:gap-10">
                        {linkdata.map((item, index) => (
                            <ContactBtn key={index}
                                link = {item.url}
                                src = {item.img}
                            />
                        ))}
                    </div>
                    <img className="lg:hidden size-45 col-span-2" src={mAvt}/>
                </div>


                <div className="flex flex-col justify-center lg:col-span-3">
                    <div>
                        <h1>Hello, I'm Hải Âu</h1>
                        <div className="md:text-center lg:text-start lg:text-lg lg:w-5/6">
                            <p className="mt-3 lg:mt-5">I'm a 
                                <span className="text-[#4a7cda] font-medium"> front-end developer </span> 
                                from Viet Nam.
                            </p>
                            <p className="mt-2">I’m passionate about coding, especially building websites.</p>
                            <p>I love turning beautiful designs into responsive and interactive web pages.</p>
                        </div>
                    </div>

                    

                    <div className="flex justify-evenly mt-7 lg:justify-start lg:space-x-7">
                        <button className="btn">
                            <a href="mailto:aub2405107@student.ctu.edu.vn">Contact me</a>
                        </button>

                        <button className="btn">
                            <NavLink to="/projects">  
                                View my Projects
                            </NavLink>
                        </button>
                    </div>

                </div>

                <img className="hidden lg:block size-80 lg:col-span-2" src={lAvt}/>
            </div>
        </>
    )
}