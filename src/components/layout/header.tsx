"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

type NavItem = {
  label: string;
  href: string;
};

const navLinks = siteConfig.nav as NavItem[];

// Standard ease-out cubic-bezier used as array for type safety
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headerVariants = {
  hidden: { y: -32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.28, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -6,
    height: 0,
    transition: { duration: 0.22, ease: EASE_OUT },
  },
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStateClasses = isScrolled
    ? "bg-slate-950/80 backdrop-blur-2xl shadow-[0_18px_70px_rgba(15,23,42,0.95)] border-b border-cyan-500/35"
    : "bg-transparent border-b border-transparent";

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-40"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-3 transition-all duration-300 md:px-6 lg:px-8 ${headerStateClasses}`}
      >
        {/* Logo text */}
        <Link
          href="/"
          className="group relative flex items-center gap-2 rounded-full px-2 py-1 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_22px_rgba(129,140,248,0.6)]"
        >
          <div className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-base font-semibold uppercase tracking-[0.2em] text-transparent md:text-sm">
              M.D. STUDIO
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-300">
              Digital Lab
            </span>
          </div>
          <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.4),transparent_55%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
        </Link>

        {/* Center navigation */}
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em]">
            {navLinks.map((item: NavItem) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative inline-flex items-center px-1 py-1 text-[0.68rem] transition-all duration-300 ${
                      isActive ? "text-cyan-200" : "text-slate-300"
                    } hover:text-cyan-300`}
                  >
                    <motion.span whileHover={{ y: -1 }} className="relative">
                      {item.label}
                    </motion.span>
                    <span
                      className={`pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA (desktop) */}
        <div className="hidden md:flex">
          <motion.a
            href="#contatti"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_28px_rgba(56,189,248,0.9)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_50px_rgba(129,140,248,1)]"
          >
            Avvia progetto
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Apri il menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-100 shadow-sm shadow-black/50 transition-all duration-300 hover:border-cyan-400/70 hover:text-cyan-300 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <div className="relative h-4 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 pt-1">
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 shadow-[0_20px_70px_rgba(15,23,42,1)] backdrop-blur-2xl">
                <nav className="px-4 py-3">
                  <ul className="flex flex-col gap-1 text-sm font-medium text-slate-100">
                    {navLinks.map((item: NavItem) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-slate-900/80 hover:text-cyan-300 ${
                              isActive ? "bg-slate-900/80 text-cyan-200" : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="border-t border-slate-800/80 px-4 py-3">
                  <motion.a
                    href="#contatti"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.9)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_50px_rgba(129,140,248,1)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Avvia progetto
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;