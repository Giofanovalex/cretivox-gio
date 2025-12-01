"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AsciiEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration
        const charSize = 16; // Size of each character cell
        const chars = " .:+*#%@"; // Characters to use (dark to light)

        // Mouse interaction
        const mouse = { x: 0, y: 0 };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        // Animation Loop
        let time = 0;
        let animationId: number;

        const animate = () => {
            const isDark = resolvedTheme === "dark";

            // Background Color
            ctx.fillStyle = isDark ? "#0a0a0a" : "#FAF9F6";
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${charSize}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const cols = Math.ceil(width / charSize);
            const rows = Math.ceil(height / charSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * charSize + charSize / 2;
                    const y = j * charSize + charSize / 2;

                    // Calculate distance from mouse
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Wave effect based on time and position
                    const wave = Math.sin(x * 0.01 + y * 0.01 + time) * 0.5 + 0.5;

                    // Interaction effect (mouse proximity brightens/changes chars)
                    const interaction = Math.max(0, 1 - dist / 300); // 300px radius

                    // Combine effects
                    const value = wave * 0.3 + interaction * 0.7;

                    // Map value (0-1) to character index
                    const charIndex = Math.floor(value * (chars.length - 1));
                    const char = chars[Math.min(chars.length - 1, Math.max(0, charIndex))];

                    // Color based on intensity
                    if (isDark) {
                        // Dark Mode: Light text on Dark background
                        if (value > 0.8) ctx.fillStyle = "#FAF9F6"; // Cream (Foreground)
                        else if (value > 0.5) ctx.fillStyle = "#888";
                        else ctx.fillStyle = "#333";
                    } else {
                        // Light Mode: Dark text on Light background
                        if (value > 0.8) ctx.fillStyle = "#1A2C32"; // Dark Teal (Foreground)
                        else if (value > 0.5) ctx.fillStyle = "#888";
                        else ctx.fillStyle = "#ddd";
                    }

                    ctx.fillText(char, x, y);
                }
            }

            time += 0.05;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [resolvedTheme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full"
        />
    );
}
