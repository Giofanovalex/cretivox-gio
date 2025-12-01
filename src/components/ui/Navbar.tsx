"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-tone-400">
            <Link href="/" className="text-xl md:text-2xl font-bold uppercase tracking-tighter hover:text-tone-500 transition-colors">
                Cretivox
            </Link>

            <button className="text-xl md:text-2xl font-bold uppercase tracking-tighter hover:text-tone-500 transition-colors">
                Menu
            </button>
        </nav>
    );
}
