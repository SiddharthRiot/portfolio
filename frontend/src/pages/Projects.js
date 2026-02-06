import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

function Projects() {
  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "A full-stack ecommerce platform with product listings, cart flow, order management, and scalable backend architecture.",
      tech: "React, Tailwind CSS, Node.js, MongoDB",
      github: "#",
      live: "#",
    },
    {
      title: "CivicEye",
      description:
        "A civic-tech platform designed to report, track, and visualize public issues, improving transparency and citizen engagement.",
      tech: "React, Node.js, MongoDB, Maps API",
      github: "#",
      live: "#",
    },
    {
      title: "Women Safety App",
      description:
        "A safety-focused application with intelligent threat detection and real-time alerts.",
      tech: "React, Node.js, AI/ML",
      github: "#",
      live: "#",
    },
    {
      title: "My Portfolio",
      description:
        "A dark, motion-first portfolio designed with typography, animation, and system thinking.",
      tech: "React, Tailwind, Framer Motion",
      github: "#",
      live: "#",
    },
  ];

  return (
    <PageWrapper>
      <Layout>
        <motion.div
          className="max-w-5xl select-none cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-12">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="border border-white/5 rounded-xl p-6 bg-bg select-none cursor-default"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h2 className="text-xl font-semibold mb-3">
                  {project.title}
                </h2>

                <p className="text-muted font-body leading-[1.75] mb-5">
                  {project.description}
                </p>

                <p className="text-sm text-muted font-body mb-6">
                  <span className="text-text">Tech:</span> {project.tech}
                </p>

                <div className="flex gap-6 text-sm font-body">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition cursor-pointer"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition cursor-pointer"
                  >
                    Live →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Layout>
    </PageWrapper>
  );
}

export default Projects;