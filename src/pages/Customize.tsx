import { useState } from "react";
import { Check, Lightbulb, Plus, HelpCircle, BookOpen, Target, Users, Settings, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import customizeBg from "@/assets/customize-bg.jpg";

const Customize = () => {
  const [selectedPlan, setSelectedPlan] = useState("consultation");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const plans = [
    {
      id: "quick",
      name: "Quick Help",
      price: "Contact",
      description: "Basic questions answered",
      features: [
        "Single topic assistance",
        "Email response",
        "General guidance",
        "Educational resources",
        "FAQ access"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "consultation",
      name: "Full Consultation",
      price: "Contact",
      description: "Comprehensive guidance",
      features: [
        "One-on-one assistance",
        "Multiple topics covered",
        "Personalized recommendations",
        "Follow-up support",
        "Detailed explanations",
        "Service comparisons",
        "Setup guidance"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "premium",
      name: "Premium Support",
      price: "Contact",
      description: "Ongoing assistance",
      features: [
        "Everything in Consultation",
        "Priority response time",
        "Extended support period",
        "Multiple consultations",
        "Advanced troubleshooting",
        "Technical deep-dives",
        "Regular check-ins"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const addons = [
    {
      id: "cable",
      name: "Cable TV Guidance",
      price: "Add-on",
      description: "Assistance with cable service options and providers",
      icon: HelpCircle,
      channels: ["Provider comparisons", "Package explanations", "Contract guidance", "Channel lineups"]
    },
    {
      id: "internet",
      name: "Internet Service Help",
      price: "Add-on",
      description: "Understanding internet plans and speeds",
      icon: Target,
      channels: ["Speed requirements", "ISP comparisons", "Plan selection", "Technology types"]
    },
    {
      id: "streaming",
      name: "Streaming Guidance",
      price: "Add-on",
      description: "Navigate streaming platform options",
      icon: BookOpen,
      channels: ["Platform comparisons", "Content availability", "Subscription options", "App setup"]
    },
    {
      id: "devices",
      name: "Device Assistance",
      price: "Add-on",
      description: "Help with device selection and setup",
      icon: Settings,
      channels: ["Device recommendations", "Compatibility checks", "Setup walkthroughs", "Troubleshooting"]
    },
    {
      id: "technical",
      name: "Technical Support",
      price: "Add-on",
      description: "Advanced technical guidance and education",
      icon: Lightbulb,
      channels: ["Network setup", "Quality optimization", "Problem diagnosis", "Best practices"]
    },
    {
      id: "family",
      name: "Family Planning",
      price: "Add-on",
      description: "Household service planning assistance",
      icon: Users,
      channels: ["Multi-user needs", "Parental controls", "Budget planning", "Family packages"]
    }
  ];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  return (
    <Layout>
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${customizeBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        <div className="relative z-10 w-full content-wrapper py-20">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-8 py-3 rounded-full text-sm font-bold mb-8 border border-primary/30">
                🎯 CUSTOMIZE YOUR ASSISTANCE
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Tailored
                <span className="text-gradient block mt-2">Just For You</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Choose the assistance package that matches your needs
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Select a base consultation level and add specialized guidance areas
              </p>
              <Card className="max-w-3xl mx-auto bg-accent/30 border-primary/20 p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> HorizonCast TV is an independent third-party service assistance startup. Separate assistance fees apply. Contact us for specific pricing details.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Base Plans - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-background to-card/20">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                � BASE PACKAGES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Select Your <span className="text-gradient">Starting Point</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the assistance level that fits your situation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 100}>
                <div className={`group relative h-full cursor-pointer ${plan.popular ? 'md:-translate-y-4' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-3xl opacity-75 blur transition-all group-hover:opacity-100"></div>
                  )}
                  <Card 
                    className={`relative bg-card/50 backdrop-blur-sm border-2 p-10 h-full transition-all duration-300 cursor-pointer hover:scale-105 ${
                      selectedPlan === plan.id 
                        ? `border-primary/50 ${plan.popular ? 'shadow-2xl' : 'shadow-lg'}`
                        : 'border-border/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="absolute -top-4 right-8">
                      <div className={`px-4 py-2 rounded-full text-xs font-bold ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-purple-500 text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {plan.popular ? '⭐ MOST POPULAR' : '✨ VALUE'}
                      </div>
                    </div>
                    
                    <div className="text-center mb-8 mt-4">
                      <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-2">for pricing</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={selectedPlan === plan.id ? "btn-hero w-full" : "btn-outline-hero w-full"}
                    >
                      {selectedPlan === plan.id ? "✓ Selected" : "Select Plan"}
                    </Button>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Add-ons - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ➕ SPECIALIZED AREAS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Add Focused <span className="text-gradient">Guidance</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Include specialized assistance areas for comprehensive support
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addons.map((addon, index) => (
              <AnimatedSection key={addon.id} delay={index * 50}>
                <Card 
                  className={`bg-card/50 backdrop-blur-sm border-2 p-8 cursor-pointer transition-all duration-300 h-full ${
                    selectedAddons.includes(addon.id) 
                      ? 'border-primary/50 shadow-lg scale-105' 
                      : 'border-border/50 hover:border-primary/30 hover:scale-105'
                  }`}
                  onClick={() => toggleAddon(addon.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center">
                      <addon.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedAddons.includes(addon.id)
                        ? 'bg-primary border-primary'
                        : 'border-border'
                    }`}>
                      {selectedAddons.includes(addon.id) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {addon.description}
                  </p>
                  
                  <div className="mb-4 pb-4 border-b border-border/50">
                    <span className="text-lg font-bold text-primary">{addon.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">Available</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Channels included:</p>
                    <div className="flex flex-wrap gap-1">
                      {addon.channels.map((channel, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Order Summary - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Summary */}
                <div className="lg:col-span-2">
                  <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-10">
                    <h3 className="text-3xl font-bold mb-8">Your Custom Package</h3>
                    
                    <div className="space-y-4 mb-8">
                      {/* Base Package */}
                      <div className="flex justify-between items-center pb-4 border-b border-border/50">
                        <div>
                          <p className="font-semibold text-lg">
                            {plans.find(p => p.id === selectedPlan)?.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {plans.find(p => p.id === selectedPlan)?.description}
                          </p>
                        </div>
                        <span className="text-lg font-bold text-primary">
                          {plans.find(p => p.id === selectedPlan)?.price}
                        </span>
                      </div>
                      
                      {/* Add-ons */}
                      {selectedAddons.length > 0 && (
                        <div className="space-y-3 pb-4 border-b border-border/50">
                          <p className="font-semibold text-muted-foreground">Specialized Areas:</p>
                          {selectedAddons.map(addonId => {
                            const addon = addons.find(a => a.id === addonId);
                            return addon ? (
                              <div key={addonId} className="flex justify-between items-center pl-4">
                                <span className="flex items-center space-x-2">
                                  <addon.icon className="w-4 h-4 text-primary" />
                                  <span>{addon.name}</span>
                                </span>
                                <span className="text-primary text-sm">{addon.price}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      )}
                      
                      {/* Summary */}
                      <div className="flex flex-col gap-2 pt-4 bg-primary/10 rounded-lg px-4 py-3">
                        <span className="text-lg font-bold">Customized Package Ready</span>
                        <span className="text-sm text-muted-foreground">Contact us for pricing details</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      ✓ Personalized assistance tailored to your needs<br/>
                      ✓ 7-15 day refund policy on all services<br/>
                      ✓ Independent, unbiased guidance
                    </p>
                  </Card>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <Card className="bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-primary/30 p-8 text-center">
                    <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                    <p className="text-muted-foreground mb-8">
                      Your customized assistance package is ready. Contact us to discuss pricing and next steps!
                    </p>
                    <Button className="btn-hero w-full text-lg py-6 mb-4">
                      Request Assistance
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Separate assistance fees apply • 7-15 day refund policy
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Customize;