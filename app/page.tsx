import Link from "next/link";
import Image from "next/image";
import s from "./page.module.css";

const stats = [
  { value: "100%", label: "Gear reused or recycled" },
  { value: "0",    label: "Items sent to landfill" },
  { value: "$25",  label: "Workout handles" },
];

const programs = [
  {
    icon: "🔥",
    badge: "Broken shafts & heads",
    badgeClass: "badgeOrange",
    title: "Melt & Remake",
    description:
      "Scraps from broken shafts and heads are collected until there's enough to melt. Remolded into brand-new gear — donated to players who need them.",
    cta: null,
  },
  {
    icon: "💪",
    badge: "Broken shafts",
    badgeClass: "badgeBlue",
    title: "Workout Handles",
    description:
      "Broken shafts cut down into durable training handles — $25 each. 30% of every sale goes directly toward purchasing new lacrosse equipment for kids.",
    cta: { label: "Coming Soon — Join Waitlist", href: "/handles" },
  },
  {
    icon: "🎁",
    badge: "Usable gear",
    badgeClass: "badgeGreen",
    title: "Direct Donation",
    description:
      "Gear still in good shape goes straight to children and schools in Utah that can't afford new equipment. Every kid deserves a chance to play.",
    cta: null,
  },
];

const gearImages = [
  { src: "https://images.unsplash.com/photo-1661895610423-3362a79211c4?w=500&q=80", alt: "Lacrosse head",          label: "Heads"       },
  { src: "https://images.unsplash.com/photo-1624992152845-9e54aab7aa86?w=500&q=80", alt: "Lacrosse shaft",         label: "Shafts"      },
  { src: "https://images.unsplash.com/photo-1623156884380-a080a56ddc93?w=500&q=80", alt: "Lacrosse helmet",        label: "Helmets"     },
  { src: "https://images.unsplash.com/photo-1531951844469-c0ac27049ad0?w=500&q=80", alt: "Lacrosse pads & gloves", label: "Pads & Gloves" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.badge}>Utah&apos;s Lacrosse Gear Recycling Program</span>
          <h1 className={s.heroTitle}>
            Don&apos;t Toss It.{" "}
            <span className={s.heroAccent}>Give It a Second Life.</span>
          </h1>
          <p className={s.heroSubtext}>
            We recycle broken lacrosse gear into new equipment, repurpose shafts into
            $25 workout handles, and donate usable gear directly to kids and Utah schools.
          </p>
          <div className={s.heroBtns}>
            <Link href="/donate" className={s.btnPrimary}>Submit Your Gear</Link>
            <Link href="/how-it-works" className={s.btnOutline}>See How It Works</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={s.stats}>
        <div className={s.statsGrid}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <span className={s.statValue}>{value}</span>
              <span className={s.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gear images */}
      <section className={s.gearSection}>
        <div className={s.gearInner}>
          <p className={s.sectionEyebrow}>We Accept All Types of Gear</p>
          <div className={s.gearGrid}>
            {gearImages.map(({ src, alt, label }) => (
              <div key={label} className={s.gearItem}>
                <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className={s.gearOverlay}>
                  <span className={s.gearLabel}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className={s.programs}>
        <div className={s.sectionInner}>
          <h2 className={s.sectionTitle}>Three Ways We Put Gear to Work</h2>
          <p className={s.sectionSubtext}>Every piece of equipment we receive has a path — broken or not.</p>
          <div className={s.programGrid}>
            {programs.map(({ icon, badge, badgeClass, title, description, cta }) => (
              <div key={title} className={s.card}>
                <span className={s.cardIcon}>{icon}</span>
                <span className={`${s.cardBadge} ${s[badgeClass as keyof typeof s]}`}>{badge}</span>
                <h3 className={s.cardTitle}>{title}</h3>
                <p className={s.cardDesc}>{description}</p>
                {cta && <Link href={cta.href} className={s.cardCta}>{cta.label}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <div className={s.ctaInner}>
          <h2 className={s.ctaTitle}>Have Old Lacrosse Gear?</h2>
          <p className={s.ctaText}>
            Whether it&apos;s a cracked shaft, a worn-out head, or a full bag of unused gear —
            submit the form and Elijah will reach out with next steps.
          </p>
          <Link href="/donate" className={s.btnGreen}>Submit Gear Now</Link>
        </div>
      </section>
    </>
  );
}
