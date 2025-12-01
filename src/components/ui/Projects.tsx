"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Copy from "./Copy";
import Image from "next/image";


const projects = [
    {
        id: "01",
        title: "Nichirin Hose",
        category: "Company Profile / CMS",
        description: "Dynamic profile for automotive manufacturer.",
        image: "https://noxccuzjrkvkcztozjlc.supabase.co/storage/v1/object/public/product-images/cretivox/Screenshot%202025-11-25%20195123.png",
        link: "https://nichirin.id",
    },
    {
        id: "02",
        title: "Coffee Eight",
        category: "E-Commerce / GRPC",
        description: "Scalable platform with Go & Docker.",
        image: "https://noxccuzjrkvkcztozjlc.supabase.co/storage/v1/object/public/product-images/cretivox/Screenshot%202025-11-25%20205334.png",
        link: "https://frontend-67579202976.asia-southeast2.run.app/",
    },
    {
        id: "03",
        title: "Taman Selini",
        category: "Hospitality / Resort",
        description: "High-end resort website in Bali.",
        image: "https://noxccuzjrkvkcztozjlc.supabase.co/storage/v1/object/public/product-images/cretivox/Screenshot%202025-11-25%20224633.png",
        link: "https://tamanselinibali.com/",
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".project-item");
            items.forEach((item: any, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveProject(index),
                    onEnterBack: () => setActiveProject(index),
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative z-20 w-full bg-tone-400 px-6 py-24 md:px-12 lg:px-24"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">

                {/* Left Side Image Preview*/}
                <div className="hidden lg:col-span-5 lg:block relative">
                    <div className="sticky top-1/2 -translate-y-1/2 h-[50vh] w-full overflow-hidden bg-tone-200 border border-tone-200">
                        {/* Image */}
                        <div className="relative h-full w-full">
                            <Image
                                key={activeProject}
                                src={projects[activeProject].image}
                                alt={projects[activeProject].title}
                                fill
                                className="object-cover opacity-80 transition-opacity duration-500"
                            />
                        </div>

                        {/* Text */}
                        <div className="absolute bottom-0 left-0 w-full bg-tone-500 p-4 z-10">
                            <p className="text-tone-400 font-bold uppercase tracking-widest text-sm">
                                {projects[activeProject].category}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side List Projects */}
                <div className="lg:col-span-7 flex flex-col z-10 lg:pl-12">
                    <div className="mb-24 pt-12">
                        <Copy textSize="xl" blockColor="#fe0100" className="text-tone-100">
                            SELECTED WORKS
                        </Copy>
                    </div>

                    <div className="pb-24">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "project-item group relative flex flex-col justify-center min-h-[60vh] border-b border-tone-300 transition-all duration-500",
                                    activeProject === index ? "opacity-100" : "opacity-30"
                                )}
                            >
                                <div className="flex items-baseline justify-between mb-4">
                                    <span className="text-sm font-mono mr-4 text-tone-500">
                                        {project.id}
                                    </span>
                                </div>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex items-center justify-between group/link"
                                >
                                    <h3 className="text-5xl md:text-7xl font-bold uppercase text-tone-100 transition-colors group-hover/link:text-tone-500">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="h-8 w-8 text-tone-500 opacity-0 group-hover/link:opacity-100 transition-all" />
                                </Link>

                                <p className="mt-6 text-tone-300 max-w-md text-xl leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Mobile Image */}
                                <div className="mt-8 block lg:hidden aspect-video w-full overflow-hidden bg-tone-200 relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
