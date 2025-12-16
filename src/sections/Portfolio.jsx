import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { useCarousel } from '../hooks/useCarousel';

const portfolioImages = [
    "/assets/clients_results/1.jpg",
    "/assets/clients_results/2.jpg",
    "/assets/clients_results/3.jpg",
    "/assets/clients_results/4.jpg",
    "/assets/clients_results/5.jpg",
    "/assets/clients_results/6.jpg",
    "/assets/clients_results/7.jpg",
    "/assets/clients_results/8.jpg"
];

const Portfolio = () => {
    const { t } = useTranslation();
    const {
        currentIndex,
        itemsToShow,
        nextSlide,
        prevSlide,
        setIndex,
        swipeHandlers
    } = useCarousel(portfolioImages.length);

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const controlsVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
        }
    };

    const imageEntryVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "backOut" }
        }
    };

    return (
        <section className="py-24 bg-[#13151A] border-t border-white/5 relative overflow-hidden" id="realizacje">

            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
            >
            </motion.div>

            <div className="max-w-[1920px] mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <motion.div
                        className="text-center md:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <span className="text-[#FF4F00] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            {t('portfolio.label')}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                            <Trans i18nKey="portfolio.title" components={{ br: <br /> }} />
                        </h2>
                    </motion.div>

                    <motion.div
                        className="hidden md:flex gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={controlsVariants}
                    >
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 border border-white/10 bg-[#1C1F26] text-white hover:bg-[#FF4F00] hover:border-[#FF4F00] transition-all duration-300 sharp-border flex items-center justify-center group"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 border border-white/10 bg-[#1C1F26] text-white hover:bg-[#FF4F00] hover:border-[#FF4F00] transition-all duration-300 sharp-border flex items-center justify-center group"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="overflow-hidden"
                    {...swipeHandlers}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {portfolioImages.map((img, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-2"
                                style={{ width: `${100 / itemsToShow}%` }}
                            >
                                <motion.div
                                    className="group cursor-pointer h-full"

                                >
                                    <div className="relative h-[300px] md:h-[400px] bg-[#1C1F26] sharp-border overflow-hidden border border-white/5 hover:border-[#FF4F00] transition-all duration-300">
                                        <img
                                            src={img}
                                            alt={`Realizacja ${index + 1}`}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 will-change-transform"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#13151A]/80 via-transparent to-transparent pointer-events-none"></div>

                                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {t('portfolio.project_prefix')} {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="flex md:hidden items-center justify-between mt-8 px-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 border border-white/10 bg-[#1C1F26] text-white active:bg-[#FF4F00] active:border-[#FF4F00] transition-colors sharp-border flex items-center justify-center"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: portfolioImages.length }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setIndex(idx)}
                                className={`h-1 transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-[#FF4F00]' : 'w-2 bg-white/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 border border-white/10 bg-[#1C1F26] text-white active:bg-[#FF4F00] active:border-[#FF4F00] transition-colors sharp-border flex items-center justify-center"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default Portfolio;