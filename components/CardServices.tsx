"use client"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";
import { DataServices } from "@/data/Services";

export const CardServices = () => {
    const router = useRouter();

    return (
        <>
            {
                DataServices.map((service, index) => (
                    <Card
                        key={index}
                        className="border border-gray-200 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                        onClick={() => router.push(service.url)}
                    >
                        <CardHeader className="flex flex-row items-center gap-4">
                            {service.icon}
                            <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}