import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

function Resume() {

    return (
        <section
            id="resume"
            className="py-24 px-8"
        >

            <div className="max-w-4xl mx-auto">

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 50
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    className="
                    bg-slate-800
                    rounded-2xl
                    p-10
                    text-center
                    border
                    border-slate-700
                    "
                >

                    <FaFilePdf
                        className="
                        text-6xl
                        text-red-500
                        mx-auto
                        mb-6
                        "
                    />

                    <h2
                        className="
                        text-4xl
                        font-bold
                        mb-4
                        "
                    >
                        Resume
                    </h2>

                    <p
                        className="
                        text-slate-300
                        mb-8
                        "
                    >
                        Download my latest resume to
                        know more about my skills,
                        projects and experience.
                    </p>

                    <a
                        href="/resume.pdf"
                        download
                        className="
                        inline-block
                        bg-sky-500
                        hover:bg-sky-600
                        px-8
                        py-4
                        rounded-lg
                        font-semibold
                        transition
                        "
                    >
                        Download Resume
                    </a>

                </motion.div>

            </div>

        </section>
    );
}

export default Resume;