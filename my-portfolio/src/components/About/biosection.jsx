export default function BioSection({ bio }) {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="space-y-4">
                {bio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                </p>
                ))}
            </div>
        
            <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                        AI Enthusiast
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                        Frontend Developer
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Career Transition
                    </div>
                </div>
            </div>
        </div>
    );
}