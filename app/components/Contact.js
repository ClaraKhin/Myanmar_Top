import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formEl = e.currentTarget;
        if (!formEl.reportValidity()) return;

        setShowToast(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="contact" className=" px-6 py-16 bg-transparent max-w-6xl mx-auto h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">We'd love to hear from you — reach out for inquiries or to book our services.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleSubmit} className="rounded-xl bg-white/95 dark:bg-white/5 backdrop-blur-md border border-gray-200/30 dark:border-white/10 p-6 shadow-lg">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                        <input value={form.name} onChange={handleChange} type="text" name="name" required placeholder="Your name" className="mt-2 w-full rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F4D3A]" />
                        <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                        <input value={form.email} onChange={handleChange} type="email" name="email" required placeholder="you@company.com" className="mt-2 w-full rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F4D3A]" />
                        <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                        <textarea value={form.message} onChange={handleChange} name="message" required placeholder="How can we help?" className="mt-2 w-full rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 px-3 py-2 h-28 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F4D3A]" />
                        <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-[#1F4D3A] to-[#2AA67A] px-5 py-2 text-white shadow-md hover:opacity-95">Send</button>
                    </form>
                    <div className="rounded-xl bg-white/95 dark:bg-white/5 backdrop-blur-md border border-gray-200/30 dark:border-white/10 p-6 shadow-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Visit or Call</h3>
                        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                            15 (6A) Punn Hlaing Road,
                            <br /> Yangon, Myanmar
                            <br /> <strong className="text-gray-900 dark:text-gray-100">Phone:</strong> +95 9 501 2322
                        </p>
                        <div className="mt-4">
                            <h4 className="font-medium text-gray-700 dark:text-gray-200">Business Hours</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Mon — Sat: 9:00 — 18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {showToast && (
                <div className="fixed bottom-6 right-6 z-50">
                    <div role="status" aria-live="polite" className="flex items-center gap-3 rounded-full bg-green-600 text-white px-4 py-2 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.07a1 1 0 01-1.414 0L3.293 9.848a1 1 0 011.414-1.414L8.5 12.227l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Message Sent</span>
                    </div>
                </div>
            )}
        </section>
    );
}
