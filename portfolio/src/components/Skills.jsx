import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaNodeJs, FaTools } from "react-icons/fa";
import { skillGroups } from "../data/skills";

function Skills() {
  const icons = {
    Frontend: FaCode,
    Backend: FaNodeJs,
    Database: FaDatabase,
    "AI & Integrations": FaCode,
    "Tools & Others": FaTools,
  };

  return (
    <section id="skills" className="bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Toolkit</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-950 mt-2">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title];

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-11 w-11 grid place-items-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon />
                  </span>
                  <h3 className="font-bold text-lg text-slate-950">{group.title}</h3>
                </div>

                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="font-semibold text-slate-700">{item.name}</span>
                        <span className="text-slate-500">{item.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-blue-600" style={{ width: `${item.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
