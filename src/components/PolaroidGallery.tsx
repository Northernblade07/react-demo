"use client";

import { motion } from "framer-motion";

export default function PolaroidGallery({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      key="memories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="
        flex flex-col items-center justify-center
        w-full
        px-1 sm:px-4 md:px-6
      "
    >
      {/* 📸 Polaroids */}
      <div className="
        flex flex-col md:flex-row
        items-center justify-center
        gap-1 sm:gap-6 md:gap-10
        w-full
      ">

        {/* Polaroid 1 */}
        <motion.div
          initial={{ rotate: -8, y: 40, opacity: 0 }}
          animate={{ rotate: -4, y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          className="
            bg-white
            p-1 sm:p-4 pb-3 sm:pb-8
            shadow-2xl rounded-sm

            w-full max-w-[190px] sm:max-w-[280px]

            flex flex-col items-center
          "
        >
          <div className="w-full aspect-square overflow-hidden">
            <video
              src="/mem1.mp4"
              poster="/mem1.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="
            text-slate-800 text-center mt-1
            text-xs sm:text-sm md:text-base
            italic leading-relaxed
            break-words
          ">
            That one perfect day 💖 where I hugged you for the first time
          </p>
        </motion.div>

        {/* Polaroid 2 */}
        <motion.div
          initial={{ rotate: 8, y: 40, opacity: 0 }}
          animate={{ rotate: 4, y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          className="
            bg-white
            p-1 sm:p-4 pb-3 sm:pb-8
            shadow-2xl rounded-sm

            w-full max-w-[190px] sm:max-w-[280px]

            flex flex-col items-center
          "
        >
          <div className="w-full aspect-square overflow-hidden">
            <video
              src="/mem2.mp4"
              poster="/mem2.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="
            text-slate-800 text-center mt-1
            text-xs sm:text-sm md:text-base
            italic leading-relaxed
            break-words
          ">
            I wish we could go back to that first visit… and tell ourselves we made it 💫
          </p>
        </motion.div>
      </div>

      {/* 🌠 Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="
           sm:mt-12 md:mt-14
          px-6 sm:px-8
          py-3 sm:py-4

          text-sm sm:text-base md:text-lg
          rounded-full text-white font-semibold

          bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500
          shadow-[0_0_25px_rgba(236,72,153,0.5)]

          w-full max-w-[210px]
        "
      >
        Now, Make a Wish 🌠
      </motion.button>
    </motion.div>
  );
}