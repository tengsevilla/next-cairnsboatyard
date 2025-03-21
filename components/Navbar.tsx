"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Aurora from "./ui/Aurora";

// ✅ Dynamically import MobileNavigation to prevent SSR issues
const MobileNavigation = dynamic(() => import("./MobileNavigation"), { ssr: false });

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Location", href: "#location" },
    { name: "About Us", href: "#about" },
];

interface Props {
    children: React.ReactNode;
}

export default function LayoutApp({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // ✅ Ensure hydration consistency
    useEffect(() => {
        setIsClient(true);
    }, []);

    // ✅ Detect scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Close mobile menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <>
            <div className="relative">
                {/* Fixed Navbar */}
                <nav
                    className={`fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-200 ${isScrolled
                        ? "bg-transparent backdrop-blur-2xl shadow-lg py-3"
                        : "bg-transparent py-6"
                        }`}
                >
                    {/* Aurora Inside Navbar */}
                    <div className="absolute inset-0 -z-10 h-[400px]">
                        {/*     ["#064273", "#76b6c4", "#064273"] */}
                        <Aurora
                            // colorStops={isScrolled ? ["#064273", "#76b6c4", "#064273"] : ["#3c4d32", "#97b55e", "#3c4d32"]}
                            colorStops={["#064273", "#76b6c4", "#064273"]}
                            blend={0.9}
                            amplitude={1.0}
                            speed={0.5}
                        />
                    </div>

                    <div ref={navRef} className="container mx-auto px-6 flex justify-between items-center transition-all duration-300">
                        {/* Logo */}
                        <Link href="/" className="text-xl font-bold text-white ">
                            Logo
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex flex-1 justify-end space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-white hover:text-gray-300 border-b-2 ${pathname?.startsWith(item.href) ? "border-white" : "border-transparent"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Contact Number - Rightmost */}
                        <div className="hidden md:flex items-center space-x-2 text-white font-semibold ml-6">
                            <Phone className="w-5 h-5" />
                            <a href="tel:+61754924999" className="hover:text-gray-300">
                                (07) 999 9999
                            </a>
                        </div>

                        {/* Mobile Menu Button (CSR Only) */}
                        {isClient && <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />}
                    </div>

                    {/* Mobile Navigation (CSR Only) */}
                    {isClient && <MobileNavigation isOpen={isOpen} navItems={navItems} />}
                </nav>

                {/* Page Content */}

            </div>
            {/* 76px is the exact value for the navbar */}
            <main className={`mt-[76px]`}>{children}</main>
        </>

    );
}

// ✅ Mobile Menu Button Component (CSR Only)
const MobileMenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
};
