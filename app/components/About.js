export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-semibold">About Myanmar Top Swiftlet</h2>
                    <p className="mt-4 text-base leading-7 text-[#444444]">
                        Myanmar Top Swiftlet is a specialist provider of swiftlet house
                        design, ethical harvesting, and bird nest processing. With years of
                        local experience, we combine modern techniques and traditional
                        knowledge to deliver premium, traceable edible bird nests. Our
                        solutions prioritize bird welfare, sustainable yields, and clear
                        ROI for investors.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded bg-[#1F4D3A] text-white flex items-center justify-center">✓</div>
                            <div>
                                <strong>Local expertise:</strong> Deep knowledge across Myanmar
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded bg-[#1F4D3A] text-white flex items-center justify-center">✓</div>
                            <div>
                                <strong>End-to-end services:</strong> Design, harvest, process
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="font-semibold">Our Commitment</h3>
                    <p className="mt-3 text-sm text-[#555555]">
                        We deliver discreet, premium solutions tailored to local climates
                        and regulations. From training staff to processing rooms, our
                        standards meet export-ready expectations.
                    </p>
                </div>
            </div>
        </section>
    );
}
