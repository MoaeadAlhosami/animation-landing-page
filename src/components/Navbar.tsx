import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'features', href: '#features' },
    { key: 'modules', href: '#modules' },
    { key: 'video', href: '#video' },
    { key: 'pricing', href: '#pricing' },
    { key: 'faqs', href: '#faqs' },
    { key: 'contact', href: '#contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
         <motion.nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? 'backdrop-blur-xl bg-white/70 border-b border-border dark:bg-background/80 dark:border-white/10'
           : 'bg-transparent'
       }`}
       dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.5 }}
     >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
                     {/* Logo */}
           <motion.div
             className="flex items-center gap-3"
             whileHover={{ scale: 1.05 }}
           >
             <div className="w-10 h-10 bg-gradient-main rounded-xl flex items-center justify-center">
               <span className="text-foreground font-bold text-lg">T</span>
             </div>
             <span className="text-xl lg:text-2xl font-bold gradient-text">
               Tanween
             </span>
           </motion.div>

                     {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center gap-8">
             {navItems.map((item) => (
               <a
                 key={item.key}
                 href={item.href}
                 className="text-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-accent-amber hover:to-primary hover:bg-clip-text transition-all duration-300 font-medium relative group whitespace-nowrap px-2 py-1"
               >
                 {t(`nav.${item.key}`)}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
               </a>
             ))}
           </div>

                     {/* Desktop CTAs & Language Switcher */}
           <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-foreground focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                  <Globe className="w-4 h-4 mr-2" />
                  {i18n.language.toUpperCase()}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-white/20">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ar')}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 pb-6 glass-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-4 px-4 py-4">
              {navItems.map((item) => (
                                 <a
                   key={item.key}
                   href={item.href}
                   className="block text-foreground hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {t(`nav.${item.key}`)}
                 </a>
              ))}
              
              <div className="pt-4 border-t border-white/10 space-y-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-foreground focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                      <Globe className="w-4 h-4 mr-2" />
                      {i18n.language.toUpperCase()}
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-card border-white/20">
                    <DropdownMenuItem onClick={() => changeLanguage('en')}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage('ar')}>
                      العربية
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-white"
                >
                  {t('nav.download')}
                </Button>
                
                <Button className="w-full pill-primary">
                  {t('nav.bookDemo')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;