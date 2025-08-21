import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-pad relative">
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
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex carousel-container"
              animate={{ x: isArabic ? `${currentSlide * 100}%` : `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="glass-card p-8 lg:p-12 text-center glow-border"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-main rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <blockquote className={`text-lg lg:text-xl text-foreground mb-8 leading-relaxed ${isArabic ? 'text-right' : 'text-left'} ${isArabic ? '' : 'italic'}`}>
                      "{t(`testimonials.${testimonial}.text`)}"
                    </blockquote>
                    
                    <div className={`flex items-center justify-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                      <div className="w-12 h-12 bg-gradient-alt rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {t(`testimonials.${testimonial}.author`).charAt(0)}
                        </span>
                      </div>
                      
                      <div className={`testimonial-author ${isArabic ? 'text-right' : 'text-left'}`}>
                        <p className="font-semibold text-foreground">
                          {t(`testimonials.${testimonial}.author`)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t(`testimonials.${testimonial}.role`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className={`flex items-center justify-center mt-8 ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={isArabic ? nextSlide : prevSlide}
              className="w-10 h-10 rounded-full glass-card hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </Button>
            
            <div className={`flex ${isArabic ? 'gap-2' : 'space-x-2'}`}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ring-1 ring-black/10 flex-shrink-0 ${
                    index === currentSlide
                      ? 'bg-primary/90 scale-125'
                      : 'bg-black/10 hover:bg-black/20'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={isArabic ? prevSlide : nextSlide}
              className="w-10 h-10 rounded-full glass-card hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;