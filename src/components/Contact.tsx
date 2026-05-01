import { motion } from 'framer-motion'
import { school, administration } from '../data/school'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-fra-black mb-4">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-3">
                Visit Us
              </p>
              <p className="text-fra-gray-dark text-sm">{school.address}</p>
              <p className="text-fra-gray-dark text-sm mt-1">{school.phone}</p>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-3">
                Administration
              </p>
              <div className="space-y-3">
                {administration.map((person) => (
                  <div key={person.name} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-fra-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-fra-gold text-xs font-bold">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-fra-black">{person.name}</p>
                      <p className="text-xs text-fra-gray">{person.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href={school.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-fra-cream text-fra-gray-dark text-xs hover:text-fra-gold transition-colors border border-fra-gold/10"
                >
                  Instagram
                </a>
                <a
                  href={school.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-fra-cream text-fra-gray-dark text-xs hover:text-fra-gold transition-colors border border-fra-gold/10"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-fra-cream rounded-xl p-6 border border-fra-gold/10"
          >
            <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-4">
              Quick Links
            </p>
            <div className="space-y-2">
              {[
                { label: 'Parent Portal (RenWeb)', desc: 'Grades, attendance, and communication' },
                { label: 'FACTS Financial', desc: 'Tuition payments and financial aid' },
                { label: 'School Calendar', desc: 'Events, holidays, and important dates' },
                { label: 'School Store', desc: 'Spirit wear and Wildcat merchandise' },
                { label: 'Lunch Menu', desc: 'Daily breakfast and lunch options' },
                { label: 'Employment', desc: 'Join our faculty and staff' },
              ].map((link) => (
                <div
                  key={link.label}
                  className="p-3 rounded-lg hover:bg-white transition-colors cursor-pointer group"
                >
                  <p className="text-sm font-medium text-fra-black group-hover:text-fra-gold transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-fra-gray">{link.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
