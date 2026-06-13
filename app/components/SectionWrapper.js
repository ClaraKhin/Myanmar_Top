export default function SectionWrapper({ id, title, children }) {
    return (
        <section id={id} className="max-w-6xl mx-auto px-6 py-16">
            {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
            {children}
        </section>
    );
}
