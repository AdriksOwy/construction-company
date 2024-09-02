import CountUp from "react-countup";

import type { StatisticItemProps } from "../../types/statistic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatisticItem: React.FC<StatisticItemProps> = ({
  icon,
  end,
  duration,
  label,
}) => (
  <div className="flex flex-col items-start gap-3 lg:gap-5">
    <FontAwesomeIcon icon={icon} />

    <div className="flex items-end gap-2 2xl:gap-4">
      <CountUp
        start={0}
        end={end}
        duration={duration}
        className="text-white font-builders"
      />

      <p className="font-builders text-xl">{label}</p>
    </div>
  </div>
);

export default StatisticItem;
