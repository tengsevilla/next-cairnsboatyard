import Navbar from "@/components/Navbar";
// import TextRotateHero from "@/components/TextRotateHero";
import ImageHero from "@/public/hero-min.jpg"
import ImageHero3 from "@/public/hero-3-min.jpg";
import Image from "next/image";
import { AuroraButton } from "@/components/ui/aurora-button";
import Masonry from "@/components/Masonry/Masonry";
import MapEmbed from "@/components/MapEmbed";
import AnimatedList from "@/components/AnimatedList/AnimatedList";
import { DataReviewsList } from "@/data/Reviews";
import { DataFacility } from "@/data/Facility";

import { Footer } from "@/components/Footer";
import { CardServices } from "@/components/CardServices";

export default function Page() {
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
                        <h1 className="text-white text-6xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Trusted boat care and storage — adventure-ready, always.</h1>
                        <div className="p-4 mx-4 md:mx-32 rounded" style={{ backgroundColor: 'rgba(8, 93, 150, 0.5)' }}>
                            <p
                                className="text-white text-xl mt-2"
                                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
                            >
                                A family owned and operated business, we understand that your boat is more than just a vessel; it&apos;s your gateway to adventure in Far North Queensland, the Great Barrier Reef or the Worldwide, we are your trusted destination for comprehensive boat care, maintenance, and secure storage solutions both long and short term.
                            </p>
                        </div>

                    </div>
                    {/* <TextRotateHero /> */}
                </div>
            </section>

            {/* About company section */}
            <section className="bg-background py-16 text-primary-dark">
                <div className="container mx-auto px-4 md:px-32">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">

                        {/* Left Top: Heading + First 2 Paragraphs (fills available space) */}
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
                                Cairns Boat Yard
                            </h2>

                            <p className="text-lg mb-4 text-center md:text-left">
                                Located in the heart of this stunning marine environment, we pride ourselves on our unwavering commitment to quality, reliability, and a personal touch that sets us apart. With years of experience deeply rooted in the marine industry, our team of skilled professionals and trusted subcontractors share your passion for boating and understand the responsibility that comes with ownership.
                            </p>
                            <p className="text-lg mb-4 text-center md:text-left">
                                We believe in treating every vessel with the utmost care and attention. From routine maintenance and essential repairs to specialized services and safe storage both in the water or dry storage in the yard, our goal is to ensure your boat is always in top condition and ready for your next adventure on the water.
                            </p>
                            <p className="text-lg mb-4 text-center md:text-left">
                                Whether you require regular upkeep, specific repairs, or a secure place to store your boat, we are here to provide you with reliable and high-quality service tailored to your individual needs.
                            </p>
                        </div>

                        {/* Right Top: Image (fixed width, aligned right) */}
                        <div className="flex justify-end items-start">
                            <Image
                                src={ImageHero3}
                                alt="Hero Image"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Full Width: Remaining Paragraphs + Services */}
                    <div className="mt-8 md:mt-4">

                        <p className="text-lg mb-4 text-center md:text-left">
                            We look forward to the opportunity to care for your boat and become your trusted partner in your boating journey. Please do not hesitate to contact us to discuss your requirements or to learn more about our services.
                        </p>

                        {/* Services Section */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                            <CardServices />
                        </div>
                    </div>
                </div>
            </section>




            <section className="bg-primary-dark py-8 text-white flex items-center justify-center">
                <div className="flex flex-row items-center gap-4">
                    <div className="text-center text-4xl font-bold">
                        Interested? Inquire about us today!
                    </div>
                    <a href="/contact">
                        <AuroraButton className="bg-primary cursor-pointer" glowClassName="from-[#f2e9a3] via-[#ffee73] to-[#f2e9a3]">
                            Contact Us
                        </AuroraButton>
                    </a>
                </div>
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
                        <h3 className="text-2xl font-bold mb-4">Location & Reviews</h3>
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
