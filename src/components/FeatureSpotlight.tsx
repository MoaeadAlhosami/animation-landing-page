import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, CreditCard, Users } from 'lucide-react';

const FeatureSpotlight = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'feature1',
      icon: Users,
      imageSide: 'right',
      gradient: 'from-accent-sky to-accent-green'
    },
    {
      key: 'feature2', 
      icon: CreditCard,
      imageSide: 'left',
      gradient: 'from-accent-amber to-primary'
    }
  ];

  return (
    <section id="features" className="section-pad relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = feature.imageSide === 'left';
            
            return (
              <motion.div
                key={feature.key}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  
                  <ul className="space-y-4">
                    {(t(`features.${feature.key}.points`, { returnObjects: true }) as string[]).map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-accent-green mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mockup Image */}
                <motion.div
                  className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="glass-card p-6 glow-border">
                    <div className="aspect-video bg-gradient-to-br from-background to-muted rounded-xl flex items-center justify-center">
                      <Icon className={`w-16 h-16 text-white/30`} />
                    </div>
                    
                    {/* Floating Stats */}
                    <motion.div
                      className="absolute -top-4 -right-4 glass-card p-3 rounded-xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className={`w-3 h-3 bg-gradient-to-br ${feature.gradient} rounded-full mb-2`} />
                      <p className="text-xs text-white font-medium">
                        {index === 0 ? '99.2% Accuracy' : '$2.5M Processed'}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;