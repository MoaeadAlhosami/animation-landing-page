import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';

const AnimatedStats = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counts, setCounts] = useState({
    students: 0,
    schools: 0,
    hours: 0,
    reports: 0
  });

  const stats = [
    { 
      key: 'students', 
      target: 50000, 
      suffix: '+',
      gradient: 'from-accent-sky to-accent-green'
    },
    { 
      key: 'schools', 
      target: 500, 
      suffix: '+',
      gradient: 'from-primary to-accent-sky'
    },
    { 
      key: 'hours', 
      target: 10000, 
      suffix: '+',
      gradient: 'from-accent-amber to-accent-green'
    },
    { 
      key: 'reports', 
      target: 1000000, 
      suffix: '+',
      gradient: 'from-accent-green to-primary'
    }
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        const duration = 2000; // 2 seconds
        const increment = stat.target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 16);
      });
    }
  }, [isInView]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="section-pad relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="text-center glass-card p-8 glow-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div
                className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {formatNumber(counts[stat.key as keyof typeof counts])}{stat.suffix}
              </motion.div>
              
              <p className="text-muted-foreground font-medium">
                {t(`stats.${stat.key}Label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;