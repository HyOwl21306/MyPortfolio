export default function SoftSkillCard({ title, description }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg shadow-blue/20 transition-shadow">
            <h3 className="font-semibold text-lg text-[#4a7cda] mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}