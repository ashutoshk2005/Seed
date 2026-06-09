// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { getFeaturedSeeds, categories, seeds } from "../data/seeds";
import SeedCard from "../components/SeedCard";

const catColors = {
  vegetable: { bg: "#EBF7DF", color: "#3A8C1E" },
  fruit:     { bg: "#FFF3DC", color: "#E07B00" },
  flower:    { bg: "#FDE8F8", color: "#B0309A" },
  herb:      { bg: "#E2F7EC", color: "#1A7A44" },
  tree:      { bg: "#EBF2DF", color: "#4B6A1A" },
};

const catIcons = {
  vegetable: "🥦", fruit: "🍉", flower: "🌸", herb: "🌿", tree: "🌳",
};

export default function Home() {
  const featured = getFeaturedSeeds().slice(0, 6);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-20">
              <div className="hero-badge">
                <span>🌱</span> India's 1 Seed Store
              </div>
              <h1 className="hero-title">
                Grow Your <span className="accent">Green</span> World
                <br />
                with <span className="accent-orange">Premium</span> Seeds
              </h1>
              <p className="hero-desc">
                {/* Discover 200+ varieties of certified vegetable, fruit, flower,
                herb & tree seeds. From your balcony garden to your backyard farm
                — we have every seed you need. */}
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/seeds" className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-seeds me-1" />
                  Shop Seeds
                </Link>
                <Link to="/categories" className="btn btn-outline-primary btn-lg px-4">
                  Browse Categories
                </Link>
              </div>

              <div className="hero-stats">
                {[
                  { num: "200+", lbl: "Seed Varieties" },
                  { num: "50K+", lbl: "Happy Growers"  },
                  { num: "98%",  lbl: "Germination Rate"},
                  { num: "Free", lbl: "Shipping ₹499+" },
                ].map(({ num, lbl }) => (
                  <div className="hero-stat" key={lbl}>
                    <span className="num">{num}</span>
                    <span className="lbl">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
                  alt="Beautiful garden"
                />
                <div className="hero-float-card c1">
                  <div className="icon"><i className="bi bi-patch-check-fill" /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".88rem" }}>Certified Seeds</div>
                    <div style={{ fontSize: ".76rem", color: "var(--text-muted)" }}>Quality guaranteed</div>
                  </div>
                </div>
                <div className="hero-float-card c2">
                  <div className="icon">🚚</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".88rem" }}>Fast Delivery</div>
                    <div style={{ fontSize: ".76rem", color: "var(--text-muted)" }}>Pan-India shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES STRIP ─────────────────────────────────── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-tag">Browse by type</span>
            <h2 className="section-title">Seed Categories</h2>
          </div>
          <div className="row g-3 justify-content-center">
            {categories.map((cat) => {
              const style = catColors[cat.id] || {};
              const count = seeds.filter((s) => s.category === cat.id).length;
              return (
                <div className="col-6 col-sm-4 col-md-2" key={cat.id}>
                  <Link to={`/seeds?cat=${cat.id}`} className="cat-card text-decoration-none">
                    <div
                      className="cat-icon"
                      style={{ background: style.bg, color: style.color }}
                    >
                      {catIcons[cat.id]}
                    </div>
                    <div className="cat-name">{cat.label}</div>
                    <div className="cat-count">{count} varieties</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED SEEDS ───────────────────────────────────── */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
            <div>
              <span className="section-tag">Handpicked</span>
              <h2 className="section-title mb-0">Featured Seeds</h2>
            </div>
            <Link to="/seeds" className="btn btn-outline-primary">
              View All Seeds <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
          <div className="row g-4">
            {featured.map((seed) => (
              <div className="col-sm-6 col-lg-4" key={seed.id}>
                <SeedCard seed={seed} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SEEDKART ─────────────────────────────────────── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Why choose us</span>
            <h2 className="section-title">The SeedKart Difference</h2>
            <p className="section-sub">We're gardeners first. Every seed we sell is one we'd plant ourselves.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: "🧪", title: "Lab Tested",       desc: "Every batch is tested for purity and germination rate before it reaches you." },
              { icon: "🌿", title: "Non-GMO",           desc: "We stock only open-pollinated, non-GMO, and heirloom varieties for safe gardening." },
              { icon: "📦", title: "Secure Packaging",  desc: "Seeds are packed in moisture-proof pouches to maintain freshness during transit." },
              { icon: "🚚", title: "Pan-India Delivery",desc: "We deliver to 20,000+ pin codes across India within 3–7 business days." },
              { icon: "🤝", title: "Expert Support",    desc: "Our in-house horticultural team is here to answer all your growing questions." },
              { icon: "🔁", title: "Easy Returns",      desc: "Not satisfied? We offer hassle-free returns and replacements within 15 days." },
            ].map(({ icon, title, desc }) => (
              <div className="col-sm-6 col-lg-4" key={title}>
                <div
                  className="p-4 h-100"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    transition: "all .25s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>{icon}</div>
                  <h5 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: ".4rem" }}>{title}</h5>
                  <p style={{ fontSize: ".88rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWING TIPS BANNER ──────────────────────────────── */}
      {/* <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, var(--green-dark), var(--green-deeper))",
              borderRadius: "var(--radius-lg)",
              padding: "3rem 2.5rem",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute", top: "-40px", right: "-40px",
                width: "220px", height: "220px",
                background: "rgba(245,166,35,.18)",
                borderRadius: "50%",
              }}
            />
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <div style={{ fontSize: ".8rem", fontWeight: 600, letterSpacing: ".1em", opacity: .7, marginBottom: ".6rem" }}>
                  FREE GARDENING GUIDE
                </div>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: "1rem" }}>
                  New to Gardening?
                </h2>
                <p style={{ opacity: .8, fontSize: ".95rem", lineHeight: 1.7, maxWidth: 480 }}>
                  Download our free beginner's guide – covers soil preparation, watering
                  schedules, companion planting, and seasonal calendars for Indian climates.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <Link to="/contact" className="btn btn-warning btn-lg me-2">
                  Get Free Guide <i className="bi bi-download ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Happy gardeners</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div className="row g-4">
            {[
              { name: "Priya Sharma",   city: "Bengaluru", stars: 5, text: "My cherry tomatoes were absolutely amazing! Great germination and the plants are still producing after 4 months.", avatar: "PS" },
              { name: "Rahul Mehta",    city: "Pune",      stars: 5, text: "Ordered moringa seeds and they sprouted within 10 days. Fast delivery and seeds are packed beautifully.", avatar: "RM" },
              { name: "Anita Nair",     city: "Kochi",     stars: 5, text: "Best marigolds I've ever grown! The colours are so vibrant. Will definitely order more next season.", avatar: "AN" },
            ].map(({ name, city, stars: s, text, avatar }) => (
              <div className="col-md-4" key={name}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "1.5rem",
                    height: "100%",
                  }}
                >
                  <div style={{ color: "var(--orange)", fontSize: "1rem", marginBottom: ".75rem" }}>
                    {"★".repeat(s)}
                  </div>
                  <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                    "{text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: "var(--green-light)", color: "var(--green-dark)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, fontSize: ".85rem",
                      }}
                    >
                      {avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: ".9rem" }}>{name}</div>
                      <div style={{ fontSize: ".78rem", color: "var(--text-muted)" }}>{city}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}