"use client";
import { DataFAQs } from "@/data/FAQs";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function FrequentlyAsked() {

    const [openId, setOpenId] = useState<number | null>(1); // default open first

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="divide-y divide-gray-200 border-t border-gray-200">
            {DataFAQs.map((faq) => (
                <div key={faq.id} className="py-6">
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">
                                {String(faq.id).padStart(2, "0")}
                            </p>
                            <button
                                onClick={() => toggle(faq.id)}
                                className="text-left text-lg font-semibold text-gray-800 hover:text-black"
                            >
                                {faq.question}
                            </button>
                        </div>

                        <button
                            onClick={() => toggle(faq.id)}
                            className="border border-gray-300 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-50 transition cursor-pointer"
                        >
                            {openId === faq.id ? (
                                <Minus className="w-4 h-4" />
                            ) : (
                                <Plus className="w-4 h-4" />
                            )}
                        </button>
                    </div>

                    <AnimatePresence>
                        {openId === faq.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-4 text-gray-600"
                            >
                                <p>{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}