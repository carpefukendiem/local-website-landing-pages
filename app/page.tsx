import Link from "next/link";
import { businesses } from "./data/businesses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santa Barbara Local Business Directory",
  description:
    "Discover trusted local businesses in Santa Barbara & Goleta — auto repair, cleaning, salons, plumbers, landscaping, and more.",
};

const categoryMeta: Record<string, { icon: string; color: string; bg: string }> = {
  "Auto Repair":        { icon: "🔧", color: "#1d4ed8", bg: "#eff6ff" },
  "Auto Body & Paint":  { icon: "🎨", color: "#7c3aed", bg: "#f5f3ff" },
  Cleaning:             { icon: "✨", color: "#0369a1", bg: "#f0f9ff" },
  Dental:               { icon: "🦷", color: "#0891b2", bg: "#ecfeff" },
  Fitness:              { icon: "💪", color: "#16a34a", bg: "#f0fdf4" },
  "Beauty & Wellness":  { icon: "💇", color: "#be185d", bg: "#fdf2f8" },
  "Massage & Wellness": { icon: "🧘", color: "#6d28d9", bg: "#f5f3ff" },
  "Arts & Wellness":    { icon: "🌿", color: "#059669", bg: "#ecfdf5" },
  Landscaping:          { icon: "🌳", color: "#15803d", bg: "#f0fdf4" },
  Plumbing:             { icon: "🚿", color: "#0369a1", bg: "#f0f9ff" },
  Electrical:           { icon: "⚡", color: "#ca8a04", bg: "#fefce8" },
  Veterinary:           { icon: "🐾", color: "#db2777", bg: "#fdf2f8" },
  "Real Estate":        { icon: "🏡", color: "#ea580c", bg: "#fff7ed" },
  Restaurant:           { icon: "🍝", color: "#dc2626", bg: "#fef2f2" },
  "Home Services":      { icon: "🏠", color: "#b45309", bg: "#fffbeb" },
  "Masonry & Concrete": { icon: "🧱", color: "#57534e", bg: "#fafaf9" },
  Handyman:             { icon: "🪛", color: "#d97706", bg: "#fffbeb" },
  "Fire & Safety":      { icon: "🔥", color: "#dc2626", bg: "#fef2f2" },
  "Steel & Fabrication":{ icon: "⚙️", color: "#334155", bg: "#f8fafc" },
  "Equipment Rental":   { icon: "🏗️", color: "#6d28d9", bg: "#f5f3ff" },
};

function getCategoryMeta(cat: string) {
  return categoryMeta[cat] ?? { icon: "📍", color: "#4b5563", bg: "#f9fafb" };
}

function categoryAnchor(cat: string) {
  return cat.toLowerCase().replace(/[\s&]+/g, "-").replace(/-+/g, "-");
}

