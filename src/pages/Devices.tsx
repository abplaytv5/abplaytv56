import { 
  Tv, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Gamepad2, 
  HelpCircle,
  BookOpen,
  Lightbulb,
  Info,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import devicesHero from "@/assets/devices-hero.jpg";

const Devices = () => {
  const deviceCategories = [
    {
      title: "Smart TV Assistance",
      icon: Tv,
      description: "We help you understand smart TV options and setup",
      devices: [
        { name: "Brand Comparisons", years: "Samsung, LG, Sony, TCL", available: true },
        { name: "Feature Guidance", years: "4K, HDR, Smart Features", available: true },
        { name: "App Help", years: "Streaming App Setup", available: true },
        { name: "Connection Support", years: "WiFi, Ethernet, HDMI", available: true },
        { name: "Picture Settings", years: "Optimization Tips", available: true },
        { name: "Sound System Help", years: "Audio Setup Guidance", available: true }
      ]
    },
    {
      title: "Streaming Device Guidance",
      icon: HelpCircle,
      description: "Learn about different streaming device options",
      devices: [
        { name: "Roku Education", years: "Model Differences", available: true },
        { name: "Apple TV Info", years: "Features & Setup", available: true },
        { name: "Fire TV Support", years: "Amazon Device Help", available: true },
        { name: "Chromecast Tips", years: "Google Device Guide", available: true },
        { name: "Device Comparison", years: "Finding Best Fit", available: true },
        { name: "Setup Walkthroughs", years: "Installation Help", available: true }
      ]
    },
    {
      title: "Mobile Device Help",
      icon: Smartphone,
      description: "Assistance with streaming on mobile devices",
      devices: [
        { name: "iPhone Setup", years: "iOS App Help", available: true },
        { name: "iPad Optimization", years: "Tablet Streaming", available: true },
        { name: "Android Phone Tips", years: "Setup & Usage", available: true },
        { name: "Android Tablet Guide", years: "App Installation", available: true },
        { name: "Data Usage Tips", years: "Mobile Streaming", available: true },
        { name: "Tablet Guidance", years: "Amazon Fire & More", available: true }
      ]
    },
    {
      title: "Computer Assistance",
      icon: Monitor,
      description: "Help with streaming on computers and laptops",
      devices: [
        { name: "Windows PC Help", years: "Browser Streaming", available: true },
        { name: "Mac Support", years: "macOS Guidance", available: true },
        { name: "Chromebook Tips", years: "Chrome OS Help", available: true },
        { name: "Linux Guidance", years: "Ubuntu & More", available: true },
        { name: "Browser Selection", years: "Chrome, Firefox, etc", available: true }
      ]
    },
    {
      title: "Gaming Console Support",
      icon: Gamepad2,
      description: "Learn about streaming through game consoles",
      devices: [
        { name: "PlayStation Setup", years: "PS4 & PS5", available: true },
        { name: "Xbox Guidance", years: "One & Series X/S", available: true },
        { name: "App Installation", years: "Console Apps", available: true },
        { name: "Network Help", years: "Connection Issues", available: true },
        { name: "Feature Tips", years: "Console Streaming", available: true }
      ]
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Educational Guides",
      description: "Comprehensive guides to help you understand device compatibility and setup processes"
    },
    {
      icon: HelpCircle,
      title: "Technical Q&A",
      description: "Get answers to your device-related questions from our assistance team"
    },
    {
      icon: Lightbulb,
      title: "Setup Tips",
      description: "Best practices and tips for optimizing your streaming device experience"
    },
    {
      icon: Info,
      title: "Compatibility Info",
      description: "Learn which devices work with different streaming services and platforms"
    }
  ];

  const specifications = [
    {
      category: "Internet Requirements",
      requirements: [
        "Understanding bandwidth needs for streaming",
        "Comparing internet speed options",
        "Multi-device streaming considerations"
      ]
    },
    {
      category: "Device Selection Help",
      requirements: [
        "Choosing between smart TVs and streaming devices",
        "Understanding device capabilities and features",
        "Budget-friendly device recommendations"
      ]
    },
    {
      category: "Setup & Installation",
      requirements: [
        "Step-by-step setup guidance",
        "Troubleshooting common issues",
        "Optimizing your device settings"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${devicesHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        <div className="relative z-10 w-full content-wrapper py-20">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-8 py-3 rounded-full text-sm font-bold mb-8 border border-primary/30">
                📱 DEVICE ASSISTANCE
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Help For Every
                <span className="text-gradient block mt-2">Device Type</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Understanding your device options and setup needs
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Get educational guidance for TVs, streaming devices, phones, tablets, and more
              </p>
              <Card className="max-w-3xl mx-auto bg-accent/30 border-primary/20 p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> HorizonCast TV is an independent third-party service assistance startup. We provide device guidance and education, not device sales or manufacturer support. Separate assistance fees apply.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Device Categories - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-background to-card/20">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 ASSISTANCE AREAS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Device <span className="text-gradient">Guidance</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Educational assistance for all device types and platforms
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12 max-w-7xl mx-auto">
            {deviceCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-10">
                  <div className="flex items-start mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mr-8 flex-shrink-0">
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-lg">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.devices.map((device) => (
                      <div 
                        key={device.name}
                        className={`p-5 rounded-xl border-2 transition-all ${
                          device.available 
                            ? "border-border/50 bg-card/50 hover:border-primary/50 hover:scale-105" 
                            : "border-border/30 bg-muted/30 opacity-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{device.name}</h4>
                            <p className="text-sm text-muted-foreground">{device.years}</p>
                          </div>
                          {device.available ? (
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 ml-3" />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 ml-3" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Assistance Features - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ HOW WE HELP
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Independent <span className="text-gradient">Support</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Educational resources to help you succeed
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance Topics - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📚 TOPICS WE COVER
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive <span className="text-gradient">Guidance</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key areas where we provide device assistance
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <AnimatedSection key={spec.category} delay={index * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-10 h-full">
                  <h3 className="text-2xl font-bold mb-8 text-center">{spec.category}</h3>
                  <ul className="space-y-5">
                    {spec.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Need Device <span className="text-gradient">Help?</span>
              </h2>
              <p className="text-2xl text-muted-foreground mb-12">
                Our assistance team can help you understand device options and setup processes
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <Smartphone className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <span className="font-semibold">Mobile Help</span>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <Tv className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <span className="font-semibold">TV Guidance</span>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <Monitor className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <span className="font-semibold">Computer Tips</span>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center">
                  <Gamepad2 className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <span className="font-semibold">Console Support</span>
                </Card>
              </div>

              <Button className="btn-hero text-xl px-14 py-7 mb-6">
                Request Assistance
              </Button>
              
              <p className="text-muted-foreground text-lg">
                Independent guidance • Separate assistance fees apply • 7-15 day refund policy
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Devices;