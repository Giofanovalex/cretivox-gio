"use client";

import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    {
        name: "Email",
        icon: Mail,
        href: "mailto:vierihery@gmail.com",
        color: "hover:text-accent-red",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/vieri-giofanov/",
        color: "hover:text-accent-blue",
    },
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/Giofanovalex",
        color: "hover:text-foreground",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://instagram.com/giofnv",
        color: "hover:text-accent-yellow",
    },
];

export default function Contact() {
    return (
        <footer className="flex flex-col items-center justify-center bg-foreground py-20 text-background">
            <div className="mb-12 text-center space-y-4">
                <h2 className="text-4xl font-bold md:text-6xl">Let's Connect</h2>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Open for opportunities and collaborations. Feel free to reach out!
                </p>
            </div>

            <div className="flex gap-8 mb-16">
                {socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        className={`transition-transform hover:scale-110 ${link.color}`}
                        aria-label={link.name}
                    >
                        <link.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </Link>
                ))}
            </div>

            <div className="text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Vieri Giofanov Darmawan.</p>
                <p>Built with Next.js, Tailwind & GSAP.</p>
            </div>
        </footer>
    );
}
