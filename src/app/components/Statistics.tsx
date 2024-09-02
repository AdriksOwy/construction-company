import { useInView } from "react-intersection-observer";

import StatisticsBackground from "./ui/StatisticBackground";
import StatisticItem from "./items/StatisticItem";
import { iconMapping } from "../utils/iconMapping";

const Statistics: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div className="relative p-4 py-8 sm:p-8 lg:p-12 xl:p-16 2xl:p-20 my-4 lg:m-0 2xl:mb-44">
      <StatisticsBackground />

      <div
        ref={ref}
        className="flex flex-col sm:flex-wrap sm:justify-center sm:flex-row gap-7 xl:gap-9 2xl:gap-16 relative 2xl:pt-0 h-full text-3xl 2xl:text-5xl text-amber-400"
      >
        {inView && (
          <>
            <StatisticItem
              icon={iconMapping.faBuilding}
              end={1246}
              duration={2}
              label="Projects Completed"
            />

            <StatisticItem
              icon={iconMapping.faHelmetSafety}
              end={967}
              duration={3}
              label="Employees"
            />

            <StatisticItem
              icon={iconMapping.faFaceSmile}
              end={2415}
              duration={4}
              label="Satisfied Customers"
            />

            <StatisticItem
              icon={iconMapping.faEarthAmericas}
              end={38}
              duration={8}
              label="Countries Experience"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Statistics;
