import Link from "next/link";
import Image from "next/image";

const FooterInfo: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mt-14 lg:m-0 p-4">
        <h1 className="text-xl font-extrabold uppercase">About Us</h1>

        <Link href="/" className="flex">
          <Image
            src="/images/logo-company.webp"
            width={90}
            height={40}
            alt="Logo Builder Company"
            priority={false}
          />
        </Link>

        <p className="text-gray-200">
          With over 30 years in the construction industry, our company has built
          a strong reputation for quality and reliability. We have successfully
          managed a wide range of projects, from residential to industrial,
          showcasing our ability to handle diverse challenges with expertise.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6 lg:m-0 p-4 text-gray-200">
        <h1 className="text-xl font-extrabold uppercase text-white">
          Working hours
        </h1>

        <p>
          We work 7 days a week, every day except major holidays. Contact us if
          you have an emergency using our helpline and contact form.
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Monday - Friday</p>

            <p>9:00 - 17:00</p>
          </div>

          <div className="flex justify-between">
            <p>Saturday</p>

            <p>10:00 - 16:00</p>
          </div>

          <div className="flex justify-between">
            <p>Sunday/Holidays</p>

            <p>10:00 - 14:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterInfo;
