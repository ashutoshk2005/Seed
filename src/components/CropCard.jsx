// src/components/CropCard.jsx
import { Link } from "react-router-dom";
import { categories } from "../data/crops";

export default function CropCard({ crop }) {
  const cat = categories.find((c) => c.id === crop.category);

  const stars = (r) =>
    Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi ${i < Math.round(r) ? "bi-star-fill" : "bi-star"}`}
      />
    ));

  // WhatsApp Enquiry handler
  const handleWhatsAppEnquiry = () => {
    const message = `Hi, I'm interested in "${crop.name}" (₹${crop.price}). Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = crop.sellerPhone;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="seed-card">
      {/* Image */}
      <div className="card-img-wrap">
        <img src={crop.image} alt={crop.name} loading="lazy" />
        <span className="badge-cat">{cat?.label}</span>
        {crop.featured && <span className="badge-featured">⭐ Featured</span>}
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="card-title">{crop.name}</h3>
        <p className="card-desc">{crop.shortDesc}</p>

        {/* Meta pills */}
        <div className="seed-meta">
          <span>
            <i className="bi bi-sun" />
            {crop.season}
          </span>
          <span>
            <i className="bi bi-clock" />
            {crop.germinationDays} days
          </span>
          <span>
            <i className="bi bi-box-seam" />
            {crop.stock} left
          </span>
        </div>

        {/* Price + rating */}
        <div className="price-row">
          <div className="price">
            <sup>₹</sup>{crop.price}
          </div>
          <div>
            <div className="stars">{stars(crop.rating)}</div>
            <div style={{ fontSize: ".73rem", color: "var(--text-muted)", textAlign: "right" }}>
              {crop.rating}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".5rem", marginTop: "0.1rem" }}>
          <Link
            to={`/crops/${crop.id}`}
            className="btn btn-primary"
            style={{ fontSize: ".75rem", padding: ".4rem 0.2rem", borderRadius: "50px", textAlign: "center" }}
          >
            <i className="bi bi-eye" /> View 
          </Link>
          
            <button
              onClick={handleWhatsAppEnquiry}
            className="btn btn-whatsapp"
            style={{
              fontSize: ".75rem",
              padding: ".4rem 0.5rem",
              borderRadius: "50px",
              background: "#25D366",
              border: "none",
              color: "white",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all var(--transition)",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#20ba5a")}
            onMouseLeave={(e) => (e.target.style.background = "#25D366")}
          >
            <i className="bi bi-whatsapp" /> Enquire
          </button>
        </div>
      </div>
    </div>
  );
}