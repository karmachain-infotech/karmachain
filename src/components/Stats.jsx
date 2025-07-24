import React from "react";
import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 my-5`}
    >
      {stats.map((stat, i) => (
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: i * 0.2 }}
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3`}
          viewport={{ once: true }}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </motion.div> 
      ))}
    </section>
  );
};

export default Stats;
