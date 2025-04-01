"use client";

import { useState } from "react";
import clsx from "clsx";
import { DataServices } from "@/data/Services";
import { usePathname, useSearchParams } from "next/navigation";

const TabsService = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const service = searchParams.get('service');
    const fullPath = `${pathname}?service=${service}`;
    const [activeTab, setActiveTab] = useState(fullPath);

    return (
        <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto rounded-xl overflow-hidden sm:h-[700px]">
            {/* Tab List */}
            <div className="flex sm:flex-col bg-gray-100 p-2 sm:p-4 sm:min-w-[240px]">
                {DataServices.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.url)}
                        className={clsx(
                            "flex items-center gap-2 px-4 py-4 rounded-md text-sm transition-all w-full justify-center sm:justify-start cursor-pointer",
                            activeTab === tab.url
                                ? "bg-white text-primary font-semibold shadow"
                                : "text-gray-600"
                        )}
                    >
                        {tab.icon}
                        <span className="hidden sm:inline text-md">{tab.name}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-4 sm:p-6">
                <h2 className="text-4xl font-semibold mb-2">
                    {DataServices.find((t) => t.url === activeTab)?.name}
                </h2>
                <div className="text-gray-600">
                    {DataServices.find((t) => t.url === activeTab)?.details.description}
                </div>
                <h2 className="text-4xl font-semibold mb-2 mt-8">
                    Benefits
                </h2>
                <div className="text-gray-600 mb-4">
                    {DataServices.find((t) => t.url === activeTab)?.details.benefit}
                </div>

                <div className="text-gray-600">
                    {DataServices.find((t) => t.url === activeTab)?.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <span className="text-green-500">✔</span>
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TabsService;
