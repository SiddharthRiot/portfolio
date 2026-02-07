import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glowOpacity = useMotionValue(0);

  const shadowX = useTransform(rotateY, [-6, 6], [-10, 10]);
  const shadowY = useTransform(rotateX, [-6, 6], [10, -10]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 160, damping: 18 });
  const smoothScale = useSpring(scale, { stiffness: 160, damping: 18 });
  const smoothGlow = useSpring(glowOpacity, { stiffness: 120, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const isDatabase = title === "Database & Tools";
    const tiltDivisor = isDatabase ? 95 : 55;
    const pressScale = isDatabase ? 0.997 : 0.99;

    rotateX.set(-(y - centerY) / tiltDivisor);
    rotateY.set((x - centerX) / tiltDivisor);
    scale.set(pressScale);
    glowOpacity.set(1);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glowOpacity.set(0);
  }

  return (
    <motion.div variants={card} className="relative">
      <motion.div
        className="absolute inset-0 rounded-xl blur-2xl pointer-events-none"
        style={{
          opacity: smoothGlow,
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.22), transparent)",
        }}
      />
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative border border-white/10 rounded-xl p-6 overflow-hidden select-none cursor-default"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          scale: smoothScale,
          transformPerspective: 900,
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([x, y]) => `${x}px ${y}px 32px rgba(0,0,0,0.32)`
          ),
        }}
      >
        <h2 className="font-semibold mb-4 cursor-default">
          {title}
        </h2>

        <div className="flex flex-wrap gap-2">
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SkillCard
              title="Languages"
              skills={["Python", "Java", "Cpp", "JavaScript", "SQL"]}
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