"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Hearts() {
  // ✅ stable positions (no hydration issues)
  const hearts = useMemo(
    () =>
      [...Array(40)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: i * 0.3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: -800,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}