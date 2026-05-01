import { motion } from 'framer-motion'
import { school, quickFacts } from '../data/school'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fra-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fra-black/40 via-fra-black/70 to-fra-black" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, #A28D5B 1px, transparent 1px), radial-gradient(circle at 75% 50%, #A28D5B 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-28 h-28 mx-auto mb-6">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Flint River Academy"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-serif font-bold text-white mb-4 tracking-tight"
        >
          Flint River Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-fra-gold text-lg sm:text-xl tracking-[6px] uppercase mb-8 font-light"
        >
          {school.motto}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {school.mission}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          <a
            href="#admissions"
            className="px-8 py-3 bg-fra-gold text-fra-black font-semibold rounded text-sm tracking-wider uppercase hover:bg-fra-gold-light transition-colors"
          >
            Apply Now
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-white/30 text-white rounded text-sm tracking-wider uppercase hover:border-fra-gold hover:text-fra-gold transition-colors"
          >
            Explore FRA
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-3xl mx-auto"
        >
          {quickFacts.map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="text-xl sm:text-2xl font-serif font-bold text-fra-gold">{fact.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{fact.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-fra-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
