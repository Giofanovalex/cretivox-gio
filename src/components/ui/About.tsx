"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: 50, opacity: 0.2 },
                {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="flex min-h-[80vh] flex-col items-center justify-center bg-muted px-6 py-20 text-center"
        >
            <div className="max-w-4xl space-y-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red">
                    About Me
                </h2>
                <p
                    ref={textRef}
                    className="text-3xl font-medium leading-relaxed text-foreground md:text-5xl"
                >
                    An enthusiastic, creative, and solution-oriented Computer Science
                    graduate from Gunadarma University.
                </p>
            </div>
        </section>
    );
}
