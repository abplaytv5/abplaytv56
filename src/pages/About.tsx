import { useEffect } from "react";
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Heart, 
  Target,
  TrendingUp,
  Lightbulb,
  Shield,
  Headphones,
  Sparkles,
  Rocket,
  Star,
  Info,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import premiumViewing from "@/assets/premium-viewing.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const milestones = [
    {
      year: "Early 2025",
      title: "The Beginning",
      description: "HorizonCast TV was founded with a mission to simplify the complex world of cable, internet, and streaming services for everyday users."
    },
    {
      year: "Spring 2025",
      title: "Platform Development",
      description: "Built our educational resources and guidance framework to help users make informed decisions about their entertainment and connectivity needs."
    },
    {
      year: "Summer 2025",
      title: "Service Launch",
      description: "Officially launched our independent assistance platform, providing unbiased guidance to users navigating provider options nationwide."
    },
    {
      year: "Fall 2025",
      title: "Community Growth",
      description: "Expanded our support capabilities and educational content library based on user feedback and evolving market needs."
    },
    {
      year: "Today",
      title: "Ongoing Mission",
      description: "Continuing to assist users daily with personalized guidance, educational resources, and independent support for their service decisions."
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Independence & Transparency",
      description: "We maintain complete independence from all service providers, ensuring our guidance remains unbiased and focused solely on helping you make the best decisions for your needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "User-First Approach",
      description: "Every recommendation, every piece of guidance, and every resource we provide is designed with your best interests in mind. Your success is our success.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "Educational Mission",
      description: "We believe informed users make better decisions. Our goal is to educate and empower, not to sell or push specific services.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Real people providing real assistance. We're here to guide you through complex decisions with patience, clarity, and personalized attention.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { number: "2025", label: "Founded", desc: "Independent startup", icon: Rocket },
    { number: "100%", label: "Independent", desc: "No provider affiliations", icon: Shield },
    { number: "Nationwide", label: "Assistance", desc: "Available everywhere", icon: Globe },
    { number: "7-15 Days", label: "Refund Window", desc: "Customer satisfaction", icon: CheckCircle }
  ];

  const team = [
    {
      name: "Support Team",
      position: "Customer Assistance Specialists",
      avatar: "👥",
      bio: "Our dedicated team of assistance specialists is trained to help you understand your options and make informed decisions about services.",
      highlight: "Real People"
    },
    {
      name: "Research Team",
      position: "Service Analysis Experts",
      avatar: "🔍",
      bio: "We continuously research and analyze service offerings to provide you with accurate, up-to-date guidance and educational resources.",
      highlight: "Always Updated"
    },
    {
      name: "Education Team",
      position: "Content & Resource Creators",
      avatar: "📚",
      bio: "Creating clear, helpful educational materials that simplify complex technical and service information for all users.",
      highlight: "Clear Communication"
    },
    {
      name: "Care Team",
      position: "User Experience Specialists",
      avatar: "💙",
      bio: "Ensuring every interaction is helpful, respectful, and focused on achieving the best outcomes for your specific situation.",
      highlight: "User Focused"
    }
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
                � INDEPENDENT ASSISTANCE PLATFORM
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Helping You Navigate
                <span className="text-gradient block mt-2">Entertainment Choices</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-12 leading-relaxed">
                Independent. Unbiased. User-Focused.
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                We're not a service provider—we're your trusted guide through the complex world of cable, internet, and streaming options.
              </p>
              <Link to="/contact">
                <Button className="btn-hero text-xl px-14 py-7">
                  Get Assistance
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Independent Disclosure Banner */}
      <section className="w-full py-8 bg-accent/50 border-y border-border">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium p-6 border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Important: We Are Independent</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>HorizonCast TV is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.</strong> We provide educational guidance and support to help you make informed decisions. We do not sell, manage, or provide internet, cable, or streaming services.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                  To empower users with knowledge and guidance for better service decisions
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Purpose", desc: "Simplify the complex landscape of cable, internet, and streaming services through clear, unbiased guidance" },
                { icon: Lightbulb, title: "Approach", desc: "Educate and empower users to make informed decisions that truly fit their needs and budgets" },
                { icon: TrendingUp, title: "Vision", desc: "Become the most trusted independent assistance platform for entertainment and connectivity guidance" }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-10 text-center hover:scale-105 transition-all duration-300 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📊 KEY FACTS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-gradient">Our Platform</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all"></div>
                  <Card className="relative bg-card rounded-3xl p-10 text-center border border-border/50">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
                    <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground">{stat.desc}</p>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📅 OUR STORY
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                From Startup to <span className="text-gradient">Trusted Guide</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Building an independent assistance platform one user at a time
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 100}>
                  <div className="relative flex items-start space-x-8 group">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform px-4">
                        <span className="text-white font-bold text-center text-sm leading-tight">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 hover:border-primary/50 transition-all">
                        <h3 className="text-3xl font-bold mb-4">{milestone.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                💎 CORE VALUES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                What We <span className="text-gradient">Stand For</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Principles that guide every decision, every day
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all`}></div>
                  <Card className="relative bg-card/50 backdrop-blur-sm border border-border/50 p-10 h-full hover:scale-105 transition-all duration-300">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-indigo-500/10 to-blue-500/10 text-indigo-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                👥 OUR TEAM
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Dedicated <span className="text-gradient">Support Teams</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real people committed to helping you make informed decisions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-7xl mb-6">{member.avatar}</div>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold mb-4">
                    {member.highlight}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4 text-lg">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  ✨ WHAT SETS US APART
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                  Why Choose <span className="text-gradient">HorizonCast TV</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 p-12">
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">100% Independent</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We have no financial relationships with service providers, ensuring our guidance remains completely unbiased and focused on your best interests.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Educational Focus</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We don't sell services—we educate. Our goal is to help you understand your options so you can make informed decisions that truly fit your needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">User-Centric Approach</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Every recommendation is personalized to your specific situation, budget, and requirements—not what benefits us financially.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Our assistance doesn't end after one conversation. We're here to support you throughout your journey with questions and guidance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-center text-muted-foreground leading-relaxed mb-6">
                      <strong className="text-foreground">Remember:</strong> We charge a separate service fee for our assistance. This fee is independent of any provider costs you may incur. We never request your provider passwords or account credentials.
                    </p>
                    <div className="text-center">
                      <Link to="/faq">
                        <Button className="btn-hero text-xl px-10 py-6 mr-4">
                          Learn More (FAQ)
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" className="text-lg px-10 py-6">
                          Get Assistance
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;