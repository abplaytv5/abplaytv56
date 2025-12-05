import { 
  Tv, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Gamepad2, 
  Cast,
  Download,
  Wifi,
  Settings,
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
      title: "Smart TVs",
      icon: Tv,
      description: "Watch directly on your smart TV with built-in apps",
      devices: [
        { name: "Samsung Smart TV", years: "2018-2024", available: true },
        { name: "LG webOS TV", years: "2018-2024", available: true },
        { name: "Sony Android TV", years: "2019-2024", available: true },
        { name: "TCL Roku TV", years: "2017-2024", available: true },
        { name: "Hisense VIDAA TV", years: "2020-2024", available: true },
        { name: "Vizio SmartCast", years: "2018-2024", available: true }
      ]
    },
    {
      title: "Streaming Devices",
      icon: Cast,
      description: "Connect any TV to the world of streaming",
      devices: [
        { name: "Roku Ultra/Express", years: "All models", available: true },
        { name: "Apple TV 4K/HD", years: "4th gen+", available: true },
        { name: "Amazon Fire TV Stick", years: "All models", available: true },
        { name: "Google Chromecast", years: "3rd gen+", available: true },
        { name: "NVIDIA Shield TV", years: "All models", available: true },
        { name: "Xiaomi Mi Box", years: "S/4K", available: true }
      ]
    },
    {
      title: "Mobile Devices",
      icon: Smartphone,
      description: "Stream on the go with our mobile apps",
      devices: [
        { name: "iPhone", years: "iOS 12+", available: true },
        { name: "iPad", years: "iOS 12+", available: true },
        { name: "Android Phone", years: "Android 7+", available: true },
        { name: "Android Tablet", years: "Android 7+", available: true },
        { name: "Windows Phone", years: "Discontinued", available: false },
        { name: "Amazon Fire Tablet", years: "7th gen+", available: true }
      ]
    },
    {
      title: "Computers",
      icon: Monitor,
      description: "Watch on any computer with a web browser",
      devices: [
        { name: "Windows PC", years: "Windows 10+", available: true },
        { name: "Mac", years: "macOS 10.14+", available: true },
        { name: "Chromebook", years: "ChromeOS 88+", available: true },
        { name: "Linux", years: "Ubuntu 18+", available: true },
        { name: "Web Browsers", years: "Chrome, Firefox, Safari, Edge", available: true }
      ]
    },
    {
      title: "Gaming Consoles",
      icon: Gamepad2,
      description: "Game and stream all in one place",
      devices: [
        { name: "PlayStation 5", years: "All models", available: true },
        { name: "PlayStation 4", years: "All models", available: true },
        { name: "Xbox Series X/S", years: "All models", available: true },
        { name: "Xbox One", years: "All models", available: true },
        { name: "Nintendo Switch", years: "Coming soon", available: false }
      ]
    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "Seamless Sync",
      description: "Start watching on one device and continue on another without missing a beat"
    },
    {
      icon: Download,
      title: "Offline Viewing",
      description: "Download content on mobile devices to watch without an internet connection"
    },
    {
      icon: Settings,
      title: "Quality Control",
      description: "Automatic quality adjustment based on your internet speed and device capabilities"
    },
    {
      icon: Cast,
      title: "Screen Casting",
      description: "Cast from your phone or tablet to any compatible TV or streaming device"
    }
  ];

  const specifications = [
    {
      category: "Internet Speed",
      requirements: [
        "Minimum: 5 Mbps for HD quality",
        "Recommended: 25 Mbps for 4K quality",
        "Multiple streams: +5 Mbps per additional stream"
      ]
    },
    {
      category: "Storage Space",
      requirements: [
        "Mobile app: 100 MB initial download",
        "Offline downloads: 500 MB - 2 GB per hour",
        "Smart TV apps: 50-200 MB depending on platform"
      ]
    },
    {
      category: "Operating Systems",
      requirements: [
        "iOS: Version 12.0 or higher",
        "Android: Version 7.0 (API level 24) or higher",
        "Windows: Windows 10 version 1903 or higher"
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
                📱 UNIVERSAL STREAMING
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                Stream on Every
                <span className="text-gradient block mt-2">Device You Own</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Watch Horizon Cast TV on 100+ devices seamlessly
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Start on your phone, continue on your TV, resume on your tablet
              </p>
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
                ✅ SUPPORTED DEVICES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Watch On All <span className="text-gradient">Platforms</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Compatible with virtually every modern device in your home
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

      {/* Cross-Device Features - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ⚡ SMART FEATURES
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Intelligent <span className="text-gradient">Syncing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced features that connect all your devices
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

      {/* System Requirements - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📋 REQUIREMENTS
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Minimum <span className="text-gradient">Specs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Make sure your devices meet these basic requirements
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

      {/* Download Section - Full Width */}
      <section className="w-full py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Start Streaming <span className="text-gradient">Today</span>
              </h2>
              <p className="text-2xl text-muted-foreground mb-12">
                Download apps or visit horizoncasttv.com to start your free trial
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Button className="btn-hero p-8 h-auto flex-col space-y-3 text-lg">
                  <Smartphone className="w-10 h-10" />
                  <span>Mobile</span>
                </Button>
                <Button className="btn-hero p-8 h-auto flex-col space-y-3 text-lg">
                  <Tv className="w-10 h-10" />
                  <span>Smart TV</span>
                </Button>
                <Button className="btn-hero p-8 h-auto flex-col space-y-3 text-lg">
                  <Monitor className="w-10 h-10" />
                  <span>Browser</span>
                </Button>
                <Button className="btn-hero p-8 h-auto flex-col space-y-3 text-lg">
                  <Cast className="w-10 h-10" />
                  <span>Streaming Box</span>
                </Button>
              </div>
              
              <p className="text-muted-foreground text-lg">
                Available on App Store, Google Play, and all major streaming platforms
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Devices;