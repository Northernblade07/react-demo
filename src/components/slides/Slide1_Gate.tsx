"use client";

import SlideWrapper from "./SlideWrapper";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function Slide1({ onNext }: { onNext: () => void }) {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-6 md:gap-10">
        <AnimatedText
          text="I Made Something For You"
          className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] drop-shadow-[0_0_30px_rgba(255,100,200,0.5)]"
        />

        <p className="text-base md:text-xl text-pink-100/60 uppercase tracking-[0.2em] font-light">
          Just a small thing… for someone very special ❤️
        </p>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236, 72, 153, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="
relative px-8 py-4 rounded-full
text-white font-semibold tracking-wide

bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500
shadow-[0_0_30px_rgba(236,72,153,0.5)]

hover:scale-110
active:scale-95

transition-all duration-300 ease-out

before:absolute before:inset-0 before:rounded-full 
before:bg-white/10 before:blur-xl before:opacity-0 
hover:before:opacity-100
"
        >
          <span className="relative z-10">Tap to Open ✨</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>
    </SlideWrapper>
  );
}