/**
 * PORTFOLIO DATA
 * 
 * This file contains all the text and image paths for your portfolio.
 * To update your portfolio:
 * 1. Place your images in the /public/images/ folder.
 * 2. Update the image paths below (e.g., image: "/images/my-photo.jpg").
 * 3. Update the text, titles, and descriptions.
 */

export const portfolioData = {
    hero: {
        badge: "Latest UI • React Portfolio",
        name: "Dinuka Withanage",
        role: "Data Scientist & Software Engineer",
        description: "I’m a Data Scientist and Software Engineer specializing in building intelligent, scalable applications. I combine machine learning, data analysis, and full-stack development to transform raw data into meaningful digital solutions.",
        profileImage: "/images/profile.png",
        cvUrl: "/CV.pdf", // Add your CV link here (e.g., "/cv.pdf" or a Google Drive link)
        tags: ["React", "Node.js", "MySQL", "Python", "ML Basics"],
    },
    about: {
        title: "About Me",
        description1: "I am an undergraduate in the Department of Computer Science and Engineering at the University of Moratuwa, currently specializing in the Data Science stream. I am passionate about combining software engineering with data-driven technologies to build intelligent and scalable systems.",
        description2: "My interests lie in machine learning, data analysis, and full-stack development. I enjoy transforming complex data into meaningful insights and developing practical software solutions that solve real-world problems.",
        description3: "With a strong foundation in computer science and a commitment to continuous learning, I strive to build innovative, efficient, and impactful digital solutions.",
        image: "/images/profile.png",
    },
    projects: [
        {
            id: 1,
            title: "WildGuard App",
            tag: "Full-Stack + AI",
            desc: "Wildlife education & recognition platform with auth, species DB, quizzes, events, AI image recognition, leaderboard, dashboard, and species mapping.",
            live: "#",
            github: "https://github.com/dinukezara/wildguard_",
            image: "/images/WildGuard.jpg", // Placeholder: Add path like "/images/wildguard.jpg"
        },
        {
            id: 2,
            title: "BrightBuy E-Commerce Platform",
            tag: "React • Node • MySQL",
            desc: "Full-stack e-commerce platform with role-based access, product variants, cart, and order management.",
            live: "#",
            github: "https://github.com/dinukezara/BrightBuy",
            image: "/images/brightbuy.jpg", // Placeholder: Add path like "/images/brightbuy.jpg"
        },
    ],
    experience: [
        {
            role: "Committee Member",
            org: "Binara Padura 4.0 (Rotaract UOM)",
            year: "2025",
            note: "Partnership pitching committee",
            images: "/images/binara.jpeg",
        },
        {
            role: "Organizing Committee",
            org: "Gammaddata IEEE API 4.0",
            year: "2025",
            note: "Conducted Python session for school students",
        },
        {
            role: "Committee Member",
            org: "Hit the Ground",
            year: "2026",
            note: "Programme & Logistic Committee Member",
        },
        {
            role: "Committee Member",
            org: "Careers Day",
            year: "2026",
            note: "Logistic Committee Member",
        },
    ],
    experiencePhotos: [
        "/images/binara.jpeg",
        "/images/HTG1.jpeg",
        "/images/HTG2.jpeg",
        "/images/HTG3.jpeg",
        "/images/HTG4.jpeg",
        "/images/HTG5.jpeg",
        "/images/HTG6.jpeg",
        "/images/CD1.jpeg",
        "/images/CD2.jpeg",
        "/images/CD3.jpeg",
        "/images/CD4.jpeg",
        "/images/CD5.jpeg",

    ],
    skills: ["React", "Node.js", "Express", "MySQL", "Python", "Git/GitHub", "ML Basics", "javascript", "html", "css"],
    contact: {
        email: "dinukakeshara55@gmail.com",
        github: "dinukezara",
        githubUrl: "https://github.com/dinukezara",
        linkedin: "Dinuka Withanage",
        linkedinUrl: "https://www.linkedin.com/in/dinuka-withanage-70006a34a/",
        instagram: "dinukezara",
        instagramUrl: "https://www.instagram.com/dinu_kezara/",
        location: "Sri Lanka",
    }
};
