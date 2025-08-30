import React from 'react'
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
} from './components'
import { motion } from "framer-motion"
import styles from './style'
import GetStarted from "./components/GetStarted";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminWorkPanel from './components/AdminWorkPanel';

const Mainapp= ()=>{
  return (
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
  )
}

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Mainapp />} />
        <Route path="/admin" element={<AdminWorkPanel />} />
      </Routes>
    </Router>
  )
}

export default App