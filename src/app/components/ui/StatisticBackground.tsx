import useLazyBackground from "../../hooks/useLazyBackground";
import useBackgroundAttachment from "../../hooks/useBackgroundAttachment";

const StatisticsBackground: React.FC = () => {
  const backgroundAttachment = useBackgroundAttachment();

  useLazyBackground([
    {
      id: "background-company-2",
      imageUrl: "/images/background-company-2.webp",
    },
  ]);

  return (
    <div
      id="background-company-2"
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundAttachment }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
};

export default StatisticsBackground;
