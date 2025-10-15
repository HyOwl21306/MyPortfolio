import NavBar from "../components/navBar"


import PersonalInfo from "../components/About/personalinfor"
import BioSection from "../components/About/biosection"
import { personalData } from "../../data"


export default function About() {
    return(
        <>
        <NavBar/>
        <div className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <PersonalInfo data={personalData} />
                <BioSection bio={personalData.bio} />
            </div>
        </div>
        </>
    )
}