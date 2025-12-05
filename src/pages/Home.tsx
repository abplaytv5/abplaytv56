import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, Check, Star, Users, Tv, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import heroDevice from "@/assets/hero-device.jpg";
import contentGrid from "@/assets/content-grid.jpg";
import premiumViewing from "@/assets/premium-viewing.jpg";
import channelLogos from "@/assets/channel-logos.jpg";

// Movie poster imports
import breakingBoundaries from "@/assets/movies/breaking-boundaries.jpg";
import cityLights from "@/assets/movies/city-lights.jpg";
import oceansDeep from "@/assets/movies/oceans-deep.jpg";
import quantumLeap from "@/assets/movies/quantum-leap.jpg";
import lostHighway from "@/assets/movies/lost-highway.jpg";
import digitalDreams from "@/assets/movies/digital-dreams.jpg";

// Feature overlay imports
import liveTvOverlay from "@/assets/features/live-tv-overlay.jpg";
import cloudDvrOverlay from "@/assets/features/cloud-dvr-overlay.jpg";
import profilesOverlay from "@/assets/features/profiles-overlay.jpg";
import watchAnywhereOverlay from "@/assets/features/watch-anywhere-overlay.jpg";

// Channel logo imports
import cnnLogo from "@/assets/channels/cnn.jpg";
import espnLogo from "@/assets/channels/espn.jpg";
import hboLogo from "@/assets/channels/hbo.jpg";
import disneyLogo from "@/assets/channels/disney.jpg";
import nbcLogo from "@/assets/channels/nbc.jpg";
import abcLogo from "@/assets/channels/abc.jpg";
import cbsLogo from "@/assets/channels/cbs.jpg";
import foxLogo from "@/assets/channels/fox.jpg";

