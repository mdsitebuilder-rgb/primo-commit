"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

function CountUpStat({
  value,
  suffix,
  label,
  duration,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  duration: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, duration, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.06 * index }}
      className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-4 text-left shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:px-4 sm:py-5"
    >
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-cyan-300 sm:text-3xl">
        {displayValue}
        {suffix}
      </div>
    </motion.div>
  );
}

const AnimatedButton = ({ href, target = "_self", children, primary = false }: { href: string; target?: string; children: React.ReactNode; primary?: boolean }) => (
  <motion.a
    href={href}
    target={target}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`px-8 py-4 font-semibold rounded-full transition-colors cursor-pointer ${
      primary
        ? "bg-sky-500 hover:bg-sky-400 text-slate-950"
        : "border border-slate-700 hover:border-sky-500 text-white"
    }`}
  >
    {children}
  </motion.a>
);

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white">

      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center px-4 pb-20 pt-28 overflow-hidden">
        {/* Subtle animated grid background */}
        <div className="pointer-events-none absolute inset-0 -z-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),_transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#1f293780_1px,transparent_1px),linear-gradient(to_bottom,#1f293780_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>

        {/* Soft animated light beam */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-[-10%] -z-20 h-[420px] w-[220px] rotate-[-18deg] bg-gradient-to-b from-cyan-400/0 via-cyan-400/35 to-cyan-400/0 blur-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />

        {/* Floating gradient orbs with slight parallax */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-[5%] -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-500 via-fuchsia-500 to-cyan-400 opacity-40 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-120px] left-[5%] -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 opacity-35 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, 10, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sky-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
              AI-Powered Digital Studio
            </motion.div>

            <motion.h1
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                Costruiamo
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.02 } },
                }}
              >
                interfacce{' '}
                <motion.span
                  className="relative inline-block bg-gradient-to-r from-sky-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPositionX: ['0%', '100%', '0%'],
                    textShadow: [
                      '0 0 12px rgba(56,189,248,0.6)',
                      '0 0 18px rgba(168,85,247,0.9)',
                      '0 0 12px rgba(56,189,248,0.6)',
                    ],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '220% 100%' }}
                >
                  intelligenti
                </motion.span>
              </motion.span>
              <motion.span
                className="mt-1 block"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.04 } },
                }}
              >
                per i brand del 2026.
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-sm text-slate-300 md:text-base"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              Uniamo design, dati e AI per creare esperienze digitali che sembrano provenire
              dal futuro: veloci, dinamiche e ottimizzate per ogni singola interazione.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
            >
              {/* Primary CTA */}
              <motion.a
                href="https://www.instagram.com/mdweb.design/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(129,140,248,0.8)] transition-[box-shadow,transform,filter] duration-200 hover:shadow-[0_0_60px_rgba(129,140,248,0.95)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Avvia un progetto
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#servizi"
                className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-white/[0.01] px-7 py-3.5 text-sm font-semibold text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.35)] transition-[background,color,border-color,transform] duration-200 hover:border-transparent hover:bg-cyan-300 hover:text-slate-950"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Guarda le capacità
              </motion.a>
            </motion.div>

            {/* Meta info */}
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-4 text-[0.75rem] text-slate-400"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span>AI-first workflow</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <span className="h-[1px] w-6 bg-slate-700" />
                <span>Concept → Launch in 6 weeks</span>
              </span>
            </motion.div>
          </div>

          {/* Visual / Parallax card */}
          <motion.div
            className="relative mt-4 flex flex-1 justify-center lg:mt-0 lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          >
            <motion.div
              className="relative h-64 w-full max-w-md rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-[0_26px_90px_rgba(15,23,42,0.95)] backdrop-blur-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-x-5 top-4 flex items-center justify-between text-[0.7rem] text-slate-300">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-200">
                  Realtime Insight Engine
                </span>
                <span className="text-emerald-400">● Live</span>
              </div>
              <div className="absolute inset-x-6 top-16 flex flex-col gap-3 text-[0.72rem] text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Conversion lift</span>
                  <span className="font-semibold text-emerald-400">+148%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Adaptive layouts</span>
                  <span className="font-semibold text-sky-300">Autonomo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AI experiments</span>
                  <span className="font-semibold text-fuchsia-300">24/h</span>
                </div>
              </div>
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-6 h-1.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-cyan-300"
                animate={{ x: ['0%', '8%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI – FUTURISTIC LAB */}
      <section id="servizi" className="relative border-t border-slate-800/80 px-4 py-24">
        {/* subtle background grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] [background-size:58px_58px]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <Section className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/80">
              Capabilities
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-[2.6rem]">
              Un laboratorio digitale
              <span className="block text-slate-400">
                dove design, codice e dati collaborano.
              </span>
            </h2>
          </Section>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] md:items-start">
            {/* Left column – primary lab panel */}
            <Section className="relative">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-white/5 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.9)] backdrop-blur-2xl md:p-8"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
              >
                <div className="pointer-events-none absolute inset-px rounded-[1.3rem] border border-transparent bg-[conic-gradient(from_140deg_at_0%_0%,rgba(56,189,248,0.06),rgba(129,140,248,0.3),rgba(236,72,153,0.22),rgba(56,189,248,0.06))] opacity-70 mix-blend-screen" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center gap-3">
                      <motion.span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.6)]"
                        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="h-4 w-4 rounded-full border border-cyan-300/60 bg-cyan-400/30" />
                      </motion.span>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                        Web Design Systems
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50 md:text-2xl">
                      Interfacce orchestrate come esperimenti controllati.
                    </h3>
                  </div>
                  <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                    Web Design
                  </span>
                </div>

                <p className="relative mt-5 text-sm text-slate-300 md:text-[0.95rem]">
                  Layout responsive, componenti modulabili e griglie dinamiche pensate per
                  evolvere nel tempo, non solo per il lancio.
                </p>

                <div className="relative mt-6 flex flex-wrap gap-3 text-[0.7rem] text-slate-400">
                  <span className="rounded-full bg-slate-900/70 px-3 py-1">
                    Design system su misura
                  </span>
                  <span className="rounded-full bg-slate-900/70 px-3 py-1">
                    Microinterazioni e motion design
                  </span>
                  <span className="rounded-full bg-slate-900/70 px-3 py-1">
                    UI accessibile & high-contrast
                  </span>
                </div>
              </motion.div>
            </Section>

            {/* Right column – stacked asymmetric lab modules */}
            <div className="space-y-6">
              {[
                {
                  label: "Sviluppo",
                  chip: "Code Lab",
                  title: "Architetture veloci, sicure e osservabili.",
                  desc: "Stack moderno, performance misurate e un’attenzione maniacale alle fondamenta tecniche.",
                  accent: "from-indigo-500/40 via-sky-500/40 to-fuchsia-500/40",
                },
                {
                  label: "SEO & Signals",
                  chip: "Signal Layer",
                  title: "Dati, segnali e ranking che migliorano nel tempo.",
                  desc: "Monitoraggio continuo, test e fine-tuning per far crescere traffico qualificato e conversioni.",
                  accent: "from-emerald-400/40 via-cyan-400/40 to-sky-500/40",
                },
              ].map((item, index) => (
                <Section
                  key={item.label}
                  className={index === 0 ? "md:ml-10" : "md:mr-6"}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl md:p-6"
                    whileHover={{
                      y: -8,
                      rotateX: 4,
                      rotateY: -4,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    style={{ transformPerspective: 900 }}
                  >
                    <div
                      className={`pointer-events-none absolute inset-px rounded-[1.3rem] border border-transparent bg-gradient-to-r ${item.accent} opacity-70 mix-blend-screen`}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-3">
                        <motion.span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/5 text-cyan-300"
                          animate={{ scale: [1, 1.12, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 28px rgba(56,189,248,0.7)", "0 0 0 rgba(0,0,0,0)"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                        >
                          <span className="h-3 w-3 rounded-full bg-cyan-300" />
                        </motion.span>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          {item.label}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
                          {item.title}
                        </h3>
                      </div>
                      <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                        {item.chip}
                      </span>
                    </div>

                    <p className="relative mt-4 text-sm text-slate-300">
                      {item.desc}
                    </p>
                  </motion.div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT – AI CORE BLOCK */}
      <section id="chi-siamo" className="relative border-t border-slate-800/80 px-4 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_top,#1f2937_0,#020617_55%)]" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
          <Section className="relative max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/80">
              Control Core
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.5rem]">
              Il nucleo intelligente
              <span className="mt-2 block text-slate-400">
                dove orchestriamo i sistemi che governano il tuo ecosistema digitale.
              </span>
            </h2>
          </Section>

          <Section className="relative w-full">
            {/* Rotating gradient ring background */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                aria-hidden="true"
                className="h-full w-full rounded-full border border-slate-800/80 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_45%,rgba(56,189,248,0.3)_60%,rgba(15,23,42,0)_75%)] blur-[1px]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <motion.div
              className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-slate-800/80 bg-white/[0.03] px-8 py-10 shadow-[0_28px_120px_rgba(15,23,42,0.95)] backdrop-blur-2xl sm:px-10 sm:py-12 md:px-14"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="pointer-events-none absolute -inset-1 rounded-[2rem] border border-transparent bg-[conic-gradient(from_180deg_at_50%_0%,rgba(56,189,248,0.3),rgba(168,85,247,0.5),rgba(14,165,233,0.4),rgba(56,189,248,0.3))] opacity-40 blur-[2px] mix-blend-screen" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),transparent_60%)]" />

              <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-sm text-left md:text-left">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                    AI Operating Layer
                  </p>
                  <p className="mt-4 text-sm text-slate-300 md:text-[0.95rem]">
                    Un unico nucleo che coordina design, sviluppo e segnali in tempo reale.
                    Pochi parametri chiave, massima leggibilità del sistema.
                  </p>
                </div>

                {/* Animated stats */}
                <div className="grid w-full max-w-md gap-6 sm:grid-cols-3">
                  {[
                    { label: "Clienti guidati", value: 50, suffix: "+", duration: 1.6 },
                    { label: "Anni di iterazione", value: 3, suffix: "", duration: 1.8 },
                    { label: "Soddisfazione", value: 100, suffix: "%", duration: 2.1 },
                  ].map((stat, idx) => (
                    <CountUpStat key={stat.label} index={idx} {...stat} />
                  ))}
                </div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-24 px-4 border-t border-slate-800">
        <Section className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/20">
          <h2 className="text-4xl font-bold mb-4">Hai un progetto in mente?</h2>
          <p className="text-slate-400 text-lg mb-2">Risposta in 24h • Consulenza gratuita</p>
          <p className="text-slate-500 mb-10">Oppure seguimi sui social per aggiornamenti e contenuti sul web development.</p>
          <div className="flex flex-row gap-8 justify-center mt-8">
            {[
              { emoji: "📸", label: "Instagram", href: "https://www.instagram.com/mdweb.design/", target: "_blank" },
              { emoji: "✉️", label: "Email", href: "mailto:mdsitebuilder@gmail.com", target: "_self" },
              { emoji: "📅", label: "Prenota", href: "https://calendly.com/mdwebsites/30min", target: "_blank" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.target}
                whileHover={{ scale: 1.2, y: -8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="text-5xl">{item.emoji}</div>
                <span className="text-slate-400 text-sm font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </Section>
      </section>

    </main>
  );
}