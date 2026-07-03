import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import resume from "../assets/ARSHAD CV.pdf";

function Contact() {
  const details = [
    { icon: FaEnvelope, label: "Email", value: "arshadali.dev96@gmail.com", href: "mailto:arshadali.dev96@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+91 6395913419", href: "tel:+91 6395913419" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Saharanpur, Uttar Pradesh, India" },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Let's connect</p>
            <h2 className="mt-4 text-3xl font-bold">Arshad Ali</h2>
            <p className="mt-2 text-blue-200">MERN Stack Developer</p>
            <p className="mt-6 max-w-md leading-7 text-slate-300">
              Open to internships, full-time roles, and freelance opportunities in MERN Stack and Full-Stack Development.
            </p>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid gap-4">
              {details.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-lg border border-slate-200 p-4 transition-all hover:border-blue-200 hover:bg-blue-50/40">
                    <span className="h-11 w-11 shrink-0 grid place-items-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                      <p className="font-bold text-slate-950">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a href="https://www.linkedin.com/in/arshad-ali-4412732b9" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Arshadkhan96" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600">
                <FaGithub /> GitHub
              </a>
              <a href={resume} download className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600">
                <FaDownload /> Resume
              </a>
              <a href="mailto:arshadali.dev96@gmail.com?subject=Hiring%20Opportunity%20for%20Arshad%20Ali" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200">
                <FaEnvelope /> Hire Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
