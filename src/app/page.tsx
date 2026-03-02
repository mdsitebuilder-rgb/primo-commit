"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background gradient global */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[10%] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,_rgba(15,23,42,1)_60%)]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-32 md:px-6 lg:px-8 lg:gap-28 lg:pt-36">
        {/* HERO */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-950/90 px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.9)] md:px-10 md:py-14 lg:px-14 lg:py-18"
          >
            {/* Animated gradient blob */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="pointer-events-none absolute -right-24 top-[-20%] h-80 w-80 rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-indigo-500 opacity-40 blur-3xl"
            />
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-8 top-10 h-36 w-36 rounded-2xl border border-sky-400/30 bg-slate-900/60 backdrop-blur-xl"
            >
              <div className="flex h-full flex-col justify-between p-4 text-xs text-slate-200">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
                    Performance
                  </p>
                  <p className="mt-1 text-sm font-semibold">+142% traffico organico</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[0.68rem] text-slate-400">UX score</p>
                  <p className="text-sm font-semibold text-emerald-400">9.4/10</p>
                </div>
              </div>
            </motion.div>

            <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center md:gap-12">
              <div>
                <motion.p
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Agenzia digitale per brand ambiziosi
                </motion.p>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
                >
                  Progettiamo esperienze digitali che
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    {" "}
                    trasformano visitatori in clienti.
                  </span>
                </motion.h1>

                <motion.p
                  custom={0.15}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-5 max-w-xl text-sm text-slate-300 md:text-base"
                >
                  Siti web, e-commerce e strategie SEO su misura per far crescere il tuo
                  business online. Design premium, performance ottimizzate e attenzione
                  maniacale ai dettagli.
                </motion.p>

                <motion.div
                  custom={0.25}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-7 flex flex-wrap items-center gap-3"
                >
                  <Link
                    href="#contatti"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-sky-400"
                  >
                    Prenota una call
                  </Link>
                  <Link
                    href="#servizi"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm shadow-black/40 transition-colors hover:border-sky-400/60 hover:text-sky-200"
                  >
                    Scopri i servizi
                  </Link>
                </motion.div>

                <motion.div
                  custom={0.35}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 md:text-[0.8rem]"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[0.7rem] text-emerald-300">
                      ✓
                    </span>
                    <span>Progetti consegnati in 4–6 settimane</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-[0.7rem] text-sky-300">
                      ★
                    </span>
                    <span>Supporto dedicato al lancio</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="relative mt-2 flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative h-60 w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl">
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[0.7rem] text-slate-300">
                    <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.68rem] font-medium text-slate-100">
                      Dashboard performance
                    </span>
                    <span className="text-emerald-400">Live</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                  <motion.div
                    aria-hidden="true"
                    animate={{ y: [12, -8, 12] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-8 top-16 h-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400"
                  />
                  <div className="absolute inset-x-6 bottom-6 space-y-2 text-[0.7rem] text-slate-200">
                    <div className="flex items-center justify-between">
                      <span>Traffico organico</span>
                      <span className="font-semibold text-emerald-400">+128%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Conversion rate</span>
                      <span className="font-semibold text-sky-300">+3.2x</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tempo medio sul sito</span>
                      <span className="font-semibold text-slate-100">+71%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SERVIZI */}
        <motion.section
          id="servizi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariant}
          className="space-y-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Servizi su misura per il tuo brand.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                Dalla prima bozza al lancio online, ti accompagniamo in ogni fase con un
                team dedicato di designer, developer e strategist.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Web Design",
                description:
                  "Interfacce eleganti, accessibili e ottimizzate per guidare l’utente verso l’azione.",
                icon: (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                    {/* Icona monitor */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="12"
                        rx="2"
                        className="stroke-current"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 20H15"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                ),
              },
              {
                title: "Sviluppo",
                description:
                  "Siti e web app veloci, scalabili e facili da gestire, costruiti con stack moderno.",
                icon: (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                    {/* Icona codice */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L5 12L9 6"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 6L19 12L15 18"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ),
              },
              {
                title: "SEO & Growth",
                description:
                  "Strategie SEO e tracking avanzato per portare traffico qualificato e misurare ogni risultato.",
                icon: (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    {/* Icona grafico */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19V10"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 19V5"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16 19V9"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 8L10 5L16 9L20 7"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ),
              },
            ].map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.05 * idx,
                }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.75)] backdrop-blur-xl transition-colors hover:border-sky-500/50"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    {service.icon}
                    <span className="rounded-full bg-slate-900/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                      Servizio {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50 md:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300">{service.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* CHI SIAMO */}
        <motion.section
          id="chi-siamo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionVariant}
          className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Un team snello, orientato al risultato.
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Lavoriamo come un’estensione del tuo team marketing, aiutandoti a prendere
              decisioni veloci basate sui dati. Ogni progetto parte da un workshop
              strategico, seguito da un design system su misura e da uno sviluppo curato
              nei minimi dettagli.
            </p>
            <p className="text-sm text-slate-400 md:text-[0.95rem]">
              Pochi clienti alla volta, tanta cura sulla qualità. Preferiamo partnership
              durature a progetti spot: per questo dedichiamo tempo a capire davvero il
              tuo brand, i tuoi obiettivi e le metriche che contano.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Clienti seguiti", value: "50+" },
              { label: "Anni di esperienza", value: "3" },
              { label: "Clienti soddisfatti", value: "100%" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 * idx }}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-4 text-center shadow-[0_18px_50px_rgba(15,23,42,0.75)] backdrop-blur-xl"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-sky-300">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA FINALE */}
        <motion.section
          id="contatti"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariant}
          className="relative overflow-hidden rounded-3xl border border-sky-500/50 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 px-6 py-10 shadow-[0_26px_90px_rgba(56,189,248,0.75)] md:px-10 md:py-12 lg:px-14"
        >
          <div className="pointer-events-none absolute -left-10 top-[-30%] h-60 w-60 rounded-full bg-white/20 blur-3xl opacity-60" />
          <div className="pointer-events-none absolute right-[-10%] bottom-[-30%] h-60 w-60 rounded-full bg-sky-900/40 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-950/70">
                Pronto per iniziare?
              </p>
              <h2 className="text-2xl font-semibold text-sky-950 md:text-3xl">
                Parliamo del prossimo step per il tuo brand digitale.
              </h2>
              <p className="text-sm text-sky-950/80 md:text-[0.95rem]">
                Raccontaci i tuoi obiettivi in pochi minuti: ti risponderemo con una
                proposta chiara, tempistiche e prossimi passi concreti.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="mailto:info@cliente.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-sky-100 shadow-lg shadow-slate-900/60 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Scrivici ora
              </Link>
              <p className="text-xs text-sky-950/80 md:text-[0.8rem]">
                Preferisci una call? Indica giorni e orari nelle note.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

