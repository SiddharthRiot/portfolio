import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "TheIndiArt",
      description:
        "A fully developed end-to-end e-commerce platform for handmade artistry, focusing on secure auth, efficient APIs, a user-friendly UI, and a dependable backend.",
      tech: "React, Tailwind CSS, Node.js, MongoDB",
      github: "https://github.com/siddharthriot/theindiart",
      live: "#",
    },
    {
      title: "CivicEye",
      description:
        "A civic-tech platform designed to report, track, and visualize public issues, improving transparency and citizen engagement.",
      tech: "React, Node.js, MongoDB, Maps API",
      github: "https://github.com/siddharthriot/civiceye",
      live: "#",
    },
    {
      title: "Women Safety App",
      description:
        "A safety-focused application with intelligent threat detection and real-time alerts.",
      tech: "React, Node.js, AI/ML",
      github: "https://github.com/siddharthriot/women-safety-app",
      live: "#",
    },
    {
      title: "Portfolio",
      description:
        "A dark, motion-first portfolio designed with typography, animation, and system thinking.",
      tech: "React, Tailwind, Framer Motion",
      github: "https://github.com/siddharthriot/portfolio",
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
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </motion.div>
      </Layout>
    </PageWrapper>
  );
}

export default Projects;