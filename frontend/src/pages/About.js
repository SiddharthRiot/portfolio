import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <PageWrapper>
      <Layout>
        <motion.div
          className="max-w-4xl select-none cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-12">
            About
          </h1>

          {/* MAIN INTRO */}
          <p className="text-muted font-body leading-[1.8] mb-8 max-w-3xl">
            I’m a Computer Science undergraduate focused on building clean,
            secure, and scalable digital systems. I enjoy working on
            backend-driven applications where correctness, data flow, and system
            design matter more than surface-level polish.
          </p>

          <p className="text-muted font-body leading-[1.8] mb-12 max-w-3xl">
            Most of my work revolves around designing APIs, authentication
            systems, and full-stack applications using{" "}
            <span className="text-text">Django</span>,{" "}
            <span className="text-text">React</span>, and{" "}
            <span className="text-text">PostgreSQL</span>. I care deeply about
            writing maintainable code that behaves predictably in real-world
            conditions.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              [
                "Systems-first",
                "I think in flows, contracts, and failure cases rather than just screens.",
              ],
              [
                "Maintainability",
                "I prioritize readable, boring code that others can understand.",
              ],
              [
                "Real-world focus",
                "I design for production constraints, not ideal scenarios.",
              ],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                className="border border-white/5 rounded-xl p-6 bg-bg select-none cursor-default"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="font-semibold mb-3">{title}</h3>
                <p className="text-muted font-body leading-[1.7]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* TECH STACK — ONLY THIS HAS HOVER */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted mb-4">
              Tech I work with
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-body">
              {[
                "Django",
                "React",
                "PostgreSQL",
                "Node.js",
                "REST APIs",
                "JWT Auth",
                "Git / GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1 rounded-full
                    border border-white/10
                    text-muted
                    hover:text-text
                    transition
                    select-none cursor-default
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CURRENT FOCUS */}
          <div className="border border-white/5 rounded-xl p-6 mb-16 select-none cursor-default">
            <h3 className="font-semibold mb-3">Current focus</h3>
            <p className="text-muted font-body leading-[1.75]">
              Lately, I’ve been expanding into{" "}
              <span className="text-text">
                Artificial Intelligence and Machine Learning
              </span>
              , with a specific interest in deep learning models such as{" "}
              <span className="text-text">CNNs</span> and{" "}
              <span className="text-text">RNNs</span>. My goal is to apply these
              techniques responsibly to practical, real-world problems rather
              than theoretical demos.
            </p>
          </div>

          {/* VALUES STRIP */}
          <div className="text-muted font-body leading-[1.8] select-none cursor-default">
            <p>
              I value simplicity over hype, correctness over shortcuts, and
              building software that ages well over time.
            </p>
          </div>
        </motion.div>
      </Layout>
    </PageWrapper>
  );
}

export default About;