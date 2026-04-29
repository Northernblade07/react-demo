"use client";

import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "" }: any) {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word: string, wi: number) => (
        <span key={wi} className="flex mr-2">
          {Array.from(word).map((char: string, i: number) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10 }} // 👈 jump effect
              transition={{
                delay: (0.2 ),
                type: "spring",
                stiffness: 300,
              }}
              className="inline-block cursor-default"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
}