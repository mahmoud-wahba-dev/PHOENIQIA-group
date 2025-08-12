import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel({ images, isRTL }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      duration: 30,
      direction: isRTL ? "rtl" : "ltr" // <-- Fix RTL
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-5xl mx-auto" dir={isRTL ? "rtl" : "ltr"}>
      {/* Carousel Viewport */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className={`flex ${isRTL ? "flex-row-reverse" : ""}`}>
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] relative transition-opacity duration-700 h-[300px] md:h-[500px]"
            >
              <img src={src} alt="" className="w-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        {isRTL ? "›" : "‹"}
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        {isRTL ? "‹" : "›"}
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === selectedIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
