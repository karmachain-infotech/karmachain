import type { PortfolioItem } from "@/types/portfolio"

export const portfolioItems: PortfolioItem[] = [
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
        image: "",

        // General gallery (optional). You can add real screenshot paths here.
        images: [
            "https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/projects%2F1753636424819_easy_spin_store_app.png?alt=media&token=529cbfa1-fc55-4559-8e6f-98c3d7892e81",
            "https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/projects%2F1753636224659_easy_spin_rider_app.png?alt=media&token=a5e4553e-0941-4eba-a797-98f4b6a12915",
            "https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/projects%2F1753635739623_easy_spin_app.png?alt=media&token=63aa584f-f986-4039-b8d4-6a779dacfc37",
            // "/easyspin/rider-1.jpg",
            // "/easyspin/store-1.jpg",
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
    {
        id: 22,
        title: "AlphaBlock AI – Memecoin Intelligence Platform",
        slug: "alphablock-ai-memecoin-intelligence",
        shortDescription:
            "AI-powered memecoin trading intelligence with real-time whale flow tracking, KOL signals, and alpha discovery tools.",
        description:
            "AlphaBlock AI is an AI-powered ecosystem built for memecoin traders. It combines real-time on-chain whale flow tracking, AI KOL intelligence, predictive alpha tools, and insider pattern recognition to help users uncover alpha before the crowd.",

        category: "SaaS",
        industry: "Crypto / Trading",
        year: "2025",
        duration: "—",
        client: "AlphaBlock AI",
        users: "—",
        rating: 4.8,
        featured: true,

        // Add your real images in /public/alphablock/
        image: "",
        images: [
            "https://framerusercontent.com/images/P0BOpS6quddTafNsy79UXZgMWWY.jpg?width=5760&height=4096",
            // "/alphablock/whale-tracker.jpg",
            // "/alphablock/kol-intelligence.jpg",
            // "/alphablock/launch-tracker.jpg",
            // "/alphablock/social-proof.jpg",
        ],

        // Put the real website/app link here
        liveUrl: "https://alpha-block.ai/",

        role: "Full-stack SaaS Development",

        technologies: {
            frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            backend: ["Node.js", "APIs", "Webhooks"],
            data: ["On-chain Indexing", "Real-time Stream Processing"],
            ai: ["Prediction Bot", "Scoring (Hotness Score)", "Entity Labeling"],
            infrastructure: ["Cloud Hosting", "Database", "Caching"],
        },

        overview:
            "Developed a real-time whale tracking and alpha discovery platform that detects and displays large token purchases on-chain. The system helps traders identify high-value whale signals, track multi-token activity, and receive timely buy/sell alerts to anticipate market moves.",

        keyFeatures: [
            "Real-time Whale Flow Tracking (entry → exit)",
            "Multi-token monitoring with buy/sell alerts",
            "AI-powered KOL intelligence (actionable influencer signals)",
            "AI-driven alpha discovery tools (labels, Hotness Scores, Prediction Bot)",
            "Insider pattern recognition (clusters, cabals, repeating entry patterns)",
            "Launch Tracker for new memecoin opportunities",
            "Social proof feed showing performance & ATH metrics",
        ],

        challenges: [
            "Real-time detection of large on-chain swaps with low latency",
            "Reducing noise and false positives in whale signals",
            "Turning raw on-chain + social activity into actionable insights",
            "Scaling token monitoring across multiple assets with reliable alerts",
        ],

        solutions: [
            "Built a real-time pipeline for on-chain events and signal extraction",
            "Added whale labeling + scoring logic (Hotness Score) to rank opportunities",
            "Implemented KOL intelligence parsing into structured actionable signals",
            "Designed UI dashboards for Whale Flow, Launch Tracker, and Social Proof",
        ],

        results: [
            { label: "Whale Signals", value: "Real-time tracking + alerts" },
            { label: "Multi-token Monitoring", value: "Supported" },
            { label: "Alpha Tools", value: "Hotness Score + Prediction Bot" },
            { label: "Pattern Detection", value: "Clusters / cabals / repeats" },
        ],



        community: {
            headline: "An Ecosystem Built to Win the Memecoin Market",
            description:
                "More than a product, AlphaBlock AI is a growing ecosystem powered by its community and designed to give traders the edge in memecoins.",
            layers: ["Information Layer", "Trading Layer"],
        },

        tokenLaunch: {
            status: "NEW",
            note: "$ALPHA is now live on PumpFun",
        },

        contact: {
            email: "contact@alpha-block.ai",
        },
    },


    {
  id: 26,
  title: "DCA Bot Development",
  slug: "dca-bot-development",
  shortDescription:
    "A web-based Dollar-Cost Averaging bot for automated crypto buy/sell execution with schedules, conditions, and portfolio sync.",
  description:
    "Designed and implemented a Dollar-Cost Averaging (DCA) bot that automates crypto buy/sell actions based on predefined schedules and conditional rules. The system helps users minimize risk, manage long-term investments, and execute trades in real time via exchange and wallet integrations.",

  category: "Web Development",
  industry: "FinTech / Crypto",
  year: "2025",
  duration: "—",
  client: "—",
  users: "—",
  rating: 4.8,
  featured: false,

  // Add your real images in /public/dca-bot/
  image: "/dca4.png",
  images: [
    "/dca4.png",
    "/dca3.png",
    "/dca2.png",
    "/dca1.png",
  ],

  liveUrl: "",

  role: "Web App + Trading Automation",

  technologies: {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "REST APIs"],
    trading: ["Exchange APIs", "Wallet Integrations"],
    realtime: ["Webhooks / Streaming Updates"],
    security: ["Auth", "API Key Encryption", "RBAC (optional)"],
    infrastructure: ["Cloud Hosting", "Database", "Queue/Jobs Scheduler"],
  },

  overview:
    "Built a web-based DCA bot platform enabling scheduled and conditional trading strategies. Users can configure rules, track execution logs, and monitor portfolio updates — while the system executes trades through exchange integrations reliably and efficiently.",

  keyFeatures: [
    "Automated DCA buy/sell execution",
    "Scheduled strategies (hourly/daily/weekly/monthly)",
    "Conditional trades (price thresholds, signals, triggers)",
    "Multi-exchange integration for real-time execution",
    "Wallet connectivity and portfolio syncing",
    "Trade execution logs, history, and performance tracking",
    "Risk-friendly long-term investment automation",
  ],

  challenges: [
    "Reliable strategy scheduling without missed executions",
    "Handling rate limits and exchange API failures gracefully",
    "Keeping portfolio and trade status consistent in real time",
    "Secure storage and usage of exchange API keys / wallet sessions",
  ],

  solutions: [
    "Implemented resilient job scheduling with retries and safe state tracking",
    "Added execution queue + error handling for API failures and rate limits",
    "Built real-time sync pipeline for portfolio and trade status updates",
    "Secured credentials with encryption and strict permission boundaries",
  ],

  results: [
    { label: "Automation", value: "Scheduled + Conditional DCA trades" },
    { label: "Integrations", value: "Major exchanges + wallets" },
    { label: "Execution", value: "Real-time trading + portfolio updates" },
    { label: "Goal", value: "Lower risk via long-term strategy" },
  ],
},


    {
        id: 23,
        title: "iZen Meditation",
        slug: "izen-meditation-app",
        shortDescription:
            "A fast, offline-first mindfulness app with meditation, breathing exercises, and nature sounds — 100% free with no ads.",
        description:
            "iZen is a simple and fast mindfulness app designed to help users reduce anxiety, lower daily stress, and sleep better. It’s 100% free, with no sign-ups, no ads, no paid subscriptions, and it works offline on most devices. It includes three modes: Meditate, Breathe, and Listen.",

        category: "Mobile App",
        industry: "Health & Wellness",
        year: "2024",
        duration: "—",
        client: "Do Meditate Team",
        users: "10K+",
        rating: 4.9,
        featured: false,

        // Add your real images in /public/izen/
        image: "",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/project_photos%2FiZen%20meditation%2FiZen%20meditation.png?alt=media&token=9e499d75-b4a5-4432-a096-2a9493768ceb",
            "https://play-lh.googleusercontent.com/1NGkHhNMhuUk6EOrokCdcbqdbL6vB6b7PjJqgfNdgp5b7pRT9sXbDOePd9r7HgE6Dg=w2560-h1440-rw",
        ],

        // If you have Play Store link add here
        liveUrl: "",

        role: "Mobile App Development",

        technologies: {
            frontend: ["Flutter", "Dart"],
            backend: ["Firebase"],
            offline: ["Offline-first Storage", "Local Caching"],
        },

        overview:
            "Built a mindfulness app focused on simplicity, speed, and offline usability. The product avoids subscriptions and ads, providing a calm, distraction-free experience while still supporting key mindfulness workflows like guided meditation, breathing exercises, and nature sounds.",

        keyFeatures: [
            "No sign-ups required",
            "No ads",
            "No paid subscriptions",
            "Works fully offline",
            "Meditate mode: guided meditations with a unique meditation track",
            "Breathe mode: simple breathing exercises",
            "Listen mode: nature sounds for relaxation",
            "Donation option (optional user support)",
        ],

        challenges: [
            "Delivering a complete experience without internet dependency",
            "Ensuring fast startup and smooth performance across devices",
            "Designing a distraction-free UX aligned with mindfulness principles",
        ],

        solutions: [
            "Implemented offline-first architecture with local caching and sync-ready structure",
            "Optimized asset loading for fast performance",
            "Designed clean, minimal UI with quick access to all 3 modes",
        ],

        results: [
            { label: "Rating", value: "4.9" },
            { label: "Reviews", value: "158" },
            { label: "Downloads", value: "10K+" },
            { label: "Updated On", value: "Oct 22, 2024" },
        ],

        testimonial: {
            quote:
                "Users love how simple and calming the experience is — especially the offline-first design and no-subscription approach.",
            author: "Do Meditate Team",
            role: "Publisher",
        },

        // Optional extra metadata (safe if you want later UI)
        storeMeta: {
            contentRating: "Rated for 3+",
            updatedOn: "Oct 22, 2024",
            reviews: "158",
            downloads: "10K+",
        },
    },

    {
        id: 24,
        title: "UPQOR – Jewelry Engagement & Analytics Platform",
        slug: "upqor-jewelry-engagement-platform",
        shortDescription:
            "Industry-specific engagement platform for gem & jewelry businesses with integrated systems, analytics, and cloud-first workflows.",
        description:
            "UPQOR is an industry-specific platform built for gem and jewelry manufacturers and retailers to modernize operations, connect fragmented systems, unlock siloed data, and deliver actionable insights through engagement and analytics tools.",

        category: "Mobile App",
        industry: "Jewelry / Retail Tech",
        year: "2025",
        duration: "—",
        client: "UPQOR",
        users: "100+",
        rating: 4.8,
        featured: false,

        // Put real images in /public/upqor/
        image: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/project_photos%2Fupqor_app.png?alt=media&token=75411738-149d-4f26-8e35-8c299bf6f53b",
        images: ["https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/project_photos%2Fupqor_app.png?alt=media&token=75411738-149d-4f26-8e35-8c299bf6f53b"],

        // If you have a website/store link, add it here
        liveUrl: "",

        role: "Mobile + Backend Platform Development",

        technologies: {
            frontend: ["Flutter", "Dart"],
            backend: ["Firebase", "Node.js", "REST API"],
            security: ["Authentication", "RBAC (Role-based access control)"],
            payments: ["Secure Payment Processing"],
            infrastructure: ["Cloud-based Architecture"],
        },

        overview:
            "Built a cloud-first engagement platform for the gem and jewelry sector to reduce legacy-system dependency, unify data sources, and support digital transformation with role-based secure access and analytics-driven insights.",

        keyFeatures: [
            "Industry-specific engagement platform for gem & jewelry organizations",
            "System integration approach to reduce data silos and technical debt",
            "Advanced analytics to uncover business insights",
            "Authentication + secure session handling",
            "Role-based access control (RBAC) for multi-role workflows",
            "Secure payment processing for transactions",
            "Cloud-based, scalable architecture",
        ],

        challenges: [
            "Legacy systems causing data silos and operational inefficiency",
            "Need for industry-specific workflows and terminology",
            "Ensuring strong security for roles, permissions, and payments",
            "Building scalable infrastructure for future digital expansion",
        ],

        solutions: [
            "Designed modular integration-ready architecture to unify data sources",
            "Implemented RBAC with clean permission boundaries",
            "Added secure authentication flows and hardened API access",
            "Built analytics layers to surface meaningful insights for decision-making",
        ],

        results: [
            { label: "Downloads", value: "100+" },
            { label: "Updated On", value: "Dec 10, 2025" },
            { label: "Security", value: "Auth + RBAC + Secure Payments" },
            { label: "Outcome", value: "Reduced silos + improved visibility" },
        ],

        storeMeta: {
            contentRating: "Rated for 3+",
            updatedOn: "Dec 10, 2025",
            downloads: "100+",
        },
    },

