import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, Check } from 'lucide-react';
import { useState } from 'react';

const VideoShowcase = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="section-pad relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t('video.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Player */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-4 glow-border">
              <div className="aspect-video bg-gradient-to-br from-background to-muted rounded-xl relative overflow-hidden">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-amber/20" />
                
                {/* Play Button */}
                {!isPlaying && (
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center group"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-main rounded-full flex items-center justify-center shadow-glow group-hover:shadow-glow-amber transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </motion.button>
                )}
                
                {/* Video simulation */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary to-accent-sky flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-white text-center">
                      <motion.div
                        className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-lg font-medium">Video Playing...</p>
                    </div>
                  </motion.div>
                )}
                
                {/* Floating engagement metrics */}
                <motion.div
                  className="absolute top-4 right-4 glass-card p-2 rounded-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mb-1" />
                  <p className="text-xs text-white font-medium">LIVE</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Video Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            <ul className="space-y-6">
              {(t('video.highlights', { returnObjects: true }) as string[]).map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-8 h-8 bg-gradient-main rounded-full flex items-center justify-center mt-1 flex-shrink-0 ${isArabic ? 'ml-4' : 'mr-4'}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <p className="text-lg text-foreground leading-relaxed">{highlight}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;