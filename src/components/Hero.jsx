import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Logo() {
  return (
    <div className="flex flex-col items-center select-none">
      <motion.span
        className="text-6xl md:text-7xl font-light tracking-tight text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        RNJ
      </motion.span>
      <motion.span
        className="uppercase text-xs md:text-sm tracking-[0.35em] text-white/70 mt-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
      >
        agency
      </motion.span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignettes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(255,255,255,0.08),transparent),radial-gradient(40%_30%_at_80%_20%,rgba(99,102,241,0.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-28 pb-24 flex flex-col items-center text-center">
        <Logo />
        <motion.p
          className="mt-8 max-w-2xl text-sm md:text-base text-white/80 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Modern web development and monthly website management for brands that demand a premium, reliable online presence.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#contact" className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-6 py-3 text-white text-sm md:text-base hover:bg-white/15 transition">
            Start your project
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm md:text-base hover:bg-white/90 transition">
            Pricing
          </a>
        </motion.div>
      </div>
    </section>
  )
}
