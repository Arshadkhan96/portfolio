  import { useEffect, useState } from "react";
import { FaBars, FaCode, FaDownload, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import resume from "../assets/ARSHAD CV.pdf";
import ReactGA from "../utils/analytics";

const navLinks = ["Home", "Projects", "Skills", "Experience", "Education", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleResumeDownload = () => {
    ReactGA.event({
      category: "Resume",
      action: "Download",
    });
  };

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-xl border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="h-10 w-10 grid place-items-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <FaCode className="text-xl" />
          </span>
          <h2 className="font-bold text-2xl text-slate-950">
            Arshad Ali
          </h2>
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                className={`relative py-7 transition-colors hover:text-blue-600 ${
                  activeSection === link.toLowerCase() ? "text-blue-600" : ""
                }`}
                href={`#${link.toLowerCase()}`}
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <span className="absolute left-0 right-0 -bottom-px h-0.5 rounded-full bg-blue-600" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={resume}
            download
            onClick={handleResumeDownload}
            className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-sm shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
          >
            Download CV <FaDownload />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-slate-200 text-slate-950"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden border-t border-slate-200 bg-white px-6 py-5"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-800">
              {navLinks.map((link) => (
                <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
              <a
                href={resume}
                download
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Download CV <FaDownload />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
