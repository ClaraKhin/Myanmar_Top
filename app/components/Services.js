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
        },
        {
            title: "Harvesting & Processing",
            desc: "Ethical harvesting, grading, and processing for export quality.",
            image: images[1],
        },
        {
            title: "Training & Consultancy",
            desc: "Operational training, ROI models and market access support.",
            image: images[2],
        },
    ];



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

                                <a className="mt-4 inline-block text-sm text-green-300 font-medium" href="#contact">
                                    Learn more →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
