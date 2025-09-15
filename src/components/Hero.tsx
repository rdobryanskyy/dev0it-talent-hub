import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-secondary">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern technology workspace" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Geometric Elements - Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent/5 blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Progressive Developers
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Progressive Applications
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Scalable and cutting-edge development solutions designed to help businesses 
          unleash their potential with modern technology.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;