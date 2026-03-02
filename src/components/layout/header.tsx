"use client"

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = siteConfig.nav;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <motion.div
        style={{ opacity: blurOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-xl"
      />
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-2 transition-colors duration-300 md:px-6 lg:px-8 ${isScrolled ? "bg-slate-950/80 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <Link href="/" className="flex items-center gap-2">
  <img
    src="/ChatGPT_Image_14_feb_2026__10_27_29-removebg-preview.png"
    alt="MD Websites Logo"
    className="h-40 w-auto"
  />
</Link>
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-200">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="px-1 py-1 transition-colors hover:text-sky-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <motion.a
            href="#contatti"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition-colors hover:bg-sky-400"
          >
            Inizia ora
          </motion.a>
        </div>

        <button
          type="button"
          aria-label="Apri il menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-100 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <div className="relative h-4 w-4">
            <span className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="md:hidden"
      >
        <div className="mx-auto max-w-6xl px-4 pb-3 pt-1">
          <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 shadow-xl backdrop-blur-xl">
            <nav className="px-4 py-3">
              <ul className="flex flex-col gap-1 text-sm font-medium text-slate-100">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-900/80 hover:text-sky-300" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-slate-800/80 px-4 py-3">
              <motion.a
                href="#contatti"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                Inizia ora
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
