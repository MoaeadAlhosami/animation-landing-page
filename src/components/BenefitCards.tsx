import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, MessageCircle, BarChart3 } from 'lucide-react';

const BenefitCards = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Zap,
      key: 'benefit1',
      gradient: 'from-accent-amber to-accent-green'
    },
    {
      icon: MessageCircle,
      key: 'benefit2', 
      gradient: 'from-primary to-accent-sky'
    },
    {
      icon: BarChart3,
      key: 'benefit3',
      gradient: 'from-accent-sky to-accent-green'
    }
  ];

  return (
    <section className="section-pad relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t('benefits.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                className="glass-card p-8 text-center glow-border group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                  {t(`benefits.${benefit.key}.title`)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(`benefits.${benefit.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;
