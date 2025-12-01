"use client";

import { useRef } from "react";
import Copy from "./Copy";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-tone-400 lg:flex lg:flex-row"
        >
            {/* Left Side - Image Background */}
            <div className="absolute inset-0 h-full w-full lg:relative lg:h-screen lg:w-3/4">
                <div className="absolute inset-0">
                    <Image
                        src="https://noxccuzjrkvkcztozjlc.supabase.co/storage/v1/object/public/product-images/cretivox/hero1.jpg"
                        alt="Vieri Giofanov"
                        fill
                        className="object-cover transition-all duration-700"
                        priority
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-8 lg:relative lg:flex lg:h-screen lg:w-1/4 lg:flex-col lg:justify-center lg:p-12 lg:bg-tone-400">
                <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-8 text-tone-500 text-center lg:text-left break-words">
                    Vieri Giofanov
                </h1>
                <div className="w-full">
                    <Copy
                        textSize="md"
                        blockColor="#fe0100"
                        delay={0.5}
                        className="text-2xl md:text-3xl font-bold leading-none text-center lg:text-left text-tone-100"
                    >
                        DESIGN IS INTELLIGENCE MADE VISIBLE.
                    </Copy>
                </div>
            </div>
        </section>
    );
}
