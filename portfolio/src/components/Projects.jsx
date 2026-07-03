import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-2">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-slate-200 text-slate-700 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-56 w-full object-contain" />
                ) : (
                  <div className="absolute left-4 right-4 top-5 rounded-xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="h-3 w-2/3 rounded bg-blue-100" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-lg bg-slate-100" />
                      <div className="h-14 rounded-lg bg-blue-100" />
                      <div className="h-14 rounded-lg bg-slate-100" />
                    </div>
                    <div className="h-3 w-full rounded bg-slate-100" />
                    <div className="h-3 w-3/4 rounded bg-slate-100" />
                  </div>
                </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-950">{project.title}</h3>
                <p className="text-sm text-slate-600 mt-3 leading-6">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 text-sm font-bold">
                  <a href={project.live} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    Live Demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600">
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
