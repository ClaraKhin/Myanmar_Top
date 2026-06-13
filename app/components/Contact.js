export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <form className="rounded-lg bg-white p-6 shadow-sm">
                    <label className="block text-sm font-medium">Name</label>
                    <input className="mt-2 w-full rounded border px-3 py-2" />
                    <label className="block mt-4 text-sm font-medium">Email</label>
                    <input className="mt-2 w-full rounded border px-3 py-2" />
                    <label className="block mt-4 text-sm font-medium">Message</label>
                    <textarea className="mt-2 w-full rounded border px-3 py-2 h-28" />
                    <button className="mt-4 rounded-full bg-[#1F4D3A] px-5 py-2 text-white">Send</button>
                </form>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="font-semibold">Visit or Call</h3>
                    <p className="mt-2 text-sm text-[#555555]">
                        Myanmar Top Swiftlet
                        <br /> Yangon, Myanmar
                        <br /> <strong>Phone:</strong> +95 9 XXX XXXX
                    </p>
                    <div className="mt-4">
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-sm text-[#555555]">Mon — Sat: 9:00 — 18:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
