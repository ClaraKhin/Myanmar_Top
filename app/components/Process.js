export default function Process() {
    const steps = [
        { title: "Consultation", desc: "Site survey and project planning." },
        { title: "Design & Build", desc: "House construction and acoustic design." },
        { title: "Operational Setup", desc: "Training, staff, and monitoring systems." },
        { title: "Harvest & Process", desc: "Ethical harvest and export-grade processing." },
    ];

    return (
        <section id="process" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold">Our Process</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((s, i) => (
                    <div key={s.title} className="rounded-lg bg-white p-6 shadow-sm text-center">
                        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-[#C9A227] text-[#1F4D3A] flex items-center justify-center font-semibold">
                            {i + 1}
                        </div>
                        <h4 className="font-semibold">{s.title}</h4>
                        <p className="mt-2 text-sm text-[#555555]">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
