import Image from "next/image";

import { motion } from "framer-motion";

import { useAnimatedInView } from "../hooks/useAnimatedInView";

const AboutUs: React.FC = () => {
  const [ref, controls] = useAnimatedInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="flex 2xl:gap-8 lg:p-12 2xl:p-44"
      id="aboutus"
    >
      <Image
        src="/images/about-us-company.webp"
        width={800}
        height={120}
        alt="Background Builders"
        priority={false}
        className="hidden w-2/5 object-cover lg:flex"
      />

      <div className="flex flex-col gap-6 2xl:gap-8 p-4 sm:p-8 lg:pt-0 mt-4 lg:m-0">
        <h1 className="text-xl sm:text-2xl 2xl:text-3xl underline underline-offset-8 decoration-amber-400 font-extrabold">
          Years of experience
        </h1>

        <p className="opacity-90">
          With over 30 years in the construction industry, our company has built
          a strong reputation for quality and reliability. We have successfully
          managed a wide range of projects, from residential to industrial,
          showcasing our ability to handle diverse challenges with expertise.
          Our long-standing experience has allowed us to foster strong
          relationships with clients and partners, ensuring successful outcomes
          and continued trust. As we move forward, we remain committed to
          innovation and excellence, leveraging our deep industry knowledge to
          deliver exceptional results.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
