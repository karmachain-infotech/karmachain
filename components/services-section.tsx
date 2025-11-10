"use client"
import React, { useState } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveCard } from "@/components/interactive-card"
import Link from "next/link"
import { Code, Smartphone, Gamepad2, Users } from "lucide-react"
import { motion } from "framer-motion";
import styles, { layout } from "./style";
import {
  ui_ux,
  Mobile,
  Customer,
  Frontend,
  Backend,
  SEO,
  Quality,
} from "./assets/index";
import Image from "next/image";


const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We help companies with unique and comprehensive web development services that empower you and your clients.",
    link: "/web-development",
    image: "/web-development-illustration.png",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We can assist you with user-friendly, interactive and feature-rich mobile app development services to enable your digital growth.",
    link: "/mobile-app-development",
    image: "/mobile-app-development.png",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description:
      "We are a leading game development company in India that deploys cutting edge technologies to build and deliver some of the most successful games in the industry.",
    link: "/game-development",
    image: "/game-development-illustration.jpg",
  },
  {
    icon: Users,
    title: "Hire Offshore Developers",
    description:
      "Karmachain provides software development services through a dedicated and skilled offshore development team across various technologies and frameworks.",
    link: "/hire-developers",
    image: "/offshore-developers-illustration.jpg",
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const Data = [
    {
      Labal: "UI/UX Design",
      p: "We give you the power to present your business in an engaging way using cutting-edge designs made through the appropriate maneuverof HTML5, animation, and interactive elements. Our design team has helped many companies achieve both business goals and user satisfaction",
      image: ui_ux.main_ui,
      icons: [
        { name: "Figma", icon: ui_ux.Figma },
        { name: "Invision", icon: ui_ux.Invision },
        { name: "Mockflow", icon: ui_ux.Mockflow },
        { name: "Photoshop", icon: ui_ux.Photoshop },
        { name: "Sketch", icon: ui_ux.Sketch },
        { name: "Xd", icon: ui_ux.Xd },
      ],
    },
    {
      Labal: "Mobile App Development",
      p: "Our Mobile Development Team is capable of handling any type of project, be it on iOS, Android, or both. We don't just code, but also provide useful inputs during the design/development process to optimize your app's performance and gain outstanding results.",
      image: Mobile.main_mobile,
      icons: [
        { name: "Flutter", icon: Mobile.Flutter },
        { name: "Kotlin", icon: Mobile.Kotlin },
        { name: "React Native", icon: Mobile.React_Native },
        { name: "Swift", icon: Mobile.Swift },
        { name: "Xamarin", icon: Mobile.Xamarin },
      ],
    },
    {
      Labal: "Front-End Development",
      p: "We create all interfaces keeping the end-user in mind to ensure that the project resolves as many industry-based queries as possible within limited clicks. Whether it is creating a simple website for SMEs or designing complex tools for giant corporations, our team can do it all.",
      image: Frontend.main_frontend,
      icons: [
        { name: "HTML", icon: Frontend.HTML },
        { name: "CSS", icon: Frontend.CSS },
        { name: "Angular", icon: Frontend.Angular },
        { name: "JavaScript", icon: Frontend.JavaScript },
        { name: "Jquery", icon: Frontend.Jquery },
        { name: "React", icon: Frontend.React },
      ],
    },
    {
      Labal: "Back-End Development",
      p: "Our back-end developers put a lot of thought into building the backbone of your project to provide the ideal product from the client's, as well as, the user's perspective. Our professionals are specialized in delivering flexible, scalable, highly advanced, and fast-loading solutions.",
      image: Backend.main_backend,
      icons: [
        { name: "C++", icon: Backend.Cplus },
        { name: ".NET", icon: Backend.Dot_Net },
        { name: "Node js", icon: Backend.Node_js },
        { name: "Python", icon: Backend.Python },
        { name: "Shopify", icon: Backend.Shopify },
        { name: "Wordpress", icon: Backend.Wordpress },
      ],
    },
    {
      Labal: "SEO & Digital Marketing",
      p: "With a goal of providing results-driven digital marketing services and excellent customer care, our SEO experts strive to deliver the best possible outcomes. We can handle search engine optimizations, content optimizations, off-page, and on-page optimizations effectively Know more.",
      image: SEO.main_seo,
      icons: [
        { name: "Google Analytics", icon: SEO.Google_Analytics },
        { name: "Google Trends", icon: SEO.Google_Trends },
        { name: "Google Search", icon: SEO.Google_search },
        { name: "SEO spyGlass", icon: SEO.SEO_spyGlass },
        { name: "Screaming frog", icon: SEO.Screaming_frog },
      ],
    },
    {
      Labal: "Quality Assurance",
      p: "A flawless product is crucial for the success of any business. Hence, we offer the best QA specialists, who conduct tests on your project through manual and automated systems regularly, to report issues if any, and assist you in implementing necessary upgrades on time.",
      image: Quality.main_quality,
      icons: [
        { name: "Appium", icon: Quality.Appium },
        { name: "LambaTest", icon: Quality.LambaTest },
        { name: "Postman", icon: Quality.Postman },
        { name: "Selenium", icon: Quality.Selenium },
      ],
    },
    {
      Labal: "Customer Support",
      p: "Netizens Technologies can help businesses win the hearts of their customers by walking the extra mile when required. Our BPO & customer support team can assist your users through undertakings like maintenance, installation, up-gradation, training, and query resolution.",
      image: Customer.main_cu,
      icons: [
        { name: "Email Support", icon: Customer.Email_Support },
        { name: "Inbound Calls", icon: Customer.Inbound_Calls },
        { name: "Live chat support", icon: Customer.Live_chat_support },
        { name: "Virtual Assistance", icon: Customer.Virtual_Assistance }, // ✅ FIXED
      ],
    },
  ];


  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>

      <section className="hidden md:block  md:flex-row container mx-auto flex-col-reverse sm:py-16 py-6 relative">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>

        {/* Title */} 
        <div className="col-12 text-center">
          <span className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
            Our Services
          </span>
          <h2 className="text-gradient font-poppins font-semibold md:text-4xl text-black">
            Digital Design & Development Tasks <br /> Under One Roof
          </h2>
        </div>

        {/* SVG Lines */}
        <div className="hidden md:block col-12 text-center">
          <svg
            className="py-3 expert-svg px-8"
            viewBox="0 0 1067 226"
            fill="none"
            width="100%"
            height="100%"
          >
            {[
              "M538.5 55C501.069 173.281 143.781 145.868 14.5 207.879C10 210.086 1 210.7 1 225.5",
              "M538.608 61C503.648 171.471 275.683 172.071 199.5 203.124C192.833 205.416 179.5 213 179.5 225",
              "M539 65C520.703 183.81 391.326 172.124 370 214C369 216.5 368.5 216.5 368.5 224.5",
              "M540 224C540 182 540 147.5 540 71",
              "M540 65C557.921 184.183 684.643 172.46 705.531 214.467C706.51 216.975 707 216.975 707 225",
              "M540 61C577.032 178.024 826.967 171.756 887.009 209C890.839 211.167 898.6 217.3 899 224.5",
              "M540.5 55C578.314 174.494 906.6 147.689 1053.5 210.432C1057.67 211.954 1064.5 215 1065.5 225",
            ].map((d, i) => (
              <path
                key={i}
                className={`path ${activeTab === i ? "active" : ""}`}
                d={d}
                stroke="#0a0a0a"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            ))}

            <g filter="url(#filter0_d)">
              {/* <circle cx="540.5" cy="64.5" r="44.5" fill="black" /> */}
              <image
                href="/logowithbg.png" // ✅ public folder image
                x="496"
                y="20"
                width="90"
                height="90"
                clipPath="url(#circleView)"
              />
            </g>
          </svg>
        </div>

        {/* Tabs */}
        <div className="flex mt-6 md:mt-0">
          <ul className="flex gap-2 md:gap-9 lg:gap-12 xl:gap-16 overflow-x-scroll md:overflow-hidden md:justify-between">
            {Data.map((tab, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "anticipate", duration: index * 0.2 }}
                viewport={{ once: true }}
              >
                <button
                  className={`text-white shadow-xl shadow-cyan-500/50 bg-gradient-to-r from-accent to-cyan-500 hover:bg-gradient-to-bl focus:ring-2  font-medium rounded-lg text-sm px-4 py-2 transition-all duration-500 ${activeTab === index ? "ring-2 ring-accent" : ""
                    }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.Labal}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap py-12">
          <div className="md:w-7/12 flex flex-col justify-around">
            <motion.h3
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-xl md:text-5xl font-poppins font-semibold text-black"
              viewport={{ once: true }}
            >
              {Data[activeTab].Labal}
            </motion.h3>

            <div className="max-w-[670px] text-base  sm:text-lg md:text-xl leading-relaxed">
              {Data[activeTab].p.split(" ").map((el, i) => (
                <motion.span
                  className="text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 20,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>

            {/* Icons */}
            <div className="grid grid-cols-4 md:grid-cols-6  mt-5 md:mt-0 items-center gap-5">
              {Data[activeTab].icons.map((ic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "anticipate", duration: i * 0.2 }}
                  className="flex flex-col gap-4 items-center  "
                >
                  <Image
                    src={ic.icon}
                    alt={ic.name}
                    className="items-center"
                  />
                  <h5 className="text-black items-center text-xs md:text-xl">{ic.name}</h5>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-5/12 mt-6 md:mt-0">
            <div className="svg-box flex p-4 ss:p-9 sm:p-16 justify-center">
              <Image
                src={Data[activeTab].image}
                alt="uiuxDevelopement"
                className="rounded-3xl"

                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:hidden py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As one of the leading software development companies, we at Karmachain have a diverse range of services for
              our clients, where we operate in these core areas services.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <InteractiveCard
                  hoverScale={true}
                  glowEffect={true}
                  className={`h-full border-border hover:border-accent/50 card-hover group stagger-${index + 1}`}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-glow">
                      <service.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-accent transition-all duration-300 group-hover:scale-105">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 bg-transparent transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 border-2 hover:border-accent animate-shimmer"
                    >
                      <Link href={service.link} className="relative overflow-hidden">
                        <span className="relative z-10">Learn More</span>
                      </Link>
                    </Button>
                  </CardContent>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="scale" delay={600} className="text-center mt-16">
            <div className="bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help bring your ideas to life with our comprehensive development services.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
