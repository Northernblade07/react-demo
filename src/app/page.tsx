"use client";

import useSlide from "@/hooks/useSlide";

import Slide1 from "@/components/slides/Slide1_Gate";
import Slide2 from "@/components/slides/Slide2_Rabbit";
import Slide3 from "@/components/slides/Slide3_Message";
import Slide4 from "@/components/slides/Slide4_Video";
import Slide5 from "@/components/slides/Slide5_Final";
import Stage from "@/components/Stage";

export default function Home() {
  const { slide, next } = useSlide();

  const renderSlide = () => {
    switch (slide) {
      case 0:
        return <Slide1 onNext={next} />;
      case 1:
        return <Slide2 onNext={next} />;
      case 2:
        return <Slide3 onNext={next} />;
      case 3:
        return <Slide4 onNext={next} />;
      case 4:
        return <Slide5 />;
      default:
        return <Slide1 onNext={next} />;
    }
  };
  return (
    <Stage slideKey={slide}>
      {renderSlide()}
    </Stage>
  );
}