export default function LandingHero() {
    return (
        <>
            <section className="overflow-hidden items-center bg-gray-50 sm:grid sm:grid-cols-2">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-semibold text-gray-900 md:text-6xl">
                            We build software <br /> so you can focus on <br /> business
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="https://docs.google.com/forms/d/1ej35E8SmyZO4r6LUjN5ZDbyGZoejAJdeGeFz5tzfyJs/edit?ts=67d54b56&pli=1"
                                className="inline-block rounded-sm bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                                target="_blank"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>
        </>
    )
}