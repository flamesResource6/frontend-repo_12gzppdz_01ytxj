import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white text-black">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start a conversation
        </motion.h2>
        <motion.p
          className="mt-3 text-black/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tell us about your project. We’ll reply within one business day.
        </motion.p>

        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:border-black/30" />
          <input type="email" placeholder="Email" className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:border-black/30" />
          <input type="text" placeholder="Company" className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:border-black/30" />
          <input type="text" placeholder="Phone (optional)" className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:border-black/30" />
          <textarea placeholder="Project details" rows={5} className="md:col-span-2 rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:border-black/30" />
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-black/90 transition">Send message</button>
        </form>
      </div>
    </section>
  )
}
