import { 
  Lightbulb, 
  HelpCircle, 
  Users, 
  Smartphone, 
  BookOpen, 
  Shield, 
  Target, 
  CheckCircle,
  Info,
  Headphones,
  Settings,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import premiumViewing from "@/assets/premium-viewing.jpg";

const Features = () => {
  const mainFeatures = [
    {
      icon: Lightbulb,
      title: "Service Option Education",
      description: "We help you understand different cable, internet, and streaming service options available in your area. Our guidance is independent and educational.",
      benefits: ["Unbiased service comparisons", "Local availability insights", "Feature explanations", "Technology guidance"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: HelpCircle,
      title: "Personalized Consultation",
      description: "One-on-one assistance to help you evaluate service options based on your specific needs, preferences, and budget.",
      benefits: ["Individual guidance sessions", "Budget analysis help", "Need assessment support", "Decision-making assistance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access comprehensive guides and educational materials about cable, internet, and streaming technology to make informed decisions.",
      benefits: ["How-to guides", "Service explainers", "Technology tutorials", "Industry insights"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Technical Support Guidance",
      description: "Get help understanding technical requirements, device compatibility, and setup processes for various services.",
      benefits: ["Device compatibility info", "Setup guidance", "Troubleshooting education", "Technical Q&A support"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalFeatures = [
    { icon: Globe, title: "Nationwide Coverage", description: "Assistance available for services across all 50 states" },
    { icon: Shield, title: "Independent Advice", description: "Unbiased guidance with no provider affiliations" },
    { icon: Users, title: "Personalized Approach", description: "Tailored assistance based on your unique situation" },
    { icon: CheckCircle, title: "Transparent Process", description: "Clear explanations of our assistance services and fees" },
    { icon: Smartphone, title: "Multiple Channels", description: "Get help via phone, email, or online consultation" },
    { icon: Headphones, title: "Responsive Support", description: "Timely responses to your questions and concerns" },
    { icon: Settings, title: "Ongoing Updates", description: "Stay informed about changes in service offerings" },
    { icon: Info, title: "Educational Focus", description: "Empowering you to make informed service decisions" }
  ];

  return (
    <Layout>
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${premiumViewing})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        <div className="relative z-10 w-full content-wrapper py-20">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-8 py-3 rounded-full text-sm font-bold mb-8 border border-primary/30">
                ✨ ASSISTANCE FEATURES
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Expert <span className="text-gradient">Guidance</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Independent assistance for your service decisions
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Discover how our educational platform helps you navigate cable, internet, and streaming options
              </p>
              <Card className="max-w-3xl mx-auto bg-accent/30 border-primary/20 p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> HorizonCast TV is an independent third-party service assistance startup, launched in 2025. We are not affiliated with any cable, internet, or streaming service provider. Separate assistance fees apply.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Features - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-background to-card/20">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 HOW WE ASSIST
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Guidance You <span className="text-gradient">Can Trust</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Independent assistance features designed to help you succeed
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all`}></div>
                  <Card className="relative bg-card/50 backdrop-blur-sm border border-border/50 p-10 h-full hover:scale-105 transition-all duration-300">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
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

      {/* Additional Benefits - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ MORE BENEFITS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Why Choose <span className="text-gradient">Us</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Independent assistance with your success in mind
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 50}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Ready to Get <span className="text-gradient">Started?</span>
              </h2>
              <p className="text-2xl text-muted-foreground mb-12">
                Connect with our assistance team to explore your service options
              </p>
              <Button className="btn-hero text-xl px-14 py-7 mb-6">
                Request Assistance
              </Button>
              <p className="text-muted-foreground text-lg">
                Separate assistance fees apply • 7-15 day refund policy • Independent guidance
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Features;