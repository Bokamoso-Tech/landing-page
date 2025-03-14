import Clients from "../components/landing/clients";
import GetStarted from "../components/landing/get-started";
import LandingHero from "../components/landing/landing-hero";
import ServiceCard from "../components/landing/service-card";

export default function LandingPage() {
    const services = [
        {
            title: "Custom Software Development",
            icon: "React, Next.js, TailwindCSS"
        },
        {
            title: "UX/UI Design",
            icon: "Figma, Adobe XD, Sketch"
        },
        {
            title: "Mobile App Development",
            icon: "React Native, Flutter, Ionic"
        }
    ]

    return (
        <section className="w-full">
            <LandingHero />

            <div className="flex flex-col items-center justify-center mt-10 text-center">
                <h2 className="text-4xl font-bold m-0">
                    Focus on innovation, we will worry about the code
                </h2>
            </div>

            <div className="flex w-full justify-center gap-4 mt-10">
                {
                    services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))
                }
            </div>

            <Clients/>
            <GetStarted />
        </section>
    )
}