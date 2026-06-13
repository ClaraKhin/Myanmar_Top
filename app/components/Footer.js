export default function Footer() {
    return (
        <footer className="mt-12 border-t border-neutral-200 bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
                <div className="text-sm">© {new Date().getFullYear()} Myanmar Top Swiftlet</div>
                <div className="text-sm">Designed for premium swiftlet farming solutions</div>
            </div>
        </footer>
    );
}
