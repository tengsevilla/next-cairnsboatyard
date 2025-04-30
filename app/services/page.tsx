import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import ImageHero from "@/public/hero-services-min-2.jpg";
import { CardService } from "./CardService";
import { DataServices } from "@/data/Services";
export default function Page() {
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
                <h1 className="text-white text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Services</h1>
            </section>

            <section className="py-4">
                <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6">
                            Our Services
                        </Badge>
                        <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                            Boat Maintenance<br />
                            and Services
                        </h2>
                        <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        </p>

                    </div>
                </div>
                <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16 pb-16">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {
                            DataServices.map((service, index) => (
                                <CardService item={service} key={index} />
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* Footer with Contact Us */}
            <Footer />
        </Navbar>
    )
}