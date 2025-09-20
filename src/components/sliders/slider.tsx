"use client";
import { useEffect, useState } from "react";

import { featuredCards } from "@/data/slider";
import SliderNavigation from "./slider-nav";
import SliderCard from "./slider-card";

export default function CardCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  useEffect(() => {
    const calculateMaxSlide = () => {
      if (typeof window === "undefined") return;

      const screenWidth = window.innerWidth;
      let cardsToShow = 1.2;

      if (screenWidth >= 768) {
        cardsToShow = 1.67;
      }

      setMaxSlide(Math.max(0, featuredCards.length - cardsToShow));
    };

    calculateMaxSlide();
    window.addEventListener("resize", calculateMaxSlide);

    return () => window.removeEventListener("resize", calculateMaxSlide);
  }, []);

  return (
    <div className="mt-16 lg:mt-20 relative pl-4 md:pl-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / (featuredCards.length - maxSlide))
            }%)`,
          }}
        >
          {featuredCards.map((card) => (
            <SliderCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <SliderNavigation
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        maxSlide={maxSlide}
      />
    </div>
  );
}
