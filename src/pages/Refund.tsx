import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, Clock, CreditCard, CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Refund = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const refundScenarios = [
    {
      scenario: "Initial Consultation Assistance",
      eligible: true,
      timeframe: "Within 7 days of purchase",
      process: "Full refund if services not yet delivered",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "Setup Guidance Services",
      eligible: true,
      timeframe: "Within 10 days of purchase",
      process: "Partial refund if guidance partially delivered",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "Comprehensive Support Package",
      eligible: true,
      timeframe: "Within 15 days of purchase",
      process: "Prorated refund based on services utilized",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "One-Time Phone Consultation",
      eligible: false,
      timeframe: "After consultation completed",
      process: "Non-refundable once service delivered",
      icon: XCircle,
      color: "text-red-500"
    },
    {
      scenario: "Services Fully Rendered",
      eligible: false,
      timeframe: "After assistance completed",
      process: "Non-refundable when services fully delivered",
      icon: XCircle,
      color: "text-red-500"
    },
    {
      scenario: "Emergency Support Services",
      eligible: false,
      timeframe: "Immediate assistance",
      process: "Non-refundable due to immediate delivery",
      icon: AlertCircle,
      color: "text-yellow-500"
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: "Request Submission",
      description: "Contact us via email or phone to submit your refund request with service details",
      timeframe: "Immediate"
    },
    {
      step: 2,
      title: "Eligibility Review",
      description: "Our team reviews your request based on service type, delivery status, and timeframe",
      timeframe: "1-3 business days"
    },
    {
      step: 3,
      title: "Approval & Processing",
      description: "If approved, refund is processed back to your original payment method",
      timeframe: "3-5 business days"
    },
    {
      step: 4,
      title: "Refund Completion",
      description: "Refund appears in your account (timing varies by financial institution)",
      timeframe: "5-10 business days"
    }
  ];

  const exceptions = [
    "Services that have been fully delivered and completed",
    "Refund requests submitted outside the applicable timeframe (7-15 days depending on service type)",
    "Assistance services where guidance has already been provided in full",
    "Emergency or immediate-delivery support services",
    "Situations where user provided false or misleading information",
    "Accounts suspended or terminated due to Terms of Service violations",
    "Chargebacks or payment disputes (refunds become void upon dispute initiation)"
  ];

  const faqs = [
    {
      question: "How do I request a refund?",
      answer: "Contact our support team at abplaytv5@gmail.com or call (833) 814-7663 within the applicable timeframe. Include your service details, purchase date, and reason for the refund request."
    },
    {
      question: "What is the refund timeframe?",
      answer: "Refund eligibility ranges from 7 to 15 days depending on the type of assistance service purchased. Initial consultations: 7 days. Setup guidance: 10 days. Comprehensive packages: 15 days. The timeframe begins from your purchase date."
    },
    {
      question: "Will I receive a full or partial refund?",
      answer: "This depends on the services already delivered. If no guidance has been provided, you may receive a full refund within the timeframe. If services have been partially delivered, a prorated refund may apply based on what was utilized."
    },
    {
      question: "What if my payment method is no longer valid?",
      answer: "If we cannot process a refund to your original payment method, we'll contact you to arrange an alternative such as bank transfer or account credit for future services."
    },
    {
      question: "Are there any refund processing fees?",
      answer: "HorizonCast TV does not charge fees for legitimate refund requests. However, your bank or payment processor may have their own policies regarding returned payments."
    },
    {
      question: "Can I get a refund if I'm unsatisfied with provider service?",
      answer: "Our refund policy applies only to the assistance services we provide, not to the quality of services provided by cable, internet, or streaming companies. For provider service issues, you must contact the provider directly."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <RefreshCw className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Refund <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                HorizonCast TV is committed to customer satisfaction. Learn about our refund policy 
                for assistance services and how to request a refund if needed.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last Updated: December 17, 2025
              </p>
            </div>
          </AnimatedSection>

          {/* Independent Service Disclosure */}
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="card-premium p-6 border-primary/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>HorizonCast TV is an independent third-party service assistance startup, launched in 2025.</strong> This refund policy applies exclusively to the assistance and guidance services we provide. We do not sell, provide, or manage cable, internet, or streaming services. Any subscriptions or services you purchase from providers are subject to those providers' own refund and cancellation policies.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">7-15 Day Refund Window</h3>
                    <p className="text-muted-foreground">
                      We offer refunds within 7 to 15 days of purchase, depending on the type of assistance service and whether our guidance has already been delivered. Refund eligibility is evaluated based on service utilization and delivery status.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Policy effective: January 1, 2025 | Applies to all assistance services
                </p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Refund Eligibility */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Refund <span className="text-gradient">Eligibility</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Check if your subscription type qualifies for a refund
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refundScenarios.map((scenario, index) => (
              <AnimatedSection key={scenario.scenario} delay={index * 100}>
                <Card className="card-premium p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{scenario.scenario}</h3>
                    <scenario.icon className={`w-6 h-6 ${scenario.color} flex-shrink-0`} />
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Timeframe:</span>
                      <p className="text-sm">{scenario.timeframe}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Process:</span>
                      <p className="text-sm">{scenario.process}</p>
                    </div>
                  </div>
                  
                  <div className={`mt-4 px-3 py-2 rounded-lg text-sm font-medium ${
                    scenario.eligible 
                      ? "bg-green-500/10 text-green-500" 
                      : "bg-red-500/10 text-red-500"
                  }`}>
                    {scenario.eligible ? "Eligible for Refund" : "Limited/No Refund"}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Refund <span className="text-gradient">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to request and receive your refund
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:transform lg:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {refundProcess.map((step, index) => (
                  <AnimatedSection key={step.step} delay={index * 150}>
                    <div className="relative flex items-center">
                      {/* Step number */}
                      <div className="absolute left-8 w-4 h-4 bg-primary rounded-full z-10 flex items-center justify-center lg:left-1/2 lg:transform lg:-translate-x-2">
                        <span className="text-xs text-primary-foreground font-bold">{step.step}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="ml-20 lg:ml-0 lg:w-full">
                        <Card className="card-premium p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                            <div className="lg:text-center">
                              <div className="flex items-center space-x-2 lg:justify-center">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">{step.timeframe}</span>
                              </div>
                            </div>
                            <div className="lg:text-right">
                              {index === 0 && (
                                <a href="mailto:abplaytv5@gmail.com">
                                  <Button className="btn-hero w-full lg:w-auto">
                                    Request Assistance Refund
                                  </Button>
                                </a>
                              )}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptions */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="card-premium p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Refund Exceptions</h3>
                    <p className="text-muted-foreground mb-6">
                      Certain circumstances may affect refund eligibility. Please review these exceptions:
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exceptions.map((exception, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{exception}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our refund policy
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 100}>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <CreditCard className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Need Help with a <span className="text-gradient">Refund Request?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our support team is here to help with refund questions or requests for our assistance services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Email Support</h3>
                  <p className="text-muted-foreground mb-2">Refund Requests & Questions</p>
                  <a href="mailto:abplaytv5@gmail.com" className="text-primary hover:underline">abplaytv5@gmail.com</a>
                </Card>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Phone Support</h3>
                  <p className="text-muted-foreground mb-2">Speak with Our Team</p>
                  <a href="tel:+18338147663" className="text-primary hover:underline">(833) 814-7663</a>
                </Card>
              </div>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button className="btn-hero text-lg px-8 py-4">
                  Contact Support Team
                </Button>
              </Link>
              <p className="text-muted-foreground mt-4">
                Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom Disclosure */}
      <section className="bg-accent/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              HorizonCast TV is an independent third-party service assistance startup. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Refund;