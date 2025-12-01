"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Copy from "./Copy";
import {
    Code2,
    Database,
    LayoutTemplate,
    Wrench,
} from "lucide-react";

const skillsData = [
    {
        category: "Programming Languages",
        icon: Code2,
        description: "Core languages for logic and systems.",
        items: ["JavaScript (ES6+)", "TypeScript", "Go (Golang)", "PHP", "Python", "SQL"],
    },
    {
        category: "Web Development",
        icon: LayoutTemplate,
        description: "Frameworks & libraries for modern web apps.",
        items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Laravel", "CodeIgniter"],
    },
    {
        category: "Backend & Database",
        icon: Database,
        description: "Server-side logic and data management.",
        items: ["Node.js", "Express", "REST API", "gRPC", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        description: "Development tools and deployment.",
        items: ["Git", "Docker", "Google Cloud Platform (GCP)", "Postman", "Figma", "VS Code"],
    },
];

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".skill-category-card");
            cards.forEach((card: any, index) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveCategory(index),
                    onEnterBack: () => setActiveCategory(index),
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative z-10 min-h-screen w-full bg-tone-400 px-6 py-24 md:px-12 lg:px-24"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
                {/* Left Side*/}
                <div className="lg:col-span-5 lg:h-[calc(100vh-12rem)] lg:sticky lg:top-24 flex flex-col justify-center">
                    <div className="mb-12">
                        <Copy textSize="xl" blockColor="#fe0100">
                            SKILLS & EXPERTISE
                        </Copy>
                        <p className="mt-4 text-tone-300 text-xl max-w-md">
                            My technical toolkit for building digital products.
                        </p>
                    </div>

                    <div className="space-y-2 hidden lg:block">
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex items-center gap-4 transition-all duration-300 p-4 border-l-4",
                                    activeCategory === index
                                        ? "border-tone-500 bg-tone-300/10 pl-8"
                                        : "border-transparent hover:pl-6"
                                )}
                            >
                                <h3
                                    className={cn(
                                        "font-bold text-2xl uppercase tracking-tight transition-colors",
                                        activeCategory === index ? "text-tone-100" : "text-tone-300"
                                    )}
                                >
                                    {skill.category}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side*/}
                <div className="lg:col-span-7 space-y-32 pb-24">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-category-card min-h-[50vh] flex flex-col justify-center"
                        >
                            <div className="lg:hidden mb-6">
                                <h3 className="text-3xl font-bold text-tone-100 uppercase">{skill.category}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {skill.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative flex items-center justify-center overflow-hidden border border-tone-200 bg-tone-400 p-6 text-center transition-all hover:bg-tone-100 hover:text-tone-400"
                                    >
                                        <span className="relative z-10 font-medium uppercase tracking-wider">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
