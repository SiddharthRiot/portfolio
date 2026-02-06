import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Brand / Name */}
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-wide hover:text-accent transition"
        >
          Siddharth
        </NavLink>

        {/* Links */}
        <div className="flex gap-6 text-sm font-body">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-text" : "text-muted hover:text-accent"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-text" : "text-muted hover:text-accent"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-text" : "text-muted hover:text-accent"
              }`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-text" : "text-muted hover:text-accent"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-text" : "text-muted hover:text-accent"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
