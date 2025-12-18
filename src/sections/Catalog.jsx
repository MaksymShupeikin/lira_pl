import React, { useRef } from 'react';
import { Info } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

import { catalogSections } from '../data/catalogData';
import ProductCard from '../components/ui/ProductCard';
import { useParallax } from '../hooks/useParallax';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const floatingVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.5 }
    },
    floating: {
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
        transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

const sectionHeaderVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};


const Catalog = () => {
    const { t } = useTranslation();
    const sidebarRef = useRef(null);
    const diagramRef = useRef(null);

    useParallax(sidebarRef, diagramRef);

    return (
        <section id="katalog" className="flex flex-col lg:flex-row bg-[#13151A] border-t border-white/5">

            <div ref={sidebarRef}
                className="lg:w-1/2 bg-[#0F1115] relative min-h-[700px] lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between border-r border-white/5 overflow-hidden">

                <div className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-[#0F1115] opacity-80">
                </div>

                <motion.div
                    className="relative z-20 p-8 md:p-12 pb-0 lg:pt-20 shrink-0"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={fadeUpVariants} className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse"></div>
                        <span className="text-[10px] text-[#FF4F00] uppercase tracking-widest font-bold">
                            {t('catalog_section.sidebar.mode_label')}
                        </span>
                    </motion.div>
                    <motion.h3 variants={fadeUpVariants} className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                        <Trans i18nKey="catalog_section.sidebar.diagram_title" components={{ br: <br /> }} />
                    </motion.h3>
                    <motion.p variants={fadeUpVariants} className="text-sm text-[#718096] max-w-xs border-l-2 border-[#FF4F00] pl-4">
                        {t('catalog_section.sidebar.diagram_desc')}
                    </motion.p>
                </motion.div>

                <div className="relative z-10 flex-grow flex justify-center items-center overflow-hidden py-4">
                    <motion.img
                        ref={diagramRef}
                        src="/assets/chimney_system_diagram.png"
                        alt="Chimney System Diagram"
                        className="h-full w-auto max-w-full object-contain mx-auto will-change-transform"
                        style={{ filter: 'dropShadow(0 0 20px rgba(255, 79, 0, 0.15))' }}

                        variants={floatingVariant}
                        initial="hidden"
                        whileInView={["visible", "floating"]}
                        whileHover="hover"
                        viewport={{ once: true }}
                    />
                </div>

                <motion.div
                    className="relative z-20 p-8 md:p-12 pt-0 lg:pb-20 shrink-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-[#13151A]/80 backdrop-blur border border-white/10 p-6 sharp-border">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-[#FF4F00]/10 border border-[#FF4F00]/20 sharp-border">
                                <Info className="w-5 h-5 text-[#FF4F00]" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase mb-1">
                                    {t('catalog_section.sidebar.help_title')}
                                </h4>
                                <p className="text-xs text-[#A0AEC0] leading-relaxed">
                                    {t('catalog_section.sidebar.help_desc')}
                                </p>
                                <a href="#kontakt"
                                    className="inline-block mt-3 text-[10px] font-bold text-white uppercase tracking-widest hover:text-[#FF4F00] border-b border-[#FF4F00] pb-1 transition-colors">
                                    {t('catalog_section.sidebar.ask_expert')} &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="lg:w-1/2 p-8 lg:p-16 bg-[#13151A]">

                <motion.div
                    className="mb-12"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.span variants={fadeUpVariants} className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest">
                        {t('catalog_section.main.label')}
                    </motion.span>
                    <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold text-white uppercase tracking-tight mt-2">
                        {t('catalog_section.main.title')}
                    </motion.h2>
                    <motion.p variants={fadeUpVariants} className="text-[#A0AEC0] text-sm mt-4 max-w-md">
                        {t('catalog_section.main.desc')}
                    </motion.p>
                </motion.div>

                {catalogSections.map((section) => (
                    <div key={section.id} className="mb-16 last:mb-0">

                        <motion.div
                            className="flex items-center gap-4 mb-6 sticky top-14 bg-[#13151A]/95 py-4 backdrop-blur z-10 border-b border-[#FF4F00]/30"
                            variants={sectionHeaderVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }} 
                        >
                            <span className="text-[#FF4F00] font-mono font-bold text-xl">{section.number}</span>
                            <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                                {t(`catalog.sections.${section.id}`)}
                            </h4>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
                            variants={staggerContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {section.products.map((product) => (
                                <motion.div key={product.code} variants={cardVariants}>
                                    <ProductCard
                                        code={product.code}
                                        name={t(`catalog.products.${product.code}.name`)}
                                        image={product.image}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;