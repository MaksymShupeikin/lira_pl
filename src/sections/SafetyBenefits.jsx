import { Droplets, Flame, Award } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

const SafetyBenefits = () => {
    const { t } = useTranslation();

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="py-24 bg-[#13151A]" id="zalety">
            <div className="max-w-[1920px] mx-auto px-6">

                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={headerVariants}
                >
                    <span className="text-[#FF4F00] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {t('safety.label')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        <Trans i18nKey="safety.title" components={{ br: <br /> }} />
                    </h2>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >

                    <motion.div 
                        variants={cardVariants}
                        className="bg-[#1C1F26] p-10 sharp-border border-b-[2px] border-transparent hover:border-[#FF4F00] transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Droplets className="w-32 h-32 text-white" />
                        </div>
                        <div className="w-12 h-12 border border-[#FF4F00] flex items-center justify-center mb-8 sharp-border bg-[#13151A]">
                            <Droplets className="w-6 h-6 text-[#FF4F00]" />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                            {t('safety.corrosion_title')}
                        </h3>
                        <p className="text-[#A0AEC0] leading-relaxed text-sm">
                            {t('safety.corrosion_desc')}
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="bg-[#1C1F26] p-10 sharp-border border-b-[2px] border-transparent hover:border-[#FF4F00] transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Flame className="w-32 h-32 text-white" />
                        </div>
                        <div className="w-12 h-12 border border-[#FF4F00] flex items-center justify-center mb-8 sharp-border bg-[#13151A]">
                            <Flame className="w-6 h-6 text-[#FF4F00]" />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                            {t('safety.fire_title')}
                        </h3>
                        <p className="text-[#A0AEC0] leading-relaxed text-sm">
                            {t('safety.fire_desc')}
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="bg-[#1C1F26] p-10 sharp-border border-b-[2px] border-transparent hover:border-[#FF4F00] transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award className="w-32 h-32 text-white" />
                        </div>
                        <div className="w-12 h-12 border border-[#FF4F00] flex items-center justify-center mb-8 sharp-border bg-[#13151A]">
                            <Award className="w-6 h-6 text-[#FF4F00]" />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                            {t('safety.warranty_title')}
                        </h3>
                        <p className="text-[#A0AEC0] leading-relaxed text-sm">
                            {t('safety.warranty_desc')}
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default SafetyBenefits;