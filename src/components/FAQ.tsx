import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = ['q1', 'q2', 'q3', 'q4', 'q5'];

  const faqParams: Record<string, { label: string; value: string }[]> = {
    q1: [
      { label: 'Setup time', value: '2-4 weeks' },
      { label: 'Team support', value: 'Dedicated specialist' },
    ],
    q2: [
      { label: 'Training mode', value: 'Online & On-site' },
      { label: 'Coverage', value: 'Admins, Teachers, Support' },
    ],
    q3: [
      { label: 'Integration type', value: 'API & Webhooks' },
      { label: 'Supported systems', value: 'SIS, LMS, Accounting' },
    ],
    q4: [
      { label: 'Encryption', value: 'Enterprise-grade' },
      { label: 'Compliance', value: 'FERPA, GDPR' },
    ],
    q5: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Access', value: 'Students, Parents, Teachers' },
    ],
  };

  return (
    <section id="faqs" className="section-pad relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-glow">
            {t('faq.title')}
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={faq} 
                  className="glass-card px-6 py-2 border border-black/10 glow-border"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-foreground/80 hover:no-underline pointer-events-auto relative z-10 transition-all duration-300 py-3 data-[state=open]:py-6 data-[state=closed]:opacity-90 data-[state=open]:opacity-100">
                    {t(`faq.${faq}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    <p className="mb-4">{t(`faq.${faq}.answer`)}</p>
                    {faqParams[faq] && faqParams[faq].length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {faqParams[faq].map((param) => (
                          <div
                            key={`${faq}-${param.label}`}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3"
                          >
                            <span className="text-sm text-foreground/90">{param.label}</span>
                            <span className="text-xs text-muted-foreground">{param.value}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;