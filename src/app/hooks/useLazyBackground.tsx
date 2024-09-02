import { useEffect } from "react";

import { LazyBackgroundProps } from "../types/lazyLoading";

export const useLazyBackground = (backgrounds: LazyBackgroundProps[]) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const background = backgrounds.find((bg) => bg.id === element.id);

            if (background) {
              element.style.backgroundImage = `url('${background.imageUrl}')`;
              observer.unobserve(element);
            }
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    backgrounds.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      backgrounds.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [backgrounds]);
};

export default useLazyBackground;