export default function Home() {
  const categories = Array.from(new Set(businesses.map((b) => b.category)));
  const totalBusinesses = businesses.length;

  // Featured: one business per category, first in list
  const featured = categories.slice(0, 6).map((cat) =>
    businesses.find((b) => b.category === cat)!
  );

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* ── Top nav ────────────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase" style={{ fontFamily: "Arial, sans-serif" }}>
            Santa Barbara Local
          </span>
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => {
              const m = getCategoryMeta(cat);
              return (
                <a
                  key={cat}
                  href={`#${categoryAnchor(cat)}`}
                  className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors hover:opacity-80"
                  style={{ backgroundColor: m.bg, color: m.color, fontFamily: "Arial, sans-serif" }}
                >
                  {m.icon} {cat}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-[#1a3a2a] text-white">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2a] via-[#1e4d38] to-[#0f2920] opacity-90" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-5 opacity-60"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Santa Barbara &amp; Goleta, California
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Local Businesses<br />
            <span style={{ color: "#86efac" }}>You Can Trust</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "Arial, sans-serif" }}>
            Hand-curated directory of {totalBusinesses} vetted local businesses across
            the Santa Barbara coast — from auto repair and cleaning to salons and landscaping.
          </p>
          {/* Stats bar */}
          <div
            className="inline-grid grid-cols-3 divide-x divide-white/20 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {[
              { label: "Local Businesses", value: totalBusinesses },
              { label: "Categories", value: categories.length },
              { label: "Cities Covered", value: 2 },
            ].map(({ label, value }) => (
              <div key={label} className="px-8 py-5 text-center">
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-gray-300 mt-1 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Category tiles ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2
          className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {categories.map((cat) => {
            const m = getCategoryMeta(cat);
            const count = businesses.filter((b) => b.category === cat).length;
            return (
              <a
                key={cat}
                href={`#${categoryAnchor(cat)}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-200 text-center"
                style={{ backgroundColor: m.bg, fontFamily: "Arial, sans-serif" }}
              >
                <span className="text-3xl">{m.icon}</span>
                <span className="text-sm font-semibold leading-tight" style={{ color: m.color }}>{cat}</span>
                <span className="text-xs text-gray-400">{count} {count === 1 ? "business" : "businesses"}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── Featured picks ──────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Featured Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((b) => {
              const m = getCategoryMeta(b.category);
              return (
                <Link
                  key={b.slug}
                  href={`/business/${b.slug}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  {/* Color band */}
                  <div className="h-1.5 w-full" style={{ backgroundColor: b.accentColor }} />
                  <div className="flex-1 p-6 bg-white">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span
                          className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2"
                          style={{ backgroundColor: m.bg, color: m.color, fontFamily: "Arial, sans-serif" }}
                        >
                          {m.icon} {b.category}
                        </span>
                        <h3 className="text-lg font-bold leading-snug" style={{ color: b.heroColor }}>
                          {b.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic mb-3" style={{ fontFamily: "Arial, sans-serif" }}>{b.tagline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2" style={{ fontFamily: "Arial, sans-serif" }}>{b.description}</p>
                  </div>
                  <div
                    className="px-6 py-3 flex items-center justify-between border-t border-gray-50"
                    style={{ fontFamily: "Arial, sans-serif", backgroundColor: m.bg }}
                  >
                    <span className="text-xs text-gray-500">{b.phone}</span>
                    <span className="text-sm font-semibold" style={{ color: b.accentColor }}>
                      View listing →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full directory by category ───────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {categories.map((cat) => {
          const m = getCategoryMeta(cat);
          const catBusinesses = businesses.filter((b) => b.category === cat);
          return (
            <section key={cat} id={categoryAnchor(cat)}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: m.bg }}
                >
                  {m.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: m.color }}>{cat}</h2>
                  <p
                    className="text-sm text-gray-400 mt-0.5"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {catBusinesses.length} {catBusinesses.length === 1 ? "business" : "businesses"} in Santa Barbara &amp; Goleta
                  </p>
                </div>
              </div>

              {/* Business cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {catBusinesses.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/business/${b.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                  >
                    <div className="h-1 w-full" style={{ backgroundColor: b.accentColor }} />
                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className="text-base font-bold leading-snug mb-1 group-hover:underline"
                        style={{ color: b.heroColor }}
                      >
                        {b.name}
                      </h3>
                      <p
                        className="text-xs text-gray-500 italic mb-3"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        {b.tagline}
                      </p>
                      <p
                        className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        {b.address}
                      </p>
                    </div>
                    <div
                      className="px-5 py-3 flex items-center justify-between border-t border-gray-50"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      <span className="text-xs font-medium text-gray-400">{b.phone}</span>
                      <span className="text-xs font-bold" style={{ color: b.accentColor }}>
                        View →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1a3a2a] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-3">Santa Barbara Local</h3>
            <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
              Your guide to the best locally owned and operated businesses on the Santa Barbara coast.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>Top Categories</h3>
            <ul className="space-y-2" style={{ fontFamily: "Arial, sans-serif" }}>
              {categories.slice(0, 6).map((cat) => {
                const m = getCategoryMeta(cat);
                return (
                  <li key={cat}>
                    <a
                      href={`#${categoryAnchor(cat)}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {m.icon} {cat}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>More Categories</h3>
            <ul className="space-y-2" style={{ fontFamily: "Arial, sans-serif" }}>
              {categories.slice(6).map((cat) => {
                const m = getCategoryMeta(cat);
                return (
                  <li key={cat}>
                    <a
                      href={`#${categoryAnchor(cat)}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {m.icon} {cat}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Santa Barbara Local Business Directory. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            {totalBusinesses} businesses · {categories.length} categories · Santa Barbara &amp; Goleta, CA
          </p>
        </div>
      </footer>

    </div>
  );
}
