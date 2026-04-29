"use client";

import SlideWrapper from "./SlideWrapper";
import AnimatedText from "../ui/AnimatedText";
import Hearts from "../ui/Hearts";
import { motion } from "framer-motion";

export default function Slide3({ onNext }: any) {
  return (
    <>
      <Hearts />

      <SlideWrapper>
        <div className="flex flex-col items-center justify-center gap-10 w-full max-w-4xl">

          {/* 💫 Glow Background Accent */}
          <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full -z-10" />

          {/* 💖 Main Message */}
          <AnimatedText
            text="You mean the world to me ❤️"
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold text-white 
              leading-tight
              drop-shadow-[0_0_30px_rgba(255,100,200,0.8)]
            "
          />

          {/* ✨ Sub Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <AnimatedText
              text="Being with you makes everything feel right in a way I can't explain"
              className="
                text-base sm:text-lg md:text-xl lg:text-2xl 
                text-pink-100/80 max-w-xl
              "
            />
          </motion.div>

          {/* 🌸 Divider Glow */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />

          {/* 🚀 Next Button */}
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative px-10 py-4 rounded-full
              text-white text-lg md:text-xl font-semibold

              bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500
              shadow-[0_0_40px_rgba(236,72,153,0.6)]

              transition-all duration-300

              before:absolute before:inset-0 before:rounded-full 
              before:bg-white/10 before:blur-xl before:opacity-0 
              hover:before:opacity-100
            "
          >
            Continue →
          </motion.button>

        </div>
      </SlideWrapper>
    </>
  );
}