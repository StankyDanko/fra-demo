import { school } from '../data/school'

export function Footer() {
  return (
    <footer className="bg-fra-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-serif font-bold text-fra-gold text-lg mb-3">
              Flint River Academy
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              {school.mission}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-3">
              Quick Links
            </p>
            <div className="space-y-2">
              {['School Tours', 'Apply Now', 'Employment', 'School Store', 'Yearbook'].map(
                (link) => (
                  <p
                    key={link}
                    className="text-xs text-white/50 hover:text-fra-gold transition-colors cursor-pointer"
                  >
                    {link}
                  </p>
                ),
              )}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-fra-gold font-semibold mb-3">
              Contact
            </p>
            <p className="text-xs text-white/50">{school.address}</p>
            <p className="text-xs text-white/50 mt-1">{school.phone}</p>
            <div className="flex gap-3 mt-4">
              <a
                href={school.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-fra-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href={school.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-fra-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-[10px] text-white/30 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Flint River Academy &mdash; Woodbury, Georgia
          </p>
        </div>
      </div>
    </footer>
  )
}
