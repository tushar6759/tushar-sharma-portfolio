import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
    name: "Tushar",
    initials: "TS",
    location: "Pune Maharashtra, India",
    locationLink: "https://maps.app.goo.gl/fwicJEmbMHWQxhdR7",
    description:
        "Software engineer who loves building cool stuff, exploring new places, and making a positive impact by helping others.",
    summary:
        "I began my journey in 2019 when I enrolled in a B.Tech program. After three years of engineering studies, I landed an internship at Bajaj Finserv Health Limited. My performance during the internship earned me a full-time role at the same company, where I’m currently working as a full stack developer, using Spring Boot for backend and React.js for frontend development.",
    avatarUrl: "/tushar.jpeg",
    skills: [
        "Java",
        "spring boot",
        "spring security",
        "Mysql",
        "Mongodb",
        "elasticsearch",
        "kibana",
        "Redis",
        "Kafka",
        "React",
        "Typescript",
        "javascript",
        "Node.js",
        "Docker",
        "Kubernetes",
    ],
    navbar: [
        {href: "/", icon: HomeIcon, label: "Home"},
    ],
    contact: {
        email: "tushar6759@gmail.com",
        tel: "+91-8602965304",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/tushar6759",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/tushar-sharma-1695191aa/",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "Tushar Sharma",
                url: "",
                icon: Icons.x,

                navbar: false,
            },
            Youtube: {
                name: "Youtube",
                url: "",
                icon: Icons.youtube,
                navbar: false,
            },
            email: {
                name: "Send Email",
                url: "mailto:tushar6759@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "Bajaj Finserv Health Limited",
            href: "https://www.bajajfinservhealth.in",
            location: "pune",
            title: "SDE-1",
            badges: [],
            logoUrl: "/bajaj_logo.png",
            start: "July 2023",
            end: "Present",
            description:"During my time at Bajaj Finserv Health Limited, I was responsible for managing and developing backend services for onboarding doctors and suppliers, including hospitals, labs, and pharmacies. I created and optimized these services using Java Spring Boot, with Redis for caching and Kafka for messaging. These services were critical in ensuring seamless data flow across the organization, supporting the integration and management of essential healthcare entities."
        }, {
            company: "Bajaj Finserv Health Ltd",
            href: "https://www.bajajfinservhealth.in",
            badges: [],
            location: "pune",
            title: "Intern",
            logoUrl: "/bajaj_logo.png",
            start: "July 2022",
            end: "july 2023",
            description:"During my time at Bajaj Finserv Health Limited, I was responsible for managing and developing backend services for onboarding doctors and suppliers, including hospitals, labs, and pharmacies. I created and optimized these services using Java Spring Boot, with Redis for caching and Kafka for messaging. These services were critical in ensuring seamless data flow across the organization, supporting the integration and management of essential healthcare entities."
        }
    ],
    education: [
        {
            school: "Acropolis Institute of Technology and Research",
            href: "",
            degree: "BTech",
            logoUrl: "https://aitr.ac.in/wp-content/uploads/2023/03/unnamed-1.png",
            start: "2023",
            end: "2019",
        },
        {
            school: "Alpha Higher Secondary School",
            href: "",
            degree: "Bachelor's Degree of Computer Science (BCS)",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOmDOnHWgEYgPAPBoz0rk3gChuRaC7l4wGw&s",
            start: "2006",
            end: "2019",
        }
    ],
    projects: [
        {
            title: "Java spring boot caching library",
            dates: "July 2023 - Present",
            active: true,
            description:
                "I developed a Spring Boot caching library/package that stores data in BSON format within a persistent storage, achieving O(1) complexity for data retrieval using file paths. This library leverages Spring Boot Aspects, Jackson, and Core Java. I created it as an alternative to Redis, addressing the challenge of limited RAM by avoiding in-memory storage. This solution allows for efficient caching of JSON or string data on servers with available disk space, providing a practical caching option when RAM is constrained.",
            technologies: [
                "core Java",
                "reflection",
                "jackson",
                "spring boot aspects",
            ],
            links: [
            ],
            image: "/cache.png",
        },
        {
            title: "BlockChain based file management application",
            dates: "July 2023 - Present",
            active: true,
            description:
                "Our file management application leverages the innovative LBRY protocol to provide a secure and decentralized platform for uploading and managing files. Users can effortlessly upload any type of file, ranging from documents to media, and benefit from the enhanced security and transparency offered by blockchain technology. This solution not only ensures that files are safely stored but also that they are easily accessible in a decentralized manner.",
            technologies: [
                "Spring boot",
                "Spring security",
                "Mysql",
                "LBRY blockchain protocol",
                "React",
                "Docker",
            ],
            links: [
            ],
            image: "/smart-contract.gif",
        }
    ],
} as const;
