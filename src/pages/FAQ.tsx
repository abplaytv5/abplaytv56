import { useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqCategories = [
    {
      category: "About Our Service",
      questions: [
        {
          question: "Are you an official cable or internet service provider?",
          answer: "No. HorizonCast TV is an independent third-party assistance platform. We are not a cable company, internet service provider (ISP), or streaming service provider. We provide guidance, support, and assistance to help users navigate their cable, internet, and streaming service needs."
        },
        {
          question: "Do you sell internet, cable, or streaming plans?",
          answer: "No. We do not sell, market, or provide internet, cable, or streaming service plans. Our role is strictly to assist and guide users in understanding their options and making informed decisions. All service plans are sold directly by the respective providers."
        },
        {
          question: "Are you affiliated with any service providers?",
          answer: "No. HorizonCast TV is an independent startup launched in 2025. We are not affiliated with, endorsed by, sponsored by, or partnered with any cable, internet, or streaming service provider. We maintain complete independence to provide unbiased guidance."
        },
        {
          question: "What exactly do you do?",
          answer: "We provide educational assistance and guidance to help users understand their cable, internet, and streaming options. This includes helping users compare services, understand technical requirements, troubleshoot common issues, and navigate setup processes. We are here to facilitate your journey, not to sell you services."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "Do you charge for your services?",
          answer: "Yes. We charge a separate service fee for the assistance and guidance we provide. This fee is completely independent of any provider charges you may incur. Our service fee covers the educational support, personalized guidance, and ongoing assistance we offer to help you make informed decisions."
        },
        {
          question: "Will I still be billed by my service provider?",
          answer: "Yes. If you choose to subscribe to any cable, internet, or streaming service after receiving our guidance, you will be billed directly by that provider according to their pricing and terms. Provider billing remains completely unchanged and is separate from any fees you pay to HorizonCast TV for our assistance services."
        },
        {
          question: "What does your service fee include?",
          answer: "Our service fee covers personalized consultation, comprehensive service comparisons, technical guidance, setup assistance support, ongoing help with common issues, and educational resources to help you make the best decisions for your entertainment and connectivity needs."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No. We are transparent about our service fees. The amount you see during checkout is the total cost for our assistance services. However, please note that any services you subscribe to through providers will have their own separate pricing, which may include installation fees, equipment charges, or other provider-specific costs."
        }
      ]
    },
    {
      category: "Refunds & Cancellations",
      questions: [
        {
          question: "Are your services refundable?",
          answer: "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether our guidance services have already been delivered. Please review our Refund Policy page for complete eligibility details and submission procedures."
        },
        {
          question: "What is your cancellation policy?",
          answer: "You may request cancellation of our assistance services at any time. However, refund eligibility depends on the timing of your request and the extent of services already delivered. Services that have been fully rendered may not be eligible for refunds. Please see our Refund Policy for comprehensive information."
        },
        {
          question: "How do I request a refund?",
          answer: "To request a refund, please contact our support team at abplaytv5@gmail.com or call (833) 814-7663 within the eligible timeframe. Include your service details and reason for the refund request. Our team will review your request according to our Refund Policy and respond within 3-5 business days."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "Do you need my account passwords or sensitive information?",
          answer: "Absolutely not. We never request, collect, or store provider account passwords, social security numbers, or other highly sensitive credentials. Our assistance is guidance-based and educational. We may ask for general information to better understand your needs, but we will never ask for login credentials to your provider accounts."
        },
        {
          question: "How do you protect my personal information?",
          answer: "We take data security seriously. All information submitted through our website is transmitted using HTTPS encryption. We store only the information necessary to provide our assistance services, and we never share your data with third parties for marketing purposes. Please review our Privacy Policy for detailed information on data handling practices."
        },
        {
          question: "Do you share my information with service providers?",
          answer: "No. We do not share your personal information with cable, internet, or streaming service providers. Any decisions you make to subscribe to services are made independently, and you interact with those providers directly through their official channels."
        }
      ]
    },
    {
      category: "Service Coverage",
      questions: [
        {
          question: "Which providers do you support?",
          answer: "We provide guidance and educational assistance regarding multiple cable, internet, and streaming service providers available in the market. Our support is informational only and covers various providers to help you make informed comparisons. We maintain no partnerships or affiliations with any provider, ensuring our guidance remains unbiased and independent."
        },
        {
          question: "Do you provide support for all regions?",
          answer: "Our educational assistance services are available to users nationwide. However, the availability of specific cable, internet, or streaming services varies by location and is determined solely by the providers themselves. We can help you understand which services are available in your area, but we cannot guarantee provider availability."
        },
        {
          question: "Can you help me switch providers?",
          answer: "Yes, we can provide guidance and support to help you understand the process of switching from one provider to another. This includes explaining compatibility considerations, helping you understand cancellation policies, and providing general setup guidance. However, the actual switching process must be completed directly with the providers involved."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What kind of technical assistance do you provide?",
          answer: "We provide educational guidance on common technical topics including device compatibility, basic setup procedures, general troubleshooting steps, understanding technical requirements, and navigating provider websites and applications. For provider-specific technical issues, you must contact your service provider's official support channels."
        },
        {
          question: "Can you fix issues with my provider's service?",
          answer: "No. We cannot fix technical issues with services provided by cable, internet, or streaming companies. For service outages, billing disputes, technical malfunctions, or account-specific issues, you must contact your provider's official customer support directly. We can help guide you on how to reach them and what information to prepare."
        },
        {
          question: "Do you offer 24/7 support?",
          answer: "Our assistance services are available during standard business hours. You can reach us via email at abplaytv5@gmail.com or by phone at (833) 814-7663. We strive to respond to all inquiries within one business day. For urgent technical issues with your actual service, please contact your provider's 24/7 support line."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I start using your assistance services?",
          answer: "Getting started is simple. Browse our website to understand the guidance services we offer, contact us through our Contact page or call (833) 814-7663, describe your cable, internet, or streaming needs, and our team will provide personalized guidance to help you make informed decisions. Remember, we provide assistance and education, not direct service sales."
        },
        {
          question: "What information should I prepare before contacting you?",
          answer: "To help us provide the most relevant guidance, please have ready: your general location (city/state), your current internet/cable situation (if applicable), your budget preferences, specific needs or requirements (channels, speeds, etc.), and any questions or concerns you'd like addressed. Do not share account passwords or sensitive credentials."
        },
        {
          question: "How long does the assistance process take?",
          answer: "The duration varies depending on your specific needs and complexity. A basic consultation typically takes 15-30 minutes, while comprehensive guidance for complex situations may require multiple sessions. We work at your pace to ensure you fully understand your options and feel confident in your decisions."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-card to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find answers to common questions about our independent assistance services. 
                  We're here to help you understand how we support your cable, internet, and streaming needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Disclosure Banner */}
        <section className="bg-accent/50 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm leading-relaxed text-foreground">
                  <strong className="font-semibold">Important Disclosure:</strong> HorizonCast TV is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide educational guidance and support only. All trademarks and service names referenced belong to their respective owners.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <AnimatedSection key={categoryIndex}>
                  <div className="bg-card border border-border rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${categoryIndex}-${index}`}
                          className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
                        >
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our support team is here to help. Reach out to us for personalized assistance with your cable, internet, and streaming guidance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+18338147663"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary-foreground bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    Call Us: (833) 814-7663
                  </a>
                  <a 
                    href="mailto:abplaytv5@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-border bg-card text-foreground hover:bg-accent transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
