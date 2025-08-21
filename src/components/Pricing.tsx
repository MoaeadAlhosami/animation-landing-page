import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const plans = [
    {
      key: 'starter',
      popular: false,
      gradient: 'from-accent-sky to-accent-green'
    },
    {
      key: 'enterprise',
      popular: true,
      gradient: 'from-primary to-accent-amber'
    }
  ];

  return (
    <section id="pricing" className="section-pad relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-glow">
            {t('pricing.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const hasOriginalPrice = t(`pricing.${plan.key}.originalPrice`) !== `pricing.${plan.key}.originalPrice`;
            
            return (
              <motion.div
                key={plan.key}
                className={`relative glass-card p-8 glow-border ${
                  isPopular ? 'scale-105 lg:scale-110' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: isPopular ? 1.02 : 1.02 }}
              >
                {isPopular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`px-4 py-2 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center space-x-2`}>
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-sm">Most Popular</span>
                    </div>
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t(`pricing.${plan.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(`pricing.${plan.key}.subtitle`)}
                  </p>

                  <div className="flex items-baseline justify-center space-x-2">
                    {hasOriginalPrice && (
                      <span className="text-2xl text-muted-foreground line-through">
                        {t(`pricing.${plan.key}.originalPrice`)}
                      </span>
                    )}
                    <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {t(`pricing.${plan.key}.price`)}
                    </span>
                    <span className="text-muted-foreground">
                      {t(`pricing.${plan.key}.period`)}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8" dir={isArabic ? 'rtl' : 'ltr'}>
                  {(t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[]).map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <Check className={`w-5 h-5 text-accent-green mt-0.5 flex-shrink-0 ${isArabic ? 'ml-3' : 'mr-3'}`} />
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${isPopular ? 'pill-primary' : 'pill-secondary'} text-lg py-6 h-auto`}
                >
                  {t(`pricing.${plan.key}.cta`)}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

