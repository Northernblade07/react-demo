"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function InteractiveRabbit() {
  const controls = useAnimation();
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  const handleClick = async () => {
    // Jump animation
    await controls.start({
      y: -100,
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    });
    
    // Pop hearts
    const newHeart = { id: Date.now(), x: Math.random() * 40 - 20 };
    setHearts((prev) => [...prev, newHeart]);

    // Return to ground
    controls.start({ y: 0, scale: 1 });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {/* Floating Hearts Container */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, x: heart.x, scale: 0.5 }}
            animate={{ opacity: 0, y: -100, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onAnimationComplete={() => setHearts((h) => h.filter((item) => item.id !== heart.id))}
            className="absolute text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* The Character */}
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -15, 15, -15, 0], // The "Wave"
          transition: { duration: 0.5 },
        }}
        onClick={handleClick}
        className="text-7xl cursor-pointer select-none drop-shadow-2xl"
      >
        {/* Replace this emoji with your <Rive /> component later */}
        🐰
      </motion.div>
    </div>
  );
}