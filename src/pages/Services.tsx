import { 
  Play, 
  Tv, 
  Cloud, 
  Users, 
  Shield, 
  Headphones, 
  Zap, 
  Globe,
  Download,
  Cast,
  Settings,
  Award,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import contentGrid from "@/assets/content-grid.jpg";

const Services = () => {
  const subscriptionPlans = [
    {
      name: "Starter",
      price: 24.99,
      popular: false,
      badge: "Best Value",
      features: [
        "60+ Live TV Channels",
        "50 Hours Cloud DVR",
        "2 Simultaneous Streams",
        "3 User Profiles",
        "Full HD 1080p Quality",
        "Mobile & TV Access",
        "Cancel Anytime"
      ],
      ideal: "Great for solo streamers"
    },
    {
      name: "Family",
      price: 49.99,
      popular: true,
      badge: "Most Popular",
      features: [
        "100+ Live TV Channels",
        "Unlimited Cloud DVR",
        "4 Simultaneous Streams",
        "6 User Profiles",
        "4K Ultra HD + HDR",
        "All Devices Included",
        "Offline Downloads",
        "Priority Support",
        "No Contracts"
      ],
      ideal: "Perfect for families"
    },
    {
      name: "Ultimate",
      price: 79.99,
      popular: false,
      badge: "Premium",
      features: [
        "Everything in Family",
        "Premium Sports Package",
        "HBO, Showtime & More",
        "Exclusive Originals",
        "Early Movie Releases",
        "VIP Customer Support",
        "Dolby Atmos Audio",
        "8K Ready Streaming",
        "Global Access"
      ],
      ideal: "Ultimate experience"
    }
  ];

  const coreServices = [
    {
      name: "Live TV Excellence",
      icon: Tv,
      description: "Stream 100+ premium channels with zero buffering and crystal-clear picture quality",
      features: [
        "Every major broadcast network",
        "Round-the-clock news coverage",
        "Complete sports lineup",
        "Premium entertainment channels",
        "Local stations in your area",
        "Live events in real-time"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Massive Content Library",
      icon: Play,
      description: "Explore 100,000+ hours of on-demand movies, series, and exclusive originals",
      features: [
        "Latest blockbuster releases",
        "Award-winning original series",
        "Timeless classic collections",
        "International cinema",
        "Family-friendly programming",
        "Fresh content added daily"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Infinite Cloud DVR",
      icon: Cloud,
      description: "Never miss a moment with unlimited recording and 12-month storage",
      features: [
        "Truly unlimited storage",
        "Keep recordings for a full year",
        "Skip ads with ease",
        "Record 10 shows at once",
        "Watch on any device",
        "Smart series recording"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Personalized Profiles",
      icon: Users,
      description: "Everyone gets their own personalized entertainment hub with AI-powered recommendations",
      features: [
        "6 fully customized profiles",
        "AI content suggestions",
        "Individual viewing history",
        "Advanced parental controls",
        "Personal watchlists",
        "Smart content filtering"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalServices = [
    {
      name: "Premium Support",
      icon: Headphones,
      description: "24/7 customer support with live chat, phone, and email assistance"
    },
    {
      name: "Device Setup",
      icon: Settings,
      description: "Free assistance setting up Abplay TV on all your devices"
    },
    {
      name: "Content Curation",
      icon: Award,
      description: "Expert-curated collections and personalized recommendations"
    },
    {
      name: "Global Access",
      icon: Globe,
      description: "Stream your content while traveling internationally"
    },
    {
      name: "Offline Viewing",
      icon: Download,
      description: "Download content to watch without an internet connection"
    },
    {
      name: "Screen Casting",
      icon: Cast,
      description: "Cast from mobile devices to TVs and streaming devices"
    }
  ];

  const bundles = [
    {
      name: "Entertainment Bundle",
      services: ["Horizon Cast TV Pro", "Music Streaming", "E-book Library"],
      originalPrice: 79.97,
      bundlePrice: 59.99,
      savings: 19.98,
      description: "Complete entertainment package for the whole family"
    },
    {
      name: "Sports Fan Bundle",
      services: ["Horizon Cast TV Premium", "Sports Add-on", "Fantasy Sports Pro"],
      originalPrice: 99.97,
      bundlePrice: 79.99,
      savings: 19.98,
      description: "Everything a sports enthusiast needs"
    },
    {
      name: "Family Complete",
      services: ["Horizon Cast TV Pro", "Kids Learning Apps", "Parental Controls Pro"],
      originalPrice: 69.97,
      bundlePrice: 54.99,
      savings: 14.98,
      description: "Perfect package for families with children"
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
                💎 PREMIUM PLANS & SERVICES
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Entertainment
                <span className="text-gradient block mt-2">Your Way</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Flexible plans. Unlimited possibilities. Zero compromises.
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Choose the perfect plan for your lifestyle with premium features, unlimited content, and the freedom to cancel anytime.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Subscription Plans - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-background to-card/20">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                💰 FLEXIBLE PRICING
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Choose Your <span className="text-gradient">Perfect Plan</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                All plans include 14-day free trial. No credit card required. Cancel anytime.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {subscriptionPlans.map((plan, index) => (
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
                          <div className="mb-6">
                            <span className="text-6xl font-bold text-primary">${plan.price}</span>
                            <span className="text-muted-foreground text-xl">/mo</span>
                          </div>
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
                          Start Free Trial
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
                ⚡ POWERFUL FEATURES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Everything You <span className="text-gradient">Need</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Premium features that elevate your streaming experience
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
                🎁 BONUS FEATURES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Even More <span className="text-gradient">Value</span>
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

      {/* Bundles - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📦 SPECIAL BUNDLES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Save More with <span className="text-gradient">Bundles</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Combine services and save up to 25% on your monthly subscription
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bundles.map((bundle, index) => (
              <AnimatedSection key={bundle.name} delay={index * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-10 h-full hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{bundle.name}</h3>
                  <p className="text-muted-foreground mb-6">{bundle.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-lg text-muted-foreground line-through mb-1">
                      ${bundle.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      ${bundle.bundlePrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-green-500 font-semibold">
                      Save ${bundle.savings.toFixed(2)}/month
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {bundle.services.map((svc, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-sm">{svc}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="btn-hero w-full">
                    Get Bundle
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                  Risk-Free <span className="text-gradient">Guarantee</span>
                </h2>
                <p className="text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                  Try Horizon Cast TV completely risk-free with our 30-day money-back guarantee. Love it or get a full refund—no questions asked.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground text-lg">Uptime Guaranteed</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">&lt; 1min</div>
                  <div className="text-muted-foreground text-lg">Avg Support Response</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground text-lg">Expert Support</div>
                </Card>
              </div>
              <div className="text-center">
                <Button className="btn-hero text-xl px-14 py-7">
                  Start Free Trial Today
                </Button>
                <p className="text-muted-foreground mt-4">No credit card required • Cancel anytime</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;