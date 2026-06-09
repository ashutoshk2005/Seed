// src/pages/SeedDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getSeedById, categories, seeds } from "../data/seeds";
import SeedCard from "../components/SeedCard";

export default function SeedDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const seed = getSeedById(id);
  const [qty, setQty] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);

  if (!seed) {
    return (
      <div className="container py-5 text-center">
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🌱</div>
        <h2 style={{ fontFamily: "Playfair Display, serif" }}>Seed not found</h2>
        <p style={{ color: "var(--text-muted)" }}>The seed you're looking for doesn't exist.</p>
        <Link to="/seeds" className="btn btn-primary mt-2">Browse All Seeds</Link>
      </div>
    );
  }

  const cat = categories.find((c) => c.id === seed.category);
  const related = seeds.filter((s) => s.category === seed.category && s.id !== seed.id).slice(0, 4);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`bi ${i < Math.round(seed.rating) ? "bi-star-fill" : "bi-star"}`} style={{ color: "var(--orange)" }} />
  ));

  const handleEnquire = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  return (
    <>
      {/* Banner */}
      <div className="detail-hero">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-1">
            <ol className="breadcrumb" style={{ fontSize: ".84rem" }}>
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/seeds">Seeds</a></li>
              <li className="breadcrumb-item active">{seed.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Left – image */}
          <div className="col-lg-5">
            <img src={seed.image} alt={seed.name} className="detail-img" />
            <div className="mt-3 d-flex gap-2 flex-wrap">
              {seed.featured && (
                <span style={{ background: "var(--orange)", color: "#fff", fontSize: ".78rem", fontWeight: 700, padding: ".3rem .85rem", borderRadius: "50px" }}>
                  ⭐ Featured Pick
                </span>
              )}
              <span style={{ background: "var(--green-light)", color: "var(--green-dark)", fontSize: ".78rem", fontWeight: 600, padding: ".3rem .85rem", borderRadius: "50px" }}>
                {cat?.label} Seed
              </span>
              <span style={{ background: "#fff3e0", color: "#c75000", fontSize: ".78rem", fontWeight: 600, padding: ".3rem .85rem", borderRadius: "50px" }}>
                {seed.stock} units in stock
              </span>
            </div>
          </div>

          {/* Right – info */}
          <div className="col-lg-7">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-sm mb-3"
              style={{ border: "1px solid var(--border)", borderRadius: "50px", fontSize: ".82rem", color: "var(--text-muted)" }}
            >
              <i className="bi bi-arrow-left me-1" /> Back
            </button>

            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: ".5rem" }}>
              {seed.name}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <div>{stars}</div>
              <span style={{ fontWeight: 700, fontSize: ".9rem" }}>{seed.rating}</span>
              <span style={{ color: "var(--text-muted)", fontSize: ".84rem" }}>/ 5.0</span>
            </div>

            <div className="detail-price mb-1">₹{seed.price}</div>
            <div style={{ fontSize: ".82rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Pack: {seed.weight}
            </div>

            <p style={{ fontSize: ".95rem", color: "#444", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              {seed.description}
            </p>

            {/* Specs */}
            <div
              style={{
                background: "var(--green-light)",
                borderRadius: "var(--radius)",
                padding: "1.2rem 1.4rem",
                marginBottom: "1.75rem",
              }}
            >
              <h6 style={{ fontWeight: 700, marginBottom: ".75rem", color: "var(--green-deeper)" }}>
                <i className="bi bi-info-circle me-2" />Quick Specs
              </h6>
              {[
                ["Season",            seed.season,          "bi-sun"           ],
                ["Germination Time",  `${seed.germinationDays} days`, "bi-clock"],
                ["Category",          cat?.label,           "bi-tag"           ],
                ["Pack Weight",       seed.weight,          "bi-box-seam"      ],
                ["Stock Available",   `${seed.stock} units`,"bi-stack"         ],
              ].map(([label, value, icon]) => (
                <div className="spec-row" key={label}>
                  <span className="spec-label">
                    <i className={`bi ${icon} me-2`} style={{ color: "var(--green)" }} />
                    {label}
                  </span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>

            {/* How to grow */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h6 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: ".65rem" }}>
                🌱 How to Grow
              </h6>
              <p style={{ fontSize: ".9rem", color: "#555", lineHeight: 1.75, background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "1rem" }}>
                {seed.howToGrow}
              </p>
            </div>

            {/* Tips */}
            <div style={{ marginBottom: "2rem" }}>
              <h6 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: ".65rem" }}>
                💡 Pro Tips
              </h6>
              {seed.tips.map((tip, i) => (
                <div className="tip-item" key={i}>
                  <div className="dot" />
                  <span style={{ fontSize: ".9rem", color: "#555" }}>{tip}</span>
                </div>
              ))}
            </div>

            {/* Qty + CTA */}
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div
                style={{
                  display: "flex", alignItems: "center", gap: ".5rem",
                  border: "2px solid var(--border)", borderRadius: "50px",
                  padding: ".3rem .75rem",
                }}
              >
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{ background: "none", border: "none", fontSize: "1.1rem", cursor: "pointer", color: "var(--green-dark)", width: 28, display: "flex", alignItems: "center", justifyContent: "center" }}
                >−</button>
                <span style={{ width: 28, textAlign: "center", fontWeight: 700, fontSize: "1rem" }}>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  style={{ background: "none", border: "none", fontSize: "1.1rem", cursor: "pointer", color: "var(--green-dark)", width: 28, display: "flex", alignItems: "center", justifyContent: "center" }}
                >+</button>
              </div>

              <button className="btn btn-primary px-4" onClick={handleEnquire}>
                <i className="bi bi-envelope me-2" />Enquire Now
              </button>
              <Link to="/contact" className="btn btn-outline-primary px-4">
                Contact Us
              </Link>
            </div>

            <div style={{ marginTop: "1.5rem", fontSize: ".82rem", color: "var(--text-muted)", display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
              <span><i className="bi bi-truck me-1" style={{ color: "var(--green)" }} />Free shipping above ₹499</span>
              <span><i className="bi bi-patch-check me-1" style={{ color: "var(--green)" }} />Certified quality</span>
              <span><i className="bi bi-arrow-repeat me-1" style={{ color: "var(--green)" }} />15-day return policy</span>
            </div>
          </div>
        </div>

        {/* Related seeds */}
        {related.length > 0 && (
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: "1.5rem" }}>
              More {cat?.label} Seeds
            </h3>
            <div className="row g-4">
              {related.map((s) => (
                <div className="col-sm-6 col-lg-3" key={s.id}>
                  <SeedCard seed={s} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="sk-toast">
          <i className="bi bi-check-circle-fill" style={{ fontSize: "1.1rem" }} />
          Enquiry sent! We'll contact you shortly.
        </div>
      )}
    </>
  );
}