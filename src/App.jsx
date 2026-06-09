// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Home       from "./pages/Home";
import Crops      from "./pages/Crops";
import CropDetail from "./pages/CropDetails";
import Categories from "./pages/Categories";
import About      from "./pages/About";
import Contact    from "./pages/Contact";
import "./styles.css";

// Scroll to top on route change
function ScrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "60vh" }}>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><ScrollToTopWrapper /><Home /></Layout>} />
        <Route path="/crops" element={<Layout><ScrollToTopWrapper /><Crops /></Layout>} />
        <Route path="/crops/:id" element={<Layout><ScrollToTopWrapper /><CropDetail /></Layout>} />
        <Route path="/categories" element={<Layout><ScrollToTopWrapper /><Categories /></Layout>} />
        <Route path="/about" element={<Layout><ScrollToTopWrapper /><About /></Layout>} />
        <Route path="/contact" element={<Layout><ScrollToTopWrapper /><Contact /></Layout>} />
        {/* 404 */}
        <Route path="*" element={
          <Layout>
            <div className="container py-5 text-center" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "5rem" }}>🌱</div>
              <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, marginTop: "1rem" }}>Page Not Found</h1>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Looks like this page doesn't exist yet.</p>
              <a href="/" className="btn btn-primary">Back to Home</a>
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToTopWrapper() {
  window.scrollTo({ top: 0, behavior: "instant" });
  return null;
}