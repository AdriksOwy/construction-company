import Image from "next/image";
import Link from "next/link";

import Typewriter from "./ui/Typewriter";

const Banner: React.FC = () => {
  const words = [
    "are experts in construction",
    "build with you in mind",
    "build with quality, you can rely on",
    "build the foundation for your success",
  ];

  return (
    <div className="flex justify-center lg:justify-start items-center">
      <Image
        src="/images/background-company.webp"
        width={1000}
        height={667}
        alt="Background Builder Company"
        priority={true}
        className="hidden md:flex w-full brightness-[.4] lg:h-screen lg:object-cover"
      />

      <Image
        src="/images/background-company-mini.webp"
        width={230}
        height={110}
        alt="Background Builder Company"
        priority={true}
        className="md:hidden w-full brightness-[.3]"
      />

      <div className="flex flex-col items-center justify-center lg:items-start lg:ml-12 2xl:ml-20 gap-4 lg:gap-6 absolute font-bold tracking-wider">
        <Typewriter words={words} />

        <Link
          href="#ourservices"
          className="px-4 py-3 border-2 tracking-widest uppercase text-sm sm:text-base duration-200 hover:bg-amber-400 border-amber-400 text-white"
        >
          Our services
        </Link>
      </div>
    </div>
  );
};

export default Banner;
