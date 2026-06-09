// src/pages/About.jsx
import { Link } from "react-router-dom";

const team = [
  { name: "Arjun Verma",   role: "Founder & CEO",        initials: "AV", bg: "#EBF7DF", color: "#3A8C1E",
    bio: "15 years in organic farming. Started SeedKart to make quality seeds accessible to every Indian household." },
  { name: "Meera Patel",   role: "Head of Horticulture", initials: "MP", bg: "#FFF3DC", color: "#E07B00",
    bio: "M.Sc. Agriculture, Pune University. Leads seed selection, testing, and our growing guides program." },
  { name: "Rajan Nair",    role: "Operations Manager",   initials: "RN", bg: "#FDE8F8", color: "#B0309A",
    bio: "Ensures every order is packed with care and delivered on time across 20,000+ Indian pin codes." },
  { name: "Kavita Sharma", role: "Customer Success",     initials: "KS", bg: "#E2F7EC", color: "#1A7A44",
    bio: "Helps gardeners troubleshoot, plan, and succeed. Our most-loved team member by all accounts!" },
];

const milestones = [
  { year: "2018", title: "Founded in Pune", desc: "Started with just 40 seed varieties and a small warehouse." },
  { year: "2019", title: "10,000 Orders",   desc: "Crossed our first major milestone with organic kitchen garden kits." },
  { year: "2021", title: "Pan-India Launch",desc: "Expanded delivery to all 28 states. Launched our expert gardening helpline." },
  { year: "2023", title: "50K+ Growers",    desc: "Our community of happy gardeners hit 50,000 across India." },
  { year: "2024", title: "200+ Varieties",  desc: "Expanded catalogue to include rare heirloom and forest tree seeds." },
];

export default function About() {
  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: ".6rem" }}>
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </nav>
          <h1>About SeedKart</h1>
          <p>We're a team of passionate gardeners on a mission to green every corner of India.</p>
        </div>
      </div>

      <div className="container py-5">
        {/* Mission */}
        <div className="row align-items-center g-5 mb-3" style={{ marginBottom: "2rem" }}>
          <div className="col-lg-6">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-title mb-3">Making Gardening Accessible to Every Indian</h2>
            <p style={{ fontSize: ".5rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "0.6rem" }}>
              SeedKart was born from a simple belief: <strong>every Indian home deserves a thriving garden.</strong>
              Whether you have a sprawling farm or just a sunny balcony, we believe you should have access
              to the best seeds, the right knowledge, and genuine support.
            </p>
            <p style={{ fontSize: ".5rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              We source our seeds from trusted, certified farms across India and beyond. Every variety
              in our catalogue is lab-tested for purity and germination before it reaches you. We're
              proud to maintain an average germination rate of <strong style={{ color: "var(--green-dark)" }}>98%</strong> across
              our entire collection.
            </p>
            <Link to="/seeds" className="btn btn-primary">
              Explore Our Seeds <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=640&q=80"
              alt="Lush garden"
              style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", width: "100%", objectFit: "cover", maxHeight: 380 }}
            />
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--green-dark), var(--green-deeper))",
            borderRadius: "var(--radius-lg)", padding: "1rem 1rem",
            marginBottom: "2rem",
          }}
        >
          <div className="row g-4 text-center">
            {[
              { num: "200+", lbl: "Seed Varieties"    },
              { num: "50K+", lbl: "Happy Growers"     },
              { num: "98%",  lbl: "Germination Rate"  },
              { num: "7",    lbl: "Years of Trust"    },
              { num: "20K+", lbl: "Pin Codes Covered" },
            ].map(({ num, lbl }) => (
              <div className="col-6 col-md" key={lbl}>
                <div style={{ color: "#fff" }}>
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", fontWeight: 700, color: "var(--orange)" }}>{num}</div>
                  <div style={{ fontSize: ".84rem", opacity: .75, marginTop: ".2rem" }}>{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: "2rem" }}>
          <div className="text-center mb-5">
            <span className="section-tag">What we stand for</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "🌿", title: "Sustainability",  desc: "We prioritise open-pollinated, non-GMO, heirloom seeds that support biodiversity and sustainable agriculture." },
              { icon: "🔬", title: "Quality First",   desc: "Every seed batch undergoes rigorous testing for purity, moisture content, and germination before dispatch." },
              { icon: "❤️", title: "Community",       desc: "We're more than a store. Our growers' community shares tips, successes, and harvests every day." },
              { icon: "📚", title: "Education",       desc: "We believe knowledge is as important as seeds. Our guides and support team help every gardener succeed." },
            ].map(({ icon, title, desc }) => (
              <div className="col-sm-6 col-lg-6" key={title}>
                <div style={{ textAlign: "center", padding: "1rem 0.8rem", background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", height: "100%" }}>
                  <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{icon}</div>
                  <h5 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: ".6rem" }}>{title}</h5>
                  <p style={{ fontSize: ".6rem", color: "var(--text-muted)", lineHeight: 1.2, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="text-center mb-5">
            <span className="section-tag">Our journey</span>
            <h2 className="section-title">The SeedKart Story</h2>
          </div>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div style={{ position: "absolute", left: "12px", top: 0, bottom: 0, width: "2px", background: "var(--border)" }} />
            {milestones.map(({ year, title, desc }, i) => (
              <div key={year} style={{ position: "relative", marginBottom: "2.2rem", paddingLeft: "1.5rem" }}>
                <div
                  style={{
                    position: "absolute", left: "-24px", top: "2px",
                    width: 26, height: 26, borderRadius: "50%",
                    background: i % 2 === 0 ? "var(--green-dark)" : "var(--orange)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: ".7rem", color: "#fff", fontWeight: 700,
                    border: "3px solid var(--cream)",
                  }}
                >✓</div>
                <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--orange-dark)", marginBottom: ".25rem", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  {year}
                </div>
                <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: ".3rem" }}>{title}</div>
                <div style={{ fontSize: ".88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-5">
            <span className="section-tag">Meet the team</span>
            <h2 className="section-title">The People Behind SeedKart</h2>
          </div>
          <div className="row g-4">
            {team.map(({ name, role, initials, bg, color, bio }) => (
              <div className="col-sm-6 col-lg-6" key={name}>
                <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.5rem", textAlign: "center", height: "100%", transition: "all .25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.4rem", margin: "0 auto 1rem" }}>
                    {initials}
                  </div>
                  <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1rem", marginBottom: ".2rem" }}>{name}</div>
                  <div style={{ fontSize: ".78rem", color, fontWeight: 600, marginBottom: ".75rem" }}>{role}</div>
                  <p style={{ fontSize: ".84rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 text-center" style={{ padding: "3rem 0" }}>
          <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: "1rem" }}>
            Ready to Start Growing?
          </h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Explore our full catalogue of 200+ certified seeds.
          </p>
          <Link to="/seeds" className="btn btn-primary btn-lg me-3">
            Shop All Seeds
          </Link>
          <Link to="/contact" className="btn btn-outline-primary btn-lg">
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </>
  );
}