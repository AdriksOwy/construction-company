import Image from "next/image";

import type { LoadingScreenProps } from "../types/loadingScreen";

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/images/logo-company.webp"
        width={120}
        height={40}
        priority={true}
        alt="Logo Builder Company"
        className="animate-bounce"
      />
    </div>
  );
};

export default LoadingScreen;
