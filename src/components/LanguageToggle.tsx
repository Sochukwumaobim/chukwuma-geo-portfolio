import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};