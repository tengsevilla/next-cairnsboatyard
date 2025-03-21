import Navbar from "@/components/Navbar";
import TextRotateHero from "@/components/TextRotateHero";
import ImageHero from "@/public/hero.jpg"
import ImageHero2 from "@/public/hero-2.jpeg";
import Image from "next/image";
import { Anchor, ShieldCheck, Ship, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { AuroraButton } from "@/components/ui/aurora-button";
import Masonry from "@/components/Masonry/Masonry";
import MapEmbed from "@/components/MapEmbed";
import AnimatedList from "@/components/AnimatedList/AnimatedList";
import { DataReviewsList } from "@/data/Reviews";
import { DataFacility } from "@/data/Facility";

import { Footer } from "@/components/Footer";

const services = [
    { name: "Boat Repairs", icon: <Wrench className="w-8 h-8 text-primary" />, description: "Professional maintenance and repairs to keep your boat in top condition." },
    { name: "Docking Services", icon: <Anchor className="w-8 h-8 text-primary" />, description: "Safe and secure docking solutions with premium facilities." },
    { name: "Boat Sales", icon: <Ship className="w-8 h-8 text-primary" />, description: "Find the perfect boat for your needs with our expert guidance." },
    { name: "Safety Inspection", icon: <ShieldCheck className="w-8 h-8 text-primary" />, description: "Comprehensive safety checks to ensure a worry-free experience on the water." }
];

export default function Home() {
    return (
        <Navbar>
            {/* Hero section */}
            <section
                id="hero"
                className="w-full h-170 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${ImageHero.src})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backgroundBlendMode: 'darken'
                }}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="mb-4 text-center">
                        <h1 className="text-white text-6xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Some impactful phrase here</h1>
                        <p className="text-white text-xl mt-2" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                    <TextRotateHero />
                </div>
            </section>

            {/* About company section */}
            <section className="bg-background py-16 text-primary-dark">
                <div className="container mx-auto px-4 md:px-32 flex flex-col md:flex-row gap-8">

                    {/* Left: Text Content */}
                    <div className="md:w-1/2">
                        <div>
                            <h2
                                className="text-4xl font-bold mb-6 md:text-left text-center"
                            >
                                Cains Boat Yard
                            </h2>
                            <p className="text-lg mb-4 md:text-left text-center">
                                We are a leading company in the industry, committed to providing top-notch services and products to our customers. Our team of experts works tirelessly to ensure customer satisfaction and continuous improvement in all aspects of our business.
                            </p>
                        </div>
                        {/* Call to action */}
                        <div className="text-center md:text-left w-full md:w-[120px]">
                            <AuroraButton className="bg-primary" glowClassName="from-[#3c4d32] via-accent to-[#3c4d32]">
                                Contact Us
                            </AuroraButton>
                        </div>

                        {/* Offers & Services Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {services.map((service, index) => (
                                <Card key={index} className="border border-gray-200 shadow-md">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        {service.icon}
                                        <CardTitle>{service.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={ImageHero2}
                            alt="Hero Image"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-primary-dark py-8 text-white">
                <VelocityScroll
                    text="We're open from 6:30 AM to 6:30 PM. Contact us at +63 9999 999 999. You can find us in 69 Lee Yan Road East Trinity, 4871."
                    default_velocity={1}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white pointer-events-auto"
                />
            </section>

            {/* Facility Section */}
            <section className="bg-background py-16 text-primary-dark">
                <div className="container mx-auto px-4 md:px-32">
                    <h2 className="text-4xl font-bold mb-6 text-center">Our facility</h2>
                    <div className="w-full h-auto">
                        <Masonry data={DataFacility} />
                    </div>
                </div>
            </section>

            {/* Embedded google map and reviews */}
            <section className="bg-background py-8 text-primary-dark">
                <div className="container mx-auto px-4 md:px-32 flex flex-col md:flex-row gap-8">
                    {/* Left: Google Map */}
                    <div className="md:w-1/2 pb-8 px-8">
                        <MapEmbed />
                    </div>

                    {/* Right: Reviews */}
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Location &apos; Reviews</h3>
                        <div className="space-y-4">
                            <AnimatedList
                                items={DataReviewsList}
                                // onItemSelect={(item, index) => console.log(item, index)}
                                showGradients={true}
                                enableArrowNavigation={true}
                                displayScrollbar={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer with Contact Us */}
            <Footer />
        </Navbar >
    );
}
