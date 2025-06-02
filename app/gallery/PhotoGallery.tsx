'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export interface Slide {
    src: string;
    width?: number;
    height?: number;
    alt: string;
}

export default function PhotoGallery({ slides }: { slides: Slide[] }) {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    return (
        <>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className="cursor-pointer break-inside-avoid overflow-hidden rounded shadow"
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt || ''}
                            width={400}
                            height={300}
                            className="w-full h-[200px] object-cover transition-transform duration-200 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
            
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={currentIndex}
                controller={{closeOnBackdropClick: true}}
            />
        </>
    );
}
