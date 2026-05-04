import Image from "next/image";
import Link from "next/link";
import sh from "@/app/shared.module.css";
import s from "./page.module.css";

const values = [
  { icon: "♻",  title: "Zero Waste",          body: "Nothing gets thrown away. Broken gear is melted down, cut up, or repurposed. Every gram finds a use." },
  { icon: "🥍", title: "Love for the Sport",   body: "We started this because lacrosse gave us so much. Cost should never be the reason a kid can't play." },
  { icon: "🤝", title: "Community First",      body: "Every donated stick, helmet, or pair of gloves goes directly to a child or school in Utah — no middleman." },
  { icon: "🔬", title: "Resourceful by Design", body: "A broken shaft isn't garbage — it's a workout handle. A cracked head isn't trash — it's raw material." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className={sh.hero}>
        <div className={sh.heroInner}>
          <span className={sh.badge}>Utah&apos;s Lacrosse Gear Recycling Program</span>
          <h1 className={sh.heroTitle}>About Us</h1>
          <p className={sh.heroSubtext}>
            We started with a simple question: what happens to all the broken lacrosse gear?
            The answer turned into a mission.
          </p>
        </div>
      </section>

      {/* Founder / Story */}
      <section className={s.founderSection}>
        <div className={s.founderInner}>
          <div className={s.founderImg}>
            <div className={s.imgWrap}>
              <Image
                src="/images/founder.png"
                alt="Elijah Elliott – Founder of RecycleLacrosse"
                fill
                className="object-cover object-top"
                sizes="224px"
                priority
              />
            </div>
            <p className={s.founderName}>Elijah Elliott</p>
            <span className={s.founderBadge}>Founder · Utah</span>
          </div>

          <div className={s.storyContent}>
            <h2 className={s.storyTitle}>Our Story</h2>
            <p className={s.storyText}>
              Lacrosse players go through a lot of gear. Shafts crack, heads break, helmets
              get retired — and most of it ends up in the trash. Meanwhile, there are kids and
              school programs across Utah that can&apos;t afford any equipment at all.
            </p>
            <p className={s.storyText}>
              Elijah built RecycleLacrosse to close that gap. Rather than let gear pile up in
              landfills, he created three programs: collecting broken scraps until there&apos;s
              enough to melt down and remold into new gear, cutting broken shafts into $25
              workout handles, and donating usable equipment directly to kids and schools.
            </p>
            <p className={s.storyText}>
              It&apos;s simple on the surface, but the impact compounds. Every shaft recycled
              is one less piece of material in a landfill — and one more piece of equipment
              in a kid&apos;s hands.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={sh.sectionAlt}>
        <div className={sh.inner}>
          <h2 className={sh.sectionTitle}>What We Stand For</h2>
          <p className={sh.sectionSubtext}>The principles behind every decision we make.</p>
          <div className={s.valuesGrid}>
            {values.map(({ icon, title, body }) => (
              <div key={title} className={s.valueCard}>
                <span className={s.valueIcon}>{icon}</span>
                <div>
                  <h3 className={s.valueTitle}>{title}</h3>
                  <p className={s.valueBody}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaTitle}>Want to help?</h2>
        <p className={s.ctaBody}>
          If you have gear sitting in your garage — broken or not — submit it and Elijah
          will reach out with next steps.
        </p>
        <div className={sh.ctaBtns}>
          <Link href="/donate" className={sh.btnGreen}>Submit Gear</Link>
          <Link href="/how-it-works" className={sh.btnOutline}>See How It Works</Link>
        </div>
      </section>
    </div>
  );
}
