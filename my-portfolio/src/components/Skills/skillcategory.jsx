import SkillCard from "./skillcard";
import SoftSkillCard from "./softskillcard";

export default function SkillCategory({ title, skills, isSoftSkill = false }) {
    return (
        <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-400/20 pb-2">
            {title}
        </h2>
        
        {isSoftSkill ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
                <SoftSkillCard
                    key={index}
                    title={skill.title}
                    description={skill.description}
                />
            ))}
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
                <SkillCard
                    key={index}
                    category={skill.category}
                    items={skill.items}
                />
            ))}
            </div>
        )}
        </div>
    );
}