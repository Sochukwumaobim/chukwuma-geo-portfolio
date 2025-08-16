import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Languages } from "@/components/Languages";
import { Recommendations } from "@/components/Recommendations";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/40 relative overflow-hidden">
      {/* Background elements for geospatial theme */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-tech-teal rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-professional mb-6 relative">
          {t('about.title')}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-tech-teal rounded-full"></div>
        </h2>
        <p className="text-lg text-professional-light max-w-3xl mx-auto leading-relaxed">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <AboutSection />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Languages />
          <Recommendations />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
