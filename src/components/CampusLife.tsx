import { motion } from 'framer-motion'

const gallery = [
  { src: 'images/campus/hero.jpg', alt: 'Campus panoramic view' },
  { src: 'images/campus/students.jpg', alt: 'Student life at FRA' },
  { src: 'images/sports/football.jpg', alt: 'Wildcat football' },
  { src: 'images/sports/cheerleading.jpg', alt: 'FRA cheerleading squad' },
  { src: 'images/sports/boys-basketball.jpg', alt: 'Boys basketball team' },
  { src: 'images/sports/track.jpg', alt: 'Track and field team' },
]

export function CampusLife() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-fra-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[4px] uppercase text-fra-gold font-semibold mb-2">
            Campus Life
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-fra-black mb-4">
            The Wildcat Experience
          </h2>
          <p className="text-fra-gray max-w-2xl mx-auto text-sm leading-relaxed">
            More than a school — a community. From the classroom to the
            field, FRA students build friendships and memories that last
            a lifetime.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`overflow-hidden rounded-xl ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${photo.src}`}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
