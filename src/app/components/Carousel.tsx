import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { CarouselItem } from "./items/CarouselItem";
import CarouselButtonLeft from "./ui/CarouselButtonLeft";
import CarouselButtonRight from "./ui/CarouselButtonRight";
import { useCarousel } from "../hooks/useCarousel";
import { useAnimatedInView } from "../hooks/useAnimatedInView";

const Carousel: React.FC = () => {
  const [carousel, setCarousel] = useState<any[]>([]);
  const { currentIndex, prevSlide, nextSlide } = useCarousel(carousel.length);

  const [ref, controls] = useAnimatedInView({ threshold: 0.4 });

  useEffect(() => {
    const fetchCarousel = async () => {
      const response = await fetch("/data/carouselItems.json");
      const data = await response.json();

      setCarousel(data);
    };

    fetchCarousel();
  }, []);

  return (
    <div className="flex flex-row lg:gap-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:flex-col lg:w-1/2 lg:gap-6"
      >
        <h2 className="text-lg 2xl:text-xl font-bold text-amber-400 px-4 2xl:px-6 py-2 2xl:py-3 bg-black">
          {carousel[currentIndex]?.title}
        </h2>

        <p>{carousel[currentIndex]?.text}</p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="flex justify-center relative w-full lg:w-1/2 2xl:h-[30rem] mx-auto lg:mr-0 overflow-hidden"
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carousel.map((item, index) => (
            <CarouselItem
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>

        <CarouselButtonLeft onClick={prevSlide} />

        <CarouselButtonRight onClick={nextSlide} />
      </motion.div>
    </div>
  );
};

export default Carousel;
