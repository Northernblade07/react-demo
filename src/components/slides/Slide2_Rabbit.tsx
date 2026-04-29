"use client";

import SlideWrapper from "./SlideWrapper";

import Hearts from "../ui/Hearts";
import Rabbit from "../Rabbit";
import {motion} from 'framer-motion'

import dynamic from "next/dynamic";

const AnimatedText = dynamic(
  () => import("../ui/AnimatedText"),
  { ssr: false } // 🚨 THIS LINE FIXES EVERYTHING
);

export default function Slide2({ onNext }: any) {
  return (
    <>
      <Hearts />

      <SlideWrapper>
        <div className="flex flex-col items-center justify-center gap-10 w-full">

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ y: -20, scale: 1.2 }}
          >
            <Rabbit />
          </motion.div>

          <AnimatedText
            text="I wanted to give you something that feels like a hug 💕"
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,100,200,0.8)]"
          />

          <AnimatedText
            text="Out of everything in this world… you’re my favorite part of it 🌍❤️"
            className="text-xl md:text-2xl text-pink-100"
          />

          <button
            onClick={onNext}
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            Next →
          </button>

        </div>
      </SlideWrapper>
    </>
  );
}