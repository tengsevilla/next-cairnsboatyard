"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
    isOpen: boolean;
    navItems: { name: string; href: string }[];
}

export default function MobileNavigation({ isOpen, navItems }: Props) {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-white z-40 flex flex-col items-center space-y-4 pt-20"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`text-gray-700 hover:text-gray-600 border-b-2 ${pathname?.startsWith(item.href) ? "border-gray-900" : "border-transparent"}`}
                        >
                            <Button variant="ghost">{item.name.toUpperCase()}</Button>
                        </a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
