import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileeImg from "../assets/images/project images/profileImg_2.png";

function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-2xl mb-4">
              Hi, I'm
            </h2>

            <h1 className="text-6xl font-bold mb-4">
              Charvin.j.Shah
            </h1>

            <h3 className="text-3xl text-sky-400 mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-slate-300 leading-8">
              I build modern web applications using
              React, Node.js, Express and MongoDB.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#projects"
                className="
                 bg-sky-500
                 px-6
                 py-3
                 rounded-lg
                 inline-block
                 hover:bg-sky-600"
              >
                View Projects
              </a>


              {/* <a
                href="/resume.pdf"
                download
                className="
                 border
                 border-sky-500
                 px-6
                 py-3
                 rounded-lg
                 inline-block
                "
              >
                Download Resume
              </a> */}

            </div>

            <div className="flex gap-5 mt-8 text-3xl">

              <a href="https://github.com/charvin-1607">

                <FaGithub className="cursor-pointer" />
              </a>

              {/* <a href="https://www.linkedin.com/in/charvin-shah-210223419">

              <FaLinkedin className="cursor-pointer" />
              </a> */}

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src={profileeImg}
              alt="profile"
              className="w-80 rounded-full border-4 border-sky-400"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;