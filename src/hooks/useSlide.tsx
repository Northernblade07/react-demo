import { useState } from "react";

export default function useSlide() {
  const [slide, setSlide] = useState(0);

  const next = () => setSlide((prev) => prev + 1);
  const prev = () => setSlide((prev) => prev - 1);

  return { slide, next, prev };
}