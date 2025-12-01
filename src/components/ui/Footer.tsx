"use client";

import AsciiEffect from "./AsciiEffect";
import Copy from "./Copy";

export default function Footer() {
    return (
        <footer className="relative min-h-[50vh] w-full bg-tone-100 flex flex-col items-center justify-center overflow-hidden">
            {/* Ascii Effect Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <AsciiEffect />
            </div>

            <div className="relative z-10 text-center p-8">
                <Copy textSize="hero" blockColor="#fe0100" className="text-tone-400 justify-center">
                    CRETIVOX
                </Copy>

                <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-center text-tone-300 text-sm tracking-widest">
                    <a href="mailto:vierihery@gmail.com" className="hover:text-tone-500 transition-colors">
                        VIERIHERY@GMAIL.COM
                    </a>
                    <span className="hidden md:block">•</span>
                    <p>
                        © {new Date().getFullYear()} ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
}
