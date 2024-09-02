import Link from "next/link";

import { iconMapping } from "../../utils/iconMapping";
import type { FooterSectionProps } from "../../types/footerSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSection: React.FC<FooterSectionProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  ariaLabel,
}) => {
  return (
    <div className="flex items-start gap-8 p-6 w-full border border-gray-600">
      <Link
        href={linkHref}
        className="flex justify-center text-amber-400 duration-200 hover:text-white"
        aria-label={ariaLabel}
      >
        {icon}
      </Link>

      <div className="flex flex-col gap-2 text-sm">
        <h1 className="text-lg font-extrabold">{title}</h1>

        <p className="text-gray-200">{description}</p>

        <Link
          href={linkHref}
          className="flex items-center gap-2 duration-200 hover:text-white text-amber-400 mt-2"
        >
          <FontAwesomeIcon icon={iconMapping.faCaretRight} />

          <span>{linkText}</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterSection;
