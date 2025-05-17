import { Anchor, ShieldCheck, Ship, ShipWheel, Wrench } from "lucide-react";
import { JSX } from "react";
import { DataFacility } from "./Facility";

export type TService = {
    name: string;
    icon: JSX.Element;
    shortDescription: string;
    url: string;
    imageUrl: string | undefined;
    details: {
        description: string;
        benefit: string;
        benefits: string[];
    }
};

export const DataServices = [
    {
        name: "Boat Maintenance", icon: <Wrench className="w-8 h-8 text-primary" />,
        shortDescription: "Professional antifouling, Propspeed application, topside polishing, waterblasting, and anode replacement using premium marine products.",
        url: "/services/details?service=boat-repairs",
        imageUrl: DataFacility.find((item) => item.id === 1)?.image,
        details: {
            description: "Comprehensive care for your vessel, including antifouling preparation and application, Propspeed treatment for underwater metals, topside polishing, high-pressure waterblasting, and anode replacement. We use premium products like International and Sea Hawk antifouls, ensuring top-quality results tailored to your vessel’s needs.",
            benefit: "Enhance vessel performance, prevent costly repairs, and maintain long-term value through expert maintenance using premium marine-grade products.",
            benefits: [
                "Improves fuel efficiency by reducing marine growth on the hull.",
                "Extends the life of underwater components with professional antifouling and Propspeed applications.",
                "Restores and protects topside surfaces with expert polishing and sealing."
            ]
        },
        gallery: [
            '/services/maintenance-1.jpg',
            '/services/maintenance-2.jpg',
            '/services/maintenance-3.jpg',
            '/services/maintenance-4.jpg',
            '/services/maintenance-5.jpg',
            '/services/maintenance-6.jpg',
            '/services/maintenance-7.jpg',
            '/services/maintenance-8.jpg',
            '/services/maintenance-9.jpg',
            '/services/maintenance-10.jpg',
            '/services/maintenance-11.jpg',
            '/services/maintenance-12.jpg',
            '/services/maintenance-13.jpg',
            '/services/maintenance-14.jpg',
            '/services/maintenance-15.jpg',
            '/services/maintenance-16.jpg',
        ],
        galleryDescription: "Discover more about our maintenance services, facilities, and the stunning Cairns region.",
    },
    {
        name: "Docking Services", icon: <Anchor className="w-8 h-8 text-primary" />,
        shortDescription: "Commercial-grade swing moorings available in water depths of 5 to 20 meters, suitable for vessels up to 70ft. Our dock can accommodate vessels up to 65ft in length with a 12ft draft.",
        url: "/services/details?service=docking-services",
        imageUrl: DataFacility.find((item) => item.id === 21)?.image,
        details: {
            description: "Cairns Boat Yard offers commercial-grade swing moorings available in water depths of 5 to 20 meters, suitable for vessels up to 70ft. Our dock can accommodate vessels up to 65ft in length with a 12ft draft. It is available for both short-term and long-term use and is equipped with water, as well as single and three-phase power.",
            benefit: "Secure and convenient mooring solutions with full utility access, ideal for both short and long-term stays.",
            benefits: [
                "Accommodates large vessels up to 70ft with deep water moorings.",
                "Provides single and three-phase power for essential onboard systems.",
                "Ideal for service staging, extended stays, or refits near shore."
            ]

        }
    },
    {
        name: "Safety Inspection", icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        shortDescription: "We can arrange out-of-water surveys for insurance and pre-sale purposes. We also have qualified delivery skippers for vessel transport worldwide.",
        url: "/services/details?service=safety-inspection",
        imageUrl: DataFacility.find((item) => item.id === 7)?.image,
        details: {
            description: "Cairns Boat Yard facilitates out-of-water surveys for insurance assessments and pre-sale inspections, working closely with surveyors to ensure a smooth process. We also offer qualified and experienced delivery skippers for reliable vessel transport locally and internationally.",
            benefit: "Ensure peace of mind and compliance with insurance and sale requirements through certified inspections and professional delivery services.",
            benefits: [
                "Supports insurance and pre-sale needs with out-of-water surveys.",
                "Streamlines the inspection process by coordinating directly with surveyors.",
                "Offers global delivery with experienced, qualified skippers."
            ]
        }
    },
    {
        name: "Boat Sales",
        icon: <Ship className="w-8 h-8 text-primary" />,
        shortDescription: "We assist with the sale of your boat, offering expert support in advertising, inspections, and negotiations to ensure a smooth transaction.",
        url: "/services/details?service=boat-sales",
        imageUrl: DataFacility.find((item) => item.id === 8)?.image,
        details: {
            description: "Cairns Boat Yard provides comprehensive support for boat sales, guiding owners through every step of the process—from preparing listings and coordinating viewings to handling inspections and finalizing negotiations. With industry knowledge and market insight, we help you achieve a successful and stress-free sale.",
            benefit: "Sell your vessel confidently with professional support in marketing, buyer engagement, and transaction handling.",
            benefits: [
                "Professional marketing to attract qualified buyers.",
                "Assistance with inspections, paperwork, and compliance requirements.",
                "Expert negotiation support to secure the best outcome.",
                "Local and international buyer network access.",
                "On-site presentation and preparation services to improve sale readiness."
            ]
        }
    },
    {
        name: "Other Services", icon: <ShipWheel className="w-8 h-8 text-primary" />,
        shortDescription: "We provide a full range of on-site services and facilities, including mechanical repairs, painting, fiberglass work, compressed air hire, and more—everything you need for efficient vessel maintenance.",
        url: "/services/details?service=other-services",
        imageUrl: DataFacility.find((item) => item.id === 13)?.image,
        details: {
            description: "Cairns Boat Yard offers a wide range of additional services and facilities to support all aspects of vessel maintenance and repair.",
            benefit: "Access a full suite of support services on-site to complete your vessel maintenance in one location, efficiently and professionally.",
            benefits: [
                "On-site mechanical and fiberglass specialists for expert repairs.",
                "Available equipment including compressed air, trestles, and planks.",
                "Painting and signwriting services tailored to your vessel’s branding or restoration needs."
            ]

        }
    }

];