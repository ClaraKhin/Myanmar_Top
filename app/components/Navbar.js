"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "backdrop-blur bg-transparent" : "bg-white text-[#1F2937]"
                }`}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#1F4D3A] flex items-center justify-center text-white font-bold">
                        <img src="/images/Profile.jpg" alt="Myanmar Top Swiftlet Logo" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="font-semibold text-lg">Myanmar Top Swiftlet Farming</div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#about" className="hover:text-[#1F4D3A]">
                        About
                    </a>
                    <a href="#services" className="hover:text-[#1F4D3A]">
                        Services
                    </a>
                    <a href="#process" className="hover:text-[#1F4D3A]">
                        Process
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-white shadow-md hover:opacity-80"
                    >
                        Get Started
                    </a>
                </div>
                <div className="md:hidden">{/* Mobile menu placeholder */}</div>
            </nav>
        </header>
    );
}
