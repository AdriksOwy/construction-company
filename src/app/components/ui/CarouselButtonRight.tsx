import { iconMapping } from "../../utils/iconMapping";
import type { CarouselButtonProps } from "../../types/carouselButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselButtonRight: React.FC<CarouselButtonProps> = ({ onClick }) => (
  <button
    className="absolute h-full right-0 p-3 duration-300 text-white lg:bg-black lg:bg-opacity-30 lg:hover:bg-opacity-60"
    onClick={onClick}
    aria-label="Right Button Carousel"
  >
    <FontAwesomeIcon
      icon={iconMapping.faArrowRight}
      className="text-2xl sm:text-3xl"
    />
  </button>
);

export default CarouselButtonRight;
