"use client";

import { motion } from "framer-motion";

export default function PolaroidGallery({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      key="memories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center h-full w-full px-6 relative"
    >

      {/* 💫 Ambient Glow */}
      {/* <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full -z-10" /> */}

      {/* 📸 Polaroids */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">

        {/* Polaroid 1 */}
       <motion.div
  initial={{ rotate: -12, x: -80, opacity: 0 }}
  animate={{ rotate: -6, x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  whileHover={{ 
    scale: 1.08, 
    rotate: 0, 
    y: -10,
    boxShadow: "0px 20px 60px rgba(255,100,200,0.4)"
  }}
  className="
    bg-white 
    p-4 pb-10 
    shadow-2xl 
    rounded-sm 
    cursor-pointer 
    w-[240px] md:w-[280px]   /* ✅ FIXED WIDTH */
    flex flex-col items-center
  "
>
  {/* 📸 Media */}
  <div className="w-full h-56 md:h-64 bg-slate-200 overflow-hidden relative">
    <video
      src="/mem1.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
       preload="metadata" 
    />
  </div>

  {/* ✍️ Caption */}
  <p className="
    text-slate-800 
    text-center 
    mt-4 
    text-sm md:text-base   /* ✅ responsive */
    italic 
    leading-relaxed       /* ✅ better spacing */
    break-words           /* ✅ prevents overflow */
    max-w-full            /* ✅ force containment */
  ">
    That one perfect day 💖 where I hugged you for the first time
  </p>
</motion.div>

        {/* Polaroid 2 */}
        <motion.div
          initial={{ rotate: 12, x: 80, opacity: 0 }}
          animate={{ rotate: 5, x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ 
            scale: 1.08, 
            rotate: 0, 
            y: -10,
            boxShadow: "0px 20px 60px rgba(255,100,200,0.4)"
          }}
          className="bg-white p-4 pb-12 shadow-2xl rounded-sm cursor-pointer  w-[270px] md:w-[290px] flex flex-col items-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 bg-slate-200 overflow-hidden relative">
            
            {/* 🎥 Replace with your video */}
            <video
              src="/mem2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
               preload="metadata" 
            />

          </div>

          <p className=" text-slate-800 
    text-center 
    mt-1
    text-sm md:text-base  
    italic 
    leading-relaxed       
    break-words           
    max-w-full ">
            I wish we could go back to first visit to let both of know , we succeeded at loving each other for the fullest
          </p>
        </motion.div>

      </div>

      {/* 🌠 CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="
          mt-16 px-10 py-4 rounded-full 
          text-white text-lg font-semibold

          bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500
          shadow-[0_0_40px_rgba(236,72,153,0.6)]

          transition-all duration-300

        "
      >
        Now , Make a Wish 
      </motion.button>

    </motion.div>
  );
}