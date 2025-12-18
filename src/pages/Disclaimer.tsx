import { useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { AlertTriangle, Info, Shield } from "lucide-react";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-card to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
                  Disclaimer
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Important information about HorizonCast TV's services, limitations, and user responsibilities.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last Updated: December 17, 2025
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Independent Service Disclosure */}
        <section className="bg-accent/50 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto bg-card border border-primary/30 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      Independent Third-Party Service Notice
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      <strong>HorizonCast TV is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.</strong> We provide educational guidance, assistance, and support services to help users make informed decisions about their entertainment and connectivity options. We do not sell, provide, or manage cable, internet, or streaming services directly. All trademarks, service marks, and brand names referenced on this website belong to their respective owners.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Disclaimer Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* General Disclaimer */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">General Disclaimer</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The information and services provided by HorizonCast TV are for educational and assistance purposes only. While we strive to provide accurate, helpful, and up-to-date guidance, we make no warranties or guarantees regarding the completeness, accuracy, or reliability of the information presented on this website.
                    </p>
                    <p>
                      Users are responsible for verifying all information independently and making their own informed decisions regarding cable, internet, and streaming services. HorizonCast TV shall not be held liable for any decisions made based on the guidance or information provided through our assistance services.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* No Provider Relationship */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">No Provider Affiliation or Authorization</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      HorizonCast TV is <strong>NOT</strong>:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>An internet service provider (ISP)</li>
                      <li>A cable television company</li>
                      <li>A streaming service provider</li>
                      <li>An authorized agent, representative, or partner of any provider</li>
                      <li>Endorsed, sponsored, or affiliated with any telecommunications or media company</li>
                    </ul>
                    <p>
                      Any references to specific service providers, brand names, trademarks, or service marks are made solely for descriptive and educational purposes. Such references do not imply partnership, authorization, endorsement, or any formal relationship with those entities.
                    </p>
                    <p>
                      All provider logos, trademarks, service marks, and brand names are the property of their respective owners and are used here for informational reference only.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service Limitations */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Service Limitations</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>What We Do NOT Do:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>We do not sell services:</strong> HorizonCast TV does not sell, market, or provide internet, cable, or streaming service plans. We provide guidance only.</li>
                      <li><strong>We do not guarantee availability:</strong> Service availability, pricing, and features are determined solely by providers and vary by location.</li>
                      <li><strong>We do not handle billing:</strong> All billing, payments, and account management for actual services are handled directly between you and your chosen provider.</li>
                      <li><strong>We do not provide technical support for providers:</strong> For technical issues with your internet, cable, or streaming service, you must contact your provider's official support channels.</li>
                      <li><strong>We do not access provider accounts:</strong> We never request or require access to your provider account credentials, passwords, or sensitive personal information.</li>
                    </ul>
                    <p className="mt-6">
                      <strong>What We Do:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide educational information about available services and options</li>
                      <li>Assist with understanding technical requirements and compatibility</li>
                      <li>Guide users through general setup and configuration processes</li>
                      <li>Facilitate informed decision-making through unbiased guidance</li>
                      <li>Support users with common questions and navigation assistance</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Separate Fees */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Separate Service Fees</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      HorizonCast TV charges a <strong>separate service fee</strong> for the assistance and guidance we provide. This fee is completely independent of and in addition to any charges you may incur from cable, internet, or streaming service providers.
                    </p>
                    <p>
                      <strong>Important Understanding:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Our service fee covers educational guidance and assistance only</li>
                      <li>Provider charges are separate and determined by the provider</li>
                      <li>You will be billed directly by any provider whose services you subscribe to</li>
                      <li>Our fees do not include or cover provider service costs, installation fees, equipment charges, or subscription costs</li>
                      <li>Refunds for our assistance services are subject to our Refund Policy</li>
                    </ul>
                    <p>
                      Please review our Terms & Conditions and Refund Policy for complete information regarding our service fees and refund eligibility.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* No Guarantees */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">No Guarantees or Warranties</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      HorizonCast TV makes no guarantees, warranties, or promises regarding:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The availability of any specific service in your area</li>
                      <li>Pricing, plans, or promotional offers from providers (subject to change without notice)</li>
                      <li>Service quality, speed, reliability, or performance of provider services</li>
                      <li>Installation timeframes or technical capabilities</li>
                      <li>Compatibility with your specific devices or requirements</li>
                      <li>The accuracy or completeness of third-party information</li>
                    </ul>
                    <p>
                      All guidance provided is based on publicly available information and general industry knowledge. Users are encouraged to verify all details directly with service providers before making commitments.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* User Responsibilities */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">User Responsibilities</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      By using HorizonCast TV's assistance services, you acknowledge and agree that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You are responsible for verifying all information independently</li>
                      <li>You will make your own informed decisions regarding service subscriptions</li>
                      <li>You understand that we are an independent third-party assistance platform</li>
                      <li>You will interact directly with providers for all service-related matters</li>
                      <li>You will review provider terms, conditions, and contracts before subscribing</li>
                      <li>You are responsible for all charges incurred through provider subscriptions</li>
                      <li>You will not misrepresent our relationship with any service provider</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Information Accuracy */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Information Accuracy & Updates</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      While we make every effort to provide accurate and current information, the cable, internet, and streaming service landscape changes frequently. Providers may modify their offerings, pricing, availability, features, and terms without notice to us.
                    </p>
                    <p>
                      HorizonCast TV is not responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Changes made by providers after information is presented</li>
                      <li>Discrepancies between our guidance and current provider offerings</li>
                      <li>Outdated information that may appear on our website</li>
                      <li>Third-party website content or external links</li>
                    </ul>
                    <p>
                      Always verify current details directly with service providers before making decisions.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Limitation of Liability */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      To the maximum extent permitted by law, HorizonCast TV, its owners, operators, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use or inability to use our assistance services</li>
                      <li>Decisions made based on information or guidance provided</li>
                      <li>Service interruptions, errors, or omissions</li>
                      <li>Issues with provider services, billing, or technical performance</li>
                      <li>Unauthorized access to or alteration of your data</li>
                      <li>Third-party conduct or content</li>
                    </ul>
                    <p>
                      Your use of HorizonCast TV services is at your sole risk. Our liability, if any, shall be limited to the amount of fees paid to us for assistance services.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Third-Party Links */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Websites & Links</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Our website may contain links to third-party websites, including official provider websites, for your convenience and reference. These links do not constitute endorsement, authorization, or affiliation.
                    </p>
                    <p>
                      HorizonCast TV is not responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The content, accuracy, or practices of third-party websites</li>
                      <li>Privacy policies or data handling of external sites</li>
                      <li>Transactions conducted on third-party platforms</li>
                      <li>Technical issues or security vulnerabilities of external sites</li>
                    </ul>
                    <p>
                      We encourage you to review the terms, conditions, and privacy policies of any third-party websites you visit.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Questions About This Disclaimer</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If you have questions about this disclaimer or need clarification about HorizonCast TV's services, limitations, or policies, please contact us:
                    </p>
                    <div className="bg-accent/50 border border-border rounded-lg p-6 mt-4">
                      <p className="font-semibold text-foreground mb-3">Contact Information:</p>
                      <p><strong>Email:</strong> <a href="mailto:abplaytv5@gmail.com" className="text-primary hover:underline">abplaytv5@gmail.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+18338147663" className="text-primary hover:underline">(833) 814-7663</a></p>
                      <p className="text-sm mt-3">Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
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
      </div>
    </Layout>
  );
};

export default Disclaimer;
