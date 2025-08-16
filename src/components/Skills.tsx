import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Map, Code, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.geospatial.title'),
      icon: Map,
      color: "text-primary",
      items: [
        t('skills.geospatial.items.0'),
        t('skills.geospatial.items.1'),
        t('skills.geospatial.items.2'),
        t('skills.geospatial.items.3'),
        t('skills.geospatial.items.4'),
        t('skills.geospatial.items.5'),
        t('skills.geospatial.items.6'),
        t('skills.geospatial.items.7')
      ]
    },
    {
      title: t('skills.database.title'),
      icon: Database,
      color: "text-tech-teal",
      items: [
        t('skills.database.items.0'),
        t('skills.database.items.1'),
        t('skills.database.items.2'),
        t('skills.database.items.3'),
        t('skills.database.items.4')
      ]
    },
    {
      title: t('skills.programming.title'),
      icon: Code,
      color: "text-success",
      items: [
        t('skills.programming.items.0'),
        t('skills.programming.items.1'),
        t('skills.programming.items.2'),
        t('skills.programming.items.3'),
        t('skills.programming.items.4'),
        t('skills.programming.items.5')
      ]
    },
    {
      title: t('skills.specialized.title'),
      icon: Settings,
      color: "text-professional",
      items: [
        t('skills.specialized.items.0'),
        t('skills.specialized.items.1'),
        t('skills.specialized.items.2'),
        t('skills.specialized.items.3'),
        t('skills.specialized.items.4'),
        t('skills.specialized.items.5')
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-professional mb-12">
          {t('skills.title')}
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-professional">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs px-3 py-1 bg-muted hover:bg-accent transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};