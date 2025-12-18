import { useEffect } from "react";
import { 
  HelpCircle, 
  Lightbulb, 
  Headphones, 
  Users, 
  Shield, 
  CheckCircle, 
  Zap, 
  Globe,
  Star,
  Info,
  Clock,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import contentGrid from "@/assets/content-grid.jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const assistancePackages = [
    {
      name: "Basic Consultation",
      description: "Perfect for quick questions and general guidance",
      features: [
        "30-minute phone consultation",
        "Service comparison overview",
        "General recommendations",
        "Email follow-up support",
        "Educational resources access"
      ],
      ideal: "Great for specific questions",
      icon: HelpCircle,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Comprehensive Guidance",
      description: "In-depth assistance for making informed decisions",
      popular: true,
      features: [
        "60-minute detailed consultation",
        "Personalized service comparison",
        "Technical requirements review",
        "Setup guidance documentation",
        "Provider contact assistance",
        "30-day follow-up support",
        "Priority email support"
      ],
      ideal: "Perfect for most users",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Premium Support Package",
      description: "Complete assistance from start to finish",
      features: [
        "Multiple consultation sessions",
        "Dedicated support specialist",
        "Complete setup assistance guidance",
        "Ongoing troubleshooting help",
        "Provider negotiation tips",
        "90-day extended support",
        "Priority phone & email support",
        "Customized service roadmap"
      ],
      ideal: "Comprehensive support",
      icon: Star,
      color: "from-orange-500 to-red-500"
    }
  ];

  const coreServices = [
    {
      name: "Cable & TV Guidance",
      icon: HelpCircle,
      description: "Assistance understanding cable and TV service options, packages, and pricing structures",
      features: [
        "Package comparison assistance",
        "Channel lineup explanations",
        "Pricing structure breakdowns",
        "Contract terms guidance",
        "Bundle options analysis",
        "Provider availability checks"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Internet Service Help",
      icon: Zap,
      description: "Guidance on selecting the right internet service based on your speed and usage needs",
      features: [
        "Speed requirement calculations",
        "Provider comparison support",
        "Technology explanations (fiber, cable, DSL)",
        "Router and equipment guidance",
        "Installation process overview",
        "Troubleshooting basics education"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Streaming Platform Guidance",
      icon: Lightbulb,
      description: "Help navigating the world of streaming services and device compatibility",
      features: [
        "Platform comparison assistance",
        "Content library overviews",
        "Device compatibility checks",
        "Setup process guidance",
        "Account management tips",
        "Cost-saving strategies"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Technical Support Education",
      icon: Headphones,
      description: "Learn about common technical issues and how to resolve them independently",
      features: [
        "Connection troubleshooting guides",
        "Wi-Fi optimization tips",
        "Device setup walkthroughs",
        "Account security education",
        "Billing question guidance",
        "Self-help resource library"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalServices = [
    {
      name: "Nationwide Coverage",
      icon: Globe,
      description: "Assistance available for services in all 50 states"
    },
    {
      name: "Independent Advice",
      icon: Shield,
      description: "Unbiased guidance with no provider affiliations"
    },
    {
      name: "Educational Resources",
      icon: BookOpen,
      description: "Comprehensive guides and learning materials"
    },
    {
      name: "Flexible Scheduling",
      icon: Clock,
      description: "Consultations available at your convenience"
    },
    {
      name: "Personalized Support",
      icon: Users,
      description: "Tailored assistance for your specific needs"
    },
    {
      name: "Ongoing Updates",
      icon: Info,
      description: "Stay informed about service changes and options"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contentGrid})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        <div className="relative z-10 w-full content-wrapper py-20">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-8 py-3 rounded-full text-sm font-bold mb-8 border border-primary/30">
                🤝 ASSISTANCE SERVICES
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Guidance
                <span className="text-gradient block mt-2">You Can Trust</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Independent. Educational. User-Focused.
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                We provide personalized assistance to help you navigate cable, internet, and streaming service options. Separate assistance fees apply.
              </p>
              <Card className="max-w-3xl mx-auto bg-accent/30 border-primary/20 p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> HorizonCast TV is an independent third-party service assistance startup, launched in 2025. We are not affiliated with any cable, internet, or streaming service provider.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Assistance Packages - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-background to-card/20">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 ASSISTANCE OPTIONS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Choose Your <span className="text-gradient">Assistance Level</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the package that matches your needs. All services have separate assistance fees.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {assistancePackages.map((plan, index) => (
                  <AnimatedSection key={plan.name} delay={index * 100}>
                    <div className={`group relative h-full ${plan.popular ? 'md:-translate-y-4' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-3xl opacity-75 blur transition-all group-hover:opacity-100"></div>
                      )}
                      <Card className={`relative bg-card/50 backdrop-blur-sm border-2 p-10 h-full ${
                        plan.popular ? "border-primary/50" : "border-border/50"
                      } hover:scale-105 transition-all duration-300`}>
                        <div className="absolute -top-4 right-8">
                          <div className={`px-4 py-2 rounded-full text-xs font-bold ${
                            plan.popular 
                              ? 'bg-gradient-to-r from-primary to-purple-500 text-white' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {plan.badge}
                          </div>
                        </div>
                        
                        <div className="text-center mb-8 mt-4">
                          <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                          <p className="text-muted-foreground text-lg mb-6">{plan.ideal}</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button className={plan.popular ? "btn-hero w-full text-lg py-6" : "btn-outline-hero w-full text-lg py-6"}>
                          Request Assistance
                        </Button>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

      {/* Core Services - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 HOW WE HELP
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Assistance <span className="text-gradient">Categories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guidance across all service types
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 100}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all`}></div>
                  <Card className="relative bg-card/50 backdrop-blur-sm border border-border/50 p-10 h-full hover:scale-105 transition-all duration-300">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.name}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ WHY CHOOSE US
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Independent <span className="text-gradient">Advantage</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 50}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Service Commitment - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                  Our <span className="text-gradient">Commitment</span>
                </h2>
                <p className="text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                  We provide honest, educational assistance with a 7-15 day refund policy for our services. Your success in finding the right service is our priority.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground text-lg">Independent Guidance</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7-15</div>
                  <div className="text-muted-foreground text-lg">Day Refund Window</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2025</div>
                  <div className="text-muted-foreground text-lg">Founded & Independent</div>
                </Card>
              </div>
              <div className="text-center">
                <Button className="btn-hero text-xl px-14 py-7">
                  Request Assistance
                </Button>
                <p className="text-muted-foreground mt-4">Separate assistance fees apply • See refund policy for details</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;