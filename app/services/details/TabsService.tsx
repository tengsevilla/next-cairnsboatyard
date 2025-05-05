"use client";

import { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import { DataServices } from "@/data/Services";
import { usePathname, useSearchParams } from "next/navigation";
import { DivBoatMaintenanceDetails } from "./DivBoatMaintenanceDetails";
import { ListOtherServices } from "./ListOtherServices";
import Image from "next/image";

const TabsService = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [activeTab, setActiveTab] = useState<string | null>(null);

    // Ensure activeTab is only set after mount
    useEffect(() => {
        const service = searchParams.get("service");
        const fullPath = `${pathname}?service=${service}`;
        setActiveTab(fullPath);
    }, [pathname, searchParams]);

    // Memoize active service data
    const activeService = useMemo(() => {
        return DataServices.find((t) => t.url === activeTab);
    }, [activeTab]);

    if (!activeService) return null; // Don't render until activeTab is ready

    return (
        <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto rounded-xl overflow-hidden sm:h-auto min-h-[700px]">
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
                <h2 className="text-4xl font-semibold mb-2">{activeService.name}</h2>
                <div className="text-gray-600">{activeService.details.description}</div>

                {activeService.name === "Boat Maintenance" && <DivBoatMaintenanceDetails />}
                {activeService.name === "Other Services" && <ListOtherServices />}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h2 className="text-4xl font-semibold mb-2">Benefits</h2>
                        <div className="text-gray-600 mb-4">{activeService.details.benefit}</div>
                        <div className="text-gray-600">
                            {activeService.details.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2 mb-2">
                                    <span className="text-green-500">✔</span>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        {activeService.imageUrl && (
                            <Image
                                src={activeService.imageUrl}
                                alt="Service Image"
                                className="rounded-lg shadow-md max-w-full"
                                width={500}
                                height={300}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsService;
