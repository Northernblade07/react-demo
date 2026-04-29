"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -120, 60, 0], y: [0, 100, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
    </div>
  );
}