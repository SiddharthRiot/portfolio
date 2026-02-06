import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <PageWrapper>
      <Layout>
        {/* HERO SECTION */}
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

            <div className="mt-10 flex gap-6 font-body">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
              >
                View Projects →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-text hover:text-accent transition cursor-pointer"
              >
                Contact
              </a>
            </div>

            {/* QUICK STATS */}
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

          {/* RIGHT: IMAGE */}
          <motion.div
            className="relative flex justify-center md:justify-end select-none"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-accent/10 blur-3xl -z-10" />
            <img
              src={profile}
              alt="Siddharth"
              className="w-72 md:w-80 rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* THINKING / PHILOSOPHY SECTION */}
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
            resilient, and easy to reason about. I prioritize correctness,
            clean abstractions, and systems that scale without constant
            firefighting.
          </p>
        </motion.section>

        {/* FOCUS SECTION */}
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
            {[
              {
                title: "Systems",
                desc:
                  "Designing APIs, authentication flows, and backend logic that behave correctly under real-world constraints.",
              },
              {
                title: "Scalability",
                desc:
                  "Writing maintainable code with clean architecture and long-term growth in mind.",
              },
              {
                title: "AI / ML",
                desc:
                  "Applying machine learning to real problems, not demo-only notebooks.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="border border-white/5 rounded-xl p-6 select-none cursor-default"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-muted font-body leading-[1.75]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FEATURED PROJECTS TEASER */}
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