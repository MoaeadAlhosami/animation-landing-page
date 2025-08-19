import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const TrustBadges = () => {
  const { t } = useTranslation();
  const schools = [
    { name: 'Al Noor International School', initials: 'AN' },
    { name: 'Future Academy', initials: 'FA' },
    { name: 'Horizon College', initials: 'HC' },
    { name: 'Cedar High School', initials: 'CH' },
    { name: 'Blue Valley School', initials: 'BV' },
    { name: 'Palm Grove Institute', initials: 'PG' },
    { name: 'Summit Learning Center', initials: 'SL' },
  ];

  return (
    <section className="py-12 lg:py-16 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            {t('trust.title')}
          </h3>
          <motion.ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {schools.map((school, idx) => (
              <motion.li
                key={school.name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 }
                }}
                className="glass-card p-4 flex flex-col items-center justify-center gap-3 rounded-2xl shadow-soft hover:shadow-glow transition-shadow duration-300"
              >
                <Avatar className="h-14 w-14 ring-1 ring-white/10 shadow-glow">
                  <AvatarFallback className="text-sm font-semibold text-white bg-gradient-to-br from-accent-sky to-primary">
                    {school.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-foreground/90 line-clamp-1">{school.name}</p>
                  <p className="text-[11px] text-muted-foreground">Trusted Partner</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;