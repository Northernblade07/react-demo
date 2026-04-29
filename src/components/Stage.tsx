"use client";

import { AnimatePresence, motion } from "framer-motion";

const videos = [
  "/bg-video.mp4",
  "/bg2.mp4",
  "/bg3.mp4",
  "/bg1.mp4",
  "/bg5.mp4",
];

export default function Stage({ children, slideKey }: any) {
  const currentVideo = videos[slideKey] || videos[0];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-black">

      {/* 🎥 Dynamic Video Background */}
      <motion.video
        key={currentVideo}
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        preload="metadata" 
      >
        <source src={currentVideo} type="video/mp4" />
      </motion.video>

      {/* 🌫 Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />


      {/* 🎬 Slides */}
      <AnimatePresence mode="wait">
        <div key={slideKey} className="absolute inset-0 flex items-center justify-center z-20">
          {children}
        </div>
      </AnimatePresence>
      <div className="absolute inset-0 pointer-events-none z-10">
  <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full top-1/4 left-1/4" />
  <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-1/4 right-1/4" />
</div>

    </div>
  );
}