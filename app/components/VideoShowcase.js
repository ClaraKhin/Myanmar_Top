"use client";
import { useState, useEffect, useRef } from "react";

export default function VideoShowcase({ videos = [], initialIndex = 0, onClose }) {
    const [index, setIndex] = useState(initialIndex);
    const videoRef = useRef(null);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") {
                onClose && onClose();
            }
            if (e.key === "ArrowLeft") {
                setIndex((i) => Math.max(0, i - 1));
            }
            if (e.key === "ArrowRight") {
                setIndex((i) => Math.min(videos.length - 1, i + 1));
            }
        }

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [videos.length, onClose]);

    function prev() {
        setIndex((i) => Math.max(0, i - 1));
    }

    function next() {
        setIndex((i) => Math.min(videos.length - 1, i + 1));
    }

    if (!videos || videos.length === 0) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => onClose && onClose()}
        >
            <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={() => onClose && onClose()}
                    aria-label="Close"
                    className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
                >
                    ✕
                </button>

                <div className="bg-black rounded-md overflow-hidden">
                    <video
                        ref={videoRef}
                        key={videos[index]}
                        src={videos[index]}
                        controls
                        className="w-full max-h-[70vh] bg-black"
                    />

                    <div className="flex items-center justify-between p-3 bg-black/80">
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={prev}
                                disabled={index === 0}
                                className="px-3 py-1 bg-white/10 text-white rounded disabled:opacity-40"
                            >
                                Prev
                            </button>
                            <button
                                onClick={next}
                                disabled={index === videos.length - 1}
                                className="px-3 py-1 bg-white/10 text-white rounded disabled:opacity-40"
                            >
                                Next
                            </button>
                        </div>

                        <div className="text-sm text-white/80">{index + 1} / {videos.length}</div>
                    </div>
                </div>

                <div className="mt-2 text-center text-sm text-white/80">Use ← → arrows, Esc to close</div>
            </div>
        </div>
    );
}
