import { X, PhoneOutgoing } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactModal = ({ isOpen, onClose,}) => {
    const { t } = useTranslation();

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        exit: { 
            opacity: 0, 
            scale: 0.95, 
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    
                    <motion.div 
                        className="absolute inset-0 bg-[#0F1115]/90 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    <motion.div 
                        className="relative w-full max-w-lg bg-[#1C1F26] sharp-border border-2 border-[#FF4F00] shadow-[0_0_50px_-12px_rgba(255,79,0,0.3)] overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4F00]/10 blur-3xl pointer-events-none"></div>

                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 text-[#A0AEC0] hover:text-white transition-colors z-10 p-2"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                                {t('contact.form_title')}
                            </h3>

                            <form action="#" method="POST" className="space-y-5">
                                <div className="space-y-2">
                                    <label htmlFor="modal-name" className="text-xs text-[#A0AEC0] uppercase tracking-widest font-bold ml-1">
                                        {t('contact.form_name')} <span className="text-[#FF4F00]">*</span>
                                    </label>
                                    <input type="text" id="modal-name" name="name" required
                                        className="w-full bg-[#0F1115] border border-white/10 text-white p-3 sharp-border focus:outline-none focus:border-[#FF4F00] focus:bg-[#0F1115]/80 transition-colors font-mono text-sm placeholder-[#718096]"
                                        placeholder={t('contact.form_name_ph')} />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="modal-phone" className="text-xs text-[#A0AEC0] uppercase tracking-widest font-bold ml-1">
                                        {t('contact.form_phone')} <span className="text-[#FF4F00]">*</span>
                                    </label>
                                    <input type="tel" id="modal-phone" name="phone" required
                                        className="w-full bg-[#0F1115] border border-white/10 text-white p-3 sharp-border focus:outline-none focus:border-[#FF4F00] focus:bg-[#0F1115]/80 transition-colors font-mono text-sm placeholder-[#718096]"
                                        placeholder={t('contact.form_phone_ph')} />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="modal-message" className="text-xs text-[#A0AEC0] uppercase tracking-widest font-bold ml-1">
                                        {t('contact.form_message')} <span className="text-[#718096] text-[10px] normal-case">{t('contact.optional')}</span>
                                    </label>
                                    <textarea id="modal-message" name="message" rows="3"
                                        className="w-full bg-[#0F1115] border border-white/10 text-white p-3 sharp-border focus:outline-none focus:border-[#FF4F00] focus:bg-[#0F1115]/80 transition-colors font-mono text-sm placeholder-[#718096] resize-none"
                                        placeholder={t('contact.form_message_ph')}></textarea>
                                </div>

                                <div className="pt-2">
                                    <motion.button 
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full h-[50px] bg-[#FF4F00] text-white uppercase font-bold text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-colors duration-300 sharp-border orange-glow-hover flex items-center justify-center gap-3 group"
                                    >
                                        <PhoneOutgoing className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        {t('contact.submit_btn')}
                                    </motion.button>
                                    <p className="text-[#718096] text-[10px] mt-3 text-center">
                                        {t('contact.privacy_note')}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;