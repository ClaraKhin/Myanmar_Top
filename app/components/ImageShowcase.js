"use client";
import { useState, useEffect } from "react";

export default function ImageShowcase({ images = [], initialIndex = 0, onClose }) {
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") {
                onClose && onClose();
            } else if (e.key === "ArrowLeft") {
                setIndex((i) => Math.max(0, i - 1));
            } else if (e.key === "ArrowRight") {
                setIndex((i) => Math.min(images.length - 1, i + 1));
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [images.length, onClose]);

    if (!images || images.length === 0) return null;

    const prev = () => setIndex((i) => Math.max(0, i - 1));
    const next = () => setIndex((i) => Math.min(images.length - 1, i + 1));

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => onClose && onClose()}>
            <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={() => onClose && onClose()}
                    aria-label="Close"
                    className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
                >
                    ✕
                </button>
                <div className="bg-black rounded-md overflow-hidden p-4">
                    <img src={images[index]} alt={`Image ${index + 1}`} className="w-full max-h-[70vh] object-contain mx-auto bg-black" />

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex gap-2">
                            <button onClick={prev} disabled={index === 0} className="px-3 py-1 bg-white/10 text-white rounded disabled:opacity-40">Prev</button>
                            <button onClick={next} disabled={index === images.length - 1} className="px-3 py-1 bg-white/10 text-white rounded disabled:opacity-40">Next</button>
                        </div>
                        <div className="text-sm text-white/80">{index + 1} / {images.length}</div>
                    </div>

                    <div className="mt-3 flex gap-2 overflow-x-auto">
                        {images.map((src, i) => (
                            <button key={src} onClick={() => setIndex(i)} className={`w-16 h-12 rounded overflow-hidden border ${i === index ? 'border-white' : 'border-transparent'}`}>
                                <img src={src} alt={`thumb-${i + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="mt-2 text-center text-sm text-white/80">Use ← → arrows, Esc to close</div>
                </div>
            </div>
        </div>
    );
}
