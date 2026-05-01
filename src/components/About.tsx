import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-fra-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Welcome to FRA
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-fra-black mb-8">
            A Letter From Our Head of School
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5 text-fra-gray-dark text-sm leading-relaxed"
          >
            <p>
              Flint River Academy is proud to serve students from 3K through
              12th grade, providing a complete college preparatory education. Our
              school is dedicated to cultivating the whole student &mdash;
              academically, physically, and in character &mdash; while preparing
              them for success in higher education and in life.
            </p>
            <p>
              From the earliest years in our 3K program through the final steps
              toward graduation, we offer rigorous academics designed to
              challenge students at every level, small class sizes that allow for
              personalized instruction, athletic opportunities that promote
              teamwork and discipline, and character development through
              Christian values and service.
            </p>
            <p>
              At Flint River Academy, education is more than textbooks and tests
              &mdash; it&rsquo;s about building strong minds, healthy bodies,
              and grounded values. Whether your child is just beginning their
              educational journey or preparing for the next chapter after high
              school, FRA is committed to walking alongside them every step of
              the way.
            </p>
            <p className="text-fra-gold font-serif text-base italic">
              &ldquo;We invite you to experience the difference of a Flint River
              Academy education.&rdquo;
            </p>
            <p className="font-semibold text-fra-black">
              Alton White
              <span className="block text-xs text-fra-gray font-normal mt-1">
                Head of School
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-fra-gold/10">
              <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-4">
                What Sets Us Apart
              </p>
              {[
                'Small class sizes with personalized attention',
                'College preparatory curriculum with AP courses',
                'Nine competitive athletic programs',
                'Character development in a Christian environment',
                'SACS and SAIS accredited',
                'Dual enrollment opportunities',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fra-gold shrink-0 mt-1.5" />
                  <p className="text-sm text-fra-gray-dark">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-fra-black rounded-xl p-6 text-center">
              <p className="text-fra-gold font-serif text-3xl font-bold mb-1">Since 1967</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">
                Serving Meriwether County
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
