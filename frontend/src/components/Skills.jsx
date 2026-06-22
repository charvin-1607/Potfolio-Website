import { motion } from "framer-motion";

function Skills() {

    const frontend = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap"
    ];

    const backend = [
        "Node.js",
        "Express.js"
    ];

    const database = [
        "MongoDB",
        "SQL"
    ];

    const tools = [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Render",
        "Vercel"
    ];

    return (
        <section
            id="skills"
            className="py-24 px-8"
        >

            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <SkillCard
                        title="Frontend"
                        skills={frontend}
                    />

                    <SkillCard
                        title="Backend"
                        skills={backend}
                    />

                    <SkillCard
                        title="Database"
                        skills={database}
                    />

                    <SkillCard
                        title="Tools"
                        skills={tools}
                    />

                </div>

            </div>

        </section>
    );
}

function SkillCard({ title, skills }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
                scale: 1.13,
            }}
            className="
            bg-slate-800
            rounded-xl
            p-6
            shadow-lg
            border
            border-slate-700
            "
        >

            <h3 className="
            text-2xl
            font-semibold
            text-sky-400
            mb-6
            ">
                {title}
            </h3>

            <div className="space-y-3">

                {
                    skills.map((skill, index) => (
                        <div
                            key={index}
                            className="
                            bg-slate-700
                            px-4
                            py-2
                            rounded-lg
                            "
                        >
                            {skill}
                        </div>
                    ))
                }

            </div>

        </motion.div>
    );
}

export default Skills;