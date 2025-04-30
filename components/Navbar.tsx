"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoCompany from "@/public/newlogo.png";
import Image from "next/image";
import { DataCompany } from "@/data/Contact";
const navItems = [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
];

interface Props {
    children: React.ReactNode;
}

export default function Navbar({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <>
            <div className="relative">
                <nav className="fixed top-0 left-0 w-full z-50 bg-primary-dark shadow-lg py-3 transition-all">
                    <div
                        ref={navRef}
                        className="container mx-auto px-6 flex justify-between items-center"
                    >
                        <Link href="/" className="text-xl font-bold text-white flex items-center space-x-2">
                            <Image
                                src={LogoCompany as unknown as string}
                                alt="Cairns Boat Yard"
                                className="w-50 h-12"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
                            {navItems.map((item) => {
                                const isActive = pathname?.startsWith(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`text-lg text-white relative 
                    ${isActive ? "wave-underline" : "hover:text-gray-300"}
                `}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>



                        {/* Contact Number */}
                        <div className="hidden md:flex items-center space-x-2 text-white font-semibold ml-6">
                            <Phone className="w-5 h-5" />
                            <a href={`tel:${DataCompany.contact}`} className="hover:text-gray-300 text-lg">
                                {DataCompany.contact}
                            </a>
                        </div>

                        {/* Toggle Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation with Framer Motion */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                key="mobile-nav"
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                className="md:hidden px-6 pt-4 pb-6 bg-primary-dark flex flex-col items-center space-y-4"
                            >
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-white hover:text-gray-300 border-b ${pathname?.startsWith(item.href)
                                            ? "border-white"
                                            : "border-transparent"
                                            } pb-1`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>

            <main className="mt-[72px]">{children}</main>
        </>
    );
}
