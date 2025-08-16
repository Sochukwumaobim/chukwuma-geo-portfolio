import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.project1.title'),
      year: t('projects.project1.year'),
      technologies: t('projects.project1.technologies'),
      highlights: [
        t('projects.project1.highlights.0'),
        t('projects.project1.highlights.1'),
        t('projects.project1.highlights.2')
      ],
      link: "https://www.canva.com/design/DAGoZqwuqbo/ps-2c7RvZjXPjCsU8KXBog/edit"
    },
    {
      title: t('projects.project2.title'),
      year: t('projects.project2.year'),
      technologies: t('projects.project2.technologies'),
      highlights: [
        t('projects.project2.highlights.0'),
        t('projects.project2.highlights.1'),
        t('projects.project2.highlights.2')
      ],
      link: "https://www.canva.com/design/DAGoNF4QSzo/n_DpjfqALkBB6-jpVTcqvg/edit"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-professional mb-12">
          {t('projects.title')}
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-professional mb-3 leading-tight">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1 w-fit mb-3">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-professional">Technologies:</span>
                  </div>
                  <p className="text-sm text-professional-light leading-relaxed">
                    {project.technologies}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-professional mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hlIndex) => (
                      <li key={hlIndex} className="flex items-start gap-2 text-professional-light">
                        <div className="w-1.5 h-1.5 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};