const Home = () => {
  // Scroll to top on page load and navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured content carousel - expanded with unique images
  const featuredShows = [
    { id: 1, title: "Breaking Boundaries", genre: "Sci-Fi Drama", rating: "4.8", poster: breakingBoundaries },
    { id: 2, title: "City Lights", genre: "Crime Thriller", rating: "4.9", poster: cityLights },
    { id: 3, title: "Ocean's Deep", genre: "Documentary", rating: "4.7", poster: oceansDeep },
    { id: 4, title: "Quantum Leap", genre: "Sci-Fi Adventure", rating: "4.9", poster: quantumLeap },
    { id: 5, title: "Lost Highway", genre: "Mystery Drama", rating: "4.7", poster: lostHighway },
    { id: 6, title: "Digital Dreams", genre: "Tech Thriller", rating: "4.8", poster: digitalDreams },
    // Duplicate for seamless loop
    { id: 7, title: "Breaking Boundaries", genre: "Sci-Fi Drama", rating: "4.8", poster: breakingBoundaries },
    { id: 8, title: "City Lights", genre: "Crime Thriller", rating: "4.9", poster: cityLights },
    { id: 9, title: "Ocean's Deep", genre: "Documentary", rating: "4.7", poster: oceansDeep },
  ];

  const trendingMovies = [
    { id: 1, title: "Quantum Leap", genre: "Sci-Fi", rating: "4.9", poster: quantumLeap },
    { id: 2, title: "Lost Highway", genre: "Mystery", rating: "4.7", poster: lostHighway },
    { id: 3, title: "Digital Dreams", genre: "Thriller", rating: "4.8", poster: digitalDreams },
    { id: 4, title: "Breaking Boundaries", genre: "Drama", rating: "4.8", poster: breakingBoundaries },
    { id: 5, title: "City Lights", genre: "Crime", rating: "4.9", poster: cityLights },
    { id: 6, title: "Ocean's Deep", genre: "Documentary", rating: "4.7", poster: oceansDeep },
    // Duplicate for seamless loop
    { id: 7, title: "Quantum Leap", genre: "Sci-Fi", rating: "4.9", poster: quantumLeap },
    { id: 8, title: "Lost Highway", genre: "Mystery", rating: "4.7", poster: lostHighway },
    { id: 9, title: "Digital Dreams", genre: "Thriller", rating: "4.8", poster: digitalDreams },
  ];

  const channels = [
    { name: "CNN", logo: cnnLogo },
    { name: "ESPN", logo: espnLogo },
    { name: "HBO", logo: hboLogo },
    { name: "Disney", logo: disneyLogo },
    { name: "NBC", logo: nbcLogo },
    { name: "ABC", logo: abcLogo },
    { name: "CBS", logo: cbsLogo },
    { name: "FOX", logo: foxLogo },
    // Duplicate for seamless loop
    { name: "CNN", logo: cnnLogo },
    { name: "ESPN", logo: espnLogo },
    { name: "HBO", logo: hboLogo },
    { name: "Disney", logo: disneyLogo },
  ];

  const features = [
    {
      icon: Tv,
      title: "85+ Live TV Channels",
      description: "News, sports, entertainment, and more from top networks",
      detailedDescription: "Access premium live TV channels including CNN, ESPN, HBO, Disney, and more. Stream in crystal-clear 4K quality with zero buffering.",
      overlayImage: liveTvOverlay
    },
    {
      icon: Monitor,
      title: "Unlimited Cloud DVR",
      description: "Record your favorite shows and watch them anytime",
      detailedDescription: "Never miss your favorite shows with unlimited cloud storage. Record multiple shows simultaneously and keep them for up to 9 months.",
      overlayImage: cloudDvrOverlay
    },
    {
      icon: Users,
      title: "6 User Profiles",
      description: "Personalized recommendations for every family member",
      detailedDescription: "Create personalized profiles for every family member with individual watchlists, parental controls, and AI-powered recommendations.",
      overlayImage: profilesOverlay
    },
    {
      icon: Smartphone,
      title: "Watch Anywhere",
      description: "Stream on TV, phone, tablet, or computer",
      detailedDescription: "Seamlessly switch between devices with synchronized playback. Start on your TV, continue on your phone, and finish on your laptop.",
      overlayImage: watchAnywhereOverlay
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "👩🏼‍💼",
      rating: 5,
      comment: "Abplay TV has completely replaced my cable subscription. The streaming quality is fantastic and the content library is huge!"
    },
    {
      name: "Michael Chen",
      avatar: "👨🏻‍💻", 
      rating: 5,
      comment: "Love the multi-device sync feature. I can start watching on my TV and continue on my phone during commute."
    },
    {
      name: "Emily Rodriguez",
      avatar: "👩🏽‍🎨",
      rating: 5,
      comment: "The family profiles feature is perfect for our household. Everyone gets their own personalized recommendations."
    }
  ];

  const faqs = [
    {
      question: "What devices support Abplay TV?",
      answer: "Abplay TV works on Smart TVs, streaming devices (Roku, Apple TV, Chromecast), mobile phones, tablets, computers, and gaming consoles. Stream anywhere with an internet connection."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! There are no long-term contracts. You can cancel your subscription at any time through your account settings and continue watching until the end of your billing period."
    },
    {
      question: "How many people can watch at once?",
      answer: "Your subscription includes up to 3 simultaneous streams, so family members can watch different content at the same time on different devices."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! New subscribers get a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      question: "What's included in my subscription?",
      answer: "Your subscription includes 85+ live TV channels, unlimited cloud DVR storage, access to our full on-demand library, and the ability to create up to 6 user profiles."
    }
  ];

  const CarouselItem = ({ item }: { item: any }) => (
    <div className="min-w-64 flex-shrink-0 transition-all duration-500 group">
      <Card className="card-premium overflow-hidden relative h-96 cursor-pointer">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.poster})` }}
        />
      </Card>
    </div>
  );

  return (
    <Layout>
      {/* Promotional Banner */}
      <section className="bg-blue-600 text-white py-2 md:py-3 relative z-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            <strong className="block sm:inline">Save $66 total for your first two months</strong>
            <span className="block sm:inline"> - $9.99/mo for your first 2 months, then $82.99/mo. </span>
            <span className="block sm:inline text-xs sm:text-sm">Offer ends September 30, 2025. New users only. Terms Apply. Cancel anytime.*</span>
          </p>
        </div>
      </section>

      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://kstatic.googleusercontent.com/files/007df15b7ba3b753b2bb69e339c80826c4ba1fe7eed9891c8547b0b4e5cafa29e32dcc936651e910df3d7b2ffc94d410286928c7c86a0cc0ae5a4e4918a840b6" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
              {/* Left Side - Quote/Testimonial */}
              <div className="lg:order-1 w-full lg:max-w-2xl mb-8 lg:mb-0 flex flex-col justify-center">
              <AnimatedSection>
                <div className="mb-6 lg:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                    All your favorite live games. One place.
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-medium">Never miss a touchdown, field goal, or game-changing play</p>
                </div>
                
                <div className="space-y-4 lg:space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a href="#" className="block">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 rounded-lg font-semibold transition-colors w-full sm:w-auto min-w-[200px]">
                        TRY 10 DAYS FOR $0
                      </Button>
                    </a>
                    
                    <div className="bg-red-600 text-white px-4 py-2 rounded text-sm font-bold inline-block self-start">
                      LIMITED TIME OFFER
                    </div>
                  </div>
                  
                  <div className="text-white/80 text-sm md:text-base leading-relaxed">
                    <span className="line-through">$92.99/mo</span> $49.99/mo for your first 2 months, $82.99/mo thereafter for Abplay TV Base Plan.
                  </div>
                  
                  <div className="text-white/70 text-xs md:text-sm leading-relaxed">
                    New users only. Cancel anytime. <span className="underline cursor-pointer">Terms apply</span>. Offer ends September 30, 2025.
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Side - Promotional Cards */}
            <div className="lg:order-2 w-full space-y-4 md:space-y-6 flex flex-col justify-center">
              <AnimatedSection delay={200}>
                {/* Sports Promotion Card */}
                <div className="bg-gradient-to-r from-green-800/95 to-brown-800/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white relative overflow-hidden min-h-[160px] md:min-h-[180px]">
                  <div className="absolute right-4 top-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">TV</div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 pr-16 leading-tight">Watch every team, every Sunday with exclusive out-of-market games</h3>
                  <a href="#" className="block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-3 rounded font-medium text-sm md:text-base transition-colors shadow-lg">
                      LEARN MORE
                    </Button>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                {/* Add-ons Enhancement Card */}
                <div className="bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white relative overflow-hidden min-h-[180px] md:min-h-[200px]">
                  <div className="absolute right-4 top-4">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">NBA</div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold">ESPN</div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-600 rounded-full"></div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 pr-16 leading-tight">
                    Enhance your experience with add-ons
                  </h3>
                  <p className="text-white/90 mb-5 text-sm md:text-base pr-12 leading-relaxed">
                    Premium channels, sports packages, and more to customize your streaming experience
                  </p>
                  <a href="#" className="block">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-5 md:px-6 py-3 rounded font-medium text-sm md:text-base transition-colors shadow-lg">
                      EXPLORE ADD-ONS
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live TV Channels Showcase - Redesigned */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ⚡ 100+ PREMIUM CHANNELS
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 px-4">
                Your Favorite Channels,<br />
                <span className="text-gradient">All in One Place</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed">
                Sports, news, entertainment, and more. Stream every major network in stunning HD quality.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {channels.slice(0, 8).map((channel, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-border/50">
                  <img 
                    src={channel.logo} 
                    alt={`${channel.name} logo`}
                    className="w-full h-20 object-contain"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">+ 92 more premium channels included</p>
              <Link to="/services" onClick={handleNavigation}>
                <Button className="btn-hero text-lg px-10 py-6">
                  View All Channels
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Content Grid - Modern Layout */}
      <section className="section-spacing bg-gradient-to-br from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimatedSection>
              <div>
                <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  🎬 EXCLUSIVE ORIGINALS
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Award-Winning<br />
                  <span className="text-gradient">Original Content</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Experience critically acclaimed series and films you won't find anywhere else. 
                  From gripping dramas to mind-bending sci-fi, we've got stories that captivate.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Emmy Award Winners</h4>
                      <p className="text-muted-foreground">15 Emmy wins this year alone</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">New Episodes Weekly</h4>
                      <p className="text-muted-foreground">Fresh content every week</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {featuredShows.slice(0, 4).map((show, index) => (
                  <div 
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 h-80' : 'h-64'}`}
                  >
                    <img 
                      src={show.poster}
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Trending Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="grid grid-cols-3 gap-4 lg:order-1">
                {trendingMovies.slice(0, 6).map((movie, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-xl aspect-[2/3] hover:scale-105 transition-all duration-300"
                  >
                    <img 
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="lg:order-2">
                <div className="inline-block bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  🔥 TRENDING NOW
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  What Everyone's<br />
                  <span className="text-gradient">Watching Today</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Join millions of viewers streaming the hottest movies and series. 
                  From blockbusters to hidden gems, discover what's capturing hearts worldwide.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary">10M+</div>
                    <p className="text-muted-foreground">Watching Now</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">4.9★</div>
                    <p className="text-muted-foreground">Average Rating</p>
                  </div>
                </div>
                <Link to="/customize" onClick={handleNavigation}>
                  <Button className="btn-hero text-lg px-10 py-6">
                    Explore Full Library
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Showcase - Interactive Design */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ POWERFUL FEATURES
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Streaming Made <span className="text-gradient">Perfect</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Advanced technology meets simple design. Everything you need, nothing you don't.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{ backgroundImage: `url(${feature.overlayImage})` }}
                  />
                  
                  <div className="relative p-8 lg:p-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed flex-grow">
                      {feature.detailedDescription}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Device Experience */}
      <section className="section-spacing bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📱 SEAMLESS STREAMING
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Your Shows Follow <span className="text-gradient">You Everywhere</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Start on one device, continue on another. Your content syncs perfectly across all screens.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Tv, label: "Smart TV", desc: "4K streaming on the big screen", color: "from-blue-500 to-cyan-500" },
              { icon: Smartphone, label: "Mobile", desc: "Watch anywhere on the go", color: "from-purple-500 to-pink-500" },
              { icon: Tablet, label: "Tablet", desc: "Perfect for travel & commute", color: "from-orange-500 to-red-500" },
            ].map((device, index) => (
              <AnimatedSection key={device.label} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${device.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                    <device.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{device.label}</h3>
                  <p className="text-muted-foreground text-lg">{device.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl p-1">
                <div className="bg-background rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-6">Synced Across Devices</h3>
                      <ul className="space-y-4">
                        {[
                          "Pick up right where you left off",
                          "Watchlist syncs automatically",
                          "Download for offline viewing",
                          "Up to 3 simultaneous streams"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Check className="w-6 h-6 text-primary flex-shrink-0" />
                            <span className="text-lg text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative">
                      <video 
                        className="w-full rounded-2xl shadow-2xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src="https://kstatic.googleusercontent.com/files/5e486b4163b0d76a440a0e561d7f358c38f462a5bab192e8c68db035e233d2f0e783b8ae9b945f982575b58f803310d3f690e1961f5c22493c9eae80e67cbeed" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ⭐ 5-STAR REVIEWS
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Trusted by <span className="text-gradient">50M+ Viewers</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                See why millions have switched to Abplay TV
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative bg-card rounded-3xl p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-8 bg-card/50 backdrop-blur-sm rounded-full px-12 py-6 border border-border/50">
                <div>
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <p className="text-muted-foreground text-sm">Average Rating</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">500K+</div>
                  <p className="text-muted-foreground text-sm">Reviews</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <p className="text-muted-foreground text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Library Showcase */}
      <section className="section-spacing bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="lg:order-2">
                <div className="inline-block bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  🎬 MASSIVE LIBRARY
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Endless Entertainment <span className="text-gradient">Awaits</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Dive into a universe of content. From the latest blockbusters to timeless classics, 
                  discover something new every day.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: "🎬", number: "10K+", label: "Movies & Shows" },
                    { icon: "🏆", number: "50+", label: "Award Winners" },
                    { icon: "🆕", number: "100+", label: "Added Weekly" },
                    { icon: "🌐", number: "20+", label: "Languages" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <Link to="/customize" onClick={handleNavigation}>
                  <Button className="btn-hero text-lg px-10 py-6">
                    Browse Content
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="lg:order-1 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={contentGrid}
                    alt="Content library showcase"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 border border-border/50">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-green-500">NOW WATCHING</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2">Breaking Boundaries</h4>
                      <p className="text-muted-foreground">Season 2 • Episode 5</p>
                      <div className="mt-4 w-full bg-border/50 h-1 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-2/3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Premium Quality Experience */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🎭 CINEMA QUALITY
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Picture Perfect <span className="text-gradient">Every Time</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Experience movies and shows the way they were meant to be seen
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={premiumViewing}
                    alt="Premium viewing experience"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-md rounded-xl px-4 py-2 border border-green-500/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-semibold">LIVE 4K</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-semibold">4K Ultra HD • Dolby Atmos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="space-y-6">
                {[
                  { 
                    icon: "4K", 
                    title: "4K Ultra HD",
                    desc: "Stream in stunning 4K resolution with HDR support for vibrant colors and deep contrasts",
                    color: "from-blue-500 to-cyan-500"
                  },
                  { 
                    icon: "🎵", 
                    title: "Dolby Atmos",
                    desc: "Immersive 3D audio that places you at the center of the action",
                    color: "from-purple-500 to-pink-500"
                  },
                  { 
                    icon: "⚡", 
                    title: "Instant Playback",
                    desc: "Lightning-fast streaming with adaptive bitrate for zero buffering",
                    color: "from-orange-500 to-red-500"
                  },
                  { 
                    icon: "💾", 
                    title: "Offline Downloads",
                    desc: "Download your favorites and watch offline anywhere, anytime",
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-4 group/item">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-spacing bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                📈 BY THE NUMBERS
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Making Waves <span className="text-gradient">Worldwide</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Join the global community that's changing entertainment
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50M+", label: "Active Viewers", desc: "Streaming daily", icon: Users, color: "from-blue-500 to-cyan-500" },
              { number: "10K+", label: "Content Titles", desc: "Always growing", icon: Tv, color: "from-purple-500 to-pink-500" },
              { number: "99.9%", label: "Uptime", desc: "Always online", icon: Check, color: "from-green-500 to-emerald-500" },
              { number: "150+", label: "Countries", desc: "Global reach", icon: Play, color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-all duration-300 rounded-3xl" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                  <div className="relative bg-card rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-border/50">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">{stat.number}</div>
                    <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground">{stat.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-12 max-w-4xl mx-auto border border-border/50">
                <h3 className="text-3xl font-bold mb-4">Ready to Join the Community?</h3>
                <p className="text-xl text-muted-foreground mb-8">Start your free trial and see what millions are watching</p>
                <Link to="/services" onClick={handleNavigation}>
                  <Button className="btn-hero text-lg px-12 py-6">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Abplay TV
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Start <span className="text-gradient">Streaming?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of viewers and discover your next favorite show today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button className="btn-hero text-xl px-12 py-6">
                  <Play className="w-6 h-6 mr-3" />
                  Start Your Free Trial
                </Button>
              </Link>
              <span className="text-muted-foreground text-sm">or</span>
              <a href="tel:+18338147663">
                <Button variant="outline" className="btn-outline-hero text-lg px-8 py-4">
                  📞 Call (833) 814-7663
                </Button>
              </a>
            </div>
            <p className="text-muted-foreground mt-4">
              No commitment • Cancel anytime • Instant access
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Home;