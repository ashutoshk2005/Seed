// src/pages/CropDetails.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCropById, categories, crops } from "../data/crops";
import CropCard from "../components/CropCard";

export default function CropDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const crop = getCropById(id);
  const [qty, setQty] = useState(1);

  if (!crop) {
    return (
      <div className="container py-5 text-center">
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🌱</div>
        <h2 style={{ fontFamily: "Playfair Display, serif" }}>Crop not found</h2>
        <p style={{ color: "var(--text-muted)" }}>The crop you're looking for doesn't exist.</p>
        <Link to="/crops" className="btn btn-primary mt-2">Browse All Crops</Link>
      </div>
    );
  }

  const cat = categories.find((c) => c.id === crop.category);
  const related = crops.filter((c) => c.category === crop.category && c.id !== crop.id).slice(0, 4);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <i
      key={i}
      className={`bi ${i < Math.round(crop.rating) ? "bi-star-fill" : "bi-star"}`}
      style={{ color: "var(--orange)" }}
    />
  ));

  const handleWhatsAppEnquiry = () => {
    const message = `Hi, I'm interested in "${crop.name}" (₹${crop.price}). Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = crop.sellerPhone;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Banner */}
      <div className="detail-hero">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-1">
            <ol className="breadcrumb" style={{ fontSize: ".84rem" }}>
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/crops">Crops</a></li>
              <li className="breadcrumb-item active">{crop.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Left – image */}
          <div className="col-lg-5">
            <img src={crop.image} alt={crop.name} className="detail-img" />
            <div className="mt-3 d-flex gap-2 flex-wrap">
              {crop.featured && (
                <span
                  style={{
                    background: "var(--orange)",
                    color: "#fff",
                    fontSize: ".78rem",
                    fontWeight: 700,
                    padding: ".3rem .85rem",
                    borderRadius: "50px",
                  }}
                >
                  ⭐ Featured Pick
                </span>
              )}
              <span
                style={{
                  background: "var(--green-light)",
                  color: "var(--green-dark)",
                  fontSize: ".78rem",
                  fontWeight: 600,
                  padding: ".3rem .85rem",
                  borderRadius: "50px",
                }}
              >
                {cat?.label} Crop
              </span>
              <span
                style={{
                  background: "#fff3e0",
                  color: "#c75000",
                  fontSize: ".78rem",
                  fontWeight: 600,
                  padding: ".3rem .85rem",
                  borderRadius: "50px",
                }}
              >
                {crop.stock} units in stock
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
              {crop.name}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <div>{stars}</div>
              <span style={{ fontWeight: 700, fontSize: ".9rem" }}>{crop.rating}</span>
              <span style={{ color: "var(--text-muted)", fontSize: ".84rem" }}>/ 5.0</span>
            </div>

            <div className="detail-price mb-1">₹{crop.price}</div>
            <div style={{ fontSize: ".82rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Pack: {crop.weight}
            </div>

            <p style={{ fontSize: ".95rem", color: "#444", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              {crop.description}
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
                ["Season",          crop.season,          "bi-sun"      ],
                ["Category",        cat?.label,           "bi-tag"      ],
                ["Stock Available", `${crop.stock} units`, "bi-stack"    ],
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

              <button
                onClick={handleWhatsAppEnquiry}
                className="btn btn-whatsapp px-4"
                style={{
                  background: "#25D366",
                  border: "none",
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "50px",
                  cursor: "pointer",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#20ba5a")}
                onMouseLeave={(e) => (e.target.style.background = "#25D366")}
              >
                <i className="bi bi-whatsapp me-2" /> Enquire
              </button>
              <Link to="/contact" className="btn btn-outline-primary px-4">
                Contact Us
              </Link>
            </div>

            <div style={{ marginTop: "1.5rem", fontSize: ".82rem", color: "var(--text-muted)", display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
              <span><i className="bi bi-phone me-1" style={{ color: "var(--green)" }} />Contact Us to get best deal</span>
              <span><i className="bi bi-truck me-1" style={{ color: "var(--green)" }} />We Deal in Wholesale and Retail</span>
              <span><i className="bi bi-patch-check me-1" style={{ color: "var(--green)" }} />Certified quality</span>
              <span><i className="bi bi-arrow-repeat me-1" style={{ color: "var(--green)" }} />15-day return policy</span>
            </div>
          </div>
        </div>

        {/* Related crops */}
        {related.length > 0 && (
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: "1.5rem" }}>
              More {cat?.label} Crops
            </h3>
            <div className="row g-4">
              {related.map((s) => (
                <div className="col-sm-6 col-lg-3" key={s.id}>
                  <CropCard crop={s} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
