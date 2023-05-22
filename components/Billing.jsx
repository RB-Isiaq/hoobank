"use client";
import { apple, bill, google } from "@public/assets";
import styles, { layout } from "@styles/style";
import Image from "next/image";

import { motion } from "framer-motion";

const Billing = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      id="product"
      className={layout.sectionReverse}
    >
      <div className={layout.sectionImgReverse}>
        <Image
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[30%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bpttom-0 w-[30%] h-[40%] rounded-full pink__gradient " />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:hidden block" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Vonsectetur adipisicing elit. Ducimus error suscipit amet minima
          perspiciatis cumque corporis quasi expedita animi ratione fugit vero
          iure, eos ipsa!
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image
            src={apple}
            alt="apple_store"
            className="w-[128px] h[42px] object-contain mr-5 cursor-pointer"
          />
          <Image
            src={google}
            alt="google_play"
            className="w-[128px] h[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Billing;
