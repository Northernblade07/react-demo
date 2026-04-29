"use client";

import { useEffect } from "react";
import SlideWrapper from "./SlideWrapper";
import AnimatedText from "../ui/AnimatedText";
import Hearts from "../ui/Hearts";
import { motion } from "framer-motion";

export default function Slide5() {
  return (
    <>
      <Hearts />

      <SlideWrapper>
        <div className="flex flex-col items-center justify-center gap-10 relative">

          {/* 🌟 BIG GLOW BURST */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="absolute w-[600px] h-[600px] bg-pink-500/30 blur-[150px] rounded-full -z-10"
          />

          {/* 🎉 MAIN TEXT (POP IN) */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedText
              text="Happy Birthday My Love ❤️"
              className="
                text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
                font-extrabold text-pink-400 
                drop-shadow-[0_0_50px_rgba(255,100,200,1)]
              "
            />
          </motion.div>

          {/* 💫 SUB TEXT (DELAYED FADE) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <AnimatedText
              text="You deserve the entire universe and 
              All I want is to see you smiling, today and always 💖"
              className="text-lg md:text-3xl text-pink-100/90 max-w-xl"
            />
          </motion.div>

          {/* 💖 EXTRA FLOATING HEART */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl"
          >
            💖
          </motion.div>

        </div>
      </SlideWrapper>
    </>
  );
}