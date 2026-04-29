"use client";

import ParallaxLayer from "@/components/ui/ParallaxLayer";

export default function VideoBackground() {
  return (
    <ParallaxLayer depth={40}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 brightness-75 contrast-125 z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20" />
    </ParallaxLayer>
  );
}