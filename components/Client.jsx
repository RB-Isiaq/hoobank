"use client";
import { clients } from "@constants";
import styles from "@styles/style";

import Image from "next/image";
import { motion } from "framer-motion";

const Client = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0, x: 100 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={`${styles.flexCenter} my-4`}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-2-[120px] mx-[2px]`}
          >
            <Image
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain "
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Client;
