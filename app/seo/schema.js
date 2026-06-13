export const faqSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
        },
    })),
});

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Myanmar Top Swiftlet",
    telephone: "+95 9 XXX XXXX",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Yangon",
        addressCountry: "MM",
    },
};
