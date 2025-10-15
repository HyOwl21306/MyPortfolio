import NavBar from "../components/navBar"
import TabNav from "../components/Projects/TabNav";
import ProjectContent from "../components/Projects/ProjectContent";

import { projectsData } from "../../data"
import { useState } from "react";

function ProjectsDesc({ description }) {
    return (
        <>
            <ul className="space-y-2 lg:text-lg">
                {description.map((item, index) => (
                    <li 
                        className="font-Poppins whitespace-pre-wrap 
                            break-words max-w-full" 
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}


export default function Projects() {

    const [topic, setTopic] = useState("DessertCart");

    function handleTopic(data) {
        setTopic(data);
    }

    return(
        <>
            <NavBar/>
            <div className="grid grid-cols-1 px-8 lg:grid-cols-3 lg:mt-20 lg:px-20">

                <p className="text-xl font-bold m-4 font-Poppins md:hidden">
                    Projects
                </p>

                <div className="lg:row-span-3 md:block hidden">
                    <div className="lg:row-span-3 md:block hidden">
                        <TabNav 
                            topic={topic} 
                            onTopicChange={handleTopic} 
                            isMobile={false}
                        />
                    </div>
                </div>

                <ProjectContent topic={topic}/>

                <div className="md:hidden">
                    <TabNav
                        topic={topic}
                        onTopicChange={handleTopic} 
                        isMobile={true}
                    />
                </div>
            

                <div className="lg:col-span-2 lg:row-span-2 lg:ms-10">
                    <ProjectsDesc description={projectsData[topic].description}/>
                </div>



            </div>
        </>
    )
}