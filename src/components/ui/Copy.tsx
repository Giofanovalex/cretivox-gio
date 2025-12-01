"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CopyProps {
    children: string; // Restricting to string for easier splitting
    className?: string;
    delay?: number;
    blockColor?: string;
    stagger?: number;
    duration?: number;
    textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
}

export default function Copy({
    children,
    className,
    delay = 0,
    blockColor = "#fe0100", // --tone-500
    stagger = 0.05,
    duration = 0.6,
    textSize = "md",
}: CopyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            const lines = containerRef.current.querySelectorAll(".block-line-wrapper");

            lines.forEach((line) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: line,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    delay: delay,
                });

                tl.fromTo(
                    line.querySelector(".block-revealer"),
                    {
                        scaleX: 1,
                        transformOrigin: "left",
                    },
                    {
                        scaleX: 0,
                        transformOrigin: "right",
                        duration: duration,
                        ease: "power2.inOut",
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, [delay, duration, stagger]);

    const words = children.split(" ");

    const sizeClasses = {
        sm: "text-lg md:text-xl",
        md: "text-2xl md:text-3xl",
        lg: "text-4xl md:text-5xl",
        xl: "text-5xl md:text-7xl",
        "2xl": "text-6xl md:text-8xl",
        hero: "text-7xl md:text-9xl leading-[0.8]",
    };

    return (
        <div
            ref={containerRef}
            className={cn("flex flex-wrap gap-x-[0.25em] gap-y-1", sizeClasses[textSize], className)}
        >
            {words.map((word, i) => (
                <div key={i} className="block-line-wrapper relative inline-block">
                    <span className="relative z-0 opacity-100">{word}</span>
                    <div
                        className="block-revealer absolute inset-0 z-10 bg-tone-500"
                        style={{ backgroundColor: blockColor }}
                    />
                </div>
            ))}
        </div>
    );
}
