// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="sk-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand col */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo mb-2">🌱 SeedKart</div>
            <p className="footer-desc mb-3">
              India's trusted online crop B2B and B2C. We bring quality, certified crops
              right to your Business – from field to wholesaler and retailer.
            </p>
            <div>
              {[
                ["bi-facebook",  "#"],
                ["bi-instagram", "#"],
                ["bi-twitter-x", "#"],
                ["bi-youtube",   "#"],
              ].map(([icon, href]) => (
                <a key={icon} href={href} className="social-link" aria-label={icon}>
                  <i className={`bi ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Quick Links</h5>
            {[
              ["/",            "Home"      ],
              ["/crops",       "All Crops" ],
              ["/categories",  "Categories"],
              ["/about",       "About Us"  ],
              ["/contact",     "Contact"   ],
            ].map(([to, label]) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Categories</h5>
            {[
              ["Vegetable Crops", "/crops?cat=vegetable"],
              ["Fruit Crops",     "/crops?cat=fruit"    ],
              ["Flower Crops",    "/crops?cat=flower"   ],
              ["Herb Crops",      "/crops?cat=herb"     ],
              ["Crops",           "/crops?cat=tree"     ],
            ].map(([label, to]) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h5>Get in Touch</h5>
            <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.6)", lineHeight: "1.8" }}>
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2" style={{ color: "var(--orange)" }} />
                Plot 12, Green Valley, Pune – 411001
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone me-2" style={{ color: "var(--orange)" }} />
                +91 98765 43210
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope me-2" style={{ color: "var(--orange)" }} />
                hello@seedkart.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>© {new Date().getFullYear()} SeedKart. All rights reserved.</span>
          <span>Made with <span style={{ color: "var(--orange)" }}>♥</span> for Indian gardeners</span>
        </div>
      </div>
    </footer>
  );
}