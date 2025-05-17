import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ImageHero from "@/public/contact-Us-bg.jpeg";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import FormContact from "./FormContact";
import { FrequentlyAsked } from "./FrequentlyAsked";
import { DataCompany } from "@/data/Contact";

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
                <h1 className="text-white text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Contact Us</h1>
            </section>

            <section>
                <div className="w-full max-w-6xl mx-auto border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                        {/* Write to Us */}
                        <div className="flex-1 px-4 py-6 sm:py-0 flex flex-col items-start text-center sm:text-left">
                            <Mail className="w-6 h-6 mb-2 text-gray-800" />
                            <h4 className="font-semibold text-gray-900 mb-2">Write to Us</h4>
                            <a
                                href="mailto:orchardliving@mail.com"
                                className="inline-flex items-center text-gray-600 hover:text-black underline underline-offset-2"
                            >
                                {DataCompany.email} <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                        {/* Call Us */}
                        <div className="flex-1 px-4 py-6 sm:py-0 flex flex-col items-start text-center sm:text-left">
                            <Phone className="w-6 h-6 mb-2 text-gray-800" />
                            <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                            <p className="text-gray-600">{DataCompany.contact}</p>
                        </div>

                        {/* Visit Us */}
                        <div className="flex-1 px-4 py-6 sm:py-0 flex flex-col items-start text-center sm:text-left">
                            <MapPin className="w-6 h-6 mb-2 text-gray-800" />
                            <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                            <p className="text-gray-600">{DataCompany.address}</p>
                            <a
                                href={DataCompany.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-600 hover:text-black underline underline-offset-2 mt-1"
                            >
                                Get directions <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-8 mx-4 sm:mx-0">
                <FormContact />
            </section>
            <section className="max-w-3xl mx-auto px-4 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Looking For Help?</h2>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Volutpat est faucibus eget
                        quis quisque in molestie vestibulum.
                    </p>
                </div>
                <FrequentlyAsked />
            </section>
            {/* Footer with Contact Us */}
            <Footer />
        </Navbar>
    )
}