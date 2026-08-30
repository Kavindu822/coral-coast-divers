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
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
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
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const features = [
  { icon: ShieldCheck, title: "Certified Instructors", body: "Every dive is led by a certified, insured local instructor." },
  { icon: Users, title: "Small Groups", body: "Maximum 6 guests per boat for a personal experience." },
  { icon: Waves, title: "Beginner Friendly", body: "No experience needed — full briefing and gear included." },
  { icon: Camera, title: "Photos & Video", body: "Action camera photos and video of your dive, free of charge." },
  { icon: Anchor, title: "Coral Coast Reefs", body: "We know every reef, wreck and turtle hotspot around Mirissa." },
];

const experiences = [
  {
    tag: "Most Popular",
    title: "Discover Scuba Diving",
    duration: "2-3 hours",
    body: "Your first breath underwater. Shallow reef dive with a one-to-one instructor, no certification required.",
    price: "USD 55 / person",
  },
  {
    title: "Reef & Turtle Snorkeling",
    duration: "1.5-2 hours",
    body: "Swim with wild green turtles over the coral gardens just off Mirissa beach. Great for families.",
    price: "USD 25 / person",
  },
  {
    title: "Certified Fun Dives",
    duration: "Half day",
    body: "Two-tank boat dives to our favourite reefs and wrecks for certified divers. Tanks and weights included.",
    price: "USD 45 / dive",
  },
  {
    title: "Open Water Course",
    duration: "3-4 days",
    body: "Full entry-level certification: theory, confined water sessions and four open water dives.",
    price: "USD 390",
  },
  {
    title: "Night Snorkeling",
    duration: "1.5 hours",
    body: "Bioluminescent plankton and nocturnal reef life under the Sri Lankan night sky.",
    price: "USD 40 / person",
  },
  {
    tag: "Seasonal",
    title: "Whale Watching",
    duration: "4-5 hours",
    body: "Blue whales and dolphins off the Mirissa coast, November to April. Early morning departure.",
    price: "USD 45 / person",
  },
];

const gallery = [
  { src: g1, alt: "Green sea turtle swimming over a coral reef" },
  { src: g2, alt: "Diver exploring a shallow reef with an instructor" },
  { src: g3, alt: "Dive boat loaded with tanks at sunrise off Mirissa" },
  { src: g4, alt: "School of reef fish above a colourful coral garden" },
  { src: g5, alt: "Snorkelers at the ocean surface seen from underwater" },
  { src: g6, alt: "Whale tail breaking the surface on a whale watching trip" },
];

const faqs = [
  { q: "Do I need to be a certified diver?", a: "No. Our Discover Scuba Diving programme is designed for complete beginners and includes a full briefing and a dedicated instructor in the water with you." },
  { q: "Can I swim badly and still join?", a: "Basic comfort in water is enough for snorkeling — life jackets are provided. For diving, we ask that you are able to relax and float." },
  { q: "What is included?", a: "Mask, fins, wetsuit, tanks and weights, boat, guide, drinking water, and photos or video of your trip." },
  { q: "When is the best season?", a: "The south coast season runs roughly from November to April, with the calmest water and best visibility between December and March." },
  { q: "Where do we meet?", a: "At our dive centre in Mirissa, Matara District. We share the exact pin on WhatsApp once your booking is confirmed." },
  { q: "How do I book?", a: "Message us on WhatsApp with your preferred date, tour and group size. We confirm within a few minutes during the day." },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-deep/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="rounded-xl bg-background/0 p-1">
              <img
                src={logo.url}
                alt="Coral Coast Divers Mirissa logo"
                className="h-9 w-auto brightness-125 contrast-125"
                width={160}
                height={36}
              />
            </span>
            <span className="sr-only">Coral Coast Divers Mirissa</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              className="rounded-full gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-reef"
            >
              Book Now
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border/60 px-5 py-4 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} className="mt-2 rounded-full gradient-brand px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
              Book Now
            </a>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
        <img src={hero} alt="Scuba diver above a coral reef in Mirissa" width={1920} height={1280} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-depth)" }} />
        <div className="relative mx-auto max-w-3xl px-6 pt-24 text-center">
          <img src={logo.url} alt="" aria-hidden className="mx-auto mb-8 w-72 max-w-full brightness-125 contrast-110 drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]" />
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
            Dive the Coral Coast
            <span className="block text-primary">Mirissa, Sri Lanka</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Guided scuba diving, reef snorkeling and turtle tours with local instructors who grew up on these reefs.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} className="rounded-full gradient-brand px-7 py-3 font-semibold text-primary-foreground shadow-reef">
              Book on WhatsApp
            </a>
            <a href="#experiences" className="rounded-full border border-border px-7 py-3 font-semibold text-foreground transition-colors hover:bg-secondary">
              View Experiences
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Why dive with us</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A small, family-run dive centre focused on safety, respect for the reef, and dives you will talk about for years.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-card p-7">
              <f.icon className="size-7 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experiences" className="border-y border-border bg-deep/60 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold sm:text-4xl">Our experiences</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            All trips include equipment, safety briefing and a local guide.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e) => (
              <article key={e.title} className="flex flex-col rounded-3xl border border-border bg-card p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{e.duration}</span>
                  {e.tag && (
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{e.tag}</span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{e.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.body}</p>
                <p className="mt-6 text-lg font-semibold text-primary">{e.price}</p>
                <a href={WHATSAPP} className="mt-5 rounded-full border border-border px-5 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-secondary">
                  Book this trip
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Under the surface</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">Moments from our dives and snorkeling trips around Mirissa.</p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      <section id="faq" className="border-y border-border bg-deep/60 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium"
                >
                  {f.q}
                  <ChevronDown className={`size-5 shrink-0 text-primary transition-transform ${faqOpen === i ? "rotate-180" : ""}`} />
                </button>
                {faqOpen === i && <p className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">
              Ready to get in the water? WhatsApp is the fastest way to reach us.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary" /> +94 XX XXX XXXX
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" /> hello@coralcoastdivers.lk
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" /> Mirissa, Matara District, Sri Lanka
              </li>
            </ul>
            <a href={WHATSAPP} className="mt-8 inline-block rounded-full gradient-brand px-7 py-3 font-semibold text-primary-foreground shadow-reef">
              Message us on WhatsApp
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Coral Coast Divers Mirissa location"
              src="https://www.google.com/maps?q=Mirissa,%20Sri%20Lanka&output=embed"
              className="h-80 w-full md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-deep py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <img src={logo.url} alt="Coral Coast Divers Mirissa" className="h-14 w-auto brightness-125" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coral Coast Divers Mirissa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
