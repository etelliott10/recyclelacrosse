import WaitlistForm from "@/components/WaitlistForm";
import sh from "@/app/shared.module.css";
import s from "./page.module.css";

const features = [
  { icon: "♻️", label: "100% recycled lacrosse shafts" },
  { icon: "✂️", label: "Cut to standard grip length"   },
  { icon: "💪", label: "Built for training & fitness"  },
  { icon: "🥍", label: "Made by a lacrosse player"     },
];

const steps = [
  "Submit your pre-order below.",
  "Elijah confirms your spot via email.",
  "When a batch is ready, he'll reach out to arrange payment and shipping.",
  "Your handle ships — made from a real lacrosse shaft.",
];

export default function HandlesPage() {
  return (
    <div>
      {/* Hero */}
      <section className={sh.hero}>
        <div className={sh.heroInner}>
          <span className={sh.badge}>Coming Soon</span>
          <div className={s.heroProduct}>
            <div className={s.productIcon}>💪</div>
            <div className={s.productInfo}>
              <h1 className={sh.heroTitle}>Recycled Lacrosse Workout Handles</h1>
              <p className={s.heroPrice}>$25</p>
              <p className={s.heroPriceNote}>per handle · 30% donated to buy new gear for kids · no payment until ready</p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <div className={s.features}>
        <ul className={s.featureList}>
          {features.map(({ icon, label }) => (
            <li key={label} className={s.featureItem}>
              <span>{icon}</span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Details */}
      <section className={s.contentSection}>
        <div className={s.details}>
          <h2 className={s.detailTitle}>About the Handle</h2>
          <p className={s.detailText}>
            Every handle starts as a broken lacrosse shaft that would otherwise get
            thrown away. Instead of going to a landfill, it gets cut down to a training
            grip length, finished on the ends, and wrapped — ready for the gym.
          </p>
          <p className={s.detailText}>
            These are pre-orders because handles are made in batches as broken shafts
            come in. Once enough material is collected, Elijah processes a batch and
            reaches out to everyone on the list.
          </p>
          <p className={s.detailText}>
            Each handle is $25. No payment is collected upfront — Elijah will contact
            you directly when yours is ready.
          </p>

          <h3 className={s.expectTitle}>What to expect</h3>
          <ol className={s.stepList}>
            {steps.map((text, i) => (
              <li key={i} className={s.stepItem}>
                <span className={s.stepBubble}>{i + 1}</span>
                <span className={s.stepText}>{text}</span>
              </li>
            ))}
          </ol>

          <div className={s.missionCard}>
            <span className={s.missionIcon}>🥍</span>
            <div>
              <p className={s.missionTitle}>30% goes back to the sport</p>
              <p className={s.missionBody}>
                30% of every $25 handle sale is donated to purchase brand-new lacrosse
                equipment for kids who need it — so your purchase directly funds the next
                player&apos;s gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How they're made */}
      <section className={s.howMade}>
        <div className={sh.innerNarrow}>
          <h2 className={sh.sectionTitle}>How They&apos;re Made</h2>
          <p className={sh.sectionSubtext}>Every handle starts as a broken lacrosse shaft that would otherwise end up in a landfill.</p>
          <div className={s.howGrid}>
            {[
              { icon: "📦", label: "Broken shafts collected" },
              { icon: "✂️", label: "Cut to grip length"     },
              { icon: "🔧", label: "Ends finished & wrapped" },
              { icon: "🚀", label: "Ready to ship"          },
            ].map(({ icon, label }) => (
              <div key={label}>
                <span className={s.howIcon}>{icon}</span>
                <span className={s.howLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaTitle}>Don&apos;t miss the first batch</h2>
        <p className={s.ctaBody}>Drop your email and you&apos;ll be the first to know when they&apos;re ready.</p>
        <div style={{ marginTop: "2rem" }}>
          <WaitlistForm variant="light" />
        </div>
      </section>
    </div>
  );
}
