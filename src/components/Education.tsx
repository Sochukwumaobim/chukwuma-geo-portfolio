import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-professional mb-12">
          {t('education.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Master's Degree */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle className="text-xl text-professional mb-1">
                      {t('education.masters.degree')}
                    </CardTitle>
                    <p className="text-primary font-semibold">
                      {t('education.masters.institution')}
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="bg-primary text-white">
                  {t('experience.current')}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-professional-light">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t('education.masters.period')}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t('education.masters.location')}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-tech-teal" />
                <div>
                  <CardTitle className="text-lg text-professional mb-1">
                    {t('education.training.title')}
                  </CardTitle>
                  <p className="text-professional-light text-sm">
                    {t('education.training.institution')}
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-professional-light">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-tech-teal" />
                  {t('education.training.period')}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-tech-teal" />
                  {t('education.training.location')}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-success" />
                <div>
                  <CardTitle className="text-xl text-professional mb-1">
                    {t('education.bachelor.degree')}
                  </CardTitle>
                  <p className="text-primary font-semibold">
                    {t('education.bachelor.institution')}
                  </p>
                  <p className="text-professional-light text-sm mt-1">
                    {t('education.bachelor.field')}
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-professional-light">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-success" />
                  {t('education.bachelor.period')}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-success" />
                  {t('education.bachelor.location')}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <Badge variant="outline" className="w-fit">
                  Grade: {t('education.bachelor.grade')}
                </Badge>
                <div className="text-professional-light">
                  <span className="font-medium">Thesis:</span> {t('education.bachelor.thesis')}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};