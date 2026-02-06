import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm font-body">

        {/* Left */}
        <div className="text-muted leading-[1.75] select-none cursor-default">
          <p className="text-text font-medium">Siddharth</p>
          <p>© 2026 Siddharth. Built with React, Tailwind CSS & Framer Motion</p>
        </div>

        {/* Right: ICON LINKS */}
        <div className="flex gap-5 text-muted">
          <a
            href="https://github.com/siddharthriot/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition select-none cursor-pointer"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/siddharthml/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition select-none cursor-pointer"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:siddharthriot@gmail.com"
            aria-label="Email"
            className="hover:text-accent transition select-none cursor-pointer"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;