import { useEffect, useState } from "react";

import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

import { iconMapping } from "../utils/iconMapping";

const Contact: React.FC = () => {
  const [contactUs, setContactUs] = useState<any[]>([]);

  useEffect(() => {
    const fetchContactUs = async () => {
      const response = await fetch("/data/contactUs.json");
      const data = await response.json();

      setContactUs(data);
    };

    fetchContactUs();
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row gap-12 lg:gap-6 p-4 sm:p-8 lg:p-12 sm:mt-4 lg:mt-0 2xl:p-44 2xl:pt-0"
      id="contact"
    >
      <div className="flex flex-col gap-6 2xl:gap-12 lg:w-2/5">
        <h1 className="text-xl sm:text-2xl 2xl:text-3xl underline underline-offset-8 decoration-amber-400 font-extrabold">
          Contact Us
        </h1>

        {contactUs.map((item, index) => (
          <ContactInfo
            key={index}
            icon={iconMapping[item.icon as keyof typeof iconMapping]}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 2xl:gap-8 lg:w-3/5 sm:mt-4 lg:m-0">
        <h1 className="text-xl sm:text-2xl 2xl:text-3xl underline underline-offset-8 decoration-amber-400 font-extrabold">
          Contact Form
        </h1>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
