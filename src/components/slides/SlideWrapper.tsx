"use client";

import { motion } from "framer-motion";

export default function SlideWrapper({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.05, y: -40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="
        w-full h-full 
        flex items-center justify-center 
        px-6 md:px-10 
        text-center z-20
      "
    >
      <div className="max-w-5xl w-full flex flex-col items-center justify-center gap-8">
        {children}
      </div>
    </motion.div>
  );
}