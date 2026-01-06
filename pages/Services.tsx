
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Siren, Wrench, Flame, Bath, Check, Waves, Leaf, Umbrella, Wind, Building2, X, Send, Mail } from 'lucide-react';
import { ContentText } from '../types';

// Helper types to link translation keys to form fields strictly
type LabelKey = keyof ContentText['forms']['labels'];
type QuestionKey = keyof ContentText['forms']['questions'];

interface FormField {
  id: string;
  labelKey: LabelKey | QuestionKey;
  type: 'text' | 'textarea' | 'select';
  options?: string[];
  required?: boolean;
}

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  // Icons matching the service list order
  const icons = [
    <Siren className="text-red-500" />,           // 1. Emergency
    <Waves className="text-blue-500" />,          // 2. Sewer
    <Flame className="text-orange-500" />,        // 3. Heating
    <Leaf className="text-green-500" />,          // 4. Heat Pump
    <Umbrella className="text-slate-400" />,      // 5. Roofing
    <Bath className="text-cyan-400" />,           // 6. Bathroom
    <Wind className="text-gray-300" />,           // 7. Ventilation
    <Wrench className="text-montana-gold" />,     // 8. Pipework
    <Building2 className="text-amber-700" />      // 9. Construction
  ];

  // Define specific questions for each service index
  const getFormConfig = (index: number): FormField[] => {
    const commonFields: FormField[] = [
      { id: 'name', labelKey: 'name', type: 'text', required: true },
      { id: 'address', labelKey: 'address', type: 'text', required: true },
      { id: 'city', labelKey: 'city', type: 'text', required: true },
      { id: 'phone', labelKey: 'phone', type: 'text', required: true },
    ];

    const specificFields: FormField[] = [];

    switch (index) {
      case 0: // Emergency
        specificFields.push(
          { id: 'urgency', labelKey: 'urgency', type: 'select', options: ['Direct Spoed', 'Binnen 24u', 'Geen spoed'] },
          { id: 'location', labelKey: 'location', type: 'text' }
        );
        break;
      case 1: // Sewer
        specificFields.push(
          { id: 'location', labelKey: 'location', type: 'select', options: ['WC', 'Keuken', 'Badkamer', 'Buiten', 'Regenpijp'] },
          { id: 'propertyType', labelKey: 'propertyType', type: 'text' }
        );
        break;
      case 2: // Heating
        specificFields.push(
          { id: 'boilerBrand', labelKey: 'boilerBrand', type: 'text' },
          { id: 'boilerAge', labelKey: 'boilerAge', type: 'select', options: ['< 5 jaar', '5-10 jaar', '10-15 jaar', '> 15 jaar', 'Onbekend'] },
          { id: 'heatingSystem', labelKey: 'heatingSystem', type: 'select', options: ['Radiatoren', 'Vloerverwarming', 'Convectoren', 'Combinatie'] },
          { id: 'energyLabel', labelKey: 'energyLabel', type: 'select', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Onbekend'] },
          { id: 'propertyType', labelKey: 'propertyType', type: 'text' }
        );
        break;
      case 3: // Heat Pump
        specificFields.push(
          { id: 'propertyType', labelKey: 'propertyType', type: 'select', options: ['Vrijstaand', 'Rijtjeshuis', 'Appartement', 'Nieuwbouw'] },
          { id: 'surface', labelKey: 'surface', type: 'text' },
          { id: 'heatingSystem', labelKey: 'heatingSystem', type: 'select', options: ['Huidig: Radiatoren', 'Huidig: Vloerverwarming', 'Combinatie'] },
          { id: 'energyLabel', labelKey: 'energyLabel', type: 'select', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Onbekend'] },
          { id: 'boilerAge', labelKey: 'boilerAge', type: 'text' }
        );
        break;
      case 4: // Roofing
        specificFields.push(
          { id: 'roofType', labelKey: 'roofType', type: 'select', options: ['Bitumen (Plat)', 'Pannen (Hellend)', 'Zink/Koper', 'EPDM', 'Leien', 'Onbekend'] },
          { id: 'dimensions', labelKey: 'dimensions', type: 'text' },
          { id: 'currentState', labelKey: 'currentState', type: 'select', options: ['Lekkage', 'Onderhoud nodig', 'Vervanging nodig', 'Nieuwbouw'] }
        );
        break;
      case 5: // Bathroom Renovation
        specificFields.push(
          { id: 'dimensions', labelKey: 'dimensions', type: 'text' },
          { id: 'desiredStyle', labelKey: 'desiredStyle', type: 'select', options: ['Modern & Strak', 'Industrieel', 'Klassiek', 'Hotel Chic', 'Basic', 'Nog geen idee'] },
          { id: 'budget', labelKey: 'budget', type: 'select', options: ['€5.000 - €10.000', '€10.000 - €20.000', '€20.000+', 'Op aanvraag'] },
          { id: 'currentState', labelKey: 'currentState', type: 'select', options: ['Volledige sloop nodig', 'Nieuwbouw (Casco)', 'Kleine renovatie'] }
        );
        break;
      case 6: // Ventilation
        specificFields.push(
           { id: 'propertyType', labelKey: 'propertyType', type: 'text' },
           { id: 'currentState', labelKey: 'currentState', type: 'select', options: ['Systeem vervanging', 'Reiniging', 'Nieuw installeren'] }
        );
        break;
      case 7: // Gas & Water
        specificFields.push(
           { id: 'location', labelKey: 'location', type: 'text' },
           { id: 'currentState', labelKey: 'currentState', type: 'select', options: ['Verleggen', 'Nieuw aanleggen', 'Lekkage reparatie'] }
        );
        break;
      default:
        // Construction & General
        specificFields.push(
            { id: 'propertyType', labelKey: 'propertyType', type: 'text' },
            { id: 'desc', labelKey: 'desc', type: 'textarea' }
        );
    }

    // Add description to all except the default which already adds it
    if (index !== 8) {
       specificFields.push({ id: 'desc', labelKey: 'desc', type: 'textarea' });
    }

    return [...commonFields, ...specificFields];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeService === null) return;

    const serviceName = t.servicesPage.items[activeService].title;
    let message = `*Nieuwe Aanvraag Montana ST:*\nService: ${serviceName}\n------------------\n`;
    
    Object.entries(formData).forEach(([key, value]) => {
       // Simple capitalization for message key
       const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
       message += `${displayKey}: ${value}\n`;
    });

    message += `\nTaal Klant: ${language}`;

    // Updated phone number to +31647026240
    const url = `https://wa.me/31647026240?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeService === null) return;

    const serviceName = t.servicesPage.items[activeService].title;
    const subject = encodeURIComponent(`Nieuwe Aanvraag - ${serviceName} - Montana ST`);
    
    let body = `Nieuwe Aanvraag Montana ST\nService: ${serviceName}\n------------------\n`;
    
    Object.entries(formData).forEach(([key, value]) => {
       const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
       body += `${displayKey}: ${value}\n`;
    });

    body += `\nTaal Klant: ${language}`;

    const mailtoUrl = `mailto:piterm719@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const openModal = (index: number) => {
    setActiveService(index);
    setFormData({});
  };

  const closeModal = () => {
    setActiveService(null);
  };

  // Helper to get label text safely
  const getLabel = (key: LabelKey | QuestionKey): string => {
    // Cast to unknown then to Record to check safely without TS errors on generic overlap
    const labels = t.forms.labels as Record<string, string>;
    const questions = t.forms.questions as Record<string, string>;

    if (key in labels) return labels[key];
    if (key in questions) return questions[key];
    return key; 
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-montana-black py-16 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 uppercase tracking-widest text-shadow-gold">
            {t.servicesPage.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base px-2">{t.servicesPage.subtitle}</p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {t.servicesPage.items.map((service, idx) => (
            <div key={idx} className="glass-panel p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 border border-slate-200 dark:border-white/5 hover:border-montana-gold/30 transition-all duration-300 group relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-montana-gold/10 dark:bg-montana-gold/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>

              <div className="shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/5 group-hover:border-montana-gold/20">
                  {React.cloneElement(icons[idx % icons.length], { size: 28 })}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 font-serif tracking-wide">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed flex-grow">{service.desc}</p>
                
                <div className="border-t border-slate-200 dark:border-white/5 pt-3 md:pt-4 mb-4 md:mb-6">
                  <ul className="space-y-1.5 md:space-y-2">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check size={12} className="text-montana-gold mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => openModal(idx)}
                  className="w-full text-center bg-montana-gold/5 text-montana-gold px-4 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-montana-gold hover:text-montana-black transition-colors border border-montana-gold/20"
                >
                  {t.common.requestQuote}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Form Overlay */}
        {activeService !== null && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
             <div className="glass-panel w-full md:max-w-2xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto relative border border-montana-gold shadow-[0_0_50px_rgba(212,175,55,0.2)] custom-scrollbar rounded-t-2xl md:rounded-xl">
                
                {/* Header */}
                <div className="sticky top-0 bg-slate-100 dark:bg-montana-dark/95 backdrop-blur p-4 md:p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center z-10">
                   <div>
                      <h2 className="text-base md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-widest font-serif">
                         {t.servicesPage.items[activeService].title}
                      </h2>
                      <p className="text-xs text-montana-gold mt-1">WhatsApp Direct Service</p>
                   </div>
                   <button 
                      onClick={closeModal} 
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="Close modal"
                      title="Close"
                   >
                      <X size={24} />
                   </button>
                </div>

                {/* Dynamic Form */}
                <div className="p-6">
                   <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getFormConfig(activeService).map((field) => (
                           <div key={field.id} className={`space-y-2 ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}>
                               <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold block">
                                  {getLabel(field.labelKey)} {field.required && <span className="text-red-500">*</span>}
                               </label>
                               
                               {field.type === 'select' ? (
                                  <select 
                                     name={field.id} 
                                     onChange={handleInputChange}
                                     aria-label={getLabel(field.labelKey)}
                                     title={getLabel(field.labelKey)}
                                     className="w-full bg-slate-100 dark:bg-black/40 border border-slate-300 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:border-montana-gold outline-none transition-colors rounded-none appearance-none"
                                  >
                                     <option value="">- Select -</option>
                                     {field.options?.map(opt => (
                                        <option key={opt} value={opt} className="bg-white dark:bg-montana-dark">{opt}</option>
                                     ))}
                                  </select>
                               ) : field.type === 'textarea' ? (
                                  <textarea 
                                     name={field.id}
                                     rows={3}
                                     onChange={handleInputChange}
                                     placeholder={getLabel(field.labelKey)}
                                     aria-label={getLabel(field.labelKey)}
                                     title={getLabel(field.labelKey)}
                                     className="w-full bg-slate-100 dark:bg-black/40 border border-slate-300 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:border-montana-gold outline-none transition-colors rounded-none"
                                  />
                               ) : (
                                  <input 
                                     type="text" 
                                     name={field.id}
                                     required={field.required}
                                     onChange={handleInputChange}
                                     placeholder={getLabel(field.labelKey)}
                                     aria-label={getLabel(field.labelKey)}
                                     title={getLabel(field.labelKey)}
                                     className="w-full bg-slate-100 dark:bg-black/40 border border-slate-300 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:border-montana-gold outline-none transition-colors rounded-none"
                                  />
                               )}
                            </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button 
                           type="submit" 
                           className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-widest py-4 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                           <Send size={20} />
                           Via WhatsApp
                        </button>

                        <button 
                           type="button"
                           onClick={handleEmailSubmit}
                           className="w-full bg-montana-gold hover:bg-montana-goldHover text-montana-black font-bold uppercase tracking-widest py-4 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                           <Mail size={20} />
                           Via Email
                        </button>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-500 text-center mt-2">
                         * Kies WhatsApp voor directe chat of Email voor een formele aanvraag.
                      </p>
                   </form>
                </div>

             </div>
          </div>
        )}

        {/* FAQ Snippet */}
        <div className="mt-24 max-w-3xl mx-auto">
           <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-8 text-center">Veelgestelde Vragen</h3>
           <div className="space-y-4">
              <details className="glass-panel p-4 group cursor-pointer">
                 <summary className="text-slate-900 dark:text-white font-bold list-none flex justify-between items-center">
                    <span>Doen jullie ook dakwerk en zink?</span>
                    <span className="text-montana-gold group-open:rotate-180 transition-transform">▼</span>
                 </summary>
                 <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">Ja, wij zijn specialisten in bitumen dakbedekking, zinken goten en regenpijpen.</p>
              </details>
              <details className="glass-panel p-4 group cursor-pointer">
                 <summary className="text-slate-900 dark:text-white font-bold list-none flex justify-between items-center">
                    <span>Installeren jullie warmtepompen?</span>
                    <span className="text-montana-gold group-open:rotate-180 transition-transform">▼</span>
                 </summary>
                 <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">Zeker. Wij adviseren en installeren hybride en all-electric warmtepompen voor duurzame verwarming.</p>
              </details>
              <details className="glass-panel p-4 group cursor-pointer">
                 <summary className="text-slate-900 dark:text-white font-bold list-none flex justify-between items-center">
                    <span>Wat houdt rioolservice in?</span>
                    <span className="text-montana-gold group-open:rotate-180 transition-transform">▼</span>
                 </summary>
                 <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">Wij verhelpen verstoppingen en voeren camera-inspecties uit om breuken of wortelgroei in leidingen op te sporen.</p>
              </details>
           </div>
        </div>
      </div>
    </div>
  );
};
