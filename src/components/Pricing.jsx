import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white text-black">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Simple monthly pricing
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="lg:col-start-2 rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-xl">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-light">2,500</span>
              <span className="text-black/60">SAR / month</span>
            </div>
            <p className="mt-3 text-black/70">Includes hosting, management, and ongoing improvements.</p>
            <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-black/90 transition">
              Get started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
