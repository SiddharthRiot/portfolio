import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        <NavLink
          to="/"
          aria-label="Siddharth — Software Engineer"
          onMouseDown={(e) => e.preventDefault()}
          className="
            group relative font-heading text-xl font-semibold
            tracking-wide text-text select-none
          "
        >
          <span
            className="
              absolute left-0 top-0
              text-accent/40
              translate-x-0
              opacity-0
              transition-all duration-300
              group-hover:-translate-x-1 group-hover:opacity-100
              select-none
            "
          >
            Siddharth
          </span>

          <span
            className="
              absolute left-0 top-0
              text-accent/20
              translate-x-0
              opacity-0
              transition-all duration-300
              group-hover:translate-x-1 group-hover:opacity-100
              select-none
            "
          >
            Siddharth
          </span>

          <span className="relative z-10 select-none">
            Siddharth
          </span>

          <span
            className="
              absolute left-0 -bottom-1
              h-[1.5px] w-0
              bg-accent
              transition-all duration-300
              group-hover:w-full
            "
          />
        </NavLink>

        <div className="flex gap-2 text-sm font-body select-none">
          {[
            { to: "/", label: "Home", end: true },
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onMouseDown={(e) => e.preventDefault()}
              className={({ isActive }) =>
                `
                group relative px-4 py-2 rounded-md
                transition-all duration-300
                select-none
                ${
                  isActive
                    ? "text-text"
                    : "text-muted hover:text-accent"
                }
                `
              }
            >
              {/* hover glass */}
              <span
                className="
                  absolute inset-0 rounded-md
                  bg-white/5
                  opacity-0 scale-95
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:scale-100
                "
              />

              {/* active dot */}
              <span
                className="
                  absolute left-1/2 -bottom-1
                  w-1 h-1 rounded-full
                  bg-accent
                  opacity-0
                  transition-all duration-300
                  group-[.active]:opacity-100
                "
              />

              <span className="relative z-10 select-none">
                {label}
              </span>
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;