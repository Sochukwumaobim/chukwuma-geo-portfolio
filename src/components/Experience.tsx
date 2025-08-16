import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t('experience.company1.company'),
      location: t('experience.company1.location'),
      department: t('experience.company1.department'),
      position: t('experience.company1.position'),
      period: t('experience.company1.period'),
      achievements: [
        t('experience.company1.achievements.0'),
        t('experience.company1.achievements.1'),
        t('experience.company1.achievements.2'),
        t('experience.company1.achievements.3'),
        t('experience.company1.achievements.4'),
        t('experience.company1.achievements.5'),
        t('experience.company1.achievements.6'),
        t('experience.company1.achievements.7'),
        t('experience.company1.achievements.8')
      ]
    },
    {
      company: t('experience.company2.company'),
      location: t('experience.company2.location'),
      department: t('experience.company2.department'),
      position: t('experience.company2.position'),
      period: t('experience.company2.period'),
      achievements: [
        t('experience.company2.achievements.0'),
        t('experience.company2.achievements.1'),
        t('experience.company2.achievements.2'),
        t('experience.company2.achievements.3'),
        t('experience.company2.achievements.4'),
        t('experience.company2.achievements.5'),
        t('experience.company2.achievements.6'),
        t('experience.company2.achievements.7')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-professional mb-12">
          {t('experience.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-professional mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-professional-light text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="text-sm text-professional-light mt-1">
                      {exp.department}
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-professional-light">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};