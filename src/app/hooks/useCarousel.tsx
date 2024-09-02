import { useState } from "react";

export const useCarousel = (itemsLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemsLength - 1 ? 0 : prevIndex + 1
    );
  };

  return { currentIndex, prevSlide, nextSlide };
};
