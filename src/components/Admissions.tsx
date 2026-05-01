import { motion } from 'framer-motion'

const steps = [
  {
    step: '1',
    title: 'Schedule a Tour',
    description: 'Visit our campus and meet our faculty. See firsthand what makes FRA special.',
  },
  {
    step: '2',
    title: 'Submit Application',
    description: 'Complete the online application and pay the registration fee.',
  },
  {
    step: '3',
    title: 'Student Assessment',
    description: 'Once the application is complete, we schedule an age-appropriate assessment.',
  },
  {
    step: '4',
    title: 'Welcome to FRA',
    description: 'Receive your acceptance and join the Wildcat family.',
  },
]

export function Admissions() {
  return (
    <section id="admissions" className="py-20 px-4 sm:px-6 bg-fra-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Admissions
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-fra-black mb-4">
            Join the Wildcat Family
          </h2>
          <p className="text-fra-gray max-w-2xl mx-auto text-sm leading-relaxed">
            Now accepting applications for the 2026-2027 school year. Financial
            aid available through the Apogee Georgia Student Scholarship
            Organization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-fra-gold/10 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-fra-gold text-fra-black flex items-center justify-center mx-auto mb-4 font-serif font-bold text-lg">
                {item.step}
              </div>
              <h3 className="font-serif font-bold text-fra-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-fra-gray leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-fra-black rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-white mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Contact us to schedule a campus tour or begin your application.
            We look forward to meeting your family.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:Alton.White@flintriveracademy.com"
              className="px-6 py-3 bg-fra-gold text-fra-black font-semibold rounded text-sm tracking-wider uppercase hover:bg-fra-gold-light transition-colors"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:7065532541"
              className="px-6 py-3 border border-white/30 text-white rounded text-sm tracking-wider uppercase hover:border-fra-gold hover:text-fra-gold transition-colors"
            >
              Call 706-553-2541
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
