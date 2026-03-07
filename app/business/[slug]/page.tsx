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

  const { name, tagline, description, category, phone, email, address, hours, heroColor, accentColor, services, testimonials, features } = business;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors">
            ← All Businesses
          </Link>
          <span
            className="text-sm font-semibold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: accentColor }}
          >
            {category}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="pt-16 pb-20 px-6 text-white"
        style={{ background: `linear-gradient(135deg, ${heroColor} 0%, ${accentColor} 100%)` }}
      >
        <div className="max-w-4xl mx-auto pt-16 pb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-4">{category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">{name}</h1>
          <p className="text-xl sm:text-2xl opacity-90 mb-8 font-light">{tagline}</p>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">{description}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-semibold transition-opacity hover:opacity-90"
              style={{ color: heroColor }}
            >
              📞 Call Now: {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white rounded-full font-semibold text-white transition-colors hover:bg-white"
              style={{ "--hover-text": heroColor } as React.CSSProperties}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Location</p>
            <p className="text-gray-800 font-medium">{address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Hours</p>
            <p className="text-gray-800 font-medium">{hours}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Contact</p>
            <p className="text-gray-800 font-medium">{phone}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {features.map((f) => (
            <span
              key={f}
              className="px-4 py-2 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: accentColor }}
            >
              ✓ {f}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-lg font-bold mb-2" style={{ color: heroColor }}>{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>
                {service.price && (
                  <p className="mt-4 text-sm font-semibold" style={{ color: accentColor }}>
                    {service.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${heroColor} 0%, ${accentColor} 100%)` }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">Contact us today and let&apos;s talk about how we can help you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-semibold hover:opacity-90 transition-opacity"
              style={{ color: heroColor }}
            >
              📞 {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white rounded-full font-semibold text-white hover:bg-white transition-colors"
            >
              ✉️ {email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <Link href="/" className="text-sm mt-2 inline-block hover:text-white transition-colors">
          ← Back to all local businesses
        </Link>
      </footer>
    </div>
  );
}
