import React, { useState, useEffect } from "react";
import styles from "../style";
import { robot, robot1, robot2 } from "../assets";
import { workimages } from "../assets/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import axios from 'axios';
import { LinkIcon } from 'lucide-react'; // Import LinkIcon


const Work = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tabs, settabs] = useState([]);


  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://karmachain-server-main-5a1cd0c.kuberns.cloud/api/works', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      settabs(response.data);
    } catch (error) {
      console.error('Error fetching works:', error);
      // Add user notification here (toast, alert, etc.)
    } finally {
      setIsLoading(false);
    }
  };
  // const tabs = [
  //   {
  //     label: "NFT Marketplace with react",
  //     content: "Nft",
  //     images: [
  //       `${workimages.NFT}`,
  //       `${workimages.NFT2}`,
  //       // Add more image URLs here
  //     ],
  //     p: "The premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
  //     li1: "dfrw",
  //     li2: "sf",
  //     li3: "dd",
  //   },
  //   {
  //     label: "NFT Marketplace with Next",
  //     content: "NFT Marketplace",
  //     images: [
  //       `${workimages.Nft_next}`,
  //       `${workimages.Nft_next}`,
  //       // Add more image URLs here
  //     ],
  //     p: "The premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
  //     li1: " NFT marketplace where digital art",
  //     li2: "digital assets come to life like never before",
  //     li3: "Dive into a world where creativity knows",
  //   },
  //   {
  //     label: "NFT Bridge",
  //     content: "NFT Bridge",
  //     images: [
  //       `${workimages.Nft_bridge}`,
  //       `${workimages.Nft_bridge}`,
  //       // Add more image URLs here
  //     ],
  //     p: "The premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
  //     li1: " NFT marketplace where digital art",
  //     li2: "digital assets come to life like never before",
  //     li3: "Dive into a world where creativity knows",
  //   },
  //   // Add more tabs here
  // ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const Loader = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <span className="ml-4 text-white text-xl">Loading...</span>
    </div>
  );

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line to enable automatic sliding
    autoplaySpeed: 2000, // Set the speed of automatic sliding in milliseconds
    // appendDots: (dots) => (
    //   <div className="flex justify-center mt-4">
    //     <ul className="flex items-center">
    //       {dots.map((dot, index) => (
    //         <li key={index} className="mx-2">
    //           {dot}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // ),
    customPaging: (i) => (
      <div className="h-4 w-4 rounded-lg hover:brightness-125 bg-teal-300" />
    ),
  };

  const text = "Framer Motion is a really cool tool".split(" ");

  return (
    <section
      id="work"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
    >
      {/* <div className='flex md:flex-row flex-col sm:py-16 py-6' > */}
      {/* <h2 className={styles.heading2}>Work History  </h2>
        <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <aside class="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div class="my-4 w-full border-b-4 border-indigo-100 text-center">
            <span class="font-mono text-xl font-bold tracking-widest"> <span class="text-indigo-600">HELLO</span> DEV </span>
          </div>
          <div class="my-4"></div>
        </aside>
        <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          <div class="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">Content</div>
        </main>
      </div> */}
      {/* </div> */}
      {/* <div class="flex">
        <div class="w-1/4">
          <div class="overflow-x-auto">
            <div class="flex flex-col">
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Fintech
              </button>
              <button
                class="px-4 py-2 border text-white  border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                E-Commerce
              </button>
              <button
                class="px-4 py-2 border text-white  border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Fitness
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Food Delivery
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Real Estate
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Travel
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 bg-gray-100"
                tabindex="0"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Social Networking
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Business
              </button>
              <button
                class="px-4 py-2 border text-white  border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Education
              </button>
            </div>
          </div>
        </div>
        <div class="w-3/4">
          <div class="p-4">
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-0"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-1"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-2"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-3"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-4"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-5"></div>
            <div class="block" role="tabpanel" id="vertical-tabpanel-6">
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-4">Social Networking</h3>
                <div class="flex flex-wrap mb-4">
                  <div class="w-full sm:w-1/2">
                    <div class="rounded-lg overflow-hidden">
                      <img src={robot} alt="Tab Panel Images" />
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2">
                    <div class="rounded-lg overflow-hidden">
                      <img src={robot} alt="Tab Panel Images" />
                    </div>
                  </div>
                </div>
                <p className=" text-white">
                  A social media platform can help you expand your network and
                  tap into a whole new market. It can increase your brand value,
                  boost conversion rate, and improve customer satisfaction. Our
                  web developers are skillfully apt for such projects.
                </p>
                <ul class="list-disc pl-4">
                  <li className=" text-white">Messaging/Calling Application</li>
                  <li className=" text-white">
                    Communities Application/Website
                  </li>
                  <li className=" text-white">
                    Job Posting Application/Website
                  </li>
                </ul>
              </div>
            </div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-7"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-8"></div>
          </div>
        </div>
      </div> */}

      <h2 className={styles.heading2}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: 1 }}
          viewport={{ once: true }}
        >
          Work History
        </motion.div>
      </h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="md:flex my-6">
          <div className=" md:w-1/4 ">
            <div className="overflow-x-auto ">
              <div className="flex flex-row md:flex-col gap-3 ">
                {tabs.map((tab, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "anticipate", duration: index * 0.9 }}
                    key={index}
                    className={` px-2 md:px-4 md:py-2  border rounded-3xl text-center hover:brightness-125 my-1 border-gray-300 ${activeTab === index
                      ? "bg-gradient-to-r  from-cyan-500 to-blue-500 text-black"
                      : "hover:bg-black text-white"
                      }`}
                    onClick={() => handleTabClick(index)}
                    role="tab"
                    aria-selected={activeTab === index}
                    viewport={{ once: true }}
                  // key={tabs.id}
                  // className={`flex-1 flex justify-start items-center flex-row m-3`}
                  >
                    <button>{tab.label}</button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="md:px-16  ">
              <div className="block text-white " role="tabpanel">
                <div>
                  <Slider {...settings} className="md:pb-7 my-8">
                    {tabs[activeTab]?.images.map((imageUrl, index) => {
                      console.log(`Rendering image ${index}: ${imageUrl}`); // Log the image URL and index
                      return (
                        <div className="flex justify-center items-center" key={`icon-${index}`}>
                          <div className="overflow-hidden md:px-12 md:h-[500px]">
                            <img
                              src={`${imageUrl}`}
                              className="w-full  rounded-3xl max-h-full"
                              alt={`Image ${index}`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                  <div>
                    
                  </div>

                  <motion.h1 className="text-gradient font-bold text-xl md:text-5xl ">
                    {tabs[activeTab]?.label}{" "}
                  </motion.h1>
                  {tabs[activeTab]?.liveLink && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 pb-4"
                    >
                      <a
                        href={tabs[activeTab].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <LinkIcon className="w-5 h-5 mr-2" />
                        View Live Project
                      </a>
                    </motion.div>
                  )}

                  {tabs[activeTab]?.p.split(" ").map((el, i) => (
                    <motion.span
                      className={`${styles.paragraph}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: i / 20,
                      }}
                      key={i}
                      viewport={{ once: true }}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
                  {/* Live Project Link */}
                  
                  {/* <p>{tabs[activeTab].p}</p> */}
                   <motion.ul
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className={`${styles.paragraph} list-disc pl-4 my-2`}
                    viewport={{ once: true }}
                  >
                    {tabs[activeTab]?.li1 && <li>{tabs[activeTab].li1}</li>}
                    {tabs[activeTab]?.li2 && <li>{tabs[activeTab].li2}</li>}
                    {tabs[activeTab]?.li3 && <li>{tabs[activeTab].li3}</li>}
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </section>
  );
};

export default Work;
