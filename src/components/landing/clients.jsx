export default function Clients() {
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
                    <h2 className="text-gray-600 dark:text-neutral-400">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
                </div>

                <div className="flex justify-center">
                    <div className="items-center flex">
                        <img src="./src/assets/sensorit.png" alt="" />
                    </div>
                    <div className="items-center flex">
                        <img src="./src/assets/royal_mcgrady.png" alt="" />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                        Read case studies
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                </div>
            </div>
        </>
    )
}