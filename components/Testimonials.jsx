"use client";
import { feedback } from "@constants";
import styles from "@styles/style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-0 w-[60%] h-[60%] rounded-full blue__gradient -right-[50%]" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            any where on the planent.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;