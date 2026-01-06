import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types';
import { GlassCard } from '../components/GlassCard';
import { use3DTilt } from '../hooks/use3DTilt';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'leak' | 'bath' | 'heat'>('all');

  // Mock data - in real app, fetch from API or dedicated content file
  const projects: ProjectItem[] = [
    { id: 1, title: "Luxury Bathroom Rotterdam", category: "bath", desc: "Complete renovation with gold fixtures", imageBefore: "https://picsum.photos/600/400?random=1&grayscale", imageAfter: "https://images.unsplash.com/photo-1620626012053-1c1adc329bf1?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Emergency Leak Fix The Hague", category: "leak", desc: "Pipe burst repair within 1 hour", imageBefore: "https://picsum.photos/600/400?random=2&grayscale", imageAfter: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Floor Heating Install", category: "heat", desc: "Modern efficient heating system", imageBefore: "https://picsum.photos/600/400?random=3&grayscale", imageAfter: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Industrial Kitchen", category: "bath", desc: "Restaurant plumbing setup", imageBefore: "https://picsum.photos/600/400?random=4&grayscale", imageAfter: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Boiler Replacement", category: "heat", desc: "High efficiency upgrade", imageBefore: "https://picsum.photos/600/400?random=5&grayscale", imageAfter: "https://images.unsplash.com/photo-1585058004826-2f391879d85a?q=80&w=800&auto=format&fit=crop" },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-montana-black py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 md:mb-12 text-center uppercase tracking-widest text-shadow-gold">
          {t.projectsPage.title}
        </h1>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
          {[
            { key: 'all', label: t.projectsPage.filterAll },
            { key: 'leak', label: t.projectsPage.filterLeak },
            { key: 'bath', label: t.projectsPage.filterBath },
            { key: 'heat', label: t.projectsPage.filterHeat },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as any)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 md:py-2 text-[10px] md:text-sm uppercase tracking-widest border transition-all duration-300 ${
                filter === f.key 
                  ? 'bg-montana-gold border-montana-gold text-montana-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-transparent border-white/20 text-slate-400 hover:border-montana-gold hover:text-montana-gold'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
          {filteredProjects.map((project, index) => {
            const ProjectCard = () => {
              const tilt = use3DTilt(10);
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  {...tilt}
                >
                  <GlassCard className="overflow-hidden">
                    <div className="h-48 md:h-64 overflow-hidden relative">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={project.imageAfter}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Logo Watermark */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img 
                          src="/LOGO.jpg" 
                          alt="Montana ST" 
                          className="w-20 h-20 object-contain opacity-20 hover:opacity-30 transition-opacity duration-500"
                          style={{ 
                            filter: 'brightness(1.4) contrast(1.7)',
                            mixBlendMode: 'screen'
                          }}
                        />
                      </div>
                      
                      <div className="absolute top-2 right-2 bg-montana-gold/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-montana-black font-bold">
                        Result
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 relative">
                      <div className="absolute top-0 left-4 md:left-6 -translate-y-1/2 bg-montana-gold text-montana-black text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 uppercase tracking-widest">
                        {project.category}
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-white mt-2 mb-1 md:mb-2 font-serif">{project.title}</h3>
                      <p className="text-slate-400 text-xs md:text-sm mb-3 md:mb-4">{project.desc}</p>
                      <div className="flex gap-2 text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                        <span>#MontanaST</span>
                        <span>#Vakwerk</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            };
            
            return <ProjectCard key={project.id} />;
          })}
        </div>

        {/* Before/After Showcase */}
        <div className="mt-12 md:mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-8 md:mb-12 text-center uppercase tracking-widest"
          >
            Voor & Na <span className="text-montana-gold">Transformaties</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {filteredProjects.slice(0, 2).map((project) => (
              <motion.div
                key={`slider-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <BeforeAfterSlider
                  beforeImage={project.imageBefore}
                  afterImage={project.imageAfter}
                  beforeLabel="Voor"
                  afterLabel="Na"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
