import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { useAnimatedInView } from "../../hooks/useAnimatedInView";
import { iconMapping } from "../../utils/iconMapping";
import type { Service } from "../../types/service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem: React.FC<Service> = ({
  title,
  description,
  icon,
  imageSrc,
  linkHref,
  durationShow,
}) => {
  const [ref, controls] = useAnimatedInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: durationShow }}
      className="flex flex-col gap-6 sm:w-[calc(50%-1rem)] lg:w-[calc(33%-2rem)]"
    >
      <div className="flex items-center relative group">
        <Image
          src={imageSrc}
          width={300}
          height={60}
          alt={`Background for ${title}`}
          className="w-full duration-300 ease-in-out lg:group-hover:brightness-50"
          priority={false}
        />

        <div className="flex flex-col gap-3 absolute p-10 text-white opacity-0 duration-300 ease-in-out lg:group-hover:opacity-100">
          <h2 className="font-bold text-2xl">{title}</h2>

          <Link
            href={linkHref}
            className="hidden lg:flex items-center gap-2 duration-200 text-lg text-amber-400 hover:text-white"
          >
            <FontAwesomeIcon icon={iconMapping.faCaretRight} />

            <span>Learn more</span>
          </Link>
        </div>
      </div>

      <div className="flex gap-10 justify-between">
        <FontAwesomeIcon icon={icon} className="text-5xl text-amber-400" />

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-lg 2xl:text-2xl font-extrabold">{title}</h2>

          <p className="opacity-90">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
