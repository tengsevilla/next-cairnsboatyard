"use client";

import { motion, LayoutGroup } from "framer-motion";
import RotatingText from "./ui/RotatingText";
import { useState, useEffect } from "react";

export default function TextRotateHero() {
    const [isClient, setIsClient] = useState(false);
    const items = ['Trusted', 'Reliable', 'Secure', 'Best Value', 'Professional'];

    // Ensure this component renders only after hydration
    useEffect(() => {
        setIsClient(true);
    }, []);


    if (!isClient) return null; // Prevents hydration mismatch
    return (
        <LayoutGroup>
            <motion.div className="flex items-center" layout>
                <RotatingText
                    texts={items}
                    mainClassName={`text-6xl bg-primary/70 text-white px-4 sm:px-4 md:px-6 overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg`}
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </motion.div>
        </LayoutGroup>

    )
}