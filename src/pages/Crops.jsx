// src/pages/Crops.jsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { crops, categories } from "../data/crops";
import CropCard from "../components/CropCard";

export default function Crops() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("cat") || "all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategory = (id) => {
    setActiveCategory(id);
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ cat: id });
    }
  };

  let filtered = crops.filter((crop) => {
    const matchCat = activeCategory === "all" || crop.category === activeCategory;
    const matchQ   = crop.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  if (sortBy === "price-asc")  filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "rating")     filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sortBy === "name")       filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: ".84rem" }}>
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Crops</li>
            </ol>
          </nav>
          <h1>All Crops</h1>
          <p>Explore our full collection of certified, high-germination crops.</p>
        </div>
      </div>

      <div className="container py-5">
        {/* Search + Sort row */}
        <div className="row g-3 mb-4 align-items-center">
          <div className="col-md-7">
            <div className="search-wrap">
              <i className="bi bi-search search-icon" />
              <input
                type="text"
                placeholder="Search crops (e.g. tomato, marigold, moringa)…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3 ms-auto">
            <select
              className="form-select"
              style={{ borderRadius: "50px", border: "2px solid var(--border)", padding: ".6rem 1rem" }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button
            className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategory("all")}
          >
            All Crops ({crops.length})
          </button>
          {categories.map((cat) => {
            const count = crops.filter((c) => c.category === cat.id).length;
            return (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => handleCategory(cat.id)}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p style={{ fontSize: ".88rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          Showing <strong>{filtered.length}</strong> result{filtered.length !== 1 ? "s" : ""}
          {query && <> for "<strong>{query}</strong>"</>}
          {activeCategory !== "all" && <> in <strong>{categories.find(c => c.id === activeCategory)?.label}</strong></>}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="row g-4">
            {filtered.map((crop) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={crop.id}>
                <CropCard crop={crop} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="icon">🌱</div>
            <h4 style={{ fontFamily: "Playfair Display, serif" }}>No crops found</h4>
            <p>Try a different search term or category.</p>
            <button className="btn btn-primary" onClick={() => { setQuery(""); handleCategory("all"); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}