export default function Process() {
    const steps = [
        { title: "Consultation", desc: "Site survey and project planning." },
        { title: "Design & Build", desc: "House construction and acoustic design." },
        { title: "Operational Setup", desc: "Training, staff, and monitoring systems." },
        { title: "Harvest & Process", desc: "Ethical harvest and export-grade processing." },
    ];

    return (
        <section id="process" className="max-w-6xl mx-auto px-6 py-16 h-screen flex items-center">
            <div>
                <h2 className="text-3xl font-semibold text-primary dark:text-white">Our Process</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((s, i) => (
                        <div
                            key={s.title}
                            className="rounded-2xl p-6 text-center shadow-xl transition-transform duration-300 hover:-translate-y-1 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/30 dark:border-white/10"
                        >
                            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-accent text-primary flex items-center justify-center font-semibold ring-1 ring-white/10">
                                {i + 1}
                            </div>
                            <h4 className="font-semibold text-lg text-primary dark:text-white">{s.title}</h4>
                            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
