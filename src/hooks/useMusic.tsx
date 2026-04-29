import { useRef } from "react";

export default function useMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    audioRef.current.play();
  };

  return { play };
}