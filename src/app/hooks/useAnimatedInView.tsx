import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { AnimationControls, useAnimation } from "framer-motion";

import type { UseAnimatedInViewProps } from "../types/useAnimate";

export const useAnimatedInView = ({
  threshold = 0.1,
  triggerOnce = true,
}: UseAnimatedInViewProps): [
  (node?: Element | null) => void,
  AnimationControls
] => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [inView, controls]);

  return [ref, controls];
};
