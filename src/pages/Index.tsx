import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Languages } from "@/components/Languages";
import { Recommendations } from "@/components/Recommendations";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-professional mb-6">About Me</h2>
              <p className="text-lg text-professional-light max-w-3xl mx-auto leading-relaxed">
                Experienced GIS Specialist with expertise in enterprise spatial data infrastructure, 
                database administration, and geospatial analysis. Skilled in developing web mapping 
                applications, managing geodatabases, and implementing quality control workflows for spatial data.
              </p>
            </div>
          </section>
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
