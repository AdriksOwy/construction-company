import { motion } from "framer-motion";

import { useAnimatedInView } from "../../hooks/useAnimatedInView";
import type { ContactInfo } from "../../types/contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo: React.FC<ContactInfo> = ({ icon, title, content }) => {
  const [ref, controls] = useAnimatedInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="flex gap-6"
    >
      <FontAwesomeIcon icon={icon} className="text-3xl w-9 text-amber-400" />

      <div className="flex flex-col gap-2">
        <h2 className="font-extrabold text-lg 2xl:text-xl">{title}</h2>

        <p className="opacity-80">{content}</p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
