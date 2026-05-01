import { motion } from 'framer-motion'
import { sports } from '../data/school'

export function Athletics() {
  return (
    <section id="athletics" className="py-20 px-4 sm:px-6 bg-fra-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Athletics
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Go Wildcats
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            Nine competitive programs in the Georgia Independent Athletic
            Association. Building teamwork, discipline, and character through
            sport.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/5 rounded-xl p-5 border border-fra-gold/10 hover:border-fra-gold/30 transition-all hover:bg-white/10"
            >
              <h3 className="font-serif font-bold text-white text-sm sm:text-base mb-1">
                {sport.name}
              </h3>
              <p className="text-fra-gold text-xs font-medium mb-2">
                Coach {sport.coach}
              </p>
              <span className="inline-block text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/10 text-white/40">
                {sport.season}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white/5 rounded-xl px-8 py-5 border border-fra-gold/10">
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-fra-gold">GIAA</p>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">
                Class AA
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-fra-gold">9</p>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">
                Sports
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-fra-gold">3</p>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">
                Seasons
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
