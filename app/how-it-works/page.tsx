import Link from "next/link";
import sh from "@/app/shared.module.css";
import s from "./page.module.css";

const steps = [
  { number: "01", icon: "📦", heading: "You Submit the Form",   body: "Fill out the gear submission form. Elijah will contact you directly with drop-off or shipping details." },
  { number: "02", icon: "🔍", heading: "Gear Gets Assessed",     body: "Every piece is inspected. Usable gear is separated from broken equipment so it goes to the right program." },
  { number: "03", icon: "⚙️", heading: "It Gets Repurposed",     body: "Broken parts enter one of two recycling tracks. Usable gear skips straight to donation." },
];

const tracks = [
  {
    icon: "🔥", title: "Melt & Remake",       badgeClass: "badgeOrange",
    subtitle: "Broken shafts & broken heads",
    note: "Melting only happens once enough scraps are collected.",
    steps: [
      "Broken shafts and heads are collected and sorted by material.",
      "Once enough scraps accumulate, materials are melted in batches.",
      "Melted material is remolded into new shafts and heads.",
      "Finished gear is donated to players, teams, or school programs.",
    ],
  },
  {
    icon: "💪", title: "Workout Handles — $25", badgeClass: "badgeBlue",
    subtitle: "Broken shafts only",
    note: "Sold for $25 each. Built from 100% recycled lacrosse shafts.",
    steps: [
      "Broken shafts are measured and marked for cutting.",
      "Shafts are cut down to standard grip lengths.",
      "Ends are finished and wrapped for a comfortable grip.",
      "Handles are sold for $25 — proceeds support the program.",
    ],
  },
  {
    icon: "🎁", title: "Direct Donation",       badgeClass: "badgeGreen",
    subtitle: "Gear in good condition",
    note: "Goes directly to Utah kids and schools — no middleman.",
    steps: [
      "Helmets, gloves, pads, and complete sticks are cleaned.",
      "Equipment is matched to size and condition requirements.",
      "Gear is bundled and delivered to local schools and youth programs.",
      "Kids who couldn't afford equipment get to play.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className={sh.hero}>
        <div className={sh.heroInner}>
          <span className={sh.badge}>Utah&apos;s Lacrosse Gear Recycling Program</span>
          <h1 className={sh.heroTitle}>How It Works</h1>
          <p className={sh.heroSubtext}>
            Every piece of gear has a path. Here&apos;s exactly how we turn old equipment
            into something meaningful.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className={sh.section}>
        <div className={sh.inner}>
          <h2 className={sh.sectionTitle}>The Process</h2>
          <p className={sh.sectionSubtext}>Three steps from submission to second life.</p>
          <div className={s.stepsGrid}>
            {steps.map(({ number, icon, heading, body }) => (
              <div key={number}>
                <span className={s.stepIcon}>{icon}</span>
                <span className={s.stepNum}>{number}</span>
                <h3 className={s.stepTitle}>{heading}</h3>
                <p className={s.stepBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className={sh.sectionAlt}>
        <div className={sh.inner}>
          <h2 className={sh.sectionTitle}>The Three Programs</h2>
          <p className={sh.sectionSubtext}>After assessment, gear goes into one of these three tracks based on condition.</p>
          <div className={s.tracksGrid}>
            {tracks.map(({ icon, title, badgeClass, subtitle, note, steps: ts }) => (
              <div key={title} className={s.card}>
                <span className={s.cardIcon}>{icon}</span>
                <h3 className={s.cardTitle}>{title}</h3>
                <span className={`${s.badge} ${s[badgeClass as keyof typeof s]}`}>{subtitle}</span>
                <p className={s.note}>{note}</p>
                <ol className={s.stepList}>
                  {ts.map((step, i) => (
                    <li key={i} className={s.stepItem}>
                      <span className={s.stepNum2}>{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaTitle}>Ready to submit your gear?</h2>
        <p className={s.ctaBody}>Fill out the form and Elijah will follow up with drop-off or shipping details.</p>
        <Link href="/donate" className={sh.btnGreen}>Submit Gear</Link>
      </section>
    </div>
  );
}
