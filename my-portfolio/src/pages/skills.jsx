import NavBar from "../components/navBar"

import { skillsData } from "../../data";
import SkillCategory from "../components/Skills/skillcategory";

export default function Skills() {
    return(
        <>
        <NavBar/>
        <div className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Skills Portfolio</h1>
                </header>
                
                <main className="space-y-8">
                    <SkillCategory 
                        title={skillsData.frontend.title} 
                        skills={skillsData.frontend.skills} 
                    />
                    
                    <SkillCategory 
                        title={skillsData.programming.title} 
                        skills={skillsData.programming.skills} 
                    />
                    
                    <SkillCategory 
                        title={skillsData.tools.title} 
                        skills={skillsData.tools.skills} 
                    />
                    
                    <SkillCategory 
                        title={skillsData.softSkills.title} 
                        skills={skillsData.softSkills.skills} 
                        isSoftSkill={true}
                    />
                </main>
            </div>
        </div>
        </>
    )
}