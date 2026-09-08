import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Waves,
  ShieldCheck,
  Users,
  Camera,
  Anchor,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const WHATSAPP = "https://wa.me/94000000000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coral Coast Divers Mirissa | Scuba Diving & Snorkeling" },
      {
        name: "description",
        content:
          "PADI-style guided scuba diving, reef snorkeling and turtle tours in Mirissa, Sri Lanka. Small groups, local instructors, all equipment included.",
      },
      { property: "og:title", content: "Coral Coast Divers Mirissa" },
      {
        property: "og:description",
        content:
          "Guided scuba diving, reef snorkeling and turtle tours in Mirissa, Sri Lanka with local instructors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Experiences", href: "#experiences" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Instructors",
    body: "Every dive is led by a certified, insured local instructor.",
  },
  {
    icon: Users,
    title: "Small Groups",
    body: "Maximum 6 guests per boat for a personal experience.",
  },
  {
    icon: Waves,
    title: "Beginner Friendly",
    body: "No experience needed — full briefing and gear included.",
  },
  {
    icon: Camera,
    title: "Photos & Video",
    body: "Action camera photos and video of your dive, free of charge.",
  },
  {
    icon: Anchor,
    title: "Coral Coast Reefs",
    body: "We know every reef, wreck and turtle hotspot around Mirissa.",
  },
];

const experiences = [
  {
    tag: "Most Popular",
    title: "Discover Scuba Diving",
    duration: "2–3 hours",
    body: "Your first breath underwater. Shallow reef dive with a one-to-one instructor, no certification required.",
    price: "USD 55",
    unit: "/ person",
  },
  {
    title: "Reef & Turtle Snorkeling",
    duration: "1.5–2 hours",
    body: "Swim with wild green turtles over the coral gardens just off Mirissa beach. Great for families.",
    price: "USD 25",
    unit: "/ person",
  },
  {
    title: "Certified Fun Dives",
    duration: "Half day",
    body: "Two-tank boat dives to our favourite reefs and wrecks for certified divers. Tanks and weights included.",
    price: "USD 45",
    unit: "/ dive",
  },
  {
    title: "Open Water Course",
    duration: "3–4 days",
    body: "Full entry-level certification: theory, confined water sessions and four open water dives.",
    price: "USD 390",
    unit: "",
  },
  {
    title: "Night Snorkeling",
    duration: "1.5 hours",
    body: "Bioluminescent plankton and nocturnal reef life under the Sri Lankan night sky.",
    price: "USD 40",
    unit: "/ person",
  },
  {
    tag: "Seasonal",
    title: "Whale Watching",
    duration: "4–5 hours",
    body: "Blue whales and dolphins off the Mirissa coast, November to April. Early morning departure.",
    price: "USD 45",
    unit: "/ person",
  },
];

const gallery = [
  { src: g1, alt: "Green sea turtle swimming over a coral reef" },
  { src: g2, alt: "Diver exploring a shallow reef with an instructor" },
  { src: g3, alt: "Dive boat loaded with tanks at sunrise off Mirissa" },
  { src: g5, alt: "Snorkelers at the ocean surface seen from underwater" },
  { src: g6, alt: "Whale tail breaking the surface on a whale watching trip" },
];

