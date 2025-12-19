import { Menu, X, Phone } from 'lucide-react'; // Добавили иконку Phone
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
            <img
              src="/assets/logo.png"
              alt="Lira LTD Logo"
              className={`transform group-hover:-translate-y-1 transition-all duration-300 object-contain w-auto
                          ${isScrolled ? 'h-10' : 'h-12'}`}
            />
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

            <a
              href="tel:+48500123456"
              className="md:hidden flex items-center gap-2 text-white font-bold text-sm hover:text-[#FF4F00] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF4F00]" />
              <span>+48 500 123 456</span>
            </a>

            <div className="hidden md:flex items-center gap-1 text-sm font-medium text-[#A0AEC0]">
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
              <span className="text-[#2D333F]">|</span>
              <button
                onClick={() => changeLanguage('de')}
                className={`transition-colors hover:text-white ${currentLanguage === 'de' ? 'text-white font-bold' : ''}`}
              >
                DE
              </button>
              <span className="text-[#2D333F]">|</span>
              <button
                onClick={() => changeLanguage('fr')}
                className={`transition-colors hover:text-white ${currentLanguage === 'fr' ? 'text-white font-bold' : ''}`}
              >
                FR
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

      {/* Mobile Menu */}
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
            <div className="flex gap-4 text-lg font-bold text-white justify-center">
              <button onClick={() => changeLanguage('pl')} className={currentLanguage === 'pl' ? 'text-[#FF4F00]' : ''}>PL</button>
              <span>/</span>
              <button onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'text-[#FF4F00]' : ''}>EN</button>
              <span>/</span>
              <button onClick={() => changeLanguage('de')} className={currentLanguage === 'de' ? 'text-[#FF4F00]' : ''}>DE</button>
              <span>/</span>
              <button onClick={() => changeLanguage('fr')} className={currentLanguage === 'fr' ? 'text-[#FF4F00]' : ''}>FR</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;