import Navbar from "@/components/Navbar";
import ImageHero from "@/public/hero-services-min-2.jpg";
import TabsService from "./TabsService";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

export default function Page() {
    return (
        <Navbar>
            <section
                id="hero"
                className="w-[calc(100%-16px)] mx-auto mt-22 mb-0 h-[150px] rounded-lg bg-cover bg-center flex items-center justify-center sm:justify-start pl-0 sm:pl-64 sm:h-[250px] sm:rounded-4xl sm:w-[calc(100%-400px)]"
                style={{
                    backgroundImage: `url(${ImageHero.src})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backgroundBlendMode: 'darken',
                }}
            >
                <h1 className="text-white text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Service Details</h1>
            </section>
            <section className="px-4 py-8">
                <Suspense fallback={<div>Loading...</div>}>
                    <TabsService />
                </Suspense>

            </section>

            {/* Footer with Contact Us */}
            <Footer />
        </Navbar>
    )
}