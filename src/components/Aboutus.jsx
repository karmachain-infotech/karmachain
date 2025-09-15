import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { logo1 } from "../assets/index";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"
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


const Information = [
  {
    Title: "About Us",
    Info: `KarmaChain Infotech is a trusted Website, Mobile App, Blockchain, and AI development company based in India, serving clients worldwide. We create smart, secure, and scalable digital solutions that help businesses grow, connect with new customers, and stay ahead in the digital age.`,
    Info2: "Our focus is simple deliver reliable technology that drives real results. With every project, we combine innovation, speed, and cost efficiency to ensure our clients achieve success without compromise.",
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
            <img src="logo1.png" alt="about" className="mx-auto px-8 sm:px-20 md:px-36 lg:px-36 xl:px-44 lg:mx-0 w-full h-auto" />
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

            {/* Animate Info text word by word */}
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-base`}>
              {Information[0].Info.split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 30,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>

            {/* Animate Info2 text word by word */}
            <p className={`${styles.paragraph} max-w-[570px] mt-5 text-base`}>
              {Information[0].Info2.split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 30,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutus;
