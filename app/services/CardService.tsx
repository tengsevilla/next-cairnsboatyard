"use client"

import { TService } from "@/data/Services"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Props {
    item?: TService
}
export const CardService = ({ item }: Props) => {
    const router = useRouter()
    return (
        <div className="group w-[320px] h-[380px] rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer relative"
            onClick={() => router.push(item?.url || "/services")}
        >
            {/* Gradient Background */}
            {/* Full-Card Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={item?.imageUrl || "https://picsum.photos/320/380"}
                    alt="Random Image"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300 z-0" />

            {/* Text Content */}
            <div className="absolute bottom-5 left-5 text-white z-10">
                {/* <p className="text-xs tracking-wide text-white font-semibold mb-1">
                MAINTENANCE
            </p> */}
                <h3 className="text-2xl font-bold">{item?.name}</h3>
            </div>

            {/* Animated Button */}
            <div className="absolute bottom-5 right-5 z-10">
                <div className="w-8 h-8 border bg-transparent border-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <ArrowRight className="text-white transition-colors duration-300 group-hover:text-primary-dark" />
                </div>
            </div>
        </div>
    )
}