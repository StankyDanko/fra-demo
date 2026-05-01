import { motion } from 'framer-motion'
import { divisions } from '../data/school'

const icons: Record<string, React.ReactNode> = {
  sun: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
  book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
  compass: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />,
  graduation: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
}

export function Academics() {
  return (
    <section id="academics" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Academics
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-fra-black mb-4">
            Four Divisions, One Mission
          </h2>
          <p className="text-fra-gray max-w-2xl mx-auto text-sm leading-relaxed">
            From preschool through graduation, every division at Flint River
            Academy is designed to challenge, support, and inspire students at
            their stage of development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((div, i) => (
            <motion.div
              key={div.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-fra-cream rounded-xl p-6 border border-fra-gold/10 hover:border-fra-gold/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-fra-gold/10 flex items-center justify-center mb-4 group-hover:bg-fra-gold/20 transition-colors">
                <svg className="w-6 h-6 text-fra-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[div.icon]}
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-fra-black mb-1">
                {div.name}
              </h3>
              <p className="text-xs text-fra-gold font-semibold tracking-wider uppercase mb-3">
                {div.grades}
              </p>
              <p className="text-sm text-fra-gray leading-relaxed">
                {div.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
