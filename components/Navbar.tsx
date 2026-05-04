"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import s from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/handles", label: "Workout Handles" },
  { href: "/about", label: "About" },
  { href: "/donate", label: "Donate Gear" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={s.root}>
      <div className={s.inner}>
        <Link href="/" className={s.brand}>
          <span>🥍</span> RecycleLacrosse
        </Link>

        {/* Desktop nav */}
        <NavigationMenu.Root>
          <NavigationMenu.List className={s.navList}>
            {links.map(({ href, label }) => (
              <NavigationMenu.Item key={href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={href}
                    className={`${s.navLink} ${pathname === href ? s.navLinkActive : ""}`}
                  >
                    {label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/donate" className={s.ctaBtn}>Submit Gear</Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile toggle */}
        <button
          className={s.mobileToggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className={s.mobileMenu}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={s.mobileLink}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
