import Link from "next/link";
import { businesses } from "./data/businesses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Business Directory — Landing Pages",
  description: "Discover top-rated local businesses in your community.",
};

const categoryIcons: Record<string, string> = {
  Restaurant: "🍝",
  "Auto Repair": "🔧",
  Dental: "🦷",
  Fitness: "💪",
  "Beauty & Wellness": "✂️",
  Landscaping: "🌿",
  Plumbing: "🚿",
  Electrical: "⚡",
  Veterinary: "🐾",
  "Real Estate": "🏡",
};

export default function Home() {
  const categories = Array.from(new Set(businesses.map((b) => b.category)));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Local Business Directory</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Find the Best Local Businesses in Your Area
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Handpicked, trusted local businesses — from restaurants and auto repair to dentists and real estate agents.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
            >
              {categoryIcons[cat] || "📍"} {cat}
            </a>
          ))}
        </div>
      </section>

      {/* Business Grid by Category */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {categories.map((cat) => {
          const catBusinesses = businesses.filter((b) => b.category === cat);
          const anchorId = cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "");
          return (
            <section key={cat} id={anchorId}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">{categoryIcons[cat] || "📍"}</span>
                {cat}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catBusinesses.map((business) => (
                  <Link
                    key={business.slug}
                    href={`/business/${business.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    {/* Card color bar */}
                    <div
                      className="h-2 w-full"
                      style={{ backgroundColor: business.accentColor }}
                    />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3
                          className="text-lg font-bold leading-snug group-hover:underline"
                          style={{ color: business.heroColor }}
                        >
                          {business.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 font-medium mb-2">{business.tagline}</p>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{business.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-xs text-gray-400">{business.phone}</span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: business.accentColor }}
                        >
                          View →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-10 px-6">
        <p className="text-sm">© {new Date().getFullYear()} Local Business Directory. All rights reserved.</p>
      </footer>
    </div>
  );
}
