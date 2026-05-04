import DonateForm from "@/components/DonateForm";
import sh from "@/app/shared.module.css";
import s from "./page.module.css";

export default function DonatePage() {
  return (
    <div>
      {/* Hero */}
      <section className={sh.hero}>
        <div className={sh.heroInner}>
          <span className={sh.badge}>Utah&apos;s Lacrosse Gear Recycling Program</span>
          <h1 className={sh.heroTitle}>Submit Your Gear</h1>
          <p className={sh.heroSubtext}>
            Tell us what you have. Elijah will reach out directly with drop-off or shipping
            details within a few days.
          </p>
        </div>
      </section>

      {/* Accepted gear */}
      <div className={s.acceptStrip}>
        <ul className={s.acceptList}>
          {[
            "✅ Broken shafts & heads",
            "✅ Complete sticks (usable)",
            "✅ Helmets & pads",
            "✅ Gloves, cleats & bags",
          ].map((item) => (
            <li key={item} className={s.acceptItem}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <section className={s.formSection}>
        <div className={s.formInner}>
          <h2 className={s.formTitle}>Gear Submission Form</h2>
          <p className={s.formSubtext}>Fill this out and Elijah will contact you to arrange the rest.</p>
          <DonateForm />
        </div>
      </section>
    </div>
  );
}
