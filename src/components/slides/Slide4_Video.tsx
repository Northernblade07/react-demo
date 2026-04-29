import SlideWrapper from "./SlideWrapper";
import PolaroidGallery from "../PolaroidGallery";
import Hearts from "../ui/Hearts";
import AnimatedText from "../ui/AnimatedText";
export default function Slide4({ onNext }: any) {
  return (
    <>
      <Hearts />
      <SlideWrapper>
          <AnimatedText
            text="Every moment with you feels like magic 🫂"
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold text-white 
              leading-tight
              drop-shadow-[0_0_30px_rgba(255,100,200,0.8)]
            "
          />
        <PolaroidGallery onNext={onNext} />
      </SlideWrapper>
    </>
  );
}