import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { iconMapping } from "../utils/iconMapping";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  const { copyText } = useCopyToClipboard();

  const handleClick = (text: string) => {
    copyText(text, "Successfully copied to the clipboard!");
  };

  return (
    <header className="flex flex-col sm:flex-row sm:gap-10 gap-2 p-4 sm:px-8 lg:px-12 2xl:px-44 text-sm lg:text-base border-b-4 border-amber-400 tracking-wide text-white font-bold bg-black">
      <div
        onClick={() => handleClick("(+48) 123 456 789")}
        className="flex gap-2 items-center cursor-pointer duration-200 hover:-translate-y-1"
      >
        <FontAwesomeIcon icon={iconMapping.faPhone} />

        <p>(+48) 123 456 789</p>

        <FontAwesomeIcon icon={iconMapping.faCopy} className="ml-2" />
      </div>

      <div
        onClick={() => handleClick("buildercompany@gmail.com")}
        className="flex gap-2 items-center cursor-pointer duration-200 hover:-translate-y-1"
      >
        <FontAwesomeIcon icon={iconMapping.faEnvelope} />

        <p>buildercompany@gmail.com</p>

        <FontAwesomeIcon icon={iconMapping.faCopy} className="ml-2" />
      </div>
    </header>
  );
};

export default Header;
