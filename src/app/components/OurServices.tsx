import { useEffect, useState } from "react";

import ServiceItem from "./items/ServiceItem";
import { iconMapping } from "../utils/iconMapping"; // Import the iconMapping from your utility file

const OurServices: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/data/services.json");
      const data = await response.json();

      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <div
      className="flex flex-col gap-6 2xl:gap-12 p-4 sm:p-8 lg:p-12 2xl:p-44 2xl:pt-0"
      id="ourservices"
    >
      <h1 className="text-xl sm:text-2xl 2xl:text-3xl underline underline-offset-8 decoration-amber-400 font-extrabold">
        Our services
      </h1>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-16 sm:gap-8 lg:gap-y-12 2xl:gap-y-16 sm:justify-between sm:w-full">
        {services.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            description={service.description}
            icon={iconMapping[service.icon]} // Access icon using iconMapping
            imageSrc={service.imageSrc}
            linkHref={service.linkHref}
            durationShow={service.durationShow}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
