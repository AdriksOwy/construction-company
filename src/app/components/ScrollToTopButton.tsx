import { useEffect, useState } from "react";

import { iconMapping } from "../utils/iconMapping";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-20 p-2 lg:p-3 xl:p-4 text-lg lg:text-2xl 2xl:text-3xl text-white hover:text-amber-400 shadow-xl duration-200 border-4 border-amber-400 bg-amber-400 hover:bg-transparent"
        >
          <FontAwesomeIcon icon={iconMapping.faArrowUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
