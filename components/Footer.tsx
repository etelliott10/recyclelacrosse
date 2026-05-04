import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.root}>
      <div className={s.inner}>
        <div className={s.grid}>
          <div>
            <span className={s.brand}>🥍 RecycleLacrosse</span>
            <p className={s.tagline}>
              Utah-based lacrosse gear recycling program. Broken gear gets a new life.
              Usable gear goes to kids who need it.
            </p>
          </div>

          <div>
            <p className={s.colTitle}>Navigation</p>
            <nav className={s.navLinks}>
              {[
                { href: "/", label: "Home" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/handles", label: "Workout Handles" },
                { href: "/about", label: "About" },
                { href: "/donate", label: "Donate Gear" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className={s.navLink}>{label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <p className={s.colTitle}>Get Involved</p>
            <p className={s.blurb}>
              Have old or broken lacrosse gear? Submit it and we&apos;ll put it to work.
            </p>
            <Link href="/donate" className={s.ctaBtn}>Submit Gear →</Link>
          </div>
        </div>

        <Separator.Root className={s.separator} />

        <p className={s.copyright}>
          © {new Date().getFullYear()} RecycleLacrosse · Utah · Founded by Elijah Elliott
        </p>
      </div>
    </footer>
  );
}
