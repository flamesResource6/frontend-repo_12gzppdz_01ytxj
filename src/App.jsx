import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none select-none">
            <span className="text-xl font-light tracking-tight">RNJ</span>
            <span className="uppercase text-[10px] tracking-[0.3em] text-white/60">agency</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-sm hover:bg-white/15 transition">Start</a>
        </div>
      </header>

      <main className="">
        <Hero />
        <Services />
        <div id="features"><Features /></div>
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex items-center justify-between">
          <div className="flex flex-col leading-none select-none">
            <span className="text-lg font-light tracking-tight">RNJ</span>
            <span className="uppercase text-[10px] tracking-[0.3em] text-white/60">agency</span>
          </div>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} RNJ Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
