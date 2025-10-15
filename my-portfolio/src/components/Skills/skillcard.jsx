export default function SkillCard({ category, items }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg shadow-blue/20 transition-shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{category}</h3>
            <ul className="list-disc list-inside">
                {items.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                ))}
            </ul>
        </div>
    );
}