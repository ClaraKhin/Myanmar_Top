export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-500 bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
                <div className="text-sm">© {new Date().getFullYear()} Myanmar Top Swiftlet Farming</div>
                <div className="text-sm">Designed for premium swiftlet farming solutions</div>
            </div>
        </footer>
    );
}
