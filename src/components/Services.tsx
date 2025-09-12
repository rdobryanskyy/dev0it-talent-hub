import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Settings, 
  Database, 
  Shield,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Microservices"]
    },
    {
      icon: Settings,
      title: "DevOps & Automation",
      description: "Streamline development processes with automated testing and deployment pipelines.",
      features: ["GitHub Actions", "Infrastructure as Code", "Monitoring", "Security"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust backend systems and APIs that power your applications efficiently.",
      features: ["Node.js & Python", "PostgreSQL & MongoDB", "GraphQL & REST", "Real-time Features"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures to protect your applications and data.",
      features: ["Security Audits", "GDPR Compliance", "Authentication", "Data Encryption"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Development Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and deliver exceptional digital experiences across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="p-8 group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-0"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium text-primary hover:text-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Button variant="hero" size="lg" className="group">
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;