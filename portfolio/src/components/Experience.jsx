import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

function Experience() {
  const highlights = [
    "Building full-stack MERN applications through personal projects and hands-on development.",
    "Developing REST APIs with authentication, database design, and third-party integrations.",
    "Creating responsive React applications with reusable components and modern UI practices.",
    "Deploying and maintaining applications using Vercel, Render, and cloud-based services.",
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
        Work
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-950 mt-2">
        MERN Stack Developer (Independent Projects)
      </h2>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <span className="h-12 w-12 shrink-0 grid place-items-center rounded-lg bg-blue-50 text-blue-600">
              <FaBriefcase />
            </span>
            <div>
              <h3 className="font-bold text-xl text-slate-950">
                MERN Stack Developer (Independent Projects)
              </h3>
              <p className="mt-2 text-slate-600">
                Personal projects, portfolio applications, and deployment-ready full-stack development.
              </p>
            </div>
          </div>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            2024 - Present
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-4"
            >
              <FaCheckCircle className="mt-1 shrink-0 text-blue-600" />
              <p className="text-sm leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </motion.article>
    </section>
  );
}

export default Experience;