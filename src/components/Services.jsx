import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Services() {
  const items = [
    'We design, build, and launch modern websites',
    'Ongoing monthly management keeps you worry‑free',
    'Fast hosting, monitoring, and performance care',
  ]

  return (
    <section className="relative bg-white text-black">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Build once. Managed monthly.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-black/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          RNJ Agency designs premium, bilingual websites and manages them month to month so you can focus on your business.
        </motion.p>

        <div className="mt-10 grid gap-4">
          {items.map((t, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/70 backdrop-blur px-4 py-3 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Check className="h-5 w-5 text-black/80 mt-0.5" />
              <p className="text-sm md:text-base text-black/80">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
