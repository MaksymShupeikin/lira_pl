import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useHeader } from '../hooks/useHeader';

const Header = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    changeLanguage,
    currentLanguage,
    scrollToSection,
    navLinks,
    t
  } = useHeader();

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b 
                ${isScrolled
            ? 'bg-[#13151A]/95 backdrop-blur-md border-[#FF4F00]/20 py-2'
            : 'bg-[#13151A] border-white/5 py-6'
          }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 flex items-center justify-between">


          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >

            <div className={`bg-[#FF4F00] flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 sharp-border
                            ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
            >
              <span className={`font-bold text-white transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>L</span>
            </div>

            <div className="flex flex-col">
              <span className={`font-black tracking-tighter uppercase text-white leading-none transition-all duration-300 
                                ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
                LIRA<span className="text-[#FF4F00]">.</span>PL
              </span>
              <span className="text-[10px] text-[#A0AEC0] tracking-widest uppercase leading-none mt-0.5">
                Systemy Kominowe
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="relative text-sm font-medium uppercase tracking-widest text-white hover:text-[#FF4F00] transition-colors py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4F00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-8">

            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] text-[#A0AEC0] uppercase tracking-wider">
                {t('nav.hotline')}
              </span>
              <a href="tel:+48500123456" className="text-lg font-bold text-[#FF4F00] tracking-tight hover:text-white transition-colors">
                +48 500 123 456
              </a>
            </div>

            <div className="flex items-center gap-1 text-sm font-medium text-[#A0AEC0]">
              <button
                onClick={() => changeLanguage('pl')}
                className={`transition-colors hover:text-white ${currentLanguage === 'pl' ? 'text-white font-bold' : ''}`}
              >
                PL
              </button>
              <span className="text-[#2D333F]">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`transition-colors hover:text-white ${currentLanguage === 'en' ? 'text-white font-bold' : ''}`}
              >
                EN
              </button>
            </div>

            <button
              className="lg:hidden text-white hover:text-[#FF4F00] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#13151A] pt-32 px-6 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-2xl font-bold uppercase text-white hover:text-[#FF4F00] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-8 pt-8 border-t border-white/10">
            <span className="text-sm text-[#A0AEC0] uppercase tracking-widest block mb-2">{t('nav.contact')}</span>
            <a href="tel:+48500123456" className="text-2xl font-bold text-[#FF4F00] block mb-6">+48 500 123 456</a>

            <div className="flex gap-4 text-lg font-bold text-white">
              <button onClick={() => changeLanguage('pl')} className={currentLanguage === 'pl' ? 'text-[#FF4F00]' : ''}>PL</button>
              <span>/</span>
              <button onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'text-[#FF4F00]' : ''}>EN</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;