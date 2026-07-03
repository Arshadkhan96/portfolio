import { FaArrowRight, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-24">
        <div className="grid md:grid-cols-[1fr_1.05fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </div>

            <p className="text-blue-600 font-semibold mt-8">Hi, I'm</p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-3 text-slate-950 leading-tight">
              Arshad Ali
            </h1>

            <h2 className="text-2xl sm:text-3xl mt-4 font-semibold text-slate-950">
              <span className="text-blue-600">MERN</span> Stack Developer
            </h2>

            <p className="text-blue-700 font-semibold mt-4">
              Open to Internship and Full-Time Opportunities
            </p>

            <p className="text-slate-600 mt-5 max-w-xl leading-8">
              I build responsive and scalable web applications using MongoDB,
              Express.js, React, and Node.js with a focus on clean interfaces,
              practical APIs, and smooth user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-sm shadow-blue-200 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200">
                View Projects <FaArrowRight />
              </a>

              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-slate-300 px-6 py-3 rounded-lg font-semibold text-slate-950 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
                Contact Me <FaEnvelope />
              </a>
            </div>

            <div className="flex gap-4 mt-8 text-xl text-slate-950">
              <a aria-label="GitHub" href="https://github.com/Arshadkhan96" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-lg border border-slate-200 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-md">
                <FaGithub />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/arshad-ali-4412732b9" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-lg border border-slate-200 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-md">
                <FaLinkedin />
              </a>
              <a aria-label="Email" href="mailto:arshadali.dev96@gmail.com" className="h-11 w-11 grid place-items-center rounded-lg border border-slate-200 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-md">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[360px] md:min-h-[460px]"
          >
            <div className="absolute inset-0 rounded-[48px] bg-blue-50" />
            <div className="absolute -left-4 top-20 grid grid-cols-6 gap-3 opacity-50">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              ))}
            </div>
            <div className="absolute right-6 top-24 rounded-xl bg-blue-600 p-4 text-white shadow-xl">
              <FaBriefcase />
            </div>
            {/* Replace this temporary developer workspace illustration with your final hero image later. */}
            <div className="absolute left-4 right-4 top-16 mx-auto max-w-[560px] rounded-2xl border border-slate-200 bg-slate-900 p-3 shadow-2xl">
              <div className="rounded-xl bg-slate-950 p-5 font-mono text-xs text-slate-300">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p><span className="text-blue-400">const</span> developer = "Arshad Ali";</p>
                <p><span className="text-blue-400">stack</span>: ["MongoDB", "Express", "React", "Node"];</p>
                <p><span className="text-blue-400">status</span>: "Open to Internship and Full-Time";</p>
                <p><span className="text-emerald-400">deploy</span>("recruiter-ready portfolio");</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
