// src/components/SeedCard.jsx
import { Link } from "react-router-dom";
import { categories } from "../data/seeds";

export default function SeedCard({ seed }) {
  const cat = categories.find((c) => c.id === seed.category);

  const stars = (r) =>
    Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi ${i < Math.round(r) ? "bi-star-fill" : "bi-star"}`}
      />
    ));

  return (
    <div className="seed-card">
      {/* Image */}
      <div className="card-img-wrap">
        <img src={seed.image} alt={seed.name} loading="lazy" />
        <span className="badge-cat">{cat?.label}</span>
        {seed.featured && <span className="badge-featured">⭐ Featured</span>}
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="card-title">{seed.name}</h3>
        <p className="card-desc">{seed.shortDesc}</p>

        {/* Meta pills */}
        <div className="seed-meta">
          <span>
            <i className="bi bi-sun" />
            {seed.season}
          </span>
          <span>
            <i className="bi bi-clock" />
            {seed.germinationDays} days
          </span>
          <span>
            <i className="bi bi-box-seam" />
            {seed.stock} left
          </span>
        </div>

        {/* Price + rating */}
        <div className="price-row">
          <div className="price">
            <sup>₹</sup>{seed.price}
          </div>
          <div>
            <div className="stars">{stars(seed.rating)}</div>
            <div style={{ fontSize: ".73rem", color: "var(--text-muted)", textAlign: "right" }}>
              {seed.rating}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/seeds/${seed.id}`}
          className="btn btn-primary w-100 mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}