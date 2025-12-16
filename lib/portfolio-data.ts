export const portfolioItems = [
  {
    id: 1,
    title: "FinTech Mobile Banking App",
    slug: "fintech-mobile-banking-app",
    shortDescription: "A secure, high-performance mobile banking application with advanced financial features.",
    description:
      "A comprehensive mobile banking solution featuring advanced security, intuitive UX, and real-time financial insights designed to modernize digital banking.",
    category: "Mobile App",
    industry: "Finance",
    year: "2024",
    duration: "8 months",
    client: "SecureBank",
    users: "500K+",
    rating: 4.9,
    featured: true,

    // ✅ use image for cover, images for gallery
    image: "/banking-mobile-app-interface.jpg",
    images: ["/banking-mobile-app-interface.jpg", "/ecommerce-mobile-app-screenshot.jpg", "/fitness-tracking-app-interface.png"],

    liveUrl: "https://securebank.app",
    role: "Full Product Development",

    technologies: {
      frontend: ["React Native", "TypeScript", "Redux Toolkit"],
      backend: ["Node.js", "Express.js", "JWT"],
      infrastructure: ["AWS", "MongoDB", "Redis", "Docker"],
    },

    overview:
      "SecureBank partnered with us to build a next-generation mobile banking app focused on security, scalability, and exceptional user experience.",

    keyFeatures: [
      "Biometric authentication (Face ID / Touch ID)",
      "Real-time fraud detection & alerts",
      "Money transfers & bill payments",
      "Personal finance analytics",
      "Investment & crypto tracking",
    ],

    challenges: [
      "High security and compliance requirements",
      "Handling real-time transactions at scale",
      "Ensuring smooth UX for non-technical users",
    ],

    solutions: ["Multi-layer security architecture", "Optimized API & caching layers", "UX tested with real banking customers"],

    results: [
      { label: "Active Users", value: "500K+" },
      { label: "App Store Rating", value: "4.9 / 5" },
      { label: "Uptime", value: "99.9%" },
      { label: "Digital Adoption Increase", value: "40%" },
    ],

    testimonial: {
      quote: "The app exceeded our expectations. Security, performance, and UX are best-in-class.",
      author: "John Smith",
      role: "CTO, SecureBank",
    },
  },

  {
    id: 2,
    title: "AI-Powered E-commerce Platform",
    slug: "ai-ecommerce-platform",
    shortDescription: "A scalable e-commerce platform with AI-driven product recommendations.",
    description:
      "A modern e-commerce platform featuring AI-based recommendations, optimized checkout, and high-performance architecture.",
    category: "Web Development",
    industry: "E-commerce",
    year: "2024",
    duration: "6 months",
    client: "ShopSmart",
    users: "1M+",
    rating: 4.8,
    featured: true,

    image: "/portfolio-ecommerce-platform.jpg",
    images: ["/portfolio-ecommerce-platform.jpg"],

    liveUrl: "https://shopsmart.com",
    role: "End-to-End Web Development",

    technologies: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["Python", "Django"],
      ai: ["TensorFlow", "Recommendation Engine"],
      infrastructure: ["PostgreSQL", "AWS"],
    },

    overview: "ShopSmart needed a high-conversion e-commerce experience powered by AI personalization.",

    keyFeatures: ["AI-powered product recommendations", "Lightning-fast checkout", "Advanced search & filtering", "Order & inventory management"],

    challenges: ["Handling large-scale traffic spikes", "Improving product discovery", "Reducing cart abandonment"],

    solutions: ["ML-based recommendation engine", "Edge caching & performance tuning", "UX-focused checkout redesign"],

    results: [
      { label: "Monthly Users", value: "1M+" },
      { label: "Conversion Rate Increase", value: "32%" },
      { label: "Cart Abandonment Reduction", value: "28%" },
    ],
  },

  {
    id: 3,
    title: "Healthcare Management System",
    slug: "healthcare-management-system",
    shortDescription: "A secure hospital management platform for patient records and scheduling.",
    description:
      "A full-featured healthcare management system designed to streamline hospital operations and patient care.",
    category: "Web Development",
    industry: "Healthcare",
    year: "2023",
    duration: "10 months",
    client: "MediCare Plus",
    users: "50K+",
    rating: 4.9,
    featured: true,

    image: "/portfolio-healthcare-system.jpg",
    images: ["/portfolio-healthcare-system.jpg"],

    role: "System Architecture & Development",

    technologies: {
      frontend: ["React", "TypeScript"],
      backend: ["Django", "REST APIs"],
      infrastructure: ["PostgreSQL", "Docker"],
    },

    overview: "MediCare Plus required a compliant platform to manage patients, appointments, and staff workflows.",

    keyFeatures: ["Electronic health records (EHR)", "Appointment scheduling", "Role-based access control", "Doctor & staff dashboards"],

    results: [{ label: "Operational Efficiency", value: "+45%" }, { label: "Data Accuracy", value: "99.8%" }],
  },

  {
    id: 4,
    title: "Real Estate Mobile App",
    slug: "real-estate-mobile-app",
    shortDescription: "Property discovery app with virtual tours and mortgage tools.",
    description:
      "A mobile application enabling users to discover, compare, and manage real estate listings with immersive experiences.",
    category: "Mobile App",
    industry: "Real Estate",
    year: "2023",
    duration: "5 months",
    client: "PropertyHub",
    users: "200K+",
    rating: 4.7,

    image: "/portfolio-real-estate-app.jpg",
    images: ["/portfolio-real-estate-app.jpg"],

    technologies: {
      frontend: ["Flutter"],
      backend: ["Firebase"],
      integrations: ["Google Maps API"],
    },

    overview: "A feature-rich real estate experience focused on discovery, comparison, and saved searches.",

    keyFeatures: ["Advanced property search", "Virtual property tours", "Mortgage calculator", "Saved listings & alerts"],
  },

  {
    id: 5,
    title: "Educational Learning Platform",
    slug: "educational-learning-platform",
    shortDescription: "Online learning platform with courses, quizzes, and progress tracking.",
    description: "An interactive e-learning platform designed for scalable online education.",
    category: "Web Development",
    industry: "Education",
    year: "2023",
    duration: "7 months",
    client: "EduTech Solutions",
    users: "300K+",
    rating: 4.8,

    image: "/portfolio-education-platform.jpg",
    images: ["/portfolio-education-platform.jpg"],

    technologies: {
      frontend: ["Vue.js"],
      backend: ["Laravel"],
      infrastructure: ["MySQL", "AWS"],
    },

    overview: "A scalable LMS enabling courses, assessments, and analytics for students and instructors.",

    keyFeatures: ["Video-based courses", "Interactive quizzes", "Student progress analytics", "Instructor dashboards"],
  },

  {
    id: 6,
    title: "Food Delivery Mobile App",
    slug: "food-delivery-mobile-app",
    shortDescription: "On-demand food delivery app with real-time tracking.",
    description: "A scalable food delivery solution with live order tracking and seamless payments.",
    category: "Mobile App",
    industry: "Food & Beverage",
    year: "2023",
    duration: "6 months",
    client: "QuickEats",
    users: "800K+",
    rating: 4.6,

    image: "/portfolio-food-delivery-app.jpg",
    images: ["/portfolio-food-delivery-app.jpg"],

    technologies: {
      frontend: ["React Native"],
      backend: ["Node.js"],
      payments: ["Stripe"],
      database: ["MongoDB"],
    },

    overview: "Designed a fast ordering + delivery flow with a driver-first tracking system.",
    keyFeatures: ["Live order tracking", "Multiple payment methods", "Restaurant onboarding", "Ratings & reviews"],
    results: [{ label: "Orders per Day", value: "25K+" }, { label: "Avg. Delivery Time", value: "28 min" }],
  },

  {
    id: 7,
    title: "Adventure Racing Game",
    slug: "adventure-racing-game",
    shortDescription: "A multiplayer 3D racing game with immersive gameplay.",
    description: "A high-performance racing game featuring multiplayer support and stunning visuals.",
    category: "Game Development",
    industry: "Gaming",
    year: "2024",
    duration: "9 months",
    client: "GameStudio Pro",
    users: "2M+",
    rating: 4.7,

    image: "/portfolio-racing-game.jpg",
    images: ["/portfolio-racing-game.jpg"],

    technologies: {
      engine: ["Unity"],
      language: ["C#"],
      multiplayer: ["Photon"],
      backend: ["Firebase"],
    },

    overview: "Optimized 3D gameplay + low-latency multiplayer for high retention.",
    keyFeatures: ["Multiplayer matchmaking", "Multiple tracks & vehicles", "Leaderboards", "In-game purchases"],
    results: [{ label: "Downloads", value: "2M+" }, { label: "D1 Retention", value: "41%" }],
  },

  {
    id: 8,
    title: "IoT Smart Home Dashboard",
    slug: "iot-smart-home-dashboard",
    shortDescription: "Web dashboard for smart home device monitoring and automation.",
    description: "An IoT dashboard enabling real-time monitoring and control of smart home devices.",
    category: "Web Development",
    industry: "IoT",
    year: "2024",
    duration: "5 months",
    client: "SmartHome Tech",
    users: "100K+",
    rating: 4.8,

    image: "/portfolio-iot-dashboard.jpg",
    images: ["/portfolio-iot-dashboard.jpg"],

    technologies: {
      frontend: ["React"],
      backend: ["Python"],
      protocols: ["MQTT"],
      database: ["InfluxDB"],
    },

    overview: "A real-time control center for devices, automation rules, and event history.",
    keyFeatures: ["Real-time device status", "Automation rules", "Event logs", "Role-based access"],
    results: [{ label: "Devices Managed", value: "500K+" }, { label: "Latency", value: "< 300ms" }],
  },

  {
  id: 21,
  title: "Easy Spin Laundry Platform",
  slug: "easy-spin-laundry-platform",
  shortDescription:
    "A multi-app doorstep laundry ecosystem: Customer, Rider, and Store apps with real-time tracking and express delivery.",
  description:
    "Easy Spin Laundry is a doorstep laundry ecosystem designed for busy urban users. It supports pickup & delivery scheduling, real-time order tracking, express service, and transparent pricing. The platform consists of three apps: Customer (Easy Spin), Rider (Easy Spin Rider), and Store/Partner (Easy Spin Store).",
  category: "Web + Mobile",
  industry: "On-demand Services",
  year: "2025",
  duration: "—",
  client: "Pira Laundry Services Pvt Ltd.",
  users: "1K+ (Customer) • 100+ (Store) • 50+ (Rider)",
  rating: 3.5,
  featured: true,
  // Cover image for cards + top carousel fallback
  image: "/easyspin/cover.jpg",

  // General gallery (optional). You can add real screenshot paths here.
  images: [
    "/easyspin/cover.jpg",
    "/easyspin/customer-1.jpg",
    "/easyspin/customer-2.jpg",
    "/easyspin/rider-1.jpg",
    "/easyspin/store-1.jpg",
  ],

  // If you have a website, put it here. Otherwise keep empty.
  liveUrl: "https://play.google.com/store/apps/details?id=com.easyspinlaundry.user",

  role: "Product Engineering & Multi-App Delivery",

  // High-level stack (platform wide)
  technologies: {
    mobile: ["React Native", "TypeScript"],
    backend: ["Node.js", "REST APIs"],
    realtime: ["WebSockets / Push Notifications"],
    infrastructure: ["Cloud Hosting", "Database", "Storage"],
  },

  // Overview text for your Project Overview section
  overview:
    "Easy Spin Laundry brings doorstep pickup and delivery with professional cleaning services. Users can book services, choose pickup slots, track orders in real-time, and receive fresh clothes delivered back to their doorstep. Operations are supported by Rider and Store apps for logistics and processing.",

  // Platform-level key features (from your pasted text)
  keyFeatures: [
    "Doorstep pickup & delivery with flexible time slots",
    "Express 8-hour service (select locations)",
    "Real-time order tracking (pickup → processing → delivery)",
    "Transparent pricing with per-item rates and combo packages",
    "Service types: Wash & Fold, Wash & Iron, Steam Press",
    "In-app support (chat/call support)",
  ],

  // Apps = buttons on same slug page (your code supports this)
  apps: [
    {
      key: "customer",
      label: "Easy Spin (Customer App)",

      // Optional: use for UI badge or header
      appName: "Easy Spin",
      publisher: "Pira Laundry Services",
      contentRating: "Rated for 3+",

      // From your pasted text
      rating: 3.5,
      reviews: "11 reviews",
      downloads: "1K+",

      updatedOn: "Oct 28, 2025",

      // Add later if you want
      playStoreUrl: "",

      description:
        "Doorstep laundry app for booking pickup, choosing services (Wash & Fold / Wash & Iron / Steam Press), and tracking orders end-to-end with transparent pricing and express service options.",

      // For carousel when this tab is selected
      images: [
        "/easyspin/customer-1.jpg",
        "/easyspin/customer-2.jpg",
        "/easyspin/customer-3.jpg",
        "/easyspin/customer-4.jpg",
      ],

      keyFeatures: [
        "Register/Login and manage profile",
        "Choose services: Wash & Fold / Wash & Iron / Steam Press",
        "Select pickup slot (flexible scheduling)",
        "Real-time order tracking",
        "Pricing transparency + combo packages",
        "Support via chat/call",
      ],

      // Optional per-app tech (you can refine)
      technologies: {
        frontend: ["React Native"],
        notifications: ["Push Notifications"],
        backend: ["REST APIs"],
      },

      // Optional results (you can edit)
      results: [
        { label: "Downloads", value: "1K+" },
        { label: "Rating", value: "3.5" },
        { label: "Update", value: "Oct 28, 2025" },
      ],
    },

    {
      key: "rider",
      label: "Easy Spin Rider (Driver App)",

      appName: "Easy Spin Rider",
      publisher: "Pira Laundry Services",
      contentRating: "Rated for 3+",
      downloads: "50+",
      updatedOn: "Sep 26, 2025",
      playStoreUrl: "",

      description:
        "Rider app for pickup & delivery operations: manage assigned jobs, complete pickups/deliveries, and keep order status updated for customers and stores.",

      images: [
        "/easyspin/rider-1.jpg",
        "/easyspin/rider-2.jpg",
        "/easyspin/rider-3.jpg",
      ],

      keyFeatures: [
        "Pickup & delivery job handling",
        "Order status updates during delivery lifecycle",
        "Operational workflow for doorstep logistics",
        "Reliability for on-time service",
      ],

      technologies: {
        frontend: ["React Native"],
        backend: ["REST APIs"],
      },

      results: [
        { label: "Downloads", value: "50+" },
        { label: "Update", value: "Sep 26, 2025" },
      ],
    },

    {
      key: "store",
      label: "Easy Spin Store (Partner App)",

      appName: "Easy Spin Store",
      publisher: "Pira Laundry Services",
      contentRating: "Rated for 3+",
      downloads: "100+",
      updatedOn: "Sep 26, 2025",
      playStoreUrl: "",

      description:
        "Store/partner app for laundry processing: manage incoming orders, update processing stages, coordinate pickups/deliveries, and ensure service quality.",

      images: [
        "/easyspin/store-1.jpg",
        "/easyspin/store-2.jpg",
        "/easyspin/store-3.jpg",
      ],

      keyFeatures: [
        "Order intake & management",
        "Processing stage updates",
        "Coordination with riders",
        "Supports express service workflows",
      ],

      technologies: {
        frontend: ["React Native"],
        backend: ["REST APIs"],
      },

      results: [
        { label: "Downloads", value: "100+" },
        { label: "Update", value: "Sep 26, 2025" },
      ],
    },
  ],
},

] as const

export type PortfolioItem = (typeof portfolioItems)[number]
