"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 via-slate-950 to-indigo-900/20 pointer-events-none" />
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium">
              Progetto e sviluppo siti web moderni
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              M.D. Websites
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Design pulito, veloci da caricare e pensati per convertire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="https://www.instagram.com/mdweb.design/" target="_blank" primary>
                Parliamo del tuo sito
              </AnimatedButton>
              <AnimatedButton href="#servizi">
                Scopri cosa offro
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="py-24 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <Section className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cosa offro?</h2>
            <p className="text-slate-400 text-lg">Soluzioni web su misura per il tuo business</p>
          </Section>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "✈️", title: "Landing Page", desc: "Pagine ad alta conversione per campagne pubblicitarie. Progettate per trasformare i visitatori in clienti." },
              { icon: "🏢", title: "Siti Vetrina", desc: "Presenza online professionale per la tua attività. Design moderno e contenuti ottimizzati per il tuo settore." },
              { icon: "🔄", title: "Restyling Siti", desc: "Rinnovo completo di siti obsoleti o lenti. Porto il tuo sito agli standard moderni." },
            ].map((s, i) => (
              <Section key={i}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-sky-500/30 transition-colors h-full cursor-default"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <section id="chi-siamo" className="py-24 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Section>
            <span className="text-sky-400 font-medium text-sm uppercase tracking-widest mb-4 block">💻 Web Developer</span>
            <h2 className="text-4xl font-bold mb-6">Chi sono e come posso aiutarti</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Sono M.D., sviluppatore web specializzato nella creazione di siti per piccole aziende.
              Studio informatica e applico ciò che imparo per realizzare siti semplici, moderni e orientati ai risultati.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Ogni sito che realizzo è pensato per essere semplice da gestire e orientato alla conversione, non solo all'estetica.
            </p>
            <AnimatedButton href="https://www.instagram.com/mdweb.design/" target="_blank" primary>
              Scopri come posso aiutarti →
            </AnimatedButton>
          </Section>
          <Section className="grid grid-cols-2 gap-6">
            {[
              { icon: "✓", title: "Soluzioni", sub: "Concrete" },
              { icon: "✓", title: "Comunicazione", sub: "Diretta" },
              { icon: "✓", title: "Risultati", sub: "Misurabili" },
              { icon: "🎯", title: "Orientato", sub: "Alla conversione" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 text-center cursor-default"
              >
                <div className="text-3xl font-bold text-sky-400 mb-2">{s.icon}</div>
                <div className="text-white font-semibold">{s.title}</div>
                <div className="text-slate-400 text-sm">{s.sub}</div>
              </motion.div>
            ))}
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