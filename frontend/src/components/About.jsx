import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

function About() {

  return (
    <section
      id="about"
      className="py-24 px-8"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-2xl font-semibold mb-6 text-sky-400">
              MERN Stack Developer
            </h3>

            <p className="text-slate-300 leading-8">
              I'm a Computer Science student passionate
              about building full stack applications using
              React, Node.js, Express.js and MongoDB.
            </p>

            <p className="text-slate-300 leading-8 mt-4">
              My goal is to become a professional Full
              Stack Developer and build secure,
              scalable web applications.
            </p>

          </motion.div>
         
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4">

              <FaGraduationCap
                className="text-sky-400 text-3xl"
              />

              <div>
                <h4 className="font-semibold">
                  Education
                </h4>

                <p className="text-slate-400">
                  Computer Science Student
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4">

              <FaCode
                className="text-sky-400 text-3xl"
              />

              <div>
                <h4 className="font-semibold">
                  Development
                </h4>

                <p className="text-slate-400">
                  MERN Stack Developer
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4">

              <FaRocket
                className="text-sky-400 text-3xl"
              />

              <div>
                <h4 className="font-semibold">
                  Goal
                </h4>

                <p className="text-slate-400">
                  Full Stack Development
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;