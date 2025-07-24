import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { logo1 } from "../assets/index";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src='logo1.png' alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const Information=[
  {
    Title:"About Us",
    Info:`KarmaChain Technology stands as a premier Website and App
    Development firm, renowned in India and esteemed globally. Our
    mission is to propel businesses towards growth, enabling them to
    connect with new audiences worldwide through our adept and
    punctual development solutions. With KarmaChain, rest assured
    about development costs and timelines - we're dedicated to
    supporting you in every scenario.`,
  }
]
const Aboutus = () => {
  return (
    <section id="aboutus" className={layout.section}>
      {/* <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/>we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, 
          you can improve your financial life by building credit,
          earning rewards and saving money.
          But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div> */}

      <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 order-2 lg:order-1 hidden sm:block">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "backInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <img src="logo1.png" alt="about" className="mx-auto px-8 sm:px-20 md:px-32 lg:mx-0 w-full h-auto" />
        </motion.div>
      </div>
        <div className="lg:w-1/2 order-1 lg:order-2"> 
          <div className="about_text_block">
            <h2 className={styles.heading2}>
              <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "backInOut", duration: 0.5 }}
                viewport={{ once: true }}
              >
                {Information[0].Title}
              </motion.div>
            </h2>
            {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              <motion.div
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "backInOut", duration: 2 }}
              >
                {Information[0].Info}
              </motion.div>
            </p> */}
            {Information[0].Info.split(" ").map((el, i) => (
              <motion.span
              className={`${styles.paragraph} max-w-[470px] mt-5 text-base`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i /30,
                }}
                key={i}
                viewport={{ once: true }}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
