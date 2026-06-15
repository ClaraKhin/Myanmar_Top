"use client";
import { useState } from "react";
import VideoShowcase from "./VideoShowcase";
import ImageShowcase from "./ImageShowcase";

export default function Services() {

    const images = [
        "/images/BirdHouse1.jpg",
        "/images/Harvest.jpg",
        "/images/Training.png",
    ];

    const services = [
        {
            title: "Swiftlet House Service",
            desc: "Climate-optimized, predator-safe houses with high yield per sqm.",
            image: images[0],
            videos: [
                "/videos/BirdHouse1.mp4",
                "/videos/BirdHouse2.mp4",
                "/videos/BirdHouse3.mp4",
            ],
        },
        {
            title: "Harvesting & Processing",
            desc: "Ethical harvesting, grading, and processing for export quality.",
            image: images[1],
            gallery: [
                "/images/Birdnest1.jpg",
                "/images/Birdnest2.jpg",
                "/images/Birdnest3.jpg",
                "/images/Birdnest4.jpg",
                "/images/Birdnest5.jpg",
                "/images/Birdnest6.jpg",
                "/images/Birdnest7.jpg",
                "/images/Birdnest8.jpg",
                "/images/Birdnest9.jpg",
                "/images/Birdnest10.jpg",
                "/images/Birdnest11.jpg",
                "/images/Birdnest12.jpg",
            ],
        },
        {
            title: "Training & Consultancy",
            desc: "Operational training, ROI models and market access support.",
            image: images[2],
            videos: [
                "/videos/Training1.mp4",
                "/videos/Training2.mp4",
            ],
        },
    ];

    const [showVideos, setShowVideos] = useState(false);
    const [activeVideos, setActiveVideos] = useState([]);
    const [showGallery, setShowGallery] = useState(false);
    const [activeGallery, setActiveGallery] = useState([]);

    function openVideos(videos) {
        setActiveVideos(videos || []);
        setShowVideos(true);
    }

    function openGallery(images) {
        setActiveGallery(images || []);
        setShowGallery(true);
    }

    return (
        <section id="services" className="max-w-6xl mx-auto px-6 py-16 h-screen flex items-center">

            <div>
                <h2 className="text-3xl font-semibold">Our Services</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[55vh] overflow-y-auto">
                    {services.map((s) => (
                        <article
                            key={s.title}
                            className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex items-end text-white"
                        >
                            {/* background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-110"
                                style={{
                                    backgroundImage: `url(${s.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundAttachment: "fixed",
                                    transform: "scale(1.1)",
                                    filter: "blur(2px)",
                                }}
                            />

                            {/* dark overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* content */}
                            <div className="relative p-6">
                                <h3 className="font-semibold text-lg">{s.title}</h3>
                                <p className="mt-2 text-sm text-gray-200">{s.desc}</p>

                                {s.videos ? (
                                    <button
                                        onClick={() => openVideos(s.videos)}
                                        className="mt-4 inline-block text-sm text-green-300 font-medium cursor-pointer"
                                    >
                                        Learn more →
                                    </button>
                                ) : s.gallery ? (
                                    <button
                                        onClick={() => openGallery(s.gallery)}
                                        className="mt-4 inline-block text-sm text-green-300 font-medium cursor-pointer"
                                    >
                                        Learn more →
                                    </button>
                                ) : (
                                    <a className="mt-4 inline-block text-sm text-green-300 font-medium cursor-pointer" href="#contact">
                                        Learn more →
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {showVideos && (
                <VideoShowcase videos={activeVideos} onClose={() => setShowVideos(false)} />
            )}
            {showGallery && (
                <ImageShowcase images={activeGallery} onClose={() => setShowGallery(false)} />
            )}
        </section>
    );
}
