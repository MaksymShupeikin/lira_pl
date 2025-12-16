import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TrustBar = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="technologia" className="bg-[#1C1F26] border-t border-[#FF4F00] relative z-20">
            <div className="max-w-[1920px] mx-auto">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <motion.div
                        variants={itemVariants}
                        className="p-8 group hover:bg-[#1C1F26] transition-colors duration-300"
                    >
                        <span className="block text-[10px] text-[#A0AEC0] uppercase tracking-widest mb-2 group-hover:text-[#FF4F00] transition-colors">
                            {t('trustbar.steel_label')}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                            {t('trustbar.steel_title')}
                        </h3>
                        <p className="text-sm text-[#718096]">
                            {t('trustbar.steel_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="p-8 group hover:bg-[#1C1F26] transition-colors duration-300"
                    >
                        <span className="block text-[10px] text-[#A0AEC0] uppercase tracking-widest mb-2 group-hover:text-[#FF4F00] transition-colors">
                            {t('trustbar.tech_label')}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                            {t('trustbar.tech_title')}
                        </h3>
                        <p className="text-sm text-[#718096]">
                            {t('trustbar.tech_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="p-8 group hover:bg-[#1C1F26] transition-colors duration-300"
                    >
                        <span className="block text-[10px] text-[#A0AEC0] uppercase tracking-widest mb-2 group-hover:text-[#FF4F00] transition-colors">
                            {t('trustbar.thermal_label')}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                            {t('trustbar.thermal_title')}
                        </h3>
                        <p className="text-sm text-[#718096]">
                            {t('trustbar.thermal_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="p-8 group hover:bg-[#1C1F26] transition-colors duration-300"
                    >
                        <span className="block text-[10px] text-[#A0AEC0] uppercase tracking-widest mb-2 group-hover:text-[#FF4F00] transition-colors">
                            {t('trustbar.safety_label')}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                            {t('trustbar.safety_title')}
                        </h3>
                        <p className="text-sm text-[#718096]">
                            {t('trustbar.safety_desc')}
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default TrustBar;