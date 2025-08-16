import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-accent/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-teal rounded-full blur-3xl"></div>
      </div>
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageToggle />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-tech-teal flex items-center justify-center shadow-hero">
            <span className="text-4xl font-bold text-white">CU</span>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold text-professional mb-4">
            Chukwuma Ugwu
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
            {t('hero.title')}
          </h2>
          
          <p className="text-lg text-professional-light max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-sm">
            <div className="flex items-center justify-center md:justify-start gap-2 text-professional-light">
              <Phone className="w-4 h-4 text-primary" />
              <span>(+49) 15215797507</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-professional-light">
              <Mail className="w-4 h-4 text-primary" />
              <span>ugwusochukwuma@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-professional-light">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Stuttgart, Germany</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-professional-light">
              <Globe className="w-4 h-4 text-primary" />
              <span>Nigerian</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary to-tech-teal hover:from-primary-hover hover:to-tech-teal text-white shadow-hero px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              {t('hero.downloadCV')}
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
              <ExternalLink className="w-5 h-5 mr-2" />
              {t('hero.viewProjects')}
            </Button>
          </div>

          {/* LinkedIn */}
          <div className="mt-6">
            <a 
              href="https://www.linkedin.com/in/chukwuma-ugwu-68329a11a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-tech-teal transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};