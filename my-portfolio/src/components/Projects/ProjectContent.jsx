import { projectsData } from "../../../data"


export default function ProjectContent({ topic }) {
    const project = projectsData[topic];

    return (
        <>
            <div className=" lg:col-span-2 lg:mb-10 lg:ms-10">
                <div className="flex flex-col justify-center lg:flex-row lg:justify-normal">
                    <img className="mx-auto lg:h-50 lg:mx-0" src={project.img} alt="" />
    
                    <div className="lg:ms-15">
                        <p className="font-bold text-xl mt-3 lg:text-2xl">{project.title}</p>
                        <i className="text-sm text-black/50 lg:text-lg">{project.tools}</i>
    
                        <div className="flex justify-center space-x-5 my-3 lg:flex-col lg:w-fit lg:space-x-0 lg:space-y-3">
                            <button className="btnp font-Poppins">
                                <a target="_blank" href={project.urlsite}>VIEW LITE SITE</a>
                            </button>
    
                            <button className="btnp font-Poppins">
                                <a target="_blank" href={project.urlcode}> VIEW CODE</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}