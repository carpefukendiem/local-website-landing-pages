import { notFound } from "next/navigation";
import Link from "next/link";
import { businesses } from "../../data/businesses";

export async function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (!business) return {};
  return {
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
  };
}

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (!business) notFound();

  const {
    name, tagline, description, category, phone, email,
    address, hours, heroColor, accentColor,
    services, testimonials, features,
    heroImage, about, stats,
  } = business;

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Glass nav (floats over hero) ───────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors font-medium"
          >
            ← All Businesses
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/15 text-white border border-white/20">
            {category}
          </span>
        </div>
      </nav>

      {/* ── Full-bleed hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end text-white overflow-hidden">

        {/* Background: photo with overlay OR gradient fallback */}
        {heroImage ? (
          <>
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Left-heavy cinematic overlay so text is always readable */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(100deg, ${heroColor}f2 0%, ${heroColor}cc 35%, ${heroColor}88 60%, rgba(0,0,0,0.25) 100%)`,
              }}
            />
            {/* Bottom fade to ensure CTA area is readable */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${heroColor} 0%, ${accentColor} 100%)` }}
          />
        )}

        {/* Hero content — left-aligned, above the fold */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70 mb-5">
              {category} · Santa Barbara, CA
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] mb-4 drop-shadow-sm">
              {name}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-light opacity-90 mb-5 leading-snug">
              {tagline}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg opacity-75 max-w-xl leading-relaxed mb-10">
              {description}
            </p>

            {/* Inline stats — if available */}
            {stats && stats.length > 0 && (
              <div className="flex flex-wrap gap-x-8 gap-y-5 mb-10 pb-10 border-b border-white/25">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-extrabold leading-none">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-widest opacity-60 mt-1.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                style={{ color: heroColor }}
              >
                📞 Call Now: {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/70 rounded-full font-semibold text-white hover:bg-white/15 backdrop-blur-sm transition-all"
              >
                ✉️ Send a Message
              </a>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] text-white uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-10 bg-white/60" style={{ animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* ── Dark info strip ────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="flex items-center gap-3 py-4 sm:py-0 sm:px-6 first:pl-0 last:pr-0">
            <span className="text-xl flex-shrink-0">📍</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Location</p>
              <p className="text-sm text-gray-200 font-medium leading-snug">{address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-4 sm:py-0 sm:px-6">
            <span className="text-xl flex-shrink-0">🕐</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Hours</p>
              <p className="text-sm text-gray-200 font-medium leading-snug">{hours}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-4 sm:py-0 sm:px-6">
            <span className="text-xl flex-shrink-0">📞</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Phone</p>
              <a href={`tel:${phone}`} className="text-sm text-gray-200 font-medium hover:text-white hover:underline transition-colors">
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Our Story ─────────────────────────────────────────────── */}
      {about && (
        <section className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>Our Story</h2>
          </div>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">{about}</p>
        </section>
      )}

      {/* ── Feature pills ──────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: accentColor }}
            >
              <span className="opacity-80">✓</span> {f}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>What We Offer</h2>
            <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div
                  className="w-10 h-1 rounded-full mb-4"
                  style={{ backgroundColor: accentColor }}
                />
                <h4 className="text-base font-bold mb-2 leading-snug" style={{ color: heroColor }}>
                  {service.name}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                {service.price && (
                  <p className="mt-4 text-sm font-bold" style={{ color: accentColor }}>
                    {service.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg leading-none">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {t.name[0]}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA section ───────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 text-white text-center overflow-hidden">
        {/* Background */}
        {heroImage ? (
          <>
            <div className="absolute inset-0">
              <img src={heroImage} alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute inset-0"
              style={{ background: `${heroColor}ee` }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${heroColor} 0%, ${accentColor} 100%)` }}
          />
        )}
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-4">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">
            Contact us today — we&apos;re ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
              style={{ color: heroColor }}
            >
              📞 {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/70 rounded-full font-semibold text-white hover:bg-white/15 transition-all"
            >
              ✉️ {email}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-500 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <Link href="/" className="text-sm hover:text-white transition-colors">
            ← Back to all local businesses
          </Link>
        </div>
      </footer>

    </div>
  );
}
