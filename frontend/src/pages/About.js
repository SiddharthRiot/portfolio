import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

/* 🔹 Highlight Card (ONLY new component) */
function HighlightCard({ title, desc }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothRotateX = useSpring(rotateX, { stiffness: 160, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 160, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 160, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 70);
    rotateY.set((x - centerX) / 70);
    scale.set(0.99);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      className="border border-white/5 rounded-xl p-6 bg-bg select-none cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        scale: smoothScale,
        transformPerspective: 900,
      }}
    >
      <h3 className="font-semibold mb-3">{title}</h3>
      <p className="text-muted font-body leading-[1.7]">
        {desc}
      </p>
    </motion.div>
  );
}

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <HighlightCard
              title="Systems-first"
              desc="I think in flows, contracts, and failure cases rather than just screens."
            />
            <HighlightCard
              title="Maintainability"
              desc="I prioritize readable, boring code that others can understand."
            />
            <HighlightCard
              title="Real-world focus"
              desc="I design for production constraints, not ideal scenarios."
            />
          </div>

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

          <div className="border border-white/5 rounded-xl p-6 mb-16 select-none cursor-default">
            <h3 className="font-semibold mb-3">Current focus</h3>
            <p className="text-muted font-body leading-[1.75]">
              Lately, I’ve been expanding into{" "}
              <span className="text-text">
                Artificial Intelligence and Machine Learning
              </span>
              , with a specific interest in deep learning models such as{" "}
              <span className="text-text">CNNs</span> and{" "}
              <span className="text-text">RNNs</span>.
            </p>
          </div>

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