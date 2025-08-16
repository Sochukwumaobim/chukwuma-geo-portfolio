import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, Ear, Eye, PenTool, MessageCircle, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Languages = () => {
  const { t } = useLanguage();

  const languages = [
    {
      language: t('languages.english.language'),
      flag: "🇺🇸",
      levels: {
        listening: t('languages.english.listening'),
        reading: t('languages.english.reading'),
        writing: t('languages.english.writing'),
        production: t('languages.english.production'),
        interaction: t('languages.english.interaction')
      }
    },
    {
      language: t('languages.german.language'),
      flag: "🇩🇪",
      levels: {
        listening: t('languages.german.listening'),
        reading: t('languages.german.reading'),
        writing: t('languages.german.writing'),
        production: t('languages.german.production'),
        interaction: t('languages.german.interaction')
      }
    }
  ];

  const skillIcons = {
    listening: Ear,
    reading: Eye,
    writing: PenTool,
    production: MessageCircle,
    interaction: Users
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'C2':
      case 'C1':
        return 'bg-success text-white';
      case 'B2':
      case 'B1':
        return 'bg-primary text-white';
      case 'A2':
      case 'A1':
        return 'bg-tech-teal text-white';
      default:
        return 'bg-muted text-professional';
    }
  };

  return (
    <section id="languages" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-professional mb-6">
          {t('languages.title')}
        </h2>
        
        <p className="text-center text-professional-light text-sm mb-12 max-w-2xl mx-auto">
          {t('languages.levels')}
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-professional">
                  <span className="text-2xl">{lang.flag}</span>
                  <Globe2 className="w-5 h-5 text-primary" />
                  {lang.language}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(lang.levels).map(([skill, level]) => {
                    const IconComponent = skillIcons[skill as keyof typeof skillIcons];
                    return (
                      <div key={skill} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-professional-light" />
                          <span className="text-sm text-professional-light capitalize">
                            {skill === 'production' ? 'Speaking' : 
                             skill === 'interaction' ? 'Interaction' : skill}
                          </span>
                        </div>
                        <Badge className={`text-xs px-2 py-1 ${getLevelColor(level)}`}>
                          {level}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};