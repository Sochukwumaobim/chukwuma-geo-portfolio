import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Mail, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Recommendations = () => {
  const { t } = useLanguage();

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-professional mb-12">
          {t('recommendations.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50 relative">
            <div className="absolute top-4 left-4">
              <Quote className="w-8 h-8 text-primary opacity-20" />
            </div>
            
            <CardHeader className="pt-12 pb-4">
              <CardTitle className="flex items-center gap-3 text-professional">
                <User className="w-5 h-5 text-primary" />
                {t('recommendations.professor.name')}
              </CardTitle>
              <p className="text-professional-light">{t('recommendations.professor.title')}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <blockquote className="text-professional-light italic leading-relaxed text-lg">
                "{t('recommendations.professor.quote')}"
              </blockquote>
              
              <div className="flex items-center gap-2 text-sm text-professional-light pt-4 border-t border-border">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href={`mailto:${t('recommendations.professor.email')}`}
                  className="text-primary hover:text-tech-teal transition-colors"
                >
                  {t('recommendations.professor.email')}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};