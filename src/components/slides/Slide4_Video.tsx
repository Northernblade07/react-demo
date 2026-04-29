import SlideWrapper from "./SlideWrapper";
import PolaroidGallery from "../PolaroidGallery";
import Hearts from "../ui/Hearts";
import AnimatedText from "../ui/AnimatedText";

export default function Slide4({ onNext }: any) {
  return (
    <>
      <Hearts />

      <SlideWrapper>
        <div className="
          flex flex-col items-center justify-center
          gap-6 sm:gap-8 md:gap-10
          w-full max-w-5xl
          px-4 sm:px-6
          text-center
        ">
          <AnimatedText
            text="Every moment with you feels like magic 🫂"
            className="
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
              font-extrabold text-white 
              leading-snug
              drop-shadow-[0_0_30px_rgba(255,100,200,0.8)]
            "
          />

          <PolaroidGallery onNext={onNext} />
        </div>
      </SlideWrapper>
    </>
  );
}