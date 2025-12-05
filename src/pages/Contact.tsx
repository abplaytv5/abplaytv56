import { useState } from "react";
import { Mail, Phone, MessageSquare, Globe, Send, CheckCircle, Clock, HeadphonesIcon, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import contactBg from "@/assets/customize-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", category: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Response within 24 hours",
      contact: "support@horizoncasttv.com",
      action: "mailto:support@horizoncasttv.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Mon-Fri 9AM-6PM EST",
      contact: "(833) 814-7663",
      action: "tel:+18338147663",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available 24/7",
      contact: "Start Chat",
      action: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Help Center",
      description: "Browse FAQs & guides",
      contact: "Visit Hub",
      action: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Streaming Ave, Suite 100",
      zipcode: "New York, NY 10001",
      phone: "(833) 814-7663"
    },
    {
      city: "Los Angeles", 
      address: "456 Media Blvd, Floor 15",
      zipcode: "Los Angeles, CA 90210",
      phone: "(833) 814-7663"
    },
    {
      city: "London",
      address: "789 Tech Street, Level 8",
      zipcode: "London, UK SW1A 1AA",
      phone: "(833) 814-7663"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        <div className="relative z-10 w-full content-wrapper py-20">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-8 py-3 rounded-full text-sm font-bold mb-8 border border-primary/30">
                � CONTACT US
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                We're Here to
                <span className="text-gradient block mt-2">Help You</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Multiple ways to reach our expert support team
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Questions about Horizon Cast TV? We're ready to assist you 24/7
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-background to-card/20">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ⚡ REACH OUT
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{method.description}</p>
                  <a 
                    href={method.action}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
                  >
                    {method.contact}
                  </a>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Locations - Full Width */}
      <section className="w-full py-24 bg-background">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-2">Send a Message</h2>
              <p className="text-muted-foreground text-lg mb-10">
                Fill out the form and we'll get back within 24 hours
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold mb-2 block">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-card/50 border-border/50 h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-semibold mb-2 block">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-card/50 border-border/50 h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-base font-semibold mb-2 block">Category</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-card/50 border-border/50 h-12">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Subscription</SelectItem>
                        <SelectItem value="content">Content & Channels</SelectItem>
                        <SelectItem value="account">Account Management</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-base font-semibold mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description"
                      required
                      className="bg-card/50 border-border/50 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more details..."
                      required
                      rows={6}
                      className="bg-card/50 border-border/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-16 bg-card/30 rounded-2xl border border-border/50">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              )}
            </AnimatedSection>

            {/* Locations & Hours */}
            <AnimatedSection delay={200}>
              <h2 className="text-4xl font-bold mb-2">Our Offices</h2>
              <p className="text-muted-foreground text-lg mb-10">
                Visit us worldwide or reach out digitally anytime
              </p>

              <div className="space-y-6 mb-10">
                {officeLocations.map((office) => (
                  <Card key={office.city} className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{office.city}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                        <p className="text-muted-foreground text-sm mb-3">{office.zipcode}</p>
                        <a href={`tel:${office.phone}`} className="text-primary font-semibold hover:text-primary/80">
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm border border-primary/20 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>📅 Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>📅 Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p>📅 Sunday: Closed</p>
                      <p className="text-primary font-semibold mt-4 pt-4 border-t border-primary/20">
                        <HeadphonesIcon className="w-5 h-5 inline mr-2" />
                        24/7 Live Chat Support
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Links - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="content-wrapper">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                💡 QUICK HELP
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Need Quick <span className="text-gradient">Answers?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Check these common topics before reaching out
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Zap, 
                title: "Account Issues", 
                description: "Login, password reset, settings & profile management",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: Mail, 
                title: "Billing Support", 
                description: "Payment issues, subscription changes & refunds",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: HeadphonesIcon, 
                title: "Technical Help", 
                description: "Streaming problems, app issues & device setup",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Button variant="outline" className="w-full border-border/50 hover:bg-primary/10">
                    Learn More
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
