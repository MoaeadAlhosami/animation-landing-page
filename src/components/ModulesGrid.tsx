import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  UserPlus, 
  Users, 
  Calendar, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  BarChart3, 
  Globe 
} from 'lucide-react';

const ModulesGrid = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const modules = [
    { key: 'admissions', icon: UserPlus, color: 'text-accent-green' },
    { key: 'attendance', icon: Users, color: 'text-accent-sky' },
    { key: 'timetable', icon: Calendar, color: 'text-accent-amber' },
    { key: 'exams', icon: FileText, color: 'text-primary' },
    { key: 'fees', icon: CreditCard, color: 'text-accent-green' },
    { key: 'communication', icon: MessageSquare, color: 'text-accent-sky' },
    { key: 'analytics', icon: BarChart3, color: 'text-accent-amber' },
    { key: 'portal', icon: Globe, color: 'text-primary' },
  ];

  return (
    <section id="modules" className="section-pad relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-glow">
            {t('modules.title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.key}
                className="glass-card p-6 glow-border group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`w-8 h-8 ${module.color}`} />
                </motion.div>
                
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {t(`modules.${module.key}.title`)}
                </h3>
                
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {(t(`modules.${module.key}.features`, { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`w-2 h-2 bg-accent-sky rounded-full mt-1.5 flex-shrink-0 ${isArabic ? 'ml-3' : 'mr-3'}`} />
                      <span className="flex-1 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;

