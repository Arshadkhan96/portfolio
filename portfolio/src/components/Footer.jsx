import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold">© 2026 Arshad Ali. All rights reserved.</p>
          <p className="mt-1 text-sm text-slate-400">Built with React.js, Tailwind CSS, and JavaScript</p>
        </div>
        <div className="flex justify-center gap-3">
          <a aria-label="GitHub" href="https://github.com/Arshadkhan96" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-300">
            <FaGithub />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/arshad-ali-4412732b9" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
