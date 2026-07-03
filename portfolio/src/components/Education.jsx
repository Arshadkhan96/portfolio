import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications  (BCA)",
      school: "Maa Shakambhari University, Saharanpur, Uttar Pradesh",
      years: "2023 - 2026",
    },
    
  ];

  return (
    <section id="education" className="bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Academic</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-950 mt-2">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
        >
          <div className="relative space-y-8 before:absolute before:left-5 before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-blue-100">
            {education.map((item) => (
              <div key={item.degree} className="relative flex gap-5">
                <span className="z-10 h-10 w-10 shrink-0 grid place-items-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-100">
                  <FaGraduationCap />
                </span>
                <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50/60 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-bold text-slate-950">{item.degree}</h3>
                    <span className="text-sm font-semibold text-blue-700">{item.years}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
