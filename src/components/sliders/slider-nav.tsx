import { ChevronLeft, ChevronRight } from "lucide-react";

import { featuredCards } from "@/data/slider";
import { SliderNavigationProps } from "../types";

export default function SliderNavigation({
  setCurrentSlide,
  currentSlide,
  maxSlide,
}: SliderNavigationProps) {
  const nextSlide = () => {
    setCurrentSlide((prev: number) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev: number) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative flex justify-center">
      <div className="flex justify-center gap-2 mt-6 text-center">
        {featuredCards.slice(0, maxSlide + 1).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              currentSlide === index ? "bg-foreground" : "bg-primary-200"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="absolute pt-1 right-0">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-1 mr-1 rounded-full ${
            currentSlide === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-primary-200 text-black dark:text-white hover:bg-primary-100 cursor-pointer"
          }`}
        >
          <ChevronLeft size={15} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === maxSlide}
          className={`p-1 mr-4 md:mr-12 rounded-full ${
            currentSlide === maxSlide
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-primary-200 text-black dark:text-white hover:bg-primary-100 cursor-pointer"
          }`}
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
