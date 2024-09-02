import { useEffect, useState } from "react";

import FooterColumn from "./footer/FooterColumn";
import FooterInfo from "./footer/FooterInfo";

import useLazyBackground from "../hooks/useLazyBackground";
import useBackgroundAttachment from "../hooks/useBackgroundAttachment";
import { iconMapping, IconMappingType } from "../utils/iconMapping";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  const [contactSections, setContactSections] = useState<any[]>([]);
  const backgroundAttachment = useBackgroundAttachment();

  useEffect(() => {
    const fetchContactSections = async () => {
      const response = await fetch("/data/contactFooter.json");
      const data = await response.json();

      setContactSections(data);
    };

    fetchContactSections();
  }, []);

  useLazyBackground([
    {
      id: "background-company-3",
      imageUrl: "/images/background-company-3.webp",
    },
  ]);

  return (
    <footer className="relative mt-16 pt-16 text-white">
      <div
        id="background-company-3"
        className="absolute inset-0 bg-center -z-10 bg-cover"
        style={{ backgroundAttachment }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row lg:px-8">
        <FooterColumn
          sections={contactSections.map((section) => ({
            ...section,
            icon: (
              <FontAwesomeIcon
                icon={iconMapping[section.icon as keyof IconMappingType]}
                className="text-3xl"
              />
            ),
          }))}
        />
      </div>

      <div className="relative flex flex-col lg:flex-row lg:px-8 text-sm">
        <FooterInfo />
      </div>

      <div className="relative flex justify-center items-center p-4 mt-16 text-sm bg-amber-400 text-gray-900">
        <p>Copyright © 2024 Company Builder. All Rights Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
