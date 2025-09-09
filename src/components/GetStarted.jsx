import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <a
      href="https://calendly.com/karmachaininfotech/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`
          ${styles.flexCenter} 
          w-[100px] h-[100px] 
          sm:w-[120px] sm:h-[120px] 
          md:w-[140px] md:h-[140px] 
          rounded-full bg-blue-gradient 
          p-[2px] cursor-pointer
        `}
      >
        <div
          className={`
            ${styles.flexCenter} flex-col 
            bg-primary w-full h-full 
            rounded-full
          `}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p
              className="
                font-poppins font-medium 
                text-[14px] leading-[20px] 
                sm:text-[16px] sm:leading-[22px] 
                md:text-[18px] md:leading-[23px] 
                mr-2
              "
            >
              <span className="text-gradient">Get</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow"
              className="
                w-[18px] h-[18px] 
                sm:w-[20px] sm:h-[20px] 
                md:w-[23px] md:h-[23px] 
                object-contain
              "
            />
          </div>
          <p
            className="
              font-poppins font-medium 
              text-[14px] leading-[20px] 
              sm:text-[16px] sm:leading-[22px] 
              md:text-[18px] md:leading-[23px]
            "
          >
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </a>
  )
}

export default GetStarted
