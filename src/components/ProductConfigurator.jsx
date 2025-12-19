import React, { useState } from 'react';
import { AlertCircle, PhoneOutgoing, FileText, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useProductConfiguration } from '../hooks/useProductConfiguration';
import ContactModal from './ui/ContactModal';



const slideUpContainer = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerSelectors = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.3
        }
    }
};

const selectorVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 }
    }
};

const leftPanelVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const imageVariant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
};


const ConfigSelect = ({ label, options, value, onChange, attributeName, checkAvailability, disabled = false }) => {
    const { t } = useTranslation();

    if (!options || options.length === 0) return null;

    const translatedLabel = t(`configurator.attributes.${attributeName}.label`, label);

    return (
        <motion.div className="mb-4" variants={selectorVariant}>
            <label className="block text-[#A0AEC0] text-xs uppercase tracking-widest font-bold mb-2">
                {translatedLabel}
            </label>
            <div className="relative">
                <select
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    className={`w-full bg-[#0F1115] border border-white/10 text-white py-3 px-4 pr-8 sharp-border appearance-none focus:outline-none focus:border-[#FF4F00] transition-colors font-mono text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-white/30'}`}
                >
                    {options.map((opt) => {
                        const isAvailable = attributeName === 'chimneyType' ? true : checkAvailability(attributeName, opt.id);
                        
                        let displayName = opt.name;
                        let extraText = opt.text;

                        if (attributeName !== 'diameter') {
                            const trKey = `configurator.attributes.${attributeName}.options.${opt.id}`;
                            
                            const tr = t(trKey, { returnObjects: true });
                            
                            if (typeof tr === 'object' && !Array.isArray(tr) && tr !== null && tr.name) {
                                displayName = tr.name;
                                extraText = tr.text;
                            }
                        }

                        return (
                            <option key={opt.id} value={opt.id} disabled={!isAvailable} className={isAvailable ? "bg-[#13151A]" : "bg-[#1C1F26] text-gray-500"}>
                                {displayName} {extraText ? `- ${extraText}` : ''}
                                {!isAvailable ? t('configurator.unavailable_option') : ''}
                            </option>
                        );
                    })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#FF4F00]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </motion.div>
    );
};

const BenefitsBlock = ({ benefits, className = "" }) => {
    const { t } = useTranslation();

    if (!benefits) return null;

    return (
        <motion.div
            className={`bg-[#13151A] p-6 sharp-border border border-white/5 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF4F00]" />
                {t('configurator.benefits_title')}
            </h4>
            <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex flex-col gap-1">
                        <span className="text-[#FF4F00] text-xs font-bold uppercase tracking-wider">
                            {benefit.title}
                        </span>
                        <span className="text-[#A0AEC0] text-xs leading-relaxed">
                            {benefit.text}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const ProductConfigurator = ({ productData }) => {
    const { t } = useTranslation();
    const { selections, currentVariantSku, isThermo, availableDiameters, availableExecutions, handleSelectionChange, hasAttr, allAttributesDefinitions, checkOptionAvailability } = useProductConfiguration(productData);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelectChange = (attribute) => (value) => handleSelectionChange(attribute, value);

    const isValid = !!currentVariantSku;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#1C1F26] p-8 sharp-border border-t-4 border-[#FF4F00]">

                <motion.div
                    className="md:col-span-4 flex flex-col gap-6"
                    variants={leftPanelVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="sticky top-24 flex flex-col gap-6">
                        <motion.div
                            className="bg-[#13151A] p-4 flex items-center justify-center sharp-border relative"
                            variants={imageVariant}
                        >
                            <motion.img
                                key={productData.baseImage}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={productData.baseImage}
                                alt={productData.baseImage}
                                className="max-h-[300px] w-auto object-contain will-change-transform"
                            />
                            {isThermo && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute top-4 left-4 bg-[#FF4F00] text-white text-xs font-bold px-2 py-1 uppercase tracking-widest sharp-border"
                                >
                                    {t('configurator.thermo_badge')}
                                </motion.div>
                            )}
                        </motion.div>

                        <BenefitsBlock benefits={productData.benefits} className="hidden md:block" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:col-span-8 flex flex-col"
                    variants={slideUpContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mb-8">
                        <span className="font-mono text-[#FF4F00] font-bold block mb-2">
                            {t('configurator.code_label')}: {productData.baseCode}
                        </span>

                        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 leading-none">
                            {productData.name}
                        </h1>

                        <p className="text-[#A0AEC0] text-sm leading-relaxed max-w-2xl">
                            {productData.description}
                        </p>
                    </div>

                    <div className="space-y-2 mb-8 p-6 bg-[#13151A] sharp-border border border-white/5">
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                            {t('configurator.config_header')}
                            <motion.div
                                className="h-px bg-[#FF4F00] flex-grow ml-4"
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                transition={{ duration: 1, delay: 0.5 }}
                            ></motion.div>
                        </h3>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2"
                            variants={staggerSelectors}
                            initial="hidden"
                            animate="visible"
                        >
                            {hasAttr('chimneyType') && <ConfigSelect label={t('configurator.attributes.chimneyType')} attributeName="chimneyType" options={allAttributesDefinitions.chimneyType} value={selections.chimneyType} onChange={onSelectChange('chimneyType')} checkAvailability={checkOptionAvailability} />}
                            {hasAttr('steelGrade') && <ConfigSelect label={t('configurator.attributes.steelGrade')} attributeName="steelGrade" options={allAttributesDefinitions.steelGrade} value={selections.steelGrade} onChange={onSelectChange('steelGrade')} checkAvailability={checkOptionAvailability} />}
                            {hasAttr('steelThickness') && <ConfigSelect label={t('configurator.attributes.steelThickness')} attributeName="steelThickness" options={allAttributesDefinitions.steelThickness} value={selections.steelThickness} onChange={onSelectChange('steelThickness')} checkAvailability={checkOptionAvailability} />}
                            {hasAttr('execution') && <ConfigSelect label={t('configurator.attributes.execution')} attributeName="execution" options={availableExecutions} value={selections.execution} onChange={onSelectChange('execution')} checkAvailability={checkOptionAvailability} />}
                            {hasAttr('insulation') && <ConfigSelect label={t('configurator.attributes.insulation')} attributeName="insulation" options={allAttributesDefinitions.insulation} value={selections.insulation} onChange={onSelectChange('insulation')} disabled={!isThermo} checkAvailability={checkOptionAvailability} />}
                            {hasAttr('diameter') && <ConfigSelect label={t('configurator.attributes.diameter')} attributeName="diameter" options={availableDiameters} value={selections.diameter} onChange={onSelectChange('diameter')} checkAvailability={checkOptionAvailability} />}
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-[#13151A] sharp-border border border-white/5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex-grow">
                            <h4 className="text-white font-bold uppercase tracking-tight mb-1 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-[#FF4F00]" />
                                {t('configurator.quote_title')}
                            </h4>
                            <p className="text-[#A0AEC0] text-sm leading-relaxed">
                                {t('configurator.quote_desc')}
                            </p>
                        </div>
                        <motion.button
                            whileHover={isValid ? { scale: 1.02 } : {}}
                            whileTap={isValid ? { scale: 0.98 } : {}}
                            disabled={!isValid}
                            onClick={() => setIsModalOpen(true)}
                            className={`h-[56px] w-full sm:w-auto text-white px-8 uppercase font-bold text-sm tracking-widest transition-all duration-300 sharp-border flex items-center justify-center gap-3 group shrink-0 ${isValid ? 'bg-[#FF4F00] hover:bg-white hover:text-black orange-glow-hover' : 'bg-gray-600 cursor-not-allowed opacity-50'}`}
                        >
                            <PhoneOutgoing className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            {t('configurator.ask_price_btn')}
                        </motion.button>
                    </motion.div>

                    {!isValid && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-2 flex items-center gap-2 text-red-400 text-xs mb-6 md:mb-0"
                        >
                            <AlertCircle className="w-4 h-4" />
                            <span>{t('configurator.unavailable_combination')}</span>
                        </motion.div>
                    )}

                    <BenefitsBlock benefits={productData.benefits} className="block md:hidden mt-8" />

                </motion.div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </>
    );
};

export default ProductConfigurator;