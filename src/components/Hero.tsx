import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Play, Download } from 'lucide-react';
import dashboardMockup from '../../public/assets/dashboard-mockup.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-pad relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-white text-shadow-glow">
                {t('hero.title')}
              </span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="pill-primary text-lg px-8 py-4 h-auto">
                <Play className="w-5 h-5 mr-2" />
                {t('hero.bookDemo')}
              </Button>
              
              <Button className="pill-secondary text-lg px-8 py-4 h-auto">
                <Download className="w-5 h-5 mr-2" />
                {t('hero.downloadBrochure')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="glass-card p-4 lg:p-8 glow-border">
              <motion.img
                src={dashboardMockup}
                alt="CampusFlow Dashboard"
                className="w-full h-auto rounded-xl shadow-soft"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Feature Cards */}
              <motion.div
                className="absolute -top-4 -left-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 bg-accent-green rounded-full mb-2" />
                <p className="text-xs text-white font-medium">98% Attendance</p>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-3 h-3 bg-accent-amber rounded-full mb-2" />
                <p className="text-xs text-white font-medium">$50K Collected</p>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="w-3 h-3 bg-accent-sky rounded-full mb-2" />
                <p className="text-xs text-white font-medium">24 Messages</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;