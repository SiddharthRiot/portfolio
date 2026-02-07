import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import profile from "../assets/profile.jpg";

function FocusCard({ title, desc }) {
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

    rotateX.set(-(y - centerY) / 75);
    rotateY.set((x - centerX) / 75);
    scale.set(0.99);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      className="border border-white/5 rounded-xl p-6 select-none cursor-default"
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
      <p className="text-muted font-body leading-[1.75]">
        {desc}
      </p>
    </motion.div>
  );
}

function Home() {

  const imgRotateX = useMotionValue(0);
  const imgRotateY = useMotionValue(0);
  const imgScale = useMotionValue(1);

  const smoothImgRotateX = useSpring(imgRotateX, { stiffness: 120, damping: 20 });
  const smoothImgRotateY = useSpring(imgRotateY, { stiffness: 120, damping: 20 });
  const smoothImgScale = useSpring(imgScale, { stiffness: 120, damping: 20 });

  function handleImageMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    imgRotateX.set(-(y - centerY) / 40);
    imgRotateY.set((x - centerX) / 40);
    imgScale.set(1.03);
  }

  function handleImageMouseLeave() {
    imgRotateX.set(0);
    imgRotateY.set(0);
    imgScale.set(1);
  }

  return (
    <PageWrapper>
      <Layout>
        {/* hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT: TEXT */}
          <motion.section
            className="max-w-3xl mx-auto md:mx-0 select-none cursor-default"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight cursor-default">
              I build digital systems <br />
              that <span className="text-accent">actually work.</span>
            </h1>

            <p className="mt-8 text-muted font-body text-lg leading-[1.75] max-w-xl cursor-default">
              Focused on backend systems, scalable architectures, and applied
              AI/ML. I care less about buzzwords and more about things not
              breaking in production.
            </p>

            {/* cta */}
            <div className="mt-10 flex gap-6 font-body items-center">

              <a
                href="/projects"
                className="
                  group relative inline-flex items-center gap-2
                  px-6 py-3 rounded-md
                  bg-accent text-black font-medium
                  transition
                "
              >
                <span
                  className="
                    absolute inset-[2px]
                    rounded-[4px]
                    border border-black/20
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
                <span className="relative z-10">
                  View Projects
                </span>
                <span
                  className="
                    relative z-10
                    transition-transform duration-300
                    group-hover:rotate-12
                  "
                >
                  →
                </span>
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="
                  group relative text-text
                  hover:text-accent transition-colors duration-300
                "
              >
                Contact
                <span
                  className="
                    absolute left-1/2 -bottom-1
                    h-[1.5px] w-0
                    bg-accent
                    transition-all duration-300
                    group-hover:w-full
                    group-hover:left-0
                  "
                />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-sm font-body text-muted max-w-md select-none cursor-default">
              <div>
                <p className="text-text font-semibold text-lg">4+</p>
                <p>Projects Built</p>
              </div>
              <div>
                <p className="text-text font-semibold text-lg">Full-Stack</p>
                <p>System Thinking</p>
              </div>
              <div>
                <p className="text-text font-semibold text-lg">AI / ML</p>
                <p>Applied Focus</p>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="relative flex justify-center md:justify-end select-none"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}

            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
            style={{
              rotateX: smoothImgRotateX,
              rotateY: smoothImgRotateY,
              scale: smoothImgScale,
              transformPerspective: 1000,
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-accent/10 blur-3xl -z-10" />
            <img
              src={profile}
              alt="Siddharth"
              className="w-72 md:w-80 rounded-2xl shadow-xl"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
          </motion.div>
        </div>

        <motion.section
          className="max-w-4xl mx-auto mt-28 select-none cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
            How I think about building software
          </h2>

          <p className="text-muted font-body leading-[1.8]">
            I believe good software is boring in the best way — predictable,
            resilient, and easy to reason about.
          </p>
        </motion.section>

        <motion.section
          className="max-w-4xl mx-auto mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8 select-none cursor-default">
            What I focus on
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FocusCard
              title="Systems"
              desc="Designing APIs, authentication flows, and backend logic that behave correctly under real-world constraints."
            />
            <FocusCard
              title="Scalability"
              desc="Writing maintainable code with clean architecture and long-term growth in mind."
            />
            <FocusCard
              title="AI / ML"
              desc="Applying machine learning to real problems, not demo-only notebooks."
            />
          </div>
        </motion.section>

        <motion.section
          className="max-w-4xl mx-auto mt-28 text-center select-none cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            Selected Work
          </h2>
          <p className="text-muted font-body max-w-2xl mx-auto mb-8">
            Projects where I focused on real problems, clean systems, and
            long-term usability.
          </p>

          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline cursor-pointer"
          >
            Explore all projects →
          </a>
        </motion.section>
      </Layout>
    </PageWrapper>
  );
}

export default Home;