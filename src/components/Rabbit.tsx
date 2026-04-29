"use client";

import { motion } from "framer-motion";

export default function Rabbit() {
  return (
    <motion.div
      className="relative w-40 h-40"
      animate={{ y: [0, -6, 0] }} // breathing float
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* EARS */}
      <motion.div
        className="absolute w-6 h-20 bg-white rounded-full left-8 -top-10 origin-bottom"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-6 h-20 bg-white rounded-full right-8 -top-10 origin-bottom"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* INNER EARS */}
      <div className="absolute w-3 h-14 bg-pink-300 rounded-full left-9 -top-8" />
      <div className="absolute w-3 h-14 bg-pink-300 rounded-full right-9 -top-8" />

      {/* FACE */}
      <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center relative">

        {/* EYES */}
        <motion.div
          className="absolute left-12 top-16 w-3 h-3 bg-black rounded-full"
          animate={{ scaleY: [1, 0.1, 1] }} // blink
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-12 top-16 w-3 h-3 bg-black rounded-full"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* NOSE */}
        <motion.div
          className="w-3 h-3 bg-pink-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* MOUTH */}
        <div className="absolute bottom-10 w-6 h-4 border-b-2 border-pink-400 rounded-full" />
      </div>

      {/* CHEEKS */}
      <div className="absolute left-4 bottom-12 w-4 h-4 bg-pink-200 rounded-full blur-sm opacity-60" />
      <div className="absolute right-4 bottom-12 w-4 h-4 bg-pink-200 rounded-full blur-sm opacity-60" />
    </motion.div>
  );
}