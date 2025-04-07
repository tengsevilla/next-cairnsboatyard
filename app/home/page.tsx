import Navbar from "@/components/Navbar";
import TextRotateHero from "@/components/TextRotateHero";
import ImageHero from "@/public/hero-min.jpg"
import ImageHero2 from "@/public/hero-2-min.jpeg";
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
                                We are a leading company in the industry, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                        </div>

                        {/* Offers & Services Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <CardServices />
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
