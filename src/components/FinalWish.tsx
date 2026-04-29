"use client";

import { motion } from "framer-motion";

export default function FinalWish() {
  return (
    <motion.div
      key="finale"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center h-full w-full relative"
    >
      {/* Simple Parallax Stars/Dots */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/40 via-transparent to-transparent"
      />

      <h1 className="text-6xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 drop-shadow-2xl text-center mb-6">
        Happy<br/>Birthday!
      </h1>
      
      <p className="text-xl md:text-3xl text-pink-200/80 font-serif italic z-10">
        I love you to the moon and back.
      </p>
    </motion.div>
  );
}