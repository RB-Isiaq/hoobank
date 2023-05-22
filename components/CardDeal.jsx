"use client";
import { card } from "@public/assets";
import Image from "next/image";
import styles, { layout } from "@styles/style";
import Button from "./Button";

import { motion } from "framer-motion";

const CardDeal = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
    viewport={{ once: true }}
    className={layout.section}
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Molestiae, soluta animi. Odit quo aliquid sapiente? Nesciunt accusamus
        officia, inventore ipsam distinctio modi. Iusto illum repellendus
        deserunt totam earum aliquid illo.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </motion.section>
);

export default CardDeal;
