import { ArrowRight, Phone } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t } = useTranslation();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: 96,
            transition: { duration: 1, ease: "circOut" }
        }
    };

    return (
        <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img src="/assets/hero_bg.png" alt="Industrial Background" className="w-full h-full object-cover opacity-90" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#13151A] via-[#13151A]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#13151A] via-transparent to-black/40"></div>
            </div>

            <div className="relative z-10 max-w-[1920px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div
                    className="lg:col-span-8 flex flex-col justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div
                        variants={lineVariants}
                        className="h-1 bg-[#FF4F00] mb-8"
                    ></motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
                    >
                        <Trans
                            i18nKey="hero.title"
                            components={{ br: <br /> }}
                        />
                    </motion.h1>

                    <motion.div variants={itemVariants} className="relative mb-12">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF4F00]"></div>
                        <p className="text-lg md:text-xl text-[#A0AEC0] max-w-2xl font-light pl-6 leading-relaxed">
                            {t('hero.description')}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollToSection('katalog')}
                            className="h-[56px] bg-[#FF4F00] text-white px-8 uppercase font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 sharp-border orange-glow-hover flex items-center justify-center gap-3 group"
                        >
                            {t('hero.cta_catalog')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => scrollToSection('kontakt')}
                            className="h-[56px] bg-transparent border border-white/30 text-white px-8 uppercase font-bold text-sm tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 sharp-border flex items-center justify-center gap-3"
                        >
                            <Phone className="w-4 h-4" />
                            {t('hero.cta_contact')}
                        </button>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;