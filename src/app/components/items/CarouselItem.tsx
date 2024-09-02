import Image from "next/image";

import type { CarouselItemProps } from "../../types/carousel";

export const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  title,
  index,
  currentIndex,
}) => (
  <div
    className={`min-w-full flex flex-col items-center justify-center transition-opacity duration-700 ${
      currentIndex === index ? "opacity-100" : "opacity-0"
    }`}
  >
    <Image
      src={image}
      alt={`Slide ${index + 1}`}
      width={400}
      height={60}
      className="object-contain w-full"
      priority={false}
    />

    <p className="absolute bottom-0 p-2 sm:p-4 w-full text-lg sm:text-xl lg:hidden text-center text-white bg-black/40">
      {title}
    </p>
  </div>
);
