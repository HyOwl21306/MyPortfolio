export const navLinkdata = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Skills",
        to: "/skills"
    },
    {
        label: "Projects",
        to: "/projects"
    }
]

import linkedin from "./src/assets/linkedin.svg"
import github from "./src/assets/github.svg"
import fb from "./src/assets/facebook.svg"

export const linkdata = [
    {
        url: "https://www.linkedin.com/in/h%E1%BA%A3i-%C3%A2u-%C4%91o%C3%A0n-559647377/", 
        img: linkedin
    },
    {
        url: "https://github.com/HyOwl21306", 
        img: github
    },
    {
        url: "https://www.facebook.com/haiau21306/", 
        img: fb
    }
]

export const personalData = {
    name: "Personal Information:",
    birthPlace: "Vinh Long, Viet Nam",
    education: "Can Tho University",
    major: "Software Engineering (High Quality Program)",
    email: "aub2405107@student.ctu.edu.vn",
    emailLink: "mailto:sub2405107@student.ctu.edu.vn",
    bio: [
        "While I enjoy crafting intuitive user interfaces, I find myself increasingly captivated by the world of artificial intelligence (AI) and machine learning. I am currently transitioning my career focus from Frontend Web Development toward AI, with a long-term goal of building personality-driven AI assistants capable of natural and engaging interaction.",
        "My journey in frontend development has provided me with a solid foundation in logical thinking, problem-solving, and a deep understanding of how applications function from the ground up. I am confident that these core skills will be invaluable assets as I tackle the exciting challenges in this new field.",
        "This portfolio not only serves as a closing chapter on my frontend work but also as a welcoming introduction to the new and challenging journey that lies ahead."
    ]
};

export const skillsData = {
    frontend: {
        title: "Frontend Development",
        skills: [
        {
            category: "Languages",
            items: ["HTML", "CSS", "JavaScript (ES6+)"]
        },
        {
            category: "Framework & Library",
            items: ["React.js (Fundamentals)"]
        },
        {
            category: "CSS Framework",
            items: ["Tailwind CSS"]
        },
        {
            category: "Build Tools",
            items: ["Vite (Basic Usage)"]
        }
        ]
    },
    programming: {
        title: "General Programming",
        skills: [
        {
            category: "Languages",
            items: ["Python", "C"]
        }
        ]
    },
    tools: {
        title: "Development Tools",
        skills: [
        {
            category: "Version Control",
            items: ["Git", "GitHub"]
        },
        {
            category: "IDE",
            items: ["Visual Studio Code"]
        }
        ]
    },
    softSkills: {
        title: "Soft Skills",
        skills: [
        {
            title: "Problem-Solving",
            description: "Sharpened through independently researching solutions and debugging issues in personal projects."
        },
        {
            title: "Self-Learning",
            description: "Quickly acquired and applied React.js and Tailwind CSS to complete the Space Tourism and others within 2 months."
        },
        {
            title: "Teamwork & Collaboration",
            description: "Gained practical experience in coordination and task completion through active participation in the university's English club."
        }
        ]
    }
};

export const projectTabs = [
    { id: 'DessertCart', label: '01', name: 'Dessert Cart' },
    { id: 'ToDoApp', label: '02', name: 'To-Do App' },
    { id: 'PaperRockScissors', label: '03', name: 'Paper, Rock, Scissors Master' },
    { id: 'SpaceTourism', label: '04', name: 'Space Tourism' },
];

import pj1 from "./src/assets/pj1.png"
import pj2 from "./src/assets/pj2.png"
import pj3 from "./src/assets/pj3.png"
import pj4 from "./src/assets/pj4.png"

export const projectsData = {
    DessertCart: {
        urlcode: "https://github.com/HyOwl21306/DessertCart",
        urlsite: "https://hyowl21306.github.io/DessertCart/",
        title: "Dessert Cart",
        img: pj1,
        tools: "HTML-Tailwind-CSS-JavaScript",
        description: [
            "- Leveraged Tailwind CSS for the first time to rapidly prototype and build a fully responsive UI, improving styling efficiency.",
            "- Engineered the core cart functionality in vanilla JavaScript, including:",
            "    Dynamically updating item quantities.",
            "    Calculating and displaying the total cost in real-time.",
            "- Gained experience in DOM manipulation, event handling, and state management patterns without relying on external frameworks."
        ]
    },
    ToDoApp: {
        urlcode: "https://github.com/HyOwl21306/ToDo-App",
        urlsite: "https://hyowl21306.github.io/ToDo-App/",
        title: "To-Do App",
        img: pj2,
        tools: "HTML-Tailwind-CSS-JavaScript",
        description: [
            "- Implemented a persistent dark/light mode toggle; user's theme preference is saved to localStorage and applied on page load for a seamless UX.",
            "- Achieved full data persistence by integrating the localStorage API, ensuring all tasks remain saved between sessions.",
            "- Core features include: adding, deleting, marking tasks as complete, and filtering tasks by status (all/active/complete).",
        ]
    },
    PaperRockScissors: {
        urlcode: "https://github.com/HyOwl21306/Rock-Paper-Scissors-Master/",
        urlsite: "https://hyowl21306.github.io/Rock-Paper-Scissors-Master/",
        title: "Papper-Rock-Scissors Master",
        img: pj3,
        tools: "HTML-Tailwind-CSS-JavaScript",
        description: [
            "- Built an enhanced version of the classic game featuring \"Advanced Mode\" with two additional choices (Lizard, Spock), which required engineering a more intricate game logic algorithm to handle the complex win conditions between five possible choices.",
            "- Developed a complex UI layout using Tailwind CSS, utilizing relative and absolute positioning to precisely place the interactive elements in a pentagon shape.",
            "- Managed complex game state (user choice, house choice, score, results) to deliver a seamless and interactive gaming experience.",
        ]
    },
    SpaceTourism: {
        urlcode: "https://github.com/HyOwl21306/space-tourism/",
        urlsite: "https://hyowl21306.github.io/space-tourism/",
        title: "Space Tourism",
        img: pj4,
        tools: "HTML-Tailwind-CSS-React, Vite",
        description: [
            "- Developed a modern multi-page SPA with React, utilizing React Router DOM to manage client-side routing and provide seamless navigation between the Home, Destination, Crew, and Technology views.",
            "- Enhanced user experience by integrating element animations with Framer Motion, providing smooth transitions and a dynamic feel.",
            "- Structured the application with a reusable component-based architecture, improving code maintainability and scalability.",
        ]
    },
}



