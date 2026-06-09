// src/pages/Contact.jsx
import { useState } from "react";

const initialForm = {
  name: "", email: "", phone: "", subject: "", category: "", message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: ".5rem" }}>
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </nav>
          <h1>Contact Us</h1>
          <p>Have questions? Our gardening experts are here to help.</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Left – contact info */}
          <div className="col-lg-4">
            <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: "1.5rem" }}>
              Get in Touch
            </h3>

            {[
              { icon: "bi-geo-alt-fill",   bg: "#EBF7DF", color: "#3A8C1E",
                title: "Visit Us",
                lines: ["Plot 12, Green Valley,", "Pune – 411001, Maharashtra"] },
              { icon: "bi-telephone-fill", bg: "#FFF3DC", color: "#E07B00",
                title: "Call Us",
                lines: ["+91 98765 43210", "+91 91234 56789"] },
              { icon: "bi-envelope-fill",  bg: "#FDE8F8", color: "#B0309A",
                title: "Email Us",
                lines: ["hello@seedkart.in",] },
              { icon: "bi-clock-fill",     bg: "#E2F7EC", color: "#1A7A44",
                title: "Working Hours",
                lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sun: 10:00 AM – 2:00 PM"] },
            ].map(({ icon, bg, color, title, lines }) => (
              <div
                key={title}
                style={{
                  display: "flex", alignItems: "flex-start", gap: "0.7rem",
                  marginBottom: "1rem", padding: "0.8rem 0.8rem",
                  background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)",
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                  <i className={`bi ${icon}`} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: ".9rem", marginBottom: ".3rem" }}>{title}</div>
                  {lines.map((l) => (
                    <div key={l} style={{ fontSize: ".84rem", color: "var(--text-muted)" }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ padding: "1.1rem 1.2rem", background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
              <div style={{ fontWeight: 700, marginBottom: ".75rem", fontSize: ".9rem" }}>Follow Us</div>
              <div style={{ display: "flex", gap: ".5rem" }}>
                {[
                  ["bi-facebook",  "#", "#1877F2"],
                  ["bi-instagram", "#", "#E1306C"],
                  ["bi-twitter-x", "#", "#000"   ],
                  ["bi-youtube",   "#", "#FF0000" ],
                ].map(([icon, href, clr]) => (
                  <a
                    key={icon} href={href}
                    style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: `${clr}18`, color: clr,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem", textDecoration: "none",
                      transition: "all .2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = clr; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `${clr}18`; e.currentTarget.style.color = clr; }}
                  >
                    <i className={`bi ${icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="col-lg-8">
            {submitted ? (
              <div
                style={{
                  background: "var(--green-light)", border: "1.5px solid var(--green)",
                  borderRadius: "var(--radius-lg)", padding: "3rem 2rem", textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌱</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "var(--green-dark)", marginBottom: ".75rem" }}>
                  Message Received!
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <div
                style={{
                  background: "#fff", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)", padding: "2.5rem",
                }}
              >
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginBottom: ".5rem" }}>
                  Send Us a Message
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: ".9rem", marginBottom: "1.75rem" }}>
                  Fill in the form and one of our experts will respond shortly.
                </p>

                <form className="sk-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label>Full Name *</label>
                      <input
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="col-sm-6">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-sm-6">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label>Related Category</label>
                      <select className="form-select" name="category" value={form.category} onChange={handleChange}>
                        <option value="">Select a category…</option>
                        <option value="vegetable">Vegetable Crops</option>
                        <option value="fruit">Fruit Crops</option>
                        <option value="flower">Flower Crops</option>
                        <option value="herb">Herb Crops</option>
                        <option value="tree">Crops</option>
                        <option value="other">Other / General</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label>Subject *</label>
                      <input
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        name="subject" value={form.subject} onChange={handleChange}
                        placeholder="How can we help you?"
                      />
                      {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    </div>
                    <div className="col-12">
                      <label>Message *</label>
                      <textarea
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        name="message" value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Tell us more about your query, which crops you're interested in, or any growing challenges you're facing…"
                      />
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100">
                        <i className="bi bi-send me-2" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ strip */}
        <div style={{ marginTop: "5rem" }}>
          <div className="text-center mb-4">
            <span className="section-tag">Common questions</span>
            <h2 className="section-title">Frequently Asked</h2>
          </div>
          <div className="row g-3">
            {[
              { q: "How long does delivery take?",     a: "We dispatch within 24 hours. Delivery takes 3–7 business days depending on your pin code." },
              { q: "Are your crops organic?",           a: "Most of our crops are naturally grown. All are non-GMO. Certified organic varieties are labelled accordingly." },
              { q: "Do you offer bulk discounts?",      a: "Yes! Orders above ₹2,000 get 10% off. Contact us for wholesale / bulk pricing." },
              { q: "What if my crops don't germinate?", a: "We offer a 15-day replacement policy. Just email us with your order number and a photo." },
              { q: "Do you ship internationally?",      a: "Currently we ship within India only. International shipping is coming in 2025!" },
              { q: "How should I store crops?",         a: "Keep in a cool, dry, dark place. Our moisture-proof packaging helps extend shelf life for 1–2 years." },
            ].map(({ q, a }) => (
              <div className="col-md-6" key={q}>
                <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.2rem 1.4rem" }}>
                  <div style={{ fontWeight: 700, fontSize: ".9rem", marginBottom: ".4rem", color: "var(--green-dark)" }}>
                    <i className="bi bi-question-circle me-2" />
                    {q}
                  </div>
                  <p style={{ fontSize: ".85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}