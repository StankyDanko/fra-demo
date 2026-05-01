import { motion } from 'framer-motion'

export function Showcase() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-fra-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Experience FRA
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            The Wildcat Story
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            From the classroom to the playing field, see what makes Flint River
            Academy a special place to learn and grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-fra-gold/20"
        >
          <video
            controls
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images/video-poster.jpg`}
            className="w-full aspect-video bg-black"
          >
            <source
              src={`${import.meta.env.BASE_URL}fra-montage.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
