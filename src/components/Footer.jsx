import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0B0E] py-12 border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4F00] flex items-center justify-center">
            <span className="font-bold text-white tracking-tighter text-xs">L</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-white">
            LIRA<span className="text-[#FF4F00]">.</span>PL
          </span>
        </div>
        
        <div className="text-[#718096] text-xs uppercase tracking-widest">
          © 2024 Lira Polska. Industrial Chimney Systems.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-[#718096] hover:text-[#FF4F00] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#718096] hover:text-[#FF4F00] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#718096] hover:text-[#FF4F00] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;