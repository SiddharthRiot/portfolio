import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function ProjectCard({ project }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glowOpacity = useMotionValue(0);

  const shadowX = useTransform(rotateY, [-6, 6], [-12, 12]);
  const shadowY = useTransform(rotateX, [-6, 6], [12, -12]);

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

    rotateX.set(-(y - centerY) / 50);
    rotateY.set((x - centerX) / 50);
    scale.set(0.99);
    glowOpacity.set(1);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glowOpacity.set(0);
  }

  const showCode =
    project.title === "CivicEye" ||
    project.title === "Women Safety App" ||
    project.title === "Portfolio";

  const showLive =
    project.title === "TheIndiArt" ||
    project.title === "Portfolio";

  const techList = Array.isArray(project.tech)
    ? project.tech
    : project.tech.split(",").map(t => t.trim());

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-xl blur-2xl pointer-events-none"
        style={{
          opacity: smoothGlow,
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.18), transparent)",
        }}
      />

      {/* card */}
      <motion.article
        className="relative border border-white/5 rounded-xl p-6 bg-bg select-none cursor-default will-change-transform"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          scale: smoothScale,
          transformPerspective: 900,
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([x, y]) => `${x}px ${y}px 40px rgba(0,0,0,0.35)`
          ),
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-xl font-semibold mb-3">
          {project.title}
        </h2>

        <p className="text-muted font-body leading-[1.75] mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techList.map((tech) => (
            <span
              key={tech}
              className="
                text-xs px-3 py-1 rounded-full
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

        <div className="flex gap-4 text-sm font-body items-center">
          
          {/* code btn */}
          {showCode && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-lg
                bg-white/5 border border-white/10
                text-sm font-medium
                transition-all duration-200
                hover:bg-white/10 hover:border-white/20
                hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]
                active:scale-[0.97]
              "
            >
              Code
              <svg
                className="w-4 h-4 opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 3h7v7" />
                <path d="M10 14L21 3" />
                <path d="M21 14v7h-7" />
                <path d="M3 10V3h7" />
              </svg>
            </a>
          )}

          {/* live btn */}
          {showLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-lg
                bg-white/5 border border-white/10
                text-sm font-medium
                transition-all duration-200
                hover:bg-white/10 hover:border-white/20
                hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]
                active:scale-[0.97]
              "
            >
              Live
              <svg
                className="w-4 h-4 opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 3h7v7" />
                <path d="M10 14L21 3" />
                <path d="M21 14v7h-7" />
                <path d="M3 10V3h7" />
              </svg>
            </a>
          )}
        </div>
      </motion.article>
    </div>
  );
}

export default ProjectCard;