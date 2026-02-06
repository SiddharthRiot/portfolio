import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function SkillCard({ title, skills }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative border border-white/10 rounded-xl p-6 overflow-hidden group select-none cursor-default"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition" />

      <h2 className="font-semibold mb-4 relative z-10 cursor-default">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2 relative z-10">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted hover:text-text transition select-none cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <PageWrapper>
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-10">
            Skills
          </h1>

          {/* SKILL CARDS */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SkillCard
              title="Languages"
              skills={["Python", "Java", "JavaScript", "SQL"]}
            />

            <SkillCard
              title="Frontend"
              skills={["React", "HTML5", "CSS3", "Tailwind CSS"]}
            />

            <SkillCard
              title="Backend & ML"
              skills={[
                "Django",
                "Flask",
                "REST APIs",
                "JWT",
                "TensorFlow",
                "CNN",
                "RNN",
              ]}
            />

            <div className="md:col-span-3">
              <SkillCard
                title="Database & Tools"
                skills={[
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Git",
                  "CI/CD",
                  "Docker",
                  "AWS",
                ]}
              />
            </div>
          </motion.div>

          {/* BOTTOM DESIGN ACCENT */}
          <motion.div
            className="mt-28 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </Layout>
    </PageWrapper>
  );
}

export default Skills;