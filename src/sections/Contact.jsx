import React from 'react';
import { Cpu, Phone, Mail, Clock, Zap, PhoneOutgoing, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { useSubmitContact } from "../hooks/useSubmitContact";

const Contact = () => {
    const { t } = useTranslation();
    const { submit, isLoading, status } = useSubmitContact();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            source: 'Контакты',
        };
        submit(formData);
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
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

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
        }
    };

    return (
        <section className="py-24 bg-[#13151A] border-t border-white/5 relative overflow-hidden" id="kontakt">

            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
            >
            </motion.div>

            <div className="max-w-[1920px] mx-auto px-6 relative z-10">

                <motion.div
                    className="flex flex-col items-center text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#FF4F00] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                        {t('contact.label')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                        <Trans i18nKey="contact.title" components={{ br: <br /> }} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <motion.div
                        className="lg:col-span-5 flex flex-col gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <motion.div
                            variants={itemVariants}
                            className="bg-[#1C1F26] p-8 sharp-border border-2 border-transparent hover:border-[#FF4F00]/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-[#FF4F00]" />
                                {t('contact.direct_data')}
                            </h3>

                            <div className="group flex items-start gap-4 mb-8 pb-8 border-b border-white/5">
                                <div className="w-12 h-12 bg-[#FF4F00]/10 border border-[#FF4F00]/30 flex items-center justify-center sharp-border group-hover:bg-[#FF4F00] transition-all duration-300">
                                    <Phone className="w-5 h-5 text-[#FF4F00] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <span className="text-[10px] text-[#A0AEC0] uppercase tracking-widest block mb-1">
                                        {t('contact.hotline_label')}
                                    </span>
                                    <a href="tel:+48500000000" className="text-2xl font-bold text-white font-mono tracking-tight hover:text-[#FF4F00] transition-colors">
                                        +48 500 123 456
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF4F00]/10 border border-[#FF4F00]/30 flex items-center justify-center sharp-border group-hover:bg-[#FF4F00] transition-all duration-300">
                                    <Mail className="w-5 h-5 text-[#FF4F00] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <span className="text-[10px] text-[#A0AEC0] uppercase tracking-widest block mb-1">
                                        {t('contact.email_label')}
                                    </span>
                                    <a href="mailto:kontakt@lira.pl" className="text-xl font-bold text-white font-mono tracking-tight hover:text-[#FF4F00] transition-colors">
                                        kontakt@lira.pl
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div variants={itemVariants} className="bg-[#1C1F26] p-6 sharp-border border border-white/5 flex items-center gap-4">
                                <Clock className="w-8 h-8 text-[#FF4F00]/50" />
                                <div>
                                    <span className="text-[10px] text-[#A0AEC0] uppercase tracking-widest block mb-1">
                                        {t('contact.hours_label')}
                                    </span>
                                    <span className="text-white font-bold font-mono text-sm">
                                        {t('contact.hours_value')}
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="bg-[#1C1F26] p-6 sharp-border border border-white/5 flex items-center gap-4">
                                <Zap className="w-8 h-8 text-[#FF4F00]/50" />
                                <div>
                                    <span className="text-[10px] text-[#A0AEC0] uppercase tracking-widest block mb-1">
                                        {t('contact.response_label')}
                                    </span>
                                    <span className="text-white font-bold font-mono text-sm">
                                        {t('contact.response_value')}
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="lg:col-span-7"
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="bg-[#1C1F26] p-8 md:p-12 sharp-border relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF4F00]/5 blur-2xl pointer-events-none"></div>

                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                                    <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                                    <h3 className="text-3xl font-bold text-white mb-4">{t('contact.success_title', 'Dziękujemy!')}</h3>
                                    <p className="text-[#A0AEC0] text-lg">{t('contact.success_message', 'Twoja wiadomość została wysłana.')}</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3">
                                        {t('contact.form_title')}
                                    </h3>
                                    <p className="text-[#A0AEC0] text-sm mb-8 leading-relaxed">
                                        {t('contact.form_desc')}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-xs text-[#A0AEC0] uppercase tracking-widest font-bold ml-1">
                                                    {t('contact.form_name')} <span className="text-[#FF4F00]">*</span>
                                                </label>
                                                <input type="text" id="name" name="name" required
                                                    className="w-full bg-[#0F1115] border border-white/10 text-white p-4 sharp-border focus:outline-none focus:border-[#FF4F00] focus:bg-[#0F1115]/80 transition-colors font-mono text-sm placeholder-[#718096]"
                                                    placeholder={t('contact.form_name_ph')} />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-xs text-[#A0AEC0] uppercase tracking-widest font-bold ml-1">
                                                    {t('contact.form_phone')} <span className="text-[#FF4F00]">*</span>
                                                </label>
                                                <input type="tel" id="phone" name="phone" required
                                                    className="w-full bg-[#0F1115] border border-white/10 text-white p-4 sharp-border focus:outline-none focus:border-[#FF4F00] focus:bg-[#0F1115]/80 transition-colors font-mono text-sm placeholder-[#718096]"
                                                    placeholder={t('contact.form_phone_ph')} />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-xs text-[#A0AEC0] uppercase tracking-widest font-bold ml-1">
                                                {t('contact.form_message')} <span className="text-[#718096] text-[10px] normal-case">{t('contact.optional')}</span>
                                            </label>
                                            <textarea id="message" name="message" rows="5"
                                                className="w-full bg-[#0F1115] border border-white/10 text-white p-4 sharp-border focus:outline-none focus:border-[#FF4F00] focus:bg-[#0F1115]/80 transition-colors font-mono text-sm placeholder-[#718096] resize-none"
                                                placeholder={t('contact.form_message_ph')}></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 text-red-500 text-xs">
                                                <AlertCircle className="w-4 h-4" />
                                                <span>{t('contact.error_message', 'Wystąpił błąd. Spróbuj ponownie.')}</span>
                                            </div>
                                        )}

                                        <div className="pt-4">
                                            <motion.button
                                                type="submit"
                                                disabled={isLoading}
                                                whileHover={!isLoading ? { scale: 1.02 } : {}}
                                                whileTap={!isLoading ? { scale: 0.98 } : {}}
                                                className={`w-full md:w-auto h-[56px] bg-[#FF4F00] text-white px-12 uppercase font-bold text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-colors duration-300 sharp-border orange-glow-hover flex items-center justify-center gap-3 group ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <>
                                                        <PhoneOutgoing className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                                        {t('contact.submit_btn')}
                                                    </>
                                                )}
                                            </motion.button>
                                            <p className="text-[#718096] text-xs mt-4 ml-1">
                                                {t('contact.privacy_note')}
                                            </p>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;