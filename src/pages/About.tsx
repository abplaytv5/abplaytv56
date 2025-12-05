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
  Tv,
  Sparkles,
  Rocket,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import premiumViewing from "@/assets/premium-viewing.jpg";

const About = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Foundation",
      description: "AB Textiles ventures into streaming, assembling a world-class team to build the future of entertainment."
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Abplay TV goes live with 60+ channels, introducing thousands to a new way of watching television."
    },
    {
      year: "2022",
      title: "Innovation Leap",
      description: "Launched 4K streaming, cloud DVR, and multi-device sync - setting new industry standards."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded to 25 countries with 10M+ subscribers, becoming a global streaming powerhouse."
    },
    {
      year: "2024",
      title: "Content Revolution",
      description: "Premiered 50+ original series, won 15 Emmy awards, solidifying our place in entertainment history."
    }
  ];

  const coreValues = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push boundaries with AI-powered recommendations, 8K streaming, and immersive audio experiences that redefine what's possible.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Viewer Obsession",
      description: "Every feature, every show, every pixel is crafted with you in mind. Your entertainment happiness is our success metric.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Rocket,
      title: "Bold Creativity",
      description: "We take risks on stories that matter, support emerging voices, and create content that sparks conversations worldwide.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Premium entertainment shouldn't be a luxury. We're making world-class streaming accessible to everyone, everywhere.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { number: "50M+", label: "Global Viewers", desc: "Across 150+ countries", icon: Users },
    { number: "100K+", label: "Hours of Content", desc: "Always expanding", icon: Tv },
    { number: "98%", label: "Satisfaction Rate", desc: "Industry leading", icon: Star },
    { number: "25+", label: "Emmy Awards", desc: "For original content", icon: Award }
  ];

  const leadership = [
    {
      name: "Dr. Priya Sharma",
      position: "Chief Executive Officer",
      avatar: "👩🏽‍💼",
      bio: "Former Netflix VP with 20 years revolutionizing streaming. Led teams serving 200M+ subscribers globally.",
      highlight: "20+ Years Experience"
    },
    {
      name: "Marcus Chen",
      position: "Chief Technology Officer",
      avatar: "👨🏻‍💻",
      bio: "Ex-AWS architect who built systems processing 1B+ requests daily. PhD in Distributed Systems from MIT.",
      highlight: "MIT PhD"
    },
    {
      name: "Aisha Thompson",
      position: "Chief Content Officer",
      avatar: "👩🏾‍🎤",
      bio: "Oscar-winning producer from Warner Bros. Greenlit 50+ hit series with $2B+ box office success.",
      highlight: "Oscar Winner"
    },
    {
      name: "Lars Bergström",
      position: "Chief Product Officer",
      avatar: "👨🏼‍💼",
      bio: "Former Spotify product lead who drove 10x user growth. Champion of user-centric design philosophy.",
      highlight: "10x Growth Leader"
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
                🎬 CRAFTING THE FUTURE OF ENTERTAINMENT
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Where Stories Come
                <span className="text-gradient block mt-2">Alive</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-12 leading-relaxed">
                Born from passion. Built with innovation. Trusted by millions.
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                We're not just another streaming service. We're storytellers, innovators, and dreamers on a mission to transform how the world experiences entertainment.
              </p>
              <Link to="/services">
                <Button className="btn-hero text-xl px-14 py-7">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision Statement - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                  Our <span className="text-gradient">Vision</span>
                </h2>
                <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                  To become Earth's most loved entertainment platform by 2030
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Mission", desc: "Democratize premium entertainment for every human on the planet" },
                { icon: Lightbulb, title: "Vision", desc: "A world where incredible stories connect and inspire billions" },
                { icon: TrendingUp, title: "Goal", desc: "100M subscribers creating moments that matter, together" }
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
                🏆 ACHIEVEMENTS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Making <span className="text-gradient">History</span>
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
                    <div className="text-5xl font-bold text-primary mb-3">{stat.number}</div>
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
                📅 OUR JOURNEY
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Five Years of <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From ambitious startup to global entertainment giant
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 100}>
                  <div className="relative flex items-start space-x-8 group">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xl">{milestone.year}</span>
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
                👥 LEADERSHIP
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Meet the <span className="text-gradient">Visionaries</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                World-class leaders shaping the future of entertainment
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
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

      {/* AB Textiles Legacy - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  🏢 OUR HERITAGE
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                  Backed by <span className="text-gradient">AB Textiles</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 p-12">
                <div className="space-y-6 text-center">
                  <p className="text-2xl text-muted-foreground leading-relaxed">
                    Abplay TV is proud to be part of the <span className="text-primary font-bold">AB Textiles</span> family—a company with over <span className="text-primary font-bold">50 years</span> of excellence in delivering quality products worldwide.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    This partnership brings together AB Textiles' legendary business acumen, financial strength, and commitment to excellence with our passion for revolutionary entertainment technology.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    When you choose Abplay TV, you're choosing a service backed by decades of trust, innovation, and an unwavering dedication to customer satisfaction.
                  </p>
                  <div className="pt-8">
                    <Link to="/services">
                      <Button className="btn-hero text-xl px-14 py-7">
                        Experience Excellence
                      </Button>
                    </Link>
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