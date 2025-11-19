import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';
import { contactFormSchema, ContactFormData } from '../utils/validationSchemas';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { GlassCard } from '../components/GlassCard';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      let msg = `*Nieuw Contactbericht Montana ST*\n`;
      msg += `----------------------------\n`;
      msg += `*Naam:* ${data.name}\n`;
      msg += `*Tel:* ${data.phone}\n`;
      if (data.email) msg += `*Email:* ${data.email}\n`;
      msg += `*Adres:* ${data.address}\n`;
      msg += `*Stad:* ${data.city}\n`;
      if (data.desc) msg += `*Bericht:* ${data.desc}\n`;
      msg += `\nTaal Klant: ${language}`;

      const url = `https://wa.me/31647026240?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
      
      toast.success('Bericht verzonden! We nemen snel contact op.', {
        icon: '✅',
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      toast.error('Er ging iets mis. Probeer opnieuw.', {
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendViaEmail = () => {
    handleSubmit((data) => {
      const subject = encodeURIComponent('Nieuwe Aanvraag - Montana ST Premium Loodgieter');
      let body = `Nieuw Contactbericht Montana ST\n`;
      body += `----------------------------\n`;
      body += `Naam: ${data.name}\n`;
      body += `Tel: ${data.phone}\n`;
      if (data.email) body += `Email: ${data.email}\n`;
      body += `Adres: ${data.address}\n`;
      body += `Stad: ${data.city}\n`;
      if (data.desc) body += `Bericht: ${data.desc}\n`;
      body += `\nTaal Klant: ${language}`;

      const mailtoUrl = `mailto:piterm719@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      toast.success('Email client geopend!', {
        icon: '📧',
        duration: 3000,
      });
    })();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-montana-black py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        
        {/* Info Side */}
        <motion.div variants={itemVariants}>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-widest text-shadow-gold">
            {t.contactPage.title}
          </h1>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed">
             Heeft u een noodgeval? Bel direct. Voor offertes, vul het formulier in. Wij reageren binnen 24 uur.
          </p>
          
          <div className="space-y-6">
             <GlassCard className="p-6" hover={false}>
               <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-montana-dark border border-white/10 flex items-center justify-center text-montana-gold group-hover:border-montana-gold group-hover:scale-110 transition-all">
                     <Phone size={24} />
                  </div>
                  <div>
                     <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Telefonisch</h3>
                     <a href="tel:+31647026240" className="text-slate-400 hover:text-montana-gold transition-colors">
                       +31 6 47 02 62 40
                     </a>
                     <p className="text-montana-gold text-xs mt-1 font-bold uppercase">24/7 Beschikbaar</p>
                  </div>
               </motion.div>
             </GlassCard>
             
             <GlassCard className="p-6" hover={false}>
               <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-montana-dark border border-white/10 flex items-center justify-center text-montana-gold group-hover:border-montana-gold group-hover:scale-110 transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Email</h3>
                     <a href="mailto:info@montanast.nl" className="text-slate-400 hover:text-montana-gold transition-colors">
                       info@montanast.nl
                     </a>
                  </div>
               </motion.div>
             </GlassCard>

             <GlassCard className="p-6" hover={false}>
               <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-montana-dark border border-white/10 flex items-center justify-center text-montana-gold group-hover:border-montana-gold group-hover:scale-110 transition-all">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Regio</h3>
                     <p className="text-slate-400">Zuid-Holland, Nederland</p>
                  </div>
               </motion.div>
             </GlassCard>

             {/* Google Maps */}
             <motion.div variants={itemVariants} className="mt-8 rounded overflow-hidden border border-montana-gold/20">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156361.18181531895!2d4.324999999999999!3d51.9244201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5c3a8b8b8b8b8b8b!2sRotterdam!5e0!3m2!1snl!2snl!4v1234567890"
                 width="100%"
                 height="250"
                 className="border-0"
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Montana ST Location"
               ></iframe>
             </motion.div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div variants={itemVariants} className="glass-panel p-8 border border-montana-gold/10 relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-montana-gold/10 to-transparent pointer-events-none"></div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-1">
                     {t.contactPage.formName} <span className="text-red-500">*</span>
                   </label>
                   <input 
                      {...register('name')}
                      type="text" 
                      className={`w-full bg-montana-black/50 border p-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="Uw naam"
                   />
                   {errors.name && (
                     <p className="text-red-500 text-xs flex items-center gap-1">
                       <AlertCircle size={12} /> {errors.name.message}
                     </p>
                   )}
                </div>

                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-1">
                     {t.contactPage.formPhone} <span className="text-red-500">*</span>
                   </label>
                   <input 
                      {...register('phone')}
                      type="tel" 
                      className={`w-full bg-montana-black/50 border p-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      }`}
                      placeholder="+31 6 12345678"
                   />
                   {errors.phone && (
                     <p className="text-red-500 text-xs flex items-center gap-1">
                       <AlertCircle size={12} /> {errors.phone.message}
                     </p>
                   )}
                </div>
             </div>
             
             <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">
                  {t.contactPage.formEmail}
                </label>
                <input 
                   {...register('email')}
                   type="email" 
                   className={`w-full bg-montana-black/50 border p-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold ${
                     errors.email ? 'border-red-500' : 'border-white/10'
                   }`}
                   placeholder="uw@email.nl"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email.message}
                  </p>
                )}
             </div>

             <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-1">
                  Adres <span className="text-red-500">*</span>
                </label>
                <input 
                   {...register('address')}
                   type="text" 
                   className={`w-full bg-montana-black/50 border p-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold ${
                     errors.address ? 'border-red-500' : 'border-white/10'
                   }`}
                   placeholder="Straatnaam 123"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.address.message}
                  </p>
                )}
             </div>

             <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-1">
                  Stad <span className="text-red-500">*</span>
                </label>
                <input 
                   {...register('city')}
                   type="text" 
                   className={`w-full bg-montana-black/50 border p-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold ${
                     errors.city ? 'border-red-500' : 'border-white/10'
                   }`}
                   placeholder="Rotterdam"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.city.message}
                  </p>
                )}
             </div>

             <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">
                  {t.contactPage.formMessage}
                </label>
                <textarea 
                   {...register('desc')}
                   rows={4} 
                   className={`w-full bg-montana-black/50 border p-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold ${
                     errors.desc ? 'border-red-500' : 'border-white/10'
                   }`}
                   placeholder="Beschrijf uw situatie..."
                ></textarea>
                {errors.desc && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.desc.message}
                  </p>
                )}
             </div>

             <div className="flex items-center gap-3">
                <input required type="checkbox" id="privacy" className="accent-montana-gold focus-gold" />
                <label htmlFor="privacy" className="text-xs text-slate-400">{t.contactPage.privacy}</label>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <MagneticButton
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-widest py-4 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSubmit(onSubmit)}
               >
                  {isSubmitting ? (
                    <>
                      <div className="spinner border-white"></div>
                      Verzenden...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Via WhatsApp
                    </>
                  )}
               </MagneticButton>

               <MagneticButton
                  className="w-full bg-montana-gold hover:bg-montana-goldHover text-montana-black font-bold uppercase tracking-widest py-4 transition-all flex items-center justify-center gap-3 shadow-lg"
                  onClick={sendViaEmail}
               >
                  <Mail size={20} />
                  Via Email
               </MagneticButton>
             </div>
          </form>
        </motion.div>

      </motion.div>
    </div>
  );
};