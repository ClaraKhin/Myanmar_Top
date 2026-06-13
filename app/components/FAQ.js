export default function FAQ() {
    const faqs = [
        {
            q: "What is the minimum land size for a project?",
            a: "Projects can start small; we typically recommend sites of at least 50 sqm for commercial viability.",
        },
        {
            q: "Do you assist with export certifications?",
            a: "Yes — we provide guidance on grading, traceability and export documentation.",
        },
    ];

    return (
        <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map(f => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a }
                    }))
                })
            }} />
            <div className="mt-6 space-y-4">
                {faqs.map((f) => (
                    <details key={f.q} className="rounded-lg bg-white p-4 shadow-sm">
                        <summary className="font-medium">{f.q}</summary>
                        <p className="mt-2 text-sm text-[#555555]">{f.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
