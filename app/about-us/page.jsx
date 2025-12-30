import LenisProvider from "../components/Lenis";

export const metadata = {
  title: "About Us | Premium Nightclub Experience in DIFC – Mantis Dubai",
  description:
    "Discover Mantis Dubai, a premium nightclub and lounge in DIFC offering high-energy nightlife, live DJs, signature cocktails, and unforgettable late-night experiences.",
};

export default function AboutPage() {
  return (
    <LenisProvider>
      <main className="bg-black text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pt-10 lg:pt-30">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/60" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/80 mb-4">
              MANTIS DUBAI
            </p>

            <h1 className="text-white leading-tight lg:mb-6">
              <span className="bg-gradient-to-r from-[#6b5a2e] via-[#f8db98] to-[#f8db98] bg-clip-text text-transparent">
                Where the Night
              </span>{" "}
              Comes Alive
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Mantis Dubai is a nightlife destination created for those who
              don’t settle for average nights. We exist at the intersection of
              music, energy, and culture — delivering experiences that feel
              intense, immersive, and unforgettable.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              This isn’t a place you casually drop into. It’s where nights are
              planned around — where sound, lights, and people align to create
              moments that last far beyond closing time.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Explore Gallery
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  The Mantis Dubai Experience
                </h2>

                <p className="mt-5 text-white/80 leading-relaxed">
                  Every element inside Mantis is intentional — from high-impact
                  sound systems and dramatic lighting to a crowd that
                  understands nightlife is about presence, not just partying.
                </p>

                <p className="mt-4 text-white/80 leading-relaxed">
                  We focus on music-driven energy, hosting top DJs, curated
                  performances, and themed nights that keep the atmosphere
                  constantly evolving. Whether you’re on the dance floor or in a
                  VIP setting, the experience is designed to keep momentum high
                  and distractions low.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Our Vision
                </h2>

                <p className="mt-5 text-white/80 leading-relaxed">
                  Our vision is simple but uncompromising: to set a new standard
                  for nightlife in Dubai.
                </p>

                <p className="mt-4 text-white/80 leading-relaxed">
                  We don’t chase trends — we build environments where music,
                  design, and people work together seamlessly. Mantis is for
                  those who value quality over noise, experience over excess,
                  and nights that feel alive rather than manufactured.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-5">
              <div className="sticky top-6 space-y-8">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Our Mission
                  </h2>

                  <p className="mt-5 text-white/80 leading-relaxed">
                    The mission of Mantis Dubai is to create high-energy,
                    music-driven nightlife experiences that feel intentional,
                    immersive, and unforgettable — not random or overproduced.
                  </p>

                  <ul className="mt-6 space-y-3 text-white/80">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                      <span>
                        Deliver consistently powerful nights, not one-off hype
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                      <span>
                        Put music, atmosphere, and crowd energy first, always
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                      <span>
                        Maintain a space where quality guests, top-tier DJs, and
                        sharp execution come together naturally
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-white/90 font-semibold">
                      No gimmicks. No filler. Just nights done right.
                    </p>
                    <p className="mt-2 text-white/70">
                      Mantis Dubai isn’t just a venue — it’s a state of mind.
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                  <h3 className="text-lg font-semibold text-white">
                    Quick Links
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="/gallery"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      Gallery
                    </a>
                    <a
                      href="/events"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      Events
                    </a>
                    <a
                      href="/contact"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Ready for a night with rhythm, momentum, and identity?
                </h3>
                <p className="mt-2 text-white/70">
                  Discover what makes Mantis different.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </LenisProvider>
  );
}
