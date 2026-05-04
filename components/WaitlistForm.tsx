"use client";

import { useState } from "react";
import s from "./WaitlistForm.module.css";

export default function WaitlistForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const light = variant === "light";

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={s.success}>
        <span className={s.successIcon}>🥍</span>
        <p className={s.successTitle}>You&apos;re on the list!</p>
        <p className={s.successBody}>
          Elijah will email you as soon as the first batch of handles is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.row}>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className={light ? s.inputLight : s.input}
        />
        <button type="submit" disabled={loading} className={light ? s.btnLight : s.btn}>
          {loading ? "…" : "Notify Me"}
        </button>
      </div>
      {error && <p className={light ? s.errorLight : s.errorDark}>{error}</p>}
      <p className={light ? s.hintLight : s.hint}>No spam. One email when the handles are ready.</p>
    </form>
  );
}
