"use client";

import { useState, useRef } from "react";
import * as Label from "@radix-ui/react-label";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import s from "./DonateForm.module.css";

const gearTypes = [
  "Broken shaft",
  "Broken head",
  "Complete stick (usable)",
  "Helmet",
  "Gloves",
  "Shoulder pads",
  "Arm pads",
  "Cleats",
  "Bag / accessories",
  "Other",
];

export default function DonateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = formRef.current!;
    const body = {
      name:      (form.elements.namedItem("name")     as HTMLInputElement).value,
      email:     (form.elements.namedItem("email")    as HTMLInputElement).value,
      location:  (form.elements.namedItem("location") as HTMLInputElement).value,
      gearTypes: selected,
      notes:     (form.elements.namedItem("notes")    as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/submit-gear", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again or email us directly.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={s.success}>
        <span className={s.successIcon}>🎉</span>
        <h3 className={s.successTitle}>Thanks for submitting!</h3>
        <p className={s.successBody}>
          Elijah will be in touch within 2–3 business days with drop-off or shipping
          instructions. Your gear is about to find a second life.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={s.form}>
      <div className={s.field}>
        <Label.Root className={s.label} htmlFor="name">Full Name *</Label.Root>
        <input id="name" name="name" type="text" required placeholder="Jane Smith" className={s.input} />
      </div>

      <div className={s.field}>
        <Label.Root className={s.label} htmlFor="email">Email Address *</Label.Root>
        <input id="email" name="email" type="email" required placeholder="jane@example.com" className={s.input} />
      </div>

      <div className={s.field}>
        <Label.Root className={s.label} htmlFor="location">City / State *</Label.Root>
        <input id="location" name="location" type="text" required placeholder="Salt Lake City, UT" className={s.input} />
      </div>

      <div className={s.field}>
        <Label.Root className={s.label}>
          What gear are you submitting? *{" "}
          <span className={s.hint}>(select all that apply)</span>
        </Label.Root>
        <ToggleGroup.Root
          type="multiple"
          value={selected}
          onValueChange={setSelected}
          className={s.toggleGroup}
        >
          {gearTypes.map((item) => (
            <ToggleGroup.Item key={item} value={item} className={s.toggleItem}>
              {item}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>

      <div className={s.field}>
        <Label.Root className={s.label} htmlFor="notes">
          Notes <span className={s.hint}>(optional)</span>
        </Label.Root>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Condition, quantities, anything helpful for Elijah to know..."
          className={s.textarea}
        />
      </div>

      {error && <p className={s.errorMsg}>{error}</p>}

      <button type="submit" disabled={selected.length === 0 || loading} className={s.submitBtn}>
        {loading ? "Sending…" : "Submit Gear"}
      </button>
      <p className={s.privacy}>Your info is only used to coordinate pickup or drop-off. Never shared.</p>
    </form>
  );
}