{
  id: 25,
  title: "Crypto Tracker & Portfolio App",
  slug: "crypto-tracker-portfolio-app",
  shortDescription:
    "A Flutter-based crypto tracking app with real-time prices, market trends, portfolio tracking, and price alerts.",
  description:
    "A cryptocurrency tracking application that provides real-time price updates, market trend insights, portfolio management, and price alerts to help users monitor and manage their crypto investments. Includes secure wallet integration for safer transactions.",

  category: "Mobile App",
  industry: "FinTech / Crypto",
  year: "2025",
  duration: "—",
  client: "—",
  users: "—",
  rating: 4.8,
  featured: false,

  // Add your real images in /public/crypto/
  image: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/project_photos%2Fcrypto_app.png?alt=media&token=4837cf1d-17a9-44ac-b416-3960409f8876",
  images: ["https://firebasestorage.googleapis.com/v0/b/my-portfolio-a2c8a.appspot.com/o/project_photos%2Fcrypto_app.png?alt=media&token=4837cf1d-17a9-44ac-b416-3960409f8876"],

  // If you have app link, add here
  liveUrl: "",

  role: "Mobile App Development",

  technologies: {
    frontend: ["Flutter", "Dart"],
    backend: ["Firebase"],
    realtime: ["Real-time Updates"],
    notifications: ["Price Alerts"],
    security: ["Secure Wallet Integration"],
  },

  overview:
    "Built a crypto tracking and portfolio management app focused on real-time market visibility and practical investment tracking. Users can watch prices, follow trends, manage holdings, and get instant alerts when markets move.",

  keyFeatures: [
    "Real-time cryptocurrency price updates",
    "Market trends & basic performance insights",
    "Portfolio management to track investments",
    "Custom price alerts for market changes",
    "Secure wallet integration for safe transactions",
  ],

  challenges: [
    "Delivering real-time price updates reliably",
    "Keeping portfolio calculations accurate and fast",
    "Designing flexible alert rules without overwhelming users",
    "Ensuring safe wallet connection patterns and secure handling",
  ],

  solutions: [
    "Implemented efficient Firebase-backed real-time data refresh patterns",
    "Built portfolio calculations with clean state management",
    "Added configurable alert triggers with notification delivery",
    "Applied secure integration flow patterns for wallet connectivity",
  ],

  results: [
    { label: "Real-time Prices", value: "Enabled" },
    { label: "Portfolio Tracking", value: "Integrated" },
    { label: "Price Alerts", value: "Implemented" },
    { label: "Wallet Security", value: "Secure integration flow" },
  ],
},


   {
  id: 27,
  title: "WinUpDraw – Solana USDT Draws Platform",
  slug: "winupdraw-solana-usdt-draws",
  shortDescription:
    "A Solana-based lottery/draws web platform where users connect wallets, buy tickets, and join USDT draws without KYC.",
  description:
    "WinUp is a global Web3 draws platform built on Solana. Users can connect their wallet, buy tickets, and participate in USDT prize draws while remaining anonymous via blockchain. The platform includes draws lifecycle views (Active / Upcoming / Completed), social links, and support contact, with security auditing by SolidProof.",

  category: "Web Development",
  industry: "Web3 / Gaming / Lottery",
  year: "2025",
  duration: "—",
  client: "WinUp",
  users: "—",
  rating: 4.8,
  featured: false,

  // Add real screenshots in /public/winup/
  image: "/winupdraw.png",
  images: [
    "/winupdraw.png",
  ],

  // If you want, add website URL here
  liveUrl: "https://winupdraws.com/",

  role: "Web3 Platform Development",

  technologies: {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    web3: ["Solana Wallet Integration"],
    backend: ["APIs (Draws / Tickets / Results)"],
    payments: ["USDT Draw Participation"],
    security: ["Audited (SolidProof)"],
    infrastructure: ["Cloud Hosting", "Database"],
  },

  overview:
    "Built and integrated a Solana-based draws platform enabling users to connect wallets, purchase tickets, and participate in USDT prize draws without KYC. The product focuses on anonymous participation, transparent draw outcomes, and a clean UX for browsing active, upcoming, and completed draws.",

  keyFeatures: [
    "Connect Wallet (Solana)",
    "Ticket purchase flow for USDT draws (no KYC)",
    "Draw lifecycle UI: Active / Upcoming / Completed",
    "Completed draw history with prize amounts (e.g., 500 USDT, 2,000 USDT, 3,000 USDT, 5,000 USDT)",
    "Anonymous participation via blockchain",
    "Community links (Twitter, Telegram)",
    "Support contact email integration",
  ],

  challenges: [
    "Ensuring wallet connection and ticket purchase flow is reliable",
    "Designing clear lifecycle states for draws (active/upcoming/completed)",
    "Maintaining privacy-first UX while keeping outcomes transparent",
    "Security expectations for a Web3 lottery-style platform",
  ],

  solutions: [
    "Implemented Solana wallet connect UX with guarded transaction flows",
    "Built draw listing pages segmented by lifecycle state",
    "Added clear draw cards with prize visibility and status labels",
    "Aligned platform messaging around anonymity + blockchain transparency",
  ],

  results: [
    { label: "Network", value: "Solana" },
    { label: "Participation", value: "Wallet-based (No KYC)" },
    { label: "Prizes Supported", value: "USDT draws (500–5,000 USDT examples)" },
    { label: "Security", value: "Audited by SolidProof" },
  ],

  contact: {
    email: "winupsupport@winupdraws.com",
  },

  complianceMeta: {
    note: "Patent Pending (as shown on site footer)",
    audit: "Audited by SolidProof",
  },
}

]
