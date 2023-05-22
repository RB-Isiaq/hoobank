"use client";
import styles from "@styles/style";
import { stats } from "@constants";
import { motion } from "framer-motion";

const Stats = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0, x: 100 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
    viewport={{ once: true }}
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </motion.section>
);

export default Stats;
