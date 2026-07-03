import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
        Credentials
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-950 mt-2">
        Certifications
      </h2>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35 }}
        className="max-w-3xl rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <span className="h-12 w-12 shrink-0 grid place-items-center rounded-lg bg-blue-50 text-blue-600">
              <FaAward />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-950">Claude 101</h3>
              <p className="mt-2 font-semibold text-blue-700">Anthropic</p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <FaCalendarAlt className="text-xs" /> 2026
          </span>
        </div>

        <p className="mt-6 leading-7 text-slate-600">
          Completed Claude 101 by Anthropic, covering AI-assisted development, prompt engineering, and practical Claude workflows.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["AI Development", "Prompting", "Claude Workflows", "Prompt Engineering"].map((tag) => (
            <span key={tag} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {tag}
            </span>
          ))}</div>

        <a
          href="/certificate-101.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
        >
          View Certificate <FaExternalLinkAlt className="text-xs" />
        </a>
      </motion.article>
    </section>
  );
}

export default Certifications;



