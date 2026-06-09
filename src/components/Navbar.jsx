// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sk-navbar navbar navbar-expand-lg">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          <div className="brand-icon">🌱</div>
          SeedKart
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} style={{ fontSize: "1.4rem", color: "var(--green-dark)" }} />
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-1">
            {[
              { to: "/",           label: "Home"       },
              { to: "/seeds",      label: "Seeds"      },
              { to: "/categories", label: "Categories" },
              { to: "/about",      label: "About"      },
              { to: "/contact",    label: "Contact"    },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link
              to="/seeds"
              className="btn btn-primary btn-sm"
              onClick={() => setOpen(false)}
            >
              <i className="bi bi-search me-1" />
              Browse Seeds
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}