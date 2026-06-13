export default function Testimonials() {
    const items = [
        { name: "U Aung", note: "Professional and reliable — great ROI." },
        { name: "Daw Hla", note: "Their processing standards helped export our product." },
    ];

    return (
        <section id="testimonials" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold">Testimonials</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((t) => (
                    <blockquote key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
                        <p className="text-sm text-[#444444]">“{t.note}”</p>
                        <footer className="mt-3 text-sm font-semibold">{t.name}</footer>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}
