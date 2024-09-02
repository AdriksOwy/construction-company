import Image from "next/image";

import { motion } from "framer-motion";

import { useAnimatedInView } from "../../hooks/useAnimatedInView";
import { iconMapping } from "../../utils/iconMapping";
import type { CommentProps } from "../../types/comment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentItem: React.FC<CommentProps> = ({
  text,
  name,
  position,
  imageSrc,
  durationShow,
}) => {
  const [ref, controls] = useAnimatedInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: durationShow }}
      className="flex flex-col gap-8 w-full lg:w-1/2"
    >
      <div className="flex items-center flex-col gap-4 relative p-6 lg:px-10 lg:py-12 bg-white">
        <FontAwesomeIcon
          icon={iconMapping.faQuoteLeft}
          className="lg:absolute lg:top-0 lg:left-10 lg:-translate-y-7 animate-pulse text-2xl 2xl:text-3xl text-white p-3 2xl:p-4 rounded-full bg-amber-400"
        />

        <p>{text}</p>

        <div className="absolute left-8 lg:left-10 bottom-0 translate-y-5 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-white"></div>
      </div>

      <div className="flex items-center gap-4 lg:gap-5 ml-14 lg:ml-16">
        <Image
          src={imageSrc}
          alt={`Photo of ${name}`}
          width={65}
          height={65}
          className="rounded-full 2xl:w-20"
        />

        <div className="flex flex-col">
          <h2 className="2xl:text-lg font-bold text-amber-400">{name}</h2>

          <p className="text-slate-300">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CommentItem;
