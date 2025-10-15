export default function PersonalInfo({ data }) {
return (
    <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">{data.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                        className="w-5 h-5 text-[#4a7cda]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                    </svg>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-[#4a7cda]">
                        Place of Birth
                    </h3>
                    <p className="text-gray-800">{data.birthPlace}</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                        className="w-5 h-5 text-[#4a7cda]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 
                            0h-4m-8 0H5m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 
                            10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#4a7cda]">Education</h3>
                    <p className="text-gray-800">{data.education}</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                    className="w-5 h-5 text-[#4a7cda]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#4a7cda]">Major</h3>
                    <p className="text-gray-800">{data.major}</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                    className="w-5 h-5 text-[#4a7cda]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#4a7cda]">Email</h3>
                    <a href={data.emailLink} className="text-blue-400 hover:underline">
                        {data.email}
                    </a>
                </div>
            </div>

        </div>
    </div>
);
}
