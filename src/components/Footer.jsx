import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0B0E] py-8 border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#718096] text-xs uppercase tracking-widest font-mono">

        <div className="text-center md:text-left">
          © {currentYear} Aegis Industrial. {t('footer.rights')}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-[#FF4F00] transition-colors duration-300">
            {t('footer.privacy', 'Polityka Prywatności')}
          </a>
          <span className="text-white/10 hidden md:inline">|</span>
          <a href="#" className="hover:text-[#FF4F00] transition-colors duration-300">
            {t('footer.terms', 'Regulamin')}
          </a>
          <span className="text-white/10 hidden md:inline">|</span>
          <a href="#" className="hover:text-[#FF4F00] transition-colors duration-300">
            RODO
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;