import { useState } from "react";
import { Check, Star, Plus, Tv, Film, Music, Trophy, Globe, Gamepad2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import customizeBg from "@/assets/customize-bg.jpg";

const Customize = () => {
  const [selectedPlan, setSelectedPlan] = useState("family");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 24.99,
      description: "Perfect entry point",
      features: [
        "60+ Live TV Channels",
        "50 Hours Cloud DVR",
        "2 Simultaneous Streams",
        "3 User Profiles",
        "Full HD 1080p",
        "Mobile & TV Access"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "family",
      name: "Family",
      price: 49.99,
      description: "Most popular choice",
      features: [
        "100+ Live TV Channels",
        "Unlimited Cloud DVR",
        "4 Simultaneous Streams",
        "6 User Profiles",
        "4K Ultra HD + HDR",
        "All Devices Included",
        "Offline Downloads",
        "Priority Support"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: 79.99,
      description: "Maximum entertainment",
      features: [
        "Everything in Family",
        "Premium Sports Package",
        "HBO, Showtime & More",
        "Exclusive Originals",
        "Early Movie Releases",
        "VIP Support",
        "Dolby Atmos Audio",
        "8K Ready Streaming"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const addons = [
    {
      id: "sports",
      name: "Sports Max",
      price: 14.99,
      description: "Premium sports content and live events",
      icon: Trophy,
      channels: ["ESPN+", "NFL RedZone", "NBA League Pass", "MLB Network"]
    },
    {
      id: "movies",
      name: "Movie Pack",
      price: 9.99,
      description: "HBO Max, Showtime, and premium films",
      icon: Film,
      channels: ["HBO Max", "Showtime", "Starz", "Cinemax"]
    },
    {
      id: "international",
      name: "Global Access",
      price: 12.99,
      description: "International channels worldwide",
      icon: Globe,
      channels: ["BBC World", "TV5Monde", "Deutsche Welle", "NHK World"]
    },
    {
      id: "kids",
      name: "Kids & Family",
      price: 7.99,
      description: "Safe family entertainment",
      icon: Star,
      channels: ["Disney Jr", "Nickelodeon", "Cartoon Network", "PBS Kids"]
    },
    {
      id: "music",
      name: "Music Channels",
      price: 6.99,
      description: "24/7 music across all genres",
      icon: Music,
      channels: ["MTV", "VH1", "Music Choice", "Stingray"]
    },
    {
      id: "gaming",
      name: "Gaming Hub",
      price: 8.99,
      description: "Esports and gaming content",
      icon: Gamepad2,
      channels: ["Twitch", "G4TV", "ESL Gaming", "GameSpot"]
    }
  ];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const getTotalPrice = () => {
    const basePlan = plans.find(p => p.id === selectedPlan);
    const addonPrice = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return (basePlan?.price || 0) + addonPrice;
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
                � BUILD YOUR PACKAGE
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Customize Your
                <span className="text-gradient block mt-2">Perfect Plan</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Mix and match content to create your ideal entertainment experience
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Choose a base plan and add premium packages to suit your lifestyle
              </p>
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
                💎 BASE PLANS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Choose Your <span className="text-gradient">Foundation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every plan includes a 14-day free trial with full feature access
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
                        <span className="text-6xl font-bold text-primary">${plan.price}</span>
                        <span className="text-muted-foreground text-xl">/mo</span>
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
                🎁 PREMIUM ADD-ONS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Enhance Your <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Add specialized content packages to personalize your package
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
                    <span className="text-2xl font-bold text-primary">+${addon.price}</span>
                    <span className="text-muted-foreground">/month</span>
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
                      {/* Base Plan */}
                      <div className="flex justify-between items-center pb-4 border-b border-border/50">
                        <div>
                          <p className="font-semibold text-lg">
                            {plans.find(p => p.id === selectedPlan)?.name} Plan
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {plans.find(p => p.id === selectedPlan)?.description}
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-primary">
                          ${plans.find(p => p.id === selectedPlan)?.price}/mo
                        </span>
                      </div>
                      
                      {/* Add-ons */}
                      {selectedAddons.length > 0 && (
                        <div className="space-y-3 pb-4 border-b border-border/50">
                          <p className="font-semibold text-muted-foreground">Premium Add-ons:</p>
                          {selectedAddons.map(addonId => {
                            const addon = addons.find(a => a.id === addonId);
                            return addon ? (
                              <div key={addonId} className="flex justify-between items-center pl-4">
                                <span className="flex items-center space-x-2">
                                  <addon.icon className="w-4 h-4 text-primary" />
                                  <span>{addon.name}</span>
                                </span>
                                <span className="text-primary">+${addon.price}/mo</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      )}
                      
                      {/* Total */}
                      <div className="flex justify-between items-center pt-4 bg-primary/10 rounded-lg px-4 py-3">
                        <span className="text-xl font-bold">Total Monthly Cost</span>
                        <span className="text-3xl font-bold text-primary">${getTotalPrice().toFixed(2)}/mo</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      ✓ 14-day free trial with full access to all features<br/>
                      ✓ Cancel anytime with no penalty<br/>
                      ✓ No credit card required to start
                    </p>
                  </Card>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <Card className="bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-primary/30 p-8 text-center">
                    <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
                    <p className="text-muted-foreground mb-8">
                      Your personalized package is ready. Begin your free trial now!
                    </p>
                    <Button className="btn-hero w-full text-lg py-6 mb-4">
                      Start Free Trial
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      No card required • 14 days free
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