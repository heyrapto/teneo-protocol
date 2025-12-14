import { Icons } from "@/components/ui/icons";

export const navItems = [
    {
        title: "Home"
    },
    {
        title: "Learn",
        dropdownItems: [
            {
                icon: Icons.OpenBook,
                title: "Blog"
            },
            {
                icon: Icons.Academy,
                title: "Teneo Academy"
            },
            {
                icon: Icons.Docs,
                title: "Teneo Docs"
            },
            {
                icon: Icons.Info,
                title: "Help Center"
            },
        ]
    },
    {
        title: "Build",
        dropdownItems: [
            {
                icon: Icons.Message,
                title: "Blog"
            },
            {
                icon: Icons.Agent,
                title: "Teneo Academy"
            },
            {
                icon: Icons.SmallGroup,
                title: "Teneo Docs"
            },
        ]
    },
    {
        title: "Join",
        dropdownItems: [
            {
                icon: Icons.Handshake,
                title: "Blog"
            },
            {
                icon: Icons.LoveSymbol,
                title: "Teneo Academy"
            },
            {
                icon: Icons.Media,
                title: "Teneo Docs"
            },
        ],
        hasSocials: true
    },
]


export const marqueeItems = [
    {
        src: "/images/global.avif",
        alt: "Global Movement",
        type: "image",
        fit: "contain",
    },
    {
        src: "/images/nodes.png",
        alt: "Community Nodes",
        type: "image",
        fit: "contain",
    },
    {
        src: "/images/rewards.png",
        alt: "Earn Rewards",
        type: "video",
        fit: "cover",
    },
    {
        src: "/images/dashboard.png",
        alt: "Dashboard",
        type: "image",
        fit: "cover",
    },
    {
        src: "/images/data.png",
        alt: "Data",
        type: "image",
        fit: "contain",
    },
    {
        src: "/images/earned.png",
        alt: "Earned",
        type: "image",
        fit: "cover",
    },
];

export const faqs = [
    {
        question: "What is the Teneo Protocol Community Node?",
        answer: "The Teneo Protocol Community Node is an AI agent that anyone can run directly in their browser. The agent collects and structures real-time data from across the web. Operating in a fully permissionless system, the agent responds directly to your defined tasks, not centralized control."
    },
    {
        question: "Why run a Community Node?",
        answer: "Running a Community Node allows you to contribute valuable data to the network, helping to power decentralized AI models. In return, you earn Points which represent your contribution to the ecosystem."
    },
    {
        question: "What are Points?",
        answer: "Points are the reward mechanism within the Teneo Protocol. They are earned by running a node and contributing data. These points are tracked on your dashboard and signify your participation level."
    },
    {
        question: "How can I earn Points?",
        answer: "You can earn points by installing and running the Teneo Community Node extension, keeping it active while you browse, and referring friends to join the network."
    }
];

export const partners = [
    { name: "RockawayX", src: "/images/partners/1.avif" },
    { name: "Borderless", src: "/images/partners/2.avif" },
    { name: "Generative Ventures", src: "/images/partners/3.avif" },
    { name: "Certik", src: "/images/partners/4.avif" },
    { name: "Moonrock Capital", src: "/images/partners/5.avif" },
    { name: "Outlier Ventures", src: "/images/partners/6.avif" },
    { name: "EOT Ventures", src: "/images/partners/7.avif" },
    { name: "XX Ventures", src: "/images/partners/8.avif" },
    { name: "Token Ventures", src: "/images/partners/9.avif" },
];

export const blogPosts = [
    {
        image: "/images/blogs/1.png",
        category: "Agent Intelligence",
        title: "The Code Drop: Teneo Agent SDK is HERE. Time to Build.",
        description: "The Teneo Agent SDK is officially live, giving developers the power to build and deploy autonomous, monetizable Agents on a decentralized protocol."
    },
    {
        image: "/images/blogs/2.png",
        category: "Agent Intelligence",
        title: "Inside the Teneo Protocol Chat Room",
        description: "The Teneo Protocol Chat Room brings the power of decentralized AI Agents into a live, interactive interface, where every query is processed through a real-time, permissionless swarm."
    },
    {
        image: "/images/blogs/3.png",
        category: "Agent Intelligence",
        title: "Beyond the Node: Inside Teneo Protocol's Multi-Agent Ecosystem",
        description: "Teneo Protocol is evolving from a decentralized swarm of Sub-Agents into a full multi-agent ecosystem. With the upcoming Chatroom and Agent SDK, developers can now build, deploy, and monetize."
    }
];

export const steps = [
    {
        title: "INSTALL",
        description:
            "Download and install the Teneo Protocol Community Node on your device – no tech expertise needed",
        icon: <Icons.Download />,
        linkText: "Get Started",
        linkHref: "#",
        showLink: true,
        hasCta: false,
    },
    {
        title: "CONNECT",
        description:
            "Open the Teneo Protocol Community Node and connect it to the internet. Make sure the Node is online, in order to be eligible for Rewards.",
        icon: <Icons.Connect />,
        showLink: false,
        hasCta: false,
    },
    {
        title: "EARN",
        description:
            "As soon as your Node is running, you'll start contributing to the decentralized network and earning Points.",
        icon: <Icons.Diamond />,
        linkText: "Go to Dashboard",
        linkHref: "#",
        showLink: true,
        hasCta: true,
    },
];