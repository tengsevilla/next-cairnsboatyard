import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ImageHero from "@/public/hero-services-min-2.jpg";
import PhotoGallery, { Slide } from "./PhotoGallery";
import { Badge } from "@/components/ui/badge";
import fs from 'fs';
import path from 'path';


export default function Page() {

    const dir = path.join(process.cwd(), 'public/facility');
    const files = fs.readdirSync(dir).filter(file => /\.(jpe?g|png)$/i.test(file));

    const slides: Slide[] = files.map((file, index) => {
        return {
            src: `/facility/${file}`,
            alt: `Photo ${index + 1}`,
        };
    });

    return (
        <Navbar>
            <section
                id="hero"
                className="w-[calc(100%-16px)] mx-auto mt-22 mb-8 h-[150px] rounded-lg bg-cover bg-center flex items-center justify-center sm:justify-start pl-0 sm:pl-64 sm:h-[250px] sm:rounded-4xl sm:w-[calc(100%-400px)]"
                style={{
                    backgroundImage: `url(${ImageHero.src})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backgroundBlendMode: 'darken',
                }}
            >
                <h1 className="text-white text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Gallery</h1>
            </section>
            <section className="py-4">
                <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6">
                            Photo Collection
                        </Badge>
                        <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                            Our Facilities<br />
                            and Equipments
                        </h2>
                        <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                            Discover more about our facilities and equipment through our photo gallery.
                        </p>

                    </div>
                </div>
            </section>

            <section className="pt-2 pb-8 px-4 container mx-auto flex flex-col items-center gap-16 lg:px-8">
                <PhotoGallery slides={slides} />
            </section>
            {/* Footer with Contact Us */}
            <Footer />
        </Navbar>
    )
}