import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { key: 'features', href: '#features' },
    { key: 'pricing', href: '#pricing' },
    { key: 'support', href: '#support' },
  ];

  const companyLinks = [
    { key: 'aboutUs', href: '#about' },
    { key: 'careers', href: '#careers' },
    { key: 'blog', href: '#blog' },
  ];

  return (
    <footer id="contact" className="relative bg-white/60 backdrop-blur-sm border-t border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-main rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <span className="text-xl font-bold gradient-text">CampusFlow</span>
            </motion.div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 glass-card rounded-lg flex items-center justify-center text-muted-foreground transition-colors duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline-animate">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline-animate">
                  {t('footer.pricing')}
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline-animate">
                  {t('footer.support')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline-animate">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline-animate">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline-animate">
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">{t('footer.newsletter.title')}</h3>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="glass-card border-black/10 bg-white/60 text-foreground placeholder:text-muted-foreground"
                />
                <Button className="pill-primary px-4">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <Button className="w-full pill-secondary">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

