export default function ServiceCard({title, icon}) {
    return (
        <>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                    </svg>
                </div>

                <div>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{icon}</p>
                </div>
            </div>
        </>
    )
}