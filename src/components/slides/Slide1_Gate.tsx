"use client";

import SlideWrapper from "./SlideWrapper";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function Slide1({ onNext }: { onNext: () => void }) {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 px-4 text-center max-w-5xl">

        {/* 🎉 Heading */}
        <AnimatedText
          text="I Made Something For You"
          className="
            text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl
            font-black text-white 
            leading-tight break-words
            drop-shadow-[0_0_20px_rgba(255,100,200,0.5)]
          "
        />

        {/* 💖 Subtext */}
        <p className="
          text-xs sm:text-sm md:text-lg lg:text-xl
          text-pink-100/70 
          uppercase tracking-[0.15em] sm:tracking-[0.2em]
          font-light
          max-w-xs sm:max-w-md md:max-w-xl
        ">
          Just a small thing… for someone very special ❤️
        </p>

        {/* ✨ Button */}
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236, 72, 153, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="
            relative px-6 py-3 sm:px-8 sm:py-4 rounded-full
            text-sm sm:text-base md:text-lg
            text-white font-semibold tracking-wide

            bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500
            shadow-[0_0_25px_rgba(236,72,153,0.5)]

            transition-all duration-300 ease-out

            before:absolute before:inset-0 before:rounded-full 
            before:bg-white/10 before:blur-xl before:opacity-0 
            hover:before:opacity-100
          "
        >
          <span className="relative z-10">Tap to Open ✨</span>
        </motion.button>

      </div>
    </SlideWrapper>
  );
}