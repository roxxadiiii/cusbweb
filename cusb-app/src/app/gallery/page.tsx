"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2, ZoomIn, Camera } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Gallery Data ────────────────────────────────── */
const galleryImages = [
  { src: "/gallery/IMG_20260124_105843_242.jpg", caption: "Campus Gateway", rotate: "-2deg" },
  { src: "/gallery/IMG_20260124_124950_290.jpg", caption: "Academic Block", rotate: "1.5deg" },
  { src: "/gallery/IMG_20260124_144848_351.jpg", caption: "University Library", rotate: "-1deg" },
  { src: "/gallery/IMG_20260124_155900_396.jpg", caption: "Green Campus", rotate: "2.5deg" },
  { src: "/gallery/IMG_20260126_093649_044.jpg", caption: "Modern Architecture", rotate: "-1.5deg" },
  { src: "/gallery/IMG_20260126_115315_097.jpg", caption: "Central Plaza", rotate: "1deg" },
  { src: "/gallery/IMG_20260126_121522_112.jpg", caption: "Main Building", rotate: "3deg" },
  { src: "/gallery/IMG_20260211_153852_614.jpg", caption: "Student Hub", rotate: "-2deg" },
  { src: "/gallery/IMG_20260211_180721_618.jpg", caption: "Evening View", rotate: "1.5deg" },
  { src: "/gallery/IMG_20260224_163600_624.jpg", caption: "Campus Pathway", rotate: "-1deg" },
  { src: "/gallery/IMG_20260224_190804_680.jpg", caption: "Night Lights", rotate: "2deg" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-surface">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading 
            label="Visual Journey" 
            title="CUSB Campus Gallery" 
            subtitle="Capturing the essence of life, learning, and excellence at Central University of South Bihar."
          />
        </div>

        {/* Polaroid Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid mb-8"
            >
              <div
                onClick={() => setSelectedImage(image)}
                className="group relative cursor-pointer bg-white p-4 pb-4 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 z-10 hover:z-20 inline-block w-full"
                style={{ rotate: image.rotate }}
              >
                {/* Photo Area - No forced aspect ratio */}
                <div className="relative overflow-hidden bg-gray-50 border border-gray-100">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 block"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors duration-300">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-lg">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>

              {/* Main Image */}
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center text-white">
                <p className="text-2xl font-display font-bold">{selectedImage.caption}</p>
                <p className="text-white/40 mt-1 uppercase tracking-widest text-xs">CUSB Official Photography</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
