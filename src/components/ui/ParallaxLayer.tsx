"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function ParallaxLayer({ children, depth = 30 }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const offsetX = (e.clientX - window.innerWidth / 2) / depth;
      const offsetY = (e.clientY - window.innerHeight / 2) / depth;

      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <motion.div style={{ x, y }} className="absolute inset-0 z-0">{children}</motion.div>;
}