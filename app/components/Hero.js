"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full h-[100svh] max-h-[800px] overflow-hidden">
            <div className="relative w-full h-[100vh] max-h-[850px]">
                <Image
                    src="/images/Cover.jpg"
                    alt="Swiftlet house at sunrise"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover object-center filter brightness-20"
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
                                Myanmar Top Swiftlet Farming
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg sm:text-xl opacity-90 tracking-wide">
                                Premium swiftlet farming solutions — ethical harvesting,
                                professional house design, and end-to-end bird nest processing
                                across Myanmar.

                            </p>
                            <p className="mt-5 max-w-2xl text-lg sm:text-xl opacity-90 tracking-wide">
                                Myanmar Top Swiftlet မှာ မြန်မာတစ်နိုင်ငံလုံးအတွင်း ငှက်သိုက်ထုတ်လုပ်မှုလုပ်ငန်းစဉ် တစ်ခုလုံးအတွက် အစမှအဆုံးအထိ ဝန်ဆောင်မှုများရနိုင်ပါသည်။

                            </p>
                            <div className="mt-7 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full bg-[#f8da5b] px-6 py-3 text-sm font-semibold text-[#1F2937] shadow-md hover:bg-[#fcff82]"
                                >
                                    Request a Consultation
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/60 hover:text-[#1F2937]"
                                >
                                    Explore Services
                                </a>
                            </div>
                            <div className="mt-9 bg-white/40 rounded-full inline-flex py-2 px-4 gap-7 justify-center text-sm">
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
