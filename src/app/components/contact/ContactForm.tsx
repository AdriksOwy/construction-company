import { motion } from "framer-motion";

import { useAnimatedInView } from "../../hooks/useAnimatedInView";

const ContactForm: React.FC = () => {
  const [ref, controls] = useAnimatedInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="flex"
    >
      <form action="" className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="sm:text-lg 2xl:text-xl">
          Name
        </label>

        <input
          type="text"
          id="name"
          maxLength={25}
          className="p-2 border-2 outline-none"
        />

        <label htmlFor="mail" className="mt-4 sm:text-lg 2xl:text-xl">
          E-mail
        </label>

        <input
          type="email"
          id="mail"
          maxLength={50}
          className="p-2 border-2 outline-none"
        />

        <label htmlFor="message" className="mt-4 sm:text-lg 2xl:text-xl">
          Message
        </label>

        <textarea
          id="message"
          maxLength={500}
          className="p-2 h-64 border-2 outline-none"
        />

        <input
          type="submit"
          className="py-2 px-6 mt-5 ml-auto cursor-pointer duration-200 hover:bg-white hover:text-black border-2 border-amber-400 uppercase text-sm sm:text-base 2xl:text-lg font-bold text-white bg-amber-400"
          value="Send message"
        />
      </form>
    </motion.div>
  );
};

export default ContactForm;
