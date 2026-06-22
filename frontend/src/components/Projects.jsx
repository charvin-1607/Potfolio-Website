import { motion } from "framer-motion";

import taskManagementImg from "../assets/images/project images/task-managment-system.png";
import aichatbot from "../assets/images/project images/ai-chat-bot.png";
import portfolioImg from "../assets/images/project images/potfolio-website.png";


function Projects() {

    const projects = [
        {
            title: "🚀 Full Stack Task Management System",

            description:
               "A production-ready Role-Based Task Management System built with secure JWT Authentication, Admin & Employee Dashboards, Role & Permission Management, Task Assignment, CRUD Operations, Task Overdue Tracking using Node Cron, Automated Monthly Excel Report Generation through Background Jobs, Integrated Email Notification System, and a fully responsive user interface. Complete project documentation with workflow, architecture, screenshots, and implementation details is available in the PDF.",
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB"
            ],

            github: "https://github.com/charvin-1607/Task-Management-System.git",

            // use task-management-system.pdf as the PDF file name and place it in the public folder
            pdf: "/Task-managment-system-final.pdf",

            type: "pdf",

            featured: true,

            image: taskManagementImg
        },

        {
            title: "AI Chat Bot",

            description:
                "AI powered chatbot using Gemini API with secure JWT Authentication, Chat History and Responsive UI.",

            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB"
            ],

            github: "https://github.com/charvin-1607/Ai-chat-bot.git",

            live: "https://ai-chat-bot-nine-tan.vercel.app",

            type: "website",

            image: aichatbot
        },

        {
            title: "Portfolio Website",

            description:
                "Modern developer portfolio built using React, Tailwind CSS and Framer Motion with smooth animations and responsive design.",

            tech: [
                "React",
                "Tailwind CSS",
                "Framer Motion"
            ],

            github: "https://github.com/charvin-1607/Potfolio-Website.git",

            live: "YOUR_LIVE_LINK",

            type: "website",

            image: portfolioImg
        }
    ];

    return (

        <section
            id="projects"
            className="py-24 px-8"
        >

            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        projects.map((project, index) => (

                            <ProjectCard
                                key={index}
                                project={project}
                            />

                        ))
                    }

                </div>

            </div>

        </section>

    );
}

function ProjectCard({ project }) {

    return (

        <motion.div

            initial={{ opacity: 0, y: 80 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            whileHover={{
                y: -10,
                scale: 1.13
            }}

            className={`
                bg-slate-800
                rounded-xl
                overflow-hidden
                border
                transition-all
                duration-300

                ${
                    project.featured
                        ? "border-yellow-400 shadow-2xl shadow-yellow-500/20"
                        : "border-slate-700"
                }
            `}
        >

            {/* Screenshot */}

      {/* Screenshot */}

<div className="relative h-56 overflow-hidden">

<img
    src={project.image}
    alt={project.title}
    className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-500
        hover:scale-110
    "
/>

<div
    className="
        absolute
        inset-0
        bg-gradient-to-t
        from-slate-900
        via-transparent
        to-transparent
    "
/>

{
    project.featured && (

        <div
            className="
                absolute
                top-4
                right-4
                bg-yellow-400
                text-black
                text-xs
                font-bold
                px-3
                py-1
                rounded-full
            "
        >
            ⭐ BEST PROJECT
        </div>

    )
}

</div>

            {/* Content */}

            <div className="p-6">

                {
                    project.featured && (

                        <span
                            className="
                            inline-block
                            bg-yellow-400
                            text-slate-900
                            font-bold
                            text-xs
                            px-3
                            py-1
                            rounded-full
                            mb-4
                            "
                        >
                            ⭐ Featured Project
                        </span>

                    )
                }

                <h3
                    className="
                    text-2xl
                    font-semibold
                    text-sky-400
                    mb-3
                    "
                >
                    {project.title}
                </h3>

                {
                    project.featured && (

                        <p
                            className="
                            text-yellow-300
                            text-sm
                            mb-3
                            "
                        >
                            📄 Includes complete documentation, workflow,
                            screenshots and implementation details.
                        </p>

                    )
                }

                {
                    project.featured && (

                        <p
                            className="
                            text-slate-400
                            text-sm
                            mb-4
                            "
                        >
                            15+ Screens • Admin Panel • Employee Dashboard •
                            Authentication • CRUD
                        </p>

                    )
                }

                <p
                    className="
                    text-slate-300
                    leading-7
                    mb-5
                    "
                >
                    {project.description}
                </p>

                {/* Tech */}

                <div
                    className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                    "
                >

                    {
                        project.tech.map((tech, index) => (

                            <span
                                key={index}
                                className="
                                bg-sky-500/20
                                text-sky-400
                                px-3
                                py-1
                                rounded-full
                                text-sm
                                "
                            >
                                {tech}
                            </span>

                        ))
                    }

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                    {
                        project.type === "website" ? (

                            <>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    bg-sky-500
                                    hover:bg-sky-600
                                    transition
                                    px-4
                                    py-2
                                    rounded-lg
                                    "
                                >
                                    Live Demo
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    border
                                    border-sky-500
                                    hover:bg-sky-500
                                    transition
                                    px-4
                                    py-2
                                    rounded-lg
                                    "
                                >
                                    GitHub
                                </a>
                            </>

                        ) : (

                            <>
                                <a
                                    href={project.pdf}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    bg-yellow-400
                                    text-black
                                    hover:bg-yellow-300
                                    transition
                                    font-semibold
                                    px-4
                                    py-2
                                    rounded-lg
                                    "
                                >
                                    View Complete Case Study
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    border
                                    border-yellow-400
                                    text-yellow-300
                                    hover:bg-yellow-400
                                    hover:text-black
                                    transition
                                    px-4
                                    py-2
                                    rounded-lg
                                    "
                                >
                                    GitHub
                                </a>
                            </>

                        )
                    }

                </div>

            </div>

        </motion.div>

    );
}

export default Projects;