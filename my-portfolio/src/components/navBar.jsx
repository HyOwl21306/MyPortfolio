import { navLinkdata } from "../../data.js";
import NavLinkBtn from "./navLinkBtn";
import { useState } from "react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    let hamburger = <div onClick={openMenu} className="me-7 cursor-pointer md:hidden">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="21" 
                        viewBox="0 0 24 21"><g fill="#000000" fillRule="evenodd">
                            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g>
                    </svg>
                </div>

    if (isMenuOpen) {
        hamburger = <div onClick={openMenu}
                        className="
                        z-100 bg-white
                        fixed top-0 right-0 w-1/2 h-screen pt-5
                        text-md
                        cursor-pointer px-5
                        space-y-3
                    ">
                        <div className="flex justify-end">
                            <svg onClick={openMenu} className="me-5 size-5 block" xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="21"><g fill="#000" fillRule="evenodd">
                                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g>
                            </svg>
                        </div>
                        {navLinkdata.map((item) => (
                            <NavLinkBtn key={item.label} {...item}/>
                        ))}
                    </div>
    }

    return(
        <>
            <div className="flex justify-between items-center border-b-2 py-2 lg:py-5 ">
                <div>
                    <p className="font-Barlow ps-5 lg:ps-15 lg:text-2xl">Đoàn Hải Âu</p>
                </div>
                <div className="hidden lg:block">
                    <div className="flex space-x-15 
                            font-Poppins w-fit 
                            lg:pe-30 lg:text-lg">
                        {navLinkdata.map((item) => (
                            <NavLinkBtn key={item.label} {...item}/>
                        ))}
                    </div>
                </div>
                {hamburger}
            </div>
        </>
    )
}