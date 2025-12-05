import { 
  Tv, 
  Cloud, 
  Users, 
  Smartphone, 
  Zap, 
  Shield, 
  Download, 
  Cast,
  Monitor,
  Headphones,
  Settings,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import premiumViewing from "@/assets/premium-viewing.jpg";

const Features = () => {
  const mainFeatures = [
    {
      icon: Tv,
      title: "100+ Live TV Channels",
      description: "Stream premium channels with crystal-clear picture and zero buffering. Major networks, sports, entertainment, and international content all in one place.",
      benefits: ["Complete network coverage", "Live sports & events", "Premium entertainment", "Local & international channels"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Unlimited Cloud DVR",
      description: "Record every show you love with unlimited storage. Never miss a moment with recordings available for 12 months.",
      benefits: ["Truly unlimited storage", "12-month retention", "Skip ads feature", "10 simultaneous recordings"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "6 Personalized Profiles",
      description: "Everyone in your family gets their own profile with custom recommendations, watch history, and parental controls.",
      benefits: ["AI recommendations", "Individual profiles", "Smart parental controls", "Personal watchlists"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Multi-Device Streaming",
      description: "Watch on any device - TVs, phones, tablets, computers, and gaming consoles. Up to 4 simultaneous streams.",
      benefits: ["Cross-device sync", "4 simultaneous streams", "Offline downloads", "Universal compatibility"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: "4K Ultra HD", description: "Crystal-clear 4K streaming on all supported devices and content" },
    { icon: Shield, title: "Bank-Level Security", description: "Enterprise encryption protects your data and privacy" },
    { icon: Download, title: "Download & Watch", description: "Save shows and movies to watch offline anytime" },
    { icon: Cast, title: "Smart Casting", description: "Easily cast to TVs with Chromecast and AirPlay support" },
    { icon: Monitor, title: "All Screen Sizes", description: "Optimized experience from phones to 85-inch TVs" },
    { icon: Headphones, title: "Dolby Atmos", description: "Premium immersive audio on compatible content" },
    { icon: Settings, title: "AI Recommendations", description: "Smart engine learns your preferences and suggests content" },
    { icon: Star, title: "Exclusive Originals", description: "Original series and movies available only on Horizon Cast TV" }
  ];

  const comparisonFeatures = [
    { feature: "Live TV Channels", horizonCast: "100+", competitor1: "75+", competitor2: "65+" },
    { feature: "Cloud DVR Storage", horizonCast: "Unlimited", competitor1: "50 hours", competitor2: "20 hours" },
    { feature: "Simultaneous Streams", horizonCast: "4", competitor1: "2", competitor2: "1" },
    { feature: "User Profiles", horizonCast: "6", competitor1: "4", competitor2: "5" },
    { feature: "4K Content", horizonCast: "✓", competitor1: "✓", competitor2: "✗" },
    { feature: "Offline Downloads", horizonCast: "✓", competitor1: "✗", competitor2: "✓" },
    { feature: "Free Trial", horizonCast: "14 days", competitor1: "7 days", competitor2: "3 days" }
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
                ✨ PREMIUM FEATURES
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Powered By <span className="text-gradient">Innovation</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Cutting-edge technology meets entertainment excellence
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Discover the features that make Horizon Cast TV the ultimate streaming choice for millions
              </p>
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
                🎯 CORE FEATURES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Everything You <span className="text-gradient">Deserve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Premium features built for the ultimate streaming experience
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

      {/* Advanced Capabilities - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ⚡ ADVANCED TECHNOLOGY
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Cutting-Edge <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced technology for superior entertainment
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

      {/* Comparison - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📊 HOW WE COMPARE
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Why Choose <span className="text-gradient">Horizon Cast TV</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Industry-leading features at unbeatable value
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="overflow-x-auto max-w-6xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-purple-500">
                    <th className="text-left p-6 text-white font-semibold">Feature</th>
                    <th className="text-center p-6 text-white font-semibold">Horizon Cast TV</th>
                    <th className="text-center p-6 text-white font-semibold">Competitor A</th>
                    <th className="text-center p-6 text-white font-semibold">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={row.feature} className={`border-b border-border/50 ${index % 2 === 0 ? "bg-card/30" : "bg-card/10"}`}>
                      <td className="p-6 font-semibold">{row.feature}</td>
                      <td className="p-6 text-center">
                        <span className="font-bold text-primary">{row.horizonCast}</span>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">{row.competitor1}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.competitor2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Experience Premium <span className="text-gradient">Free</span>
              </h2>
              <p className="text-2xl text-muted-foreground mb-12">
                Try all features risk-free for 14 days with our complete trial
              </p>
              <Button className="btn-hero text-xl px-14 py-7 mb-6">
                Start Free Trial Now
              </Button>
              <p className="text-muted-foreground text-lg">
                No credit card • Full feature access • Cancel anytime
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Features;