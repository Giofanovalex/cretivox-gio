"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Copy from "./Copy";

const experiences = [
    {
        company: "Coffee Eight",
        role: "Social Media Freelance",
        period: "Nov 2023 - Nov 2024",
        description: [
            "Managed overall content strategy to boost brand engagement and drive high visibility.",
            "Analyzed audience insights and performance data to prepare regular reports for stakeholders.",
            "Coordinated with café owners to execute promotional campaigns, resulting in 1,000+ views per post.",
        ],
    },
    {
        company: "Programmer_males;",
        role: "Community Lead & Academic Core Team",
        period: "Jan 2023 - Apr 2024",
        description: [
            "Led platform growth to over 400 members.",
            "Developed educational materials to accelerate fundamental web and software development skills.",
        ],
    },
    {
        company: "KitaBareng",
        role: "Research Analyst Intern",
        period: "Jan 2021 - Jan 2022",
        description: [
            "Provided vital research insights to support strategic business decisions.",
            "Conducted content material research to identify relevant topics and audience needs.",
            "Performed competitor and tactical analysis to understand content strategies.",
        ],
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".experience-item",
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="experience"
            className="flex min-h-screen flex-col items-center justify-center px-6 py-20 bg-tone-400"
        >
            <div className="mb-20 text-center">
                <Copy textSize="xl" blockColor="#fe0100" className="text-tone-100">
                    EXPERIENCE
                </Copy>
            </div>

            <div className="w-full max-w-4xl space-y-12">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="experience-item relative border-l-2 border-tone-300 pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 h-4 w-4 bg-tone-500" />

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-3xl font-bold uppercase text-tone-100">{exp.company}</h3>
                            <span className="text-sm font-bold text-tone-500 uppercase mt-2 md:mt-0">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-xl font-medium text-tone-300 uppercase mb-6">{exp.role}</p>

                        <ul className="space-y-2 text-tone-200 text-lg leading-relaxed">
                            {exp.description.map((desc, idx) => (
                                <li key={idx}>- {desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
