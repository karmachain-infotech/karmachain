import React from "react";
import styles from "../style";
import { footerLinks, socialMedia,businessInquiry } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {/* Top Section */}
      <div className={`${styles.flexStart} w-full flex flex-col md:flex-row md:justify-between mb-10`}>
        
        {/* Logo & Description */}
        <div className="flex flex-col justify-start items-center md:items-start md:mr-10 w-full md:w-[30%] text-center md:text-left">
          <img
            src="logo1.png"
            alt="logo"
            className="w-[180px] h-auto sm:w-[220px] md:w-[260px] lg:w-[300px] object-contain mx-auto md:mx-0"
          />
          <p className="text-dimWhite text-[14px] sm:text-[15px] md:text-[16px] mt-4 max-w-[320px] leading-relaxed">
            Karmachain Infotech – delivering innovative digital solutions to help businesses grow.
          </p>
        </div>

        {/* Footer Links */}
<div className="flex flex-wrap w-full md:w-[65%] justify-center md:justify-between gap-8 mt-10 md:mt-0">
  {footerLinks.map((link) => (
    <div
      key={link.title}
      className="flex flex-col text-center sm:text-left w-[45%] sm:w-[40%] md:w-[22%] min-w-[160px]"
    >
      <h4 className="font-poppins font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] text-white mb-4">
        {link.title}
      </h4>
      <ul className="list-none space-y-3">
        {link.links.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-200"
          >
            {item.name}
          </motion.li>
        ))}

        {/* Show Business Inquiry only below About */}
        {link.title === "About" && (
          <div className="mt-6">
            <h5 className="font-poppins font-semibold text-[15px] text-white mb-2 mt-14">
              Business Inquiry
            </h5>
            <ul className="list-none space-y-2">
              {businessInquiry.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "anticipate", duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-200"
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </ul>
    </div>
  ))}
</div>


      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[#3F3E45] pt-6">
        <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] text-center text-white mb-4 md:mb-0">
          © 2025 Karmachain Infotech. All Rights Reserved.
        </p>

        <div className="flex flex-row gap-5">
          {socialMedia.map((social, index) => (
            <img
              onClick={() => window.open(social.link, "_blank")}
              src={social.icon}
              key={social.id}
              alt={social.id}
              className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
