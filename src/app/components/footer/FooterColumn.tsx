import type { FooterColumnProps } from "../../types/footerColumn";

import FooterSection from "./FooterSection";

const FooterColumn: React.FC<FooterColumnProps> = ({ sections }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 w-full p-4">
      {sections.map((section, index) => (
        <FooterSection
          key={index}
          icon={section.icon}
          title={section.title}
          description={section.description}
          linkText={section.linkText}
          linkHref={section.linkHref}
          ariaLabel={section.ariaLabel}
        />
      ))}
    </div>
  );
};

export default FooterColumn;
