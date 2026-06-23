import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-sky-400">
            {"<Charvin />"}
        </h1>

        <ul className="hidden md:flex gap-8">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-sky-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-sky-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-sky-400"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-sky-400"
            >
              Projects
            </Link>
          </li>

          {/* <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-sky-400"
            >
              Resume
            </Link>
          </li> */}

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;