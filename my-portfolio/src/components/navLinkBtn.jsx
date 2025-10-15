import { NavLink } from "react-router-dom"

export default function NavLinkBtn({to, label}) {

    return(
        <>
            <div className="">
                <div>
                    <NavLink to={to}
                        className={({ isActive }) => isActive ? "font-semibold text-xl lg:text-2xl" : ""}
                    >
                        <span className="relative z-10">
                            {label}
                        </span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}