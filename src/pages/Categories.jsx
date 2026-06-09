// src/pages/Categories.jsx
import { Link } from "react-router-dom";
import { categories, crops } from "../data/crops";
import CropCard from "../components/CropCard";

const catColors = {
  vegetable: { bg: "#EBF7DF", color: "#3A8C1E", border: "#b8dfa0" },
  fruit:     { bg: "#FFF3DC", color: "#E07B00", border: "#ffc97a" },
  flower:    { bg: "#FDE8F8", color: "#B0309A", border: "#f0a6e0" },
  herb:      { bg: "#E2F7EC", color: "#1A7A44", border: "#9adcbd" },
  tree:      { bg: "#EBF2DF", color: "#4B6A1A", border: "#c0d88a" },
};
const catIcons  = { vegetable: "🥦", fruit: "🍉", flower: "🌸", herb: "🌿", tree: "🌾" };
const catBannerDesc = {
  vegetable: "Fresh salads, curries, and more — grow your own organic vegetables.",
  fruit:     "From melons to papaya — enjoy homegrown tropical fruits.",
  flower:    "Brighten your space with vibrant marigolds, sunflowers & more.",
  herb:      "Cook with the freshest herbs, straight from your balcony.",
  tree:      "Plant a legacy — shade trees, fruit trees & medicinal wonders.",
};

export default function Categories() {
  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: ".84rem" }}>
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Categories</li>
            </ol>
          </nav>
          <h1>Crop Categories</h1>
          <p>Browse our full range of crops by type and find exactly what your garden needs.</p>
        </div>
      </div>

      <div className="container py-5">
        {/* Category overview cards */}
        <div className="row g-4 mb-5">
          {categories
            .filter((cat) => cat.id !== "flower")
            .map((cat) => {
              const style  = catColors[cat.id];
              const count  = crops.filter((c) => c.category === cat.id).length;
              const topCrops = crops.filter((c) => c.category === cat.id && c.featured).slice(0, 3);
              return (
                <div className="col-md-6 col-lg-4" key={cat.id}>
                <div
                  className="cat-overview-card"
                  style={{ borderColor: style.border }}
                >
                  {/* Header */}
                  <div className="cat-overview-card-header" style={{ background: style.bg }}>
                    <div className="emoji">{catIcons[cat.id]}</div>
                    <h3 style={{ color: style.color }}>
                      {cat.id === "tree" ? "Crops" : `${cat.label} `}
                    </h3>
                    <p>
                      {catBannerDesc[cat.id]}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="cat-overview-card-body">
                    <div className="cat-overview-card-body-top">
                      <span className="count">{count} varieties available</span>
                        <span
                          className="badge"
                          style={{
                            background: style.bg, color: style.color,
                          }}
                        >
                          {crops.filter((c) => c.category === cat.id && c.featured).length} Featured
                        </span>
                    </div>

                    {/* Top crop names */}
                    {topCrops.length > 0 && (
                      <div className="cat-overview-card-seeds">
                        <div className="cat-overview-card-seeds-title">
                          Popular picks
                        </div>
                        {topCrops.map((crop) => (
                          <Link
                              key={crop.id}
                              to={`/crops/${crop.id}`}
                          >
                            <i className="bi bi-arrow-right-short" style={{ color: style.color }} />
                            {crop.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/crops?cat=${cat.id}`}
                      className="btn btn-primary w-100"
                      style={{ background: style.color, borderColor: style.color }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}