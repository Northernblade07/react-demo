"use client";

import { motion } from "framer-motion";

export default function TypewriterText({ onNext }: { onNext: () => void }) {
  const message = "I just wanted to take a moment to tell you how incredibly special you are. Every moment with you is a gift, and today, we celebrate the best gift of all: You.";
  const words = message.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  };

  return (
    <motion.div
      key="message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-2xl md:text-4xl leading-relaxed text-pink-100 font-serif"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }} // Appears after typing finishes
        onClick={onNext}
        className="mt-16 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all text-white"
      >
        See Our Memories 📸
      </motion.button>
    </motion.div>
  );
}