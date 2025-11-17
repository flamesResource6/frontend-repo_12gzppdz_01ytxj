import { motion } from 'framer-motion'
import { Languages, Gauge, Bot, Cube, Smartphone, Infinity } from 'lucide-react'

const features = [
  { icon: Languages, title: 'Bilingual', desc: 'Arabic + English content and UI' },
  { icon: Gauge, title: 'Fast Hosting', desc: 'Optimized, reliable infrastructure' },
  { icon: Bot, title: 'AI Chatbot', desc: 'Integrated assistant for your site' },
  { icon: Cube, title: '3D Visuals', desc: 'Premium graphics and interactions' },
  { icon: Smartphone, title: 'Responsive', desc: 'Pixel‑perfect on all devices' },
  { icon: Infinity, title: 'Unlimited Edits', desc: 'Iterate without limits' },
]

export default function Features() {
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
          Premium features
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-lg font-medium text-white/90">{title}</h3>
              <p className="mt-1 text-sm text-white/60">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
