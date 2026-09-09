"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Clock,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Compass,
  Heart,
  Award,
  QrCode,
} from "lucide-react";

import hero from "@/assets/hero.jpg";

// Owner contact details & social channels
const OWNER_EMAIL = "coralcoastdiversmirissa@gmail.com";
const OWNER_PHONE = "+94714970721";
const OWNER_PHONE_DISPLAY = "+94 71 497 0721";
const WHATSAPP_NUMBER = "94714970721";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const MAPS_URL = "https://maps.app.goo.gl/gQHgQHsoEizBwGeA6?g_st=awb";
const FACEBOOK_URL = "https://www.facebook.com/share/1BunK83bAf/?mibextid=wwXIfr";
const INSTAGRAM_URL =
  "https://www.instagram.com/coral_coast_divers_mirissa?stkn=MXRtbHNncjhieHpkaw==";

// Vian-Tech IT Solutions & Web Development
const VIANTECH_PHONE_DISPLAY = "+94 78 958 0809";
const VIANTECH_WHATSAPP =
  "https://wa.me/94789580809?text=Hi%20Vian-Tech!%20I%20saw%20the%20Coral%20Coast%20Divers%20website%20and%20would%20like%20to%20inquire%20about%20your%20IT%20%26%20web%20development%20services.";

// WhatsApp deep link generator
const makeWhatsAppLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

const navLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Why Us", href: "#why-us" },
  { label: "Happy Customers", href: "#happy-guests" },
  { label: "Times", href: "#times" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

interface CategoryImage {
  src: string;
  alt: string;
}

interface CategoryTime {
  label: string;
  time: string;
  note: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  badgeColor: string;
  price: string;
  unit: string;
  duration: string;
  description: string;
  times: CategoryTime[];
  features: string[];
  whatsappMsg: string;
  images: CategoryImage[];
}

// 3 Signature Categories with authentic photos
const categories: Category[] = [
  {
    id: "turtles",
    title: "Snorkeling with Turtles",
    subtitle: "Mirissa Coral Reef Sanctuary",
    tag: "Most Popular • 100% Sightings",
    badgeColor: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
    price: "USD 25",
    unit: "/ person",
    duration: "1.5 – 2 Hours",
    description:
      "Swim alongside wild green sea turtles in their natural habitat just off Mirissa bay. Our expert local snorkel guides swim right with you, helping you spot turtles grazing on sea grass, colorful parrotfish, and vibrant reef life. Perfect for families, solo travelers, and non-swimmers alike.",
    times: [
      { label: "Morning Calm", time: "07:00 AM – 09:00 AM", note: "Calmest water & best light" },
      { label: "Sunlit Reef", time: "10:30 AM – 12:30 PM", note: "Vibrant marine visibility" },
      { label: "Afternoon", time: "02:30 PM – 04:30 PM", note: "Active feeding hours" },
      { label: "Golden Sunset", time: "04:45 PM – 06:15 PM", note: "Magical sunset over the bay" },
    ],
    features: [
      "100% Wild Green Sea Turtle Sightings Guaranteed",
      "All snorkeling gear provided (mask, snorkel, fins & life vest)",
      "Free action camera HD photos & videos sent to your phone",
      "One-on-one guide support in water for non-confident swimmers",
      "Drinking water, safety briefing & secure luggage storage",
    ],
    whatsappMsg:
      "Hi Coral Coast Divers! I would like to book the Snorkeling with Turtles tour in Mirissa. Please share available dates and times.",
    images: [
      {
        src: "/images/turtles/turtle-5.jpg",
        alt: "Snorkeler selfie with wild green turtle in Mirissa",
      },
      {
        src: "/images/turtles/turtle-1.jpg",
        alt: "Swimmers observing sea turtle in crystal clear water",
      },
      {
        src: "/images/turtles/turtle-2.jpg",
        alt: "Green sea turtle swimming gracefully above reef",
      },
      {
        src: "/images/turtles/turtle-3.jpg",
        alt: "Snorkeler filming sea turtle with action camera",
      },
      { src: "/images/turtles/turtle-4.jpg", alt: "Underwater view of sea turtle close up" },
    ],
  },
  {
    id: "scuba",
    title: "Discover Scuba Diving",
    subtitle: "First Breath Underwater",
    tag: "Authentic Photos • Beginners Welcome",
    badgeColor: "bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
    price: "USD 55",
    unit: "/ person",
    duration: "2.5 – 3 Hours",
    description:
      "Ever wondered what it feels like to breathe weightlessly underwater? Our Discover Scuba Diving program is led by certified Coral Coast Divers instructors. You will receive a full safety briefing, practice easy scuba skills in shallow water, and dive down to 6–12 meters on pristine Mirissa coral gardens.",
    times: [
      {
        label: "Morning Session",
        time: "08:30 AM – 11:30 AM",
        note: "Crisp visibility & gentle currents",
      },
      {
        label: "Afternoon Session",
        time: "01:30 PM – 04:30 PM",
        note: "Warm tropical ocean water",
      },
    ],
    features: [
      "No certification or previous diving experience required",
      "Dedicated Coral Coast Divers instructor in the water with you",
      "Full premium scuba gear: BCD, regulator, wetsuit, mask & tank",
      "Shallow water skills briefing followed by open reef dive",
      "Free HD underwater action photography & video clips included",
    ],
    whatsappMsg:
      "Hi Coral Coast Divers! I'd like to book Discover Scuba Diving in Mirissa. Could you please share available slots?",
    images: [
      {
        src: "/images/scuba/scuba-2.jpg",
        alt: "Instructor Coral Coast Divers Mirissa teaching scuba skills on sand",
      },
      { src: "/images/scuba/scuba-5.jpg", alt: "Scuba divers with sea turtle giving shaka sign" },
      {
        src: "/images/scuba/scuba-3.jpg",
        alt: "Group of divers posing with wild sea turtle in Mirissa",
      },
      {
        src: "/images/scuba/scuba-1.jpg",
        alt: "Two scuba divers descending underwater coral wall with sunbeams",
      },
      {
        src: "/images/scuba/scuba-4.jpg",
        alt: "Night dive illuminating vibrant coral reefs and marine life",
      },
    ],
  },
  {
    id: "whales",
    title: "Whale & Dolphin Watching",
    subtitle: "Ocean Giants of Mirissa",
    tag: "Authentic Photos • Nov – Apr",
    badgeColor: "bg-blue-500/15 text-blue-700 border-blue-500/30",
    price: "USD 45",
    unit: "/ person",
    duration: "4 – 5 Hours",
    description:
      "Mirissa is world-famous as one of the best locations on Earth to witness the gigantic Blue Whale — the largest animal ever known. Travel past the continental shelf into deep ocean waters accompanied by marine naturalists to observe blue whales, sperm whales, and playful pods of spinner dolphins jumping in the boat's wake.",
    times: [
      {
        label: "Early Sunrise Departure",
        time: "06:00 AM – 10:30 AM",
        note: "Best sea conditions & whale activity",
      },
    ],
    features: [
      "Witness Blue Whales, Sperm Whales & Spinner Dolphins",
      "Spacious catamaran with observation deck & certified maritime crew",
      "Life jackets provided for all guests with full maritime safety",
      "Complimentary breakfast, fresh tropical fruits & mineral water",
      "Respectful whale watching following ethical wildlife guidelines",
    ],
    whatsappMsg:
      "Hi Coral Coast Divers! I would like to book a Whale Watching trip in Mirissa. Please confirm availability.",
    images: [
      {
        src: "/images/whales/whale-1.jpg",
        alt: "Majestic whale tail breach at golden sunset with leaping dolphins and passenger catamaran in Mirissa",
      },
      {
        src: "/images/whales/whale-2.jpg",
        alt: "Close-up ocean encounter of massive whale tail fluking near Whale Watching Mirissa boat",
      },
      {
        src: "/images/whales/whale-3.jpg",
        alt: "Whale Watching Mirissa fleet catamarans departing Mirissa Harbour for early morning ocean expedition",
      },
    ],
  },
];

interface HappyCustomer {
  image: string;
  category: string;
  groupType: string;
  badge: string;
  experience: string;
  rating: number;
  highlight: string;
  quote: string;
}

// Our Valuable Happy Customers (5 Authentic Customer Groups)
const happyCustomers: HappyCustomer[] = [
  {
    image: "/images/customers/customer-maya-lifebuoy.jpg",
    category: "Children & Kids Adventure",
    groupType: "Children Friendly",
    badge: "Kids & Beginners",
    experience: "Turtle Snorkeling (Child & Beginner)",
    rating: 5,
    highlight: "Held on Safety Float Ring",
    quote:
      "Our child was quite nervous about open sea water, but the Coral Coast Divers instructor stayed right beside her, holding the orange safety float ('CCD') the entire time while wild sea turtles grazed peacefully directly below. She was beaming with confidence and did not want to leave the water!",
  },
  {
    image: "/images/customers/customer-family-beach.jpg",
    category: "Happy Family Vacation",
    groupType: "Family of 3",
    badge: "Family Snorkeling",
    experience: "Family Turtle Snorkeling Trip",
    rating: 5,
    highlight: "100% Wild Turtle Sightings",
    quote:
      "Crystal clear water, high quality sanitized gear, and the most patient guides on the southern coast. Our family swam with three wild green turtles within 15 minutes of stepping in! The free HD action camera photos were sent to our WhatsApp right on the beach.",
  },
  {
    image: "/images/customers/customer-friends-laughing.jpg",
    category: "Travel Best Friends Duo",
    groupType: "Friends Duo",
    badge: "Travel Duo",
    experience: "Duo Turtle Snorkeling Adventure",
    rating: 5,
    highlight: "Pure Smiles & Free HD Media",
    quote:
      "Hands down our absolute favorite day in Sri Lanka! Non-stop laughs from the moment we met the crew on the beach. They know every secret rock where turtles feed and took incredible underwater shots for us. True local warmth!",
  },
  {
    image: "/images/customers/customer-group-ocean-ok.jpg",
    category: "Friends Diver Group",
    groupType: "Group of 6 Friends",
    badge: "Friends Group",
    experience: "Friends Reef Snorkeling Tour",
    rating: 5,
    highlight: "All Divers Giving 'OK' Sign",
    quote:
      "Traveling together as a group of friends, Coral Coast Divers gave us a truly VIP private boat experience. The life vests and masks fit everyone comfortably. Safe, ethical wildlife guidelines, and great vibes all around!",
  },
  {
    image: "/images/customers/customer-friends-reunion.jpg",
    category: "Holiday Reunion Big Group",
    groupType: "Group of 7 Friends",
    badge: "Big Group Adventure",
    experience: "Group Snorkeling & Ocean Safari",
    rating: 5,
    highlight: "7 Friends Group in Mirissa",
    quote:
      "We planned a big group reunion trip to Mirissa and booked Coral Coast Divers after seeing their stellar reviews. From the thorough beach briefing to guiding all 7 of us across the coral beds, the team went above and beyond. Unforgettable memories!",
  },
];

const faqs = [
  {
    q: "How do I book, and how fast is confirmation?",
    a: "Simply click 'Book on WhatsApp', scan our WhatsApp QR code, or message us at +94 71 497 0721. We respond within 5 to 10 minutes during the daytime to confirm your spot, group size, and departure time.",
  },
  {
    q: "Can non-swimmers or beginners join the Turtle Snorkeling?",
    a: "Absolutely! We provide high-buoyancy life jackets, sanitized masks, and our local instructors stay in the water with you holding a rescue float. Everyone gets to see wild turtles safely.",
  },
  {
    q: "Are the underwater action camera photos and videos really free?",
    a: "Yes! Our guides take high-resolution photos and video clips with underwater action cameras during your tour and transfer them directly to your phone (via AirDrop, WhatsApp, or Google Drive) completely free of charge.",
  },
  {
    q: "What should I bring with me?",
    a: "Just your swimwear, a beach towel, sunscreen, and dry clothes. We provide all masks, fins, wetsuits, tanks, life jackets, and drinking water.",
  },
  {
    q: "Where is the dive shop located?",
    a: "We are located right in Mirissa, Matara District, Sri Lanka. You can find us on Google Maps via our official pin link or message us on WhatsApp for live location sharing.",
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("turtles");
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  const currentCat = categories.find((c) => c.id === selectedCategory) || categories[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25 selection:text-primary">
      {/* ── Top Micro Announcement Bar ── */}
      <div className="relative z-50 bg-[#06192e] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-emerald-300">Open Daily in Mirissa</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/80 hidden sm:inline">06:00 AM – Sunset</span>
            <span className="text-white/40 hidden md:inline">•</span>
            <span className="text-cyan-300 hidden md:inline">
              Free HD Action Camera Photos Included
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            {/* Social Links in Header */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-300 hover:text-pink-200 transition-colors"
              title="Follow us on Instagram @coral_coast_divers_mirissa"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-300 hover:text-blue-200 transition-colors"
              title="Visit our Facebook page"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </a>

            <span className="text-white/30">•</span>

            <a
              href={`tel:${OWNER_PHONE}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="size-3 text-cyan-400" />
              <span>{OWNER_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Ultra-Stylish Floating Navbar with Highlighted Logo ── */}
      <header className="sticky top-0 z-40 transition-all">
        <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
          <div className="flex items-center justify-between rounded-full border border-teal-500/20 bg-white/90 px-4 py-2.5 shadow-lg shadow-teal-950/5 backdrop-blur-2xl sm:px-6">
            {/* Highlighted Brand Logo (Clear & Prominent) */}
            <Link href="#top" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center rounded-2xl bg-white px-4 py-2 shadow-sm border border-teal-500/30 group-hover:border-teal-500 group-hover:shadow-[0_0_25px_rgba(0,168,150,0.35)] transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Coral Coast Divers Mirissa"
                  className="h-12 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
                  width={240}
                  height={160}
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-1.5 lg:flex">
              {navLinks.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-teal-500/10 hover:text-teal-900"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            {/* Right Action Bar (Professional & Uncluttered) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/25 bg-teal-50/80 px-3.5 py-2 text-xs font-semibold text-teal-900 hover:bg-teal-100/90 hover:border-teal-500/40 transition-all duration-200 shadow-sm group"
                title="View Our Dive Center Location on Google Maps"
              >
                <MapPin className="size-3.5 text-teal-600 transition-transform group-hover:scale-110" />
                <span>Our Location</span>
              </a>

              <a
                href={makeWhatsAppLink("Hi Coral Coast Divers! I'd like to book an ocean tour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageCircle className="size-4 transition-transform group-hover:rotate-12" />
                <span>Book on WhatsApp</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex size-10 items-center justify-center rounded-full bg-teal-50 text-teal-900 border border-teal-500/20 lg:hidden transition-colors hover:bg-teal-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {open && (
            <nav className="mt-2 flex flex-col gap-1 rounded-3xl border border-teal-500/20 bg-white/98 p-4 shadow-lift backdrop-blur-2xl lg:hidden animate-fade-up">
              {navLinks.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-teal-50 hover:text-teal-900"
                >
                  {n.label}
                </a>
              ))}

              <div className="my-2 border-t border-border/60" />

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${OWNER_PHONE}`}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-500/20 p-3 font-semibold"
                >
                  <Phone className="size-3.5 text-teal-600" />
                  Call Owner
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-500/20 p-3 font-semibold"
                  title="View Our Dive Center Location on Google Maps"
                >
                  <MapPin className="size-3.5 text-teal-600" />
                  Our Location
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-pink-50 text-pink-700 p-2.5 font-semibold"
                >
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 text-blue-700 p-2.5 font-semibold"
                >
                  Facebook
                </a>
              </div>

              <a
                href={makeWhatsAppLink("Hi Coral Coast Divers! I'd like to book an adventure.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full gradient-brand py-3 text-center text-sm font-semibold text-white shadow-glow"
              >
                <MessageCircle className="size-4" />
                Book on WhatsApp (+94 71 497 0721)
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* ── 1. Hero Section ── */}
      <section
        id="top"
        className="relative min-h-[92svh] overflow-hidden flex flex-col justify-between"
      >
        <Image
          src={hero}
          alt="Scuba diver above coral reef in Mirissa Sri Lanka"
          fill
          priority
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-hero" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-white shadow-soft backdrop-blur-md">
            <Sparkles className="size-4 text-cyan-200" />
            <span>Mirissa, Sri Lanka • Coral Coast Divers</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Dive with Turtles &amp; Ocean Giants in{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
              Mirissa
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Guided turtle snorkeling, beginner discover scuba diving &amp; blue whale watching with
            local certified instructors who grew up exploring these tropical reefs.
          </p>

          {/* Direct CTA cluster */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={makeWhatsAppLink(
                "Hi Coral Coast Divers! I want to book a tour with you in Mirissa. Please tell me about available spots.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full gradient-brand px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.04] hover:shadow-lift active:scale-[0.98]"
            >
              <MessageCircle className="size-5" />
              <span>Book on WhatsApp</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-[0.98]"
            >
              <Compass className="size-5 text-teal-300" />
              <span>Explore 3 Signature Tours</span>
            </a>
          </div>

          {/* Social quick links under hero */}
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-medium text-white shadow-soft backdrop-blur-md">
            <span className="text-white/80">Daily Ocean Sightings:</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-pink-200 hover:text-white transition-colors"
              title="Follow our Instagram for daily dive videos and photos"
            >
              <svg className="size-3.5 fill-current text-pink-400" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
            <span className="text-white/40">•</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-blue-200 hover:text-white transition-colors"
              title="Join our Facebook community and read guest reviews"
            >
              <svg className="size-3.5 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-white/85">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-300 text-amber-300" />
              Certified PADI Dive Masters
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span className="flex items-center gap-1.5">
              <Heart className="size-4 text-rose-300" />
              100% Wild Turtle Sightings
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span className="flex items-center gap-1.5">
              <Camera className="size-4 text-cyan-300" />
              Free Action Camera Photos &amp; Video
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span>Max 6 Divers per Boat</span>
          </div>
        </div>

        {/* Boundary 1 Wave Divider: Ocean Swell into Mint Lagoon */}
        <div className="relative -mb-[2px] w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-14 sm:h-20 md:h-28"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Layer 1: Soft ocean teal depth shading wave */}
            <path
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(0, 168, 150, 0.35)"
            />
            {/* Layer 2: Main organic wave matching Categories mint lagoon */}
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#f0fdfa"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. The 3 Signature Categories with Photos ── */}
      <section
        id="categories"
        className="relative pt-12 pb-0 sm:pt-16 sm:pb-0 bg-[#f0fdfa] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0fdfa] via-[#e8f6f8] to-[#edf7f9]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold tracking-wider uppercase text-primary">
              <Compass className="size-3.5" />
              Our 3 Signature Experiences
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Choose Your Ocean Adventure
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Explore authentic photos, departure schedules, pricing, and what is included for each
              experience.
            </p>
          </div>

          {/* Category Tabs Switcher */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const active = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActivePhotoIdx(0);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    active
                      ? "gradient-brand text-white shadow-glow scale-[1.02]"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <span>{cat.title}</span>
                  {cat.images.length > 1 && (
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white">
                      {cat.images.length} Photos
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Showcase Card */}
          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lift transition-all">
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left Column: Photo Showcase & Thumbnails */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-muted/20 border-b lg:border-b-0 lg:border-r border-border">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1 text-xs font-semibold ${currentCat.badgeColor}`}
                    >
                      <Sparkles className="size-3" />
                      {currentCat.tag}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3.5" />
                      Duration: <strong className="text-foreground">{currentCat.duration}</strong>
                    </span>
                  </div>

                  {/* Main Featured Photo */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-soft group">
                    <Image
                      src={
                        currentCat.images[activePhotoIdx % currentCat.images.length]?.src ||
                        currentCat.images[0]!.src
                      }
                      alt={
                        currentCat.images[activePhotoIdx % currentCat.images.length]?.alt ||
                        currentCat.title
                      }
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() =>
                        setLightboxImg(
                          currentCat.images[activePhotoIdx % currentCat.images.length]?.src ||
                            currentCat.images[0]!.src,
                        )
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Camera className="size-3" /> Click to view full resolution
                      </span>
                    </div>
                  </div>

                  {/* Gallery Thumbnails (For Turtle and Scuba categories) */}
                  {currentCat.images.length > 1 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                        <span>Real Tour Photos ({currentCat.images.length})</span>
                        <span className="text-primary text-[11px]">Click thumbnail to view</span>
                      </p>
                      <div
                        className={`grid gap-2 ${
                          currentCat.images.length <= 3 ? "grid-cols-3" : "grid-cols-5"
                        }`}
                      >
                        {currentCat.images.map((img, idx) => (
                          <button
                            key={img.src}
                            onClick={() => setActivePhotoIdx(idx)}
                            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                              activePhotoIdx === idx
                                ? "border-primary ring-2 ring-primary/30 scale-105"
                                : "border-transparent opacity-75 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                              sizes="120px"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    Action Camera Photos &amp; Video Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-primary" />
                    All Safety Gear Provided
                  </span>
                </div>
              </div>

              {/* Right Column: Category Details, Times & Booking */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {currentCat.subtitle}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
                        {currentCat.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-bold text-primary">
                        {currentCat.price}
                      </div>
                      <div className="text-xs text-muted-foreground">{currentCat.unit}</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {currentCat.description}
                  </p>

                  {/* Daily Departure Times */}
                  <div
                    id="times"
                    className="mt-6 rounded-2xl bg-secondary/50 p-4 border border-border"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                      <Clock className="size-4 text-primary" />
                      <span>Available Departure &amp; Session Times</span>
                    </div>
                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {currentCat.times.map((t) => (
                        <div
                          key={t.label}
                          className="rounded-xl border border-white/60 bg-white/90 p-3 shadow-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-primary">{t.label}</span>
                            <span className="text-xs font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded-full">
                              {t.time}
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] text-muted-foreground">{t.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trip Inclusions */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                      <Award className="size-4 text-primary" />
                      <span>Trip Inclusions &amp; Highlights</span>
                    </p>
                    <ul className="space-y-2">
                      {currentCat.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={makeWhatsAppLink(currentCat.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full gradient-brand px-6 py-4 text-sm sm:text-base font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="size-5" />
                    <span>Book {currentCat.title} on WhatsApp</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boundary 2 Wave Divider: Mint Lagoon descending into Deep Abyssal Ocean */}
        <div className="relative -mb-[2px] w-full overflow-hidden leading-none z-10 mt-16 sm:mt-24 pointer-events-none">
          <svg
            className="relative block w-full h-16 sm:h-24 md:h-32"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Layer 1: Soft ocean teal depth shading wave */}
            <path
              d="M0,28L60,37.3C120,47,240,65,360,69.3C480,74,600,64,720,53.3C840,43,960,32,1080,37.3C1200,43,1320,64,1380,74.7L1440,85L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(0, 168, 150, 0.35)"
            />
            {/* Layer 2: Main organic wave matching deep midnight ocean */}
            <path
              d="M0,58L48,64C96,70,192,82,288,78C384,74,480,54,576,50C672,46,768,58,864,68C960,78,1056,86,1152,80C1248,74,1344,54,1392,44L1440,34L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#041527"
            />
          </svg>
        </div>
      </section>

      {/* ── 3. Happy Customers & Guests Section (5 Real Guest Experiences) ── */}
      <section
        id="happy-guests"
        className="relative pt-12 sm:pt-16 pb-0 bg-[#041527] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,168,150,0.22),rgba(255,255,255,0))]" />
        <div className="absolute top-1/3 -left-32 size-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 size-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-400/15 border border-teal-400/30 px-4 py-1 text-xs font-bold tracking-wider uppercase text-teal-300">
              <Heart className="size-3.5 text-rose-400" />
              These Are Our Valuable Happy Customers
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Our Valuable Happy Customers
            </h2>
            <p className="mt-3 text-base text-white/75 leading-relaxed">
              From young children and adventure duos to happy families and friend groups — read the
              genuine memories of our valuable guests exploring Mirissa&apos;s waters with Coral
              Coast Divers.
            </p>
          </div>

          {/* Customer Photo Grid (5 Authentic Valuable Customer Groups) */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {happyCustomers.map((cust, idx) => (
              <div
                key={cust.category + idx}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/50 hover:shadow-[0_15px_40px_-10px_rgba(0,168,150,0.3)] ${
                  idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${idx === 4 ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                {/* Photo with zoom & click-to-lightbox */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={cust.image}
                    alt={`${cust.category} enjoying ${cust.experience}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onClick={() => setLightboxImg(cust.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041527] via-transparent to-black/20" />

                  {/* Top Badges (Category Pill instead of Country) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-teal-500/30 backdrop-blur-md px-3 py-1 rounded-full border border-teal-400/30 shadow-xs">
                      <Users className="size-3 text-teal-300" />
                      {cust.badge}
                    </span>
                    <span className="text-[10px] font-medium text-teal-200 bg-teal-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-teal-400/30">
                      {cust.highlight}
                    </span>
                  </div>

                  {/* Bottom Photo Caption (Category & Group Type instead of Names) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-bold text-white drop-shadow-sm text-sm">
                      {cust.category}
                    </span>
                    <span className="text-[11px] text-teal-200 font-medium bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {cust.groupType}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1">
                        {[...Array(cust.rating)].map((_, r) => (
                          <Star key={r} className="size-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-300">
                        <CheckCircle2 className="size-3 text-teal-400" /> Valuable Customer
                      </span>
                    </div>

                    <p className="text-xs font-bold text-teal-200 mb-2 uppercase tracking-wide">
                      {cust.experience}
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed text-white/80 italic">
                      &ldquo;{cust.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                    <span>Mirissa Beach, Sri Lanka</span>
                    <span className="text-emerald-400 font-medium">Free HD Photos Sent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Showcase Strip */}
          <div className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <Camera className="size-5 text-pink-400" />
                  Follow our Daily Underwater Encounters
                </h4>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                  We post new photos and videos of wild turtles, reef sharks, and whale pods from
                  our daily Mirissa boat tours!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stylish Curved Oceanic Wave & Gradient Shading Divider (Seamless connection to Why Us) */}
        <div className="relative -mb-[2px] w-full overflow-hidden leading-none z-10 mt-16 sm:mt-20 pointer-events-none">
          <svg
            className="relative block w-full h-16 sm:h-24 md:h-32"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Layer 1: Soft ocean teal depth shading wave */}
            <path
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(0, 168, 150, 0.35)"
            />
            {/* Layer 2: Main organic wave matching soothing sea-glass coastal canvas */}
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#e0f2f7"
            />
          </svg>
        </div>
      </section>

      {/* ── 4. Why Dive With Us (Soothing Coastal Sea-Glass Canvas & Rich Depth) ── */}
      <section
        id="why-us"
        className="relative overflow-hidden pt-10 pb-0 sm:pt-14 sm:pb-0 bg-gradient-to-b from-[#e0f2f7] via-[#ebf7f5] to-[#e4f1f5]"
      >
        {/* Ambient Oceanic Background Glows with Rich Lagoon Depth */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-emerald-300/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-xs">
              <Sparkles className="size-3.5 text-teal-600 animate-pulse" />
              <span>Family Run • Certified PADI &amp; SSI Standards</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
                Coral Coast Divers
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Born and raised right here on Mirissa&apos;s shores. Our intimate local knowledge,
              zero-rush ethos, and top-tier safety gear turn every dive into an unforgettable ocean
              memory.
            </p>
          </div>

          {/* 6 Creative Feature Cards Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Certified & Insured Instructors (Azure & Sapphire) */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-200/80 bg-white/95 p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 group-hover:h-2 transition-all duration-300" />
              <div className="pointer-events-none absolute -top-3 right-4 select-none font-mono text-6xl font-black text-blue-500/5 group-hover:text-blue-500/15 group-hover:scale-110 transition-all duration-500">
                01
              </div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <ShieldCheck className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700">
                  Certified PADI &amp; SSI
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Certified &amp; Insured Instructors
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Every single dive and snorkel tour is supervised by certified local dive instructors
                with active international emergency response and rescue training.
              </p>
              <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                  <span>100% Safety Track Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                  <span>First-Aid &amp; Pure O2 Equipped</span>
                </div>
              </div>
            </div>

            {/* Card 2: Small Personal Groups (Emerald & Mint) */}
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-200/80 bg-white/95 p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 group-hover:h-2 transition-all duration-300" />
              <div className="pointer-events-none absolute -top-3 right-4 select-none font-mono text-6xl font-black text-emerald-500/5 group-hover:text-emerald-500/15 group-hover:scale-110 transition-all duration-500">
                02
              </div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Users className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Strict Max 6 Divers
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Small Personal Groups
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We strictly never overcrowd our boats or hurry guests. Enjoy unhurried individual
                attention, personal space, and quiet peaceful encounters with ocean wildlife.
              </p>
              <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Max 6 Guests per Dive Boat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>1 Guide per 2–3 Beginners</span>
                </div>
              </div>
            </div>

            {/* Card 3: Free Action Cam Photos & Video (Sunset Amber & Coral) */}
            <div className="group relative overflow-hidden rounded-3xl border border-amber-200/80 bg-white/95 p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-400 group-hover:h-2 transition-all duration-300" />
              <div className="pointer-events-none absolute -top-3 right-4 select-none font-mono text-6xl font-black text-amber-500/5 group-hover:text-amber-500/15 group-hover:scale-110 transition-all duration-500">
                03
              </div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Camera className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50/80 px-3 py-1 text-xs font-semibold text-amber-800">
                  100% Free Included
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                Free HD Action Cam Media
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Other dive centers charge high hidden fees for underwater photography. We shoot
                crisp HD photos and videos throughout your session and transfer them to your phone
                for free!
              </p>
              <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-amber-600 shrink-0" />
                  <span>Instant Transfer to Phone / WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-amber-600 shrink-0" />
                  <span>Wild Turtles &amp; Coral Action Clips</span>
                </div>
              </div>
            </div>

            {/* Card 4: Beginner & Non-Swimmer Friendly (Aquamarine & Sky Blue) */}
            <div className="group relative overflow-hidden rounded-3xl border border-cyan-200/80 bg-white/95 p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-400 group-hover:h-2 transition-all duration-300" />
              <div className="pointer-events-none absolute -top-3 right-4 select-none font-mono text-6xl font-black text-cyan-500/5 group-hover:text-cyan-500/15 group-hover:scale-110 transition-all duration-500">
                04
              </div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Waves className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50/80 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Zero Experience Needed
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                Beginner &amp; Non-Swimmer Friendly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Never snorkeled or felt nervous in open sea water? Our patient instructors guide you
                by the hand, adjust sanitized lifejackets, and keep you safe with floating rings.
              </p>
              <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                  <span>Certified Lifejackets &amp; Float Rings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                  <span>Patient 1-on-1 Gentle Guidance</span>
                </div>
              </div>
            </div>

            {/* Card 5: Local Secret Reefs & Wrecks (Indigo & Deep Cobalt) */}
            <div className="group relative overflow-hidden rounded-3xl border border-indigo-200/80 bg-white/95 p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 group-hover:h-2 transition-all duration-300" />
              <div className="pointer-events-none absolute -top-3 right-4 select-none font-mono text-6xl font-black text-indigo-500/5 group-hover:text-indigo-500/15 group-hover:scale-110 transition-all duration-500">
                05
              </div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Anchor className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Mirissa Natives
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                Local Secret Reefs &amp; Wrecks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Having grown up diving Mirissa&apos;s coastline, we know every hidden underwater
                canyon, turtle feeding bed, and historical ship wreck off the southern coast.
              </p>
              <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-indigo-600 shrink-0" />
                  <span>Wild Green Turtle Feeding Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-indigo-600 shrink-0" />
                  <span>Vibrant Living Coral Gardens</span>
                </div>
              </div>
            </div>

            {/* Card 6: Instant Direct WhatsApp Booking (WhatsApp Emerald & Neon Mint) */}
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-300 bg-white/95 p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/15 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#25D366] via-emerald-500 to-teal-400 group-hover:h-2 transition-all duration-300" />
              <div className="pointer-events-none absolute -top-3 right-4 select-none font-mono text-6xl font-black text-emerald-500/5 group-hover:text-emerald-500/15 group-hover:scale-110 transition-all duration-500">
                06
              </div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <MessageCircle className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                  Fast Direct Chat
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Instant Direct WhatsApp Booking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                No middleman commissions, automated bots, or agency delays. Chat directly with the
                local owner and instructor at{" "}
                <span className="font-semibold text-slate-800">{OWNER_PHONE_DISPLAY}</span>.
              </p>
              <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Direct with Owner ({OWNER_PHONE_DISPLAY})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Typical Response Under 5 Mins</span>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <a
                  href={makeWhatsAppLink(
                    "Hi Coral Coast Divers! I'd like to ask a quick question.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                >
                  <span>Chat with Owner Now</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust & Satisfaction Guarantee Banner */}
          <div className="mt-14 rounded-3xl border border-teal-500/25 bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 size-72 bg-teal-500/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20 border border-teal-400/30 text-teal-300">
                  <Award className="size-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    100% Satisfaction &amp; Ethical Wildlife Observation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    We practice strictly gentle, non-intrusive wildlife guidelines so sea turtles
                    and marine life thrive naturally in Mirissa while you get the closest, safest
                    views.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 w-full md:w-auto justify-end">
                <a
                  href="#categories"
                  className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:scale-105 text-center"
                >
                  View 3 Tours
                </a>
                <a
                  href={makeWhatsAppLink("Hi Coral Coast Divers! I'd like to book an adventure.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="size-4" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Boundary 4 Wave Divider: Sea-Glass Lagoon rolling into Coastal Pearl Canvas */}
        <div className="relative -mb-[2px] w-full overflow-hidden leading-none z-10 mt-16 sm:mt-24 pointer-events-none">
          <svg
            className="relative block w-full h-14 sm:h-20 md:h-28"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Layer 1: Soft aqua-cyan shading wave */}
            <path
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(6, 182, 212, 0.22)"
            />
            {/* Layer 2: Main organic wave matching FAQ coastal pearl canvas */}
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#f4f9fa"
            />
          </svg>
        </div>
      </section>

      {/* ── 5. FAQ Section (Coastal Pearl Canvas & Atmospheric Lighting) ── */}
      <section
        id="faq"
        className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-[#f4f9fa] via-[#eef6f8] to-[#f4f9fa]"
      >
        <div className="pointer-events-none absolute -top-24 right-1/4 size-80 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 size-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Got Questions?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to know before joining us in the water.
            </p>
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
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-sm sm:text-base">{f.q}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 border-t border-border/40 pt-3">
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

      {/* ── 6. Location, Contact & QR Code Section ── */}
      <section
        id="contact"
        className="relative overflow-hidden pt-16 pb-0 sm:pt-24 sm:pb-0 bg-gradient-to-b from-[#f4f9fa] via-[#edf7f8] to-[#e4f1f5]"
      >
        <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-32 -right-24 size-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lift">
            <div className="grid lg:grid-cols-12">
              {/* Left Info Panel */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Find Us in Mirissa
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to Meet the Turtles?
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    WhatsApp is the fastest way to reach us. Message our owner directly for instant
                    booking, sea condition updates, and custom boat charters.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    {/* Telephone / WhatsApp */}
                    <a
                      href={`tel:${OWNER_PHONE}`}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-border/60 hover:bg-secondary/60 transition-colors group"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="size-5" />
                      </span>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Call &amp; WhatsApp Direct
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {OWNER_PHONE_DISPLAY}
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${OWNER_EMAIL}`}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-border/60 hover:bg-secondary/60 transition-colors group"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="size-5" />
                      </span>
                      <div>
                        <div className="text-xs text-muted-foreground">Email Inquiries</div>
                        <div className="text-sm font-semibold text-foreground break-all">
                          {OWNER_EMAIL}
                        </div>
                      </div>
                    </a>

                    {/* Location with direct Google Maps link */}
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-border/60 hover:bg-secondary/60 transition-colors group"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <MapPin className="size-5" />
                      </span>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground">
                          Official Dive Center Pin
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          Mirissa Beach, Southern Province, Sri Lanka
                        </div>
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary mr-2" />
                    </a>

                    {/* Social Channels Row */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-2xl border border-pink-200 bg-pink-50/50 hover:bg-pink-50 transition-colors group"
                      >
                        <span className="flex size-9 items-center justify-center rounded-xl bg-pink-500 text-white">
                          <svg className="size-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </span>
                        <div className="overflow-hidden">
                          <div className="text-[11px] text-pink-700 font-semibold">Instagram</div>
                          <div className="text-xs text-muted-foreground truncate">Daily Photos</div>
                        </div>
                      </a>

                      <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-2xl border border-blue-200 bg-blue-50/50 hover:bg-blue-50 transition-colors group"
                      >
                        <span className="flex size-9 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                          <svg className="size-4 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </span>
                        <div className="overflow-hidden">
                          <div className="text-[11px] text-blue-700 font-semibold">Facebook</div>
                          <div className="text-xs text-muted-foreground truncate">
                            Official Page
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={makeWhatsAppLink(
                      "Hi! I'd like to book an ocean tour with Coral Coast Divers. Please let me know available slots.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full gradient-brand px-8 py-4 font-semibold text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="size-5" />
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              {/* Right Panel: Map & Dedicated WhatsApp QR Code Box */}
              <div className="lg:col-span-5 flex flex-col bg-muted/40 border-t lg:border-t-0 lg:border-l border-border">
                {/* WhatsApp QR Code Card (Requested by user) */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-emerald-500/10 via-background to-background border-b border-border text-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-800 mb-3">
                    <QrCode className="size-3.5 text-emerald-600" />
                    <span>Instant WhatsApp QR Code</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Scan with Your Phone</h4>
                  <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                    Open your camera app to chat, ask questions, or book directly with the owner on
                    WhatsApp.
                  </p>

                  <div className="mt-4 flex justify-center">
                    <div
                      onClick={() => setLightboxImg("/images/whatsapp-qr.png")}
                      className="relative p-3.5 rounded-2xl bg-white shadow-soft border-2 border-emerald-500/25 group transition-all hover:scale-105 hover:shadow-glow cursor-pointer"
                      title="Click to view full size QR code"
                    >
                      <Image
                        src="/images/whatsapp-qr.png"
                        alt="Scan WhatsApp QR code to chat with Coral Coast Divers"
                        width={180}
                        height={180}
                        className="size-36 sm:size-44 object-contain rounded-lg"
                      />
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs whitespace-nowrap flex items-center gap-1">
                        <MessageCircle className="size-2.5" /> +94 71 497 0721
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <a
                      href={makeWhatsAppLink(
                        "Hi Coral Coast Divers! Scanning your QR code to book.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      <span>Or click here to launch WhatsApp directly</span>
                      <ArrowRight className="size-3" />
                    </a>
                  </div>
                </div>

                {/* Map embed view */}
                <div className="relative min-h-[260px] flex-1 bg-muted overflow-hidden group">
                  <iframe
                    title="Coral Coast Divers Mirissa location map"
                    src="https://maps.google.com/maps?q=Mirissa%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="size-full min-h-[260px] border-0"
                    loading="lazy"
                    aria-label="Google Map showing Coral Coast Divers location in Mirissa"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-foreground shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 border border-border"
                    >
                      <MapPin className="size-3.5 text-rose-500" />
                      <span>Open in Google Maps App</span>
                      <ExternalLink className="size-3 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boundary 6 Wave Divider: Coastal Waters descending into Abyssal Ocean Footer */}
        <div className="relative -mb-[2px] w-full overflow-hidden leading-none z-10 mt-16 sm:mt-24 pointer-events-none">
          <svg
            className="relative block w-full h-16 sm:h-24 md:h-32"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Layer 1: Luminous teal wave crest shading */}
            <path
              d="M0,28L60,37.3C120,47,240,65,360,69.3C480,74,600,64,720,53.3C840,43,960,32,1080,37.3C1200,43,1320,64,1380,74.7L1440,85L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(0, 168, 150, 0.4)"
            />
            {/* Layer 2: Main organic wave matching deep footer abyssal blue */}
            <path
              d="M0,58L48,64C96,70,192,82,288,78C384,74,480,54,576,50C672,46,768,58,864,68C960,78,1056,86,1152,80C1248,74,1344,54,1392,44L1440,34L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#06192e"
            />
          </svg>
        </div>
      </section>

      {/* ── Lightbox Modal for Full Resolution Photos ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-up"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <Image
              src={lightboxImg}
              alt="Expanded high-resolution view"
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-auto"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close image"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
      )}

      {/* ── WhatsApp QR Code Dedicated Popup Modal ── */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-up"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative max-w-sm w-full rounded-3xl border border-white/20 bg-card p-6 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>

            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 mb-3">
              <QrCode className="size-6" />
            </div>

            <h3 className="text-xl font-bold text-foreground">Scan to WhatsApp</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Point your phone camera at this QR code to open a direct WhatsApp chat with our owner.
            </p>

            <div className="my-5 flex justify-center">
              <div className="p-3 bg-white rounded-2xl border border-emerald-500/30 shadow-md">
                <Image
                  src="/images/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  width={200}
                  height={200}
                  className="size-48 object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="text-xs text-foreground font-semibold flex items-center justify-center gap-1.5 mb-4">
              <Phone className="size-3.5 text-primary" />
              <span>{OWNER_PHONE_DISPLAY}</span>
            </div>

            <a
              href={makeWhatsAppLink("Hi Coral Coast Divers! I'd like to book an adventure.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-brand py-3 text-sm font-semibold text-white shadow-glow"
            >
              <MessageCircle className="size-4" />
              Open WhatsApp App Directly
            </a>
          </div>
        </div>
      )}

      {/* ── Fixed Floating WhatsApp & QR Buttons ── */}
      <aside
        aria-label="Quick WhatsApp Contact"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5"
      >
        <button
          onClick={() => setShowQrModal(true)}
          className="flex size-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lift border border-emerald-500/30 hover:scale-105 transition-transform hover:shadow-glow cursor-pointer"
          title="Scan WhatsApp QR Code"
          aria-label="Scan WhatsApp QR Code"
        >
          <QrCode className="size-5 text-emerald-600" />
        </button>

        <a
          href={makeWhatsAppLink(
            "Hi Coral Coast Divers! I'd like to book an adventure in Mirissa.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] text-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-lift hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40"
          aria-label="Chat with owner on WhatsApp"
        >
          <MessageCircle className="size-5 text-white transition-transform group-hover:scale-110" />
          <span className="font-semibold text-xs sm:text-sm tracking-wide">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* ── Footer (Elevated Atmospheric Ocean Ground & Community Showcase) ── */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-[#06192e] via-[#031326] to-[#010914] pt-4 pb-20 text-white">
        {/* Ambient Oceanic Ground Lighting */}
        <div className="pointer-events-none absolute top-0 left-1/4 -translate-x-1/2 size-96 rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 translate-x-1/2 size-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 text-center">
          {/* Logo with Ambient Glass Badge */}
          <div className="rounded-2xl bg-white/95 px-6 py-3.5 shadow-xl shadow-teal-950/20 border border-teal-400/30 backdrop-blur-md">
            <Image
              src="/logo.png"
              alt="Coral Coast Divers Mirissa"
              width={240}
              height={160}
              className="h-14 sm:h-16 w-auto object-contain"
              unoptimized
            />
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            PADI-guided turtle snorkeling, beginner scuba diving &amp; whale watching in Mirissa,
            Sri Lanka. Small groups, local instructors &amp; free action camera photos.
          </p>

          {/* Social Community & Official Channels (Superb Luxury Method) */}
          <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            {/* Ambient inner card glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-teal-500/15 blur-2xl transition-all duration-500 group-hover:scale-125" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative text-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400">
                Official Ocean Community
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
                Connect With Coral Coast Divers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Follow our daily underwater sightings, wild turtle videos, and connect directly with
                our instructors.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {/* Instagram Channel */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/15 hover:to-transparent hover:shadow-lg hover:shadow-pink-500/15 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md shadow-pink-500/25 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white group-hover/item:text-pink-300 transition-colors">
                          Instagram
                        </span>
                        <span className="rounded-full bg-pink-500/20 px-2 py-0.5 text-[10px] font-semibold text-pink-300">
                          Daily Reels
                        </span>
                      </div>
                      <div className="text-xs text-slate-300 font-mono mt-0.5">
                        @coral_coast_divers_mirissa
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="size-4 text-slate-400 group-hover/item:text-white transition-colors shrink-0" />
                </a>

                {/* Facebook Channel */}
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-transparent hover:shadow-lg hover:shadow-blue-500/15 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1877F2] to-blue-700 text-white shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white group-hover/item:text-blue-300 transition-colors">
                          Facebook
                        </span>
                        <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                          Community
                        </span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Guest Reviews &amp; Photos
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="size-4 text-slate-400 group-hover/item:text-white transition-colors shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            {navLinks.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition-colors hover:text-white hover:underline underline-offset-4"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Contact Bar */}
          <div className="pt-4 border-t border-white/10 w-full max-w-xl flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span>📍 Mirissa, Matara District, Sri Lanka</span>
            <span>•</span>
            <a href={`tel:${OWNER_PHONE}`} className="hover:text-white transition-colors">
              📞 {OWNER_PHONE_DISPLAY}
            </a>
            <span>•</span>
            <a href={`mailto:${OWNER_EMAIL}`} className="hover:text-white transition-colors">
              ✉️ {OWNER_EMAIL}
            </a>
          </div>

          {/* Vian-Tech IT Solutions & Web Development Credit */}
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-teal-500/20 bg-gradient-to-r from-[#031d30]/60 via-[#071d2b]/70 to-[#031d30]/60 px-5 py-2.5 backdrop-blur-xl shadow-lg shadow-black/20">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Built by
            </span>
            <a
              href={VIANTECH_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-xl bg-white/95 px-3.5 py-1.5 shadow-md transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-teal-500/20"
              title="Vian-Tech | IT Solutions & Web Development"
            >
              <Image
                src="/images/viantech-logo.png"
                alt="Vian-Tech - IT Solutions & Web Development"
                width={140}
                height={40}
                className="h-5.5 w-auto object-contain transition-transform group-hover:scale-105"
                unoptimized
              />
            </a>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Coral Coast Divers Mirissa • Certified PADI &amp; SSI
              Instructors • Mirissa, Sri Lanka. All rights reserved.
            </p>
            <p className="text-slate-500 text-[11px]">
              Website Designed &amp; Developed by{" "}
              <a
                href={VIANTECH_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-400/90 hover:text-teal-300 hover:underline transition-colors"
                title="Contact Vian-Tech IT Solutions on WhatsApp"
              >
                Vian-Tech IT Solutions
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
