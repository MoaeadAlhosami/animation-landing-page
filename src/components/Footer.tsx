import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

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
    <footer id="contact" className="relative bg-white/60 backdrop-blur-sm border-t border-black/10" dir={isArabic ? 'rtl' : 'ltr'}>
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
              className={`flex items-center mb-6 ${isArabic ? 'gap-3' : 'space-x-3'}`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-main rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold gradient-text">Tanween</span>
            </motion.div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className={`flex ${isArabic ? 'gap-4' : 'space-x-4'}`}>
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
            <h3 className={`font-semibold text-foreground mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
                                             <li className={isArabic ? 'text-right' : 'text-left'}>
                  <a href="#features" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group inline-block py-1">
                    {t('footer.features')}
                    <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full ${isArabic ? 'right-0' : 'left-0'}`}></span>
                  </a>
                </li>
                               <li className={isArabic ? 'text-right' : 'text-left'}>
                  <a href="#pricing" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group inline-block py-1">
                    {t('footer.pricing')}
                    <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full ${isArabic ? 'right-0' : 'left-0'}`}></span>
                  </a>
                </li>
                               <li className={isArabic ? 'text-right' : 'text-left'}>
                  <a href="#support" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group inline-block py-1">
                    {t('footer.support')}
                    <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full ${isArabic ? 'right-0' : 'left-0'}`}></span>
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
            <h3 className={`font-semibold text-foreground mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>{t('footer.company')}</h3>
            <ul className="space-y-3">
                                             <li className={isArabic ? 'text-right' : 'text-left'}>
                  <a href="#about" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group inline-block py-1">
                    {t('footer.aboutUs')}
                    <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full ${isArabic ? 'right-0' : 'left-0'}`}></span>
                  </a>
                </li>
                               <li className={isArabic ? 'text-right' : 'text-left'}>
                  <a href="#careers" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group inline-block py-1">
                    {t('footer.careers')}
                    <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full ${isArabic ? 'right-0' : 'left-0'}`}></span>
                  </a>
                </li>
                               <li className={isArabic ? 'text-right' : 'text-left'}>
                  <a href="#blog" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group inline-block py-1">
                    {t('footer.blog')}
                    <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full ${isArabic ? 'right-0' : 'left-0'}`}></span>
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
            <h3 className={`font-semibold text-foreground mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>{t('footer.newsletter.title')}</h3>
            <div className="space-y-4">
              <div className={`flex ${isArabic ? 'gap-2' : 'space-x-2'}`}>
                <Input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="glass-card border-black/10 bg-white/60 text-foreground placeholder:text-muted-foreground"
                  dir={isArabic ? 'rtl' : 'ltr'}
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