const faqs = [
  {
    q: "Do I need to be a certified diver?",
    a: "No. Our Discover Scuba Diving programme is designed for complete beginners and includes a full briefing and a dedicated instructor in the water with you.",
  },
  {
    q: "Can I swim badly and still join?",
    a: "Basic comfort in water is enough for snorkeling — life jackets are provided. For diving, we ask that you are able to relax and float.",
  },
  {
    q: "What is included?",
    a: "Mask, fins, wetsuit, tanks and weights, boat, guide, drinking water, and photos or video of your trip.",
  },
  {
    q: "When is the best season?",
    a: "The south coast season runs roughly from November to April, with the calmest water and best visibility between December and March.",
  },
  {
    q: "Where do we meet?",
    a: "At our dive centre in Mirissa, Matara District. We share the exact pin on WhatsApp once your booking is confirmed.",
  },
  {
    q: "How do I book?",
    a: "Message us on WhatsApp with your preferred date, tour and group size. We confirm within a few minutes during the day.",
  },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
            <a href="#top" className="flex items-center gap-2.5">
              <img
                src={logo.url}
                alt="Coral Coast Divers Mirissa"
                className="h-8 w-auto sm:h-9"
                width={160}
                height={36}
              />
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                className="ml-2 inline-flex items-center gap-1.5 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Book Now
                <ArrowRight className="size-3.5" />
              </a>
            </nav>

            <button
              className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {open && (
            <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-white/95 p-3 shadow-lift backdrop-blur-xl md:hidden">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                className="mt-1 rounded-full gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book Now
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* ── 1. Hero ── */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden">
        <img
          src={hero}
          alt="Scuba diver above a coral reef in Mirissa"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
            <Sparkles className="size-3.5 text-cyan-200" />
            Mirissa, Sri Lanka
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Dive the{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Coral Coast
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Guided scuba diving, reef snorkeling and turtle tours with local
            instructors who grew up on these reefs.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP}
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03] hover:shadow-lift"
            >
              Book on WhatsApp
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              View Experiences
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-300 text-amber-300" />
              Local family-run centre
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span>Max 6 guests per boat</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span>All gear included</span>
          </div>
        </div>
      </section>

      {/* ── 2. Experiences (main product – higher for conversion) ── */}
      <section id="experiences" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 gradient-soft" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our experiences
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Choose your adventure
            </h2>
            <p className="mt-4 text-muted-foreground">
              All trips include equipment, safety briefing and a local guide.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e) => (
              <article
                key={e.title}
                className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {e.duration}
                  </span>
                  {e.tag && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {e.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.body}
                </p>

                <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {e.price}
                    </span>
                    {e.unit && (
                      <span className="ml-1 text-sm text-muted-foreground">
                        {e.unit}
                      </span>
                    )}
                  </div>
                  <a
                    href={WHATSAPP}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Book
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why us (trust after seeing products) ── */}
      <section id="why-us" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why dive with us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Safety, respect &amp; unforgettable dives
          </h2>
          <p className="mt-4 text-muted-foreground">
            A small, family-run dive centre focused on the reef and the people
            who explore it with us.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Gallery ── */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Under the surface
          </h2>
          <p className="mt-4 text-muted-foreground">
            Moments from our dives and snorkeling trips around Mirissa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl md:col-span-2">
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] size-full object-cover transition-transform duration-500 hover:scale-105 md:aspect-auto md:h-full"
            />
          </div>
          {gallery.slice(1).map((img) => (
            <div
              key={img.alt}
              className="overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square size-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 gradient-soft" />
        <div className="relative mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = faqOpen === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Contact ── */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to get in the water?
              </h2>
              <p className="mt-4 text-muted-foreground">
                WhatsApp is the fastest way to reach us. We usually reply within
                a few minutes during the day.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3.5 text-sm">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="size-4.5" />
                  </span>
                  +94 XX XXX XXXX
                </li>
                <li className="flex items-center gap-3.5 text-sm">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-4.5" />
                  </span>
                  hello@coralcoastdivers.lk
                </li>
                <li className="flex items-center gap-3.5 text-sm">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-4.5" />
                  </span>
                  Mirissa, Matara District, Sri Lanka
                </li>
              </ul>

              <a
                href={WHATSAPP}
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-full gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                Message us on WhatsApp
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="min-h-[280px] bg-muted md:min-h-full">
              <iframe
                title="Coral Coast Divers Mirissa location"
                src="https://www.google.com/maps?q=Mirissa,%20Sri%20Lanka&output=embed"
                className="size-full min-h-[280px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-deep py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center">
          <img
            src={logo.url}
            alt="Coral Coast Divers Mirissa"
            className="h-12 w-auto brightness-0 invert opacity-90"
          />
          <p className="max-w-sm text-sm text-white/60">
            Guided scuba diving, snorkeling &amp; turtle tours on the south
            coast of Sri Lanka.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </div>
          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} Coral Coast Divers Mirissa. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
