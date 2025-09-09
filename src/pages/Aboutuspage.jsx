import React from "react";
import styles from "../style";
import { 
  Services, 
  Aboutus, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials ,
  Work
} from "../components";


const Aboutuspage = () => {
  return (
    <>
   <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`} >
          
          <Navbar/>
         
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        {/* <div className={`${styles.boxWidth}`}> */}
          <Hero/>      
        {/* </div> */}
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Aboutus/>
          <Work/>
          <Services/>
          {/* <CardDeal/> */}
          {/* <Testimonials/> */}
          {/* <Clients/> */}
          <CTA/>
          <Footer/>       
        </div>
      </div>
    </div>
    </>
  );
};

export default Aboutuspage;
