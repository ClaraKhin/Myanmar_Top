"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-24">
            <div className="relative w-full h-[68vh] max-h-[760px] overflow-hidden rounded-b-3xl shadow-lg">
                <Image
                    src="/images/Cover.jpg"
                    alt="Swiftlet house at sunrise"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover object-center filter brightness-75"
                />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center md:text-left text-white"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                Myanmar Top Swiftlet
                            </h1>
                            <p className="mt-4 max-w-2xl text-lg sm:text-xl opacity-90">
                                Premium swiftlet farming solutions — ethical harvesting,
                                professional house design, and end-to-end bird nest processing
                                across Myanmar.
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#1F4D3A] shadow-md hover:shadow-lg"
                                >
                                    Request a Consultation
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
                                >
                                    Explore Services
                                </a>
                            </div>
                            <div className="mt-6 bg-white/10 rounded-full inline-flex py-2 px-4 gap-6 text-sm">
                                <div className="text-left">
                                    <div className="text-xs text-white/80">Projects</div>
                                    <div className="text-lg font-semibold">120+</div>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-white/80">Regions</div>
                                    <div className="text-lg font-semibold">14</div>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-white/80">Satisfied Clients</div>
                                    <div className="text-lg font-semibold">95%</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
