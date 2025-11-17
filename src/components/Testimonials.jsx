import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'RNJ transformed our online presence. Impeccable design and flawless reliability.',
    name: 'M. Al‑Harbi',
    role: 'Founder, Noor Tech'
  },
  {
    quote: 'We love the monthly management. Everything stays fast, updated, and polished.',
    name: 'Sara Al‑Otaibi',
    role: 'Marketing Lead, Dera Co.'
  },
  {
    quote: 'Elegant, minimal, and premium—the exact feel we wanted for our brand.',
    name: 'Omar Bin Saleh',
    role: 'CEO, Al Safa Group'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="container relative z-10 mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Clients trust RNJ
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p className="text-white/80">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">{t.name} — {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
