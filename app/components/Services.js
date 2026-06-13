export default function Services() {
    const services = [
        {
            title: "Swiftlet House Design",
            desc: "Climate-optimized, predator-safe houses with high yield per sqm.",
        },
        {
            title: "Harvesting & Processing",
            desc: "Ethical harvesting, grading, and processing for export quality.",
        },
        {
            title: "Training & Consultancy",
            desc: "Operational training, ROI models and market access support.",
        },
    ];

    return (
        <section id="services" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s) => (
                    <article key={s.title} className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm text-[#555555]">{s.desc}</p>
                        <a className="mt-4 inline-block text-sm text-[#1F4D3A] font-medium" href="#contact">
                            Learn more →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
