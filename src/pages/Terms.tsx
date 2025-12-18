import { Link } from "react-router-dom";
import { Shield, FileText, AlertCircle, Clock, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Terms = () => {
  const sections = [
    {
      title: "1. Service Agreement",
      content: [
        "These Terms of Service ('Terms') govern your use of HorizonCast TV assistance services ('Services'). By accessing or using our services, you agree to be bound by these Terms.",
        "By creating an account or requesting assistance, you agree to be bound by these Terms and our Privacy Policy.",
        "You must be at least 18 years old or have parental consent to use our services.",
        "HorizonCast TV reserves the right to modify these Terms at any time. Continued use of the service constitutes acceptance of updated Terms."
      ]
    },
    {
      title: "2. Account Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to provide accurate and complete information when requesting assistance.",
        "Accounts are for individual or household use for personal assistance purposes only.",
        "You must notify us immediately of any unauthorized use of your account.",
        "HorizonCast TV reserves the right to suspend or terminate accounts that violate these Terms."
      ]
    },
    {
      title: "3. Service Availability",
      content: [
        "HorizonCast TV assistance services are provided 'as is' and are subject to availability.",
        "We strive to provide timely responses but cannot guarantee immediate availability.",
        "Assistance availability may vary based on demand and consultant schedules.",
        "HorizonCast TV reserves the right to modify, suspend, or discontinue any aspect of the service.",
        "Some assistance areas may not be available in all regions."
      ]
    },
    {
      title: "4. Service Usage and Restrictions",
      content: [
        "All educational materials and guidance provided by HorizonCast TV are for personal use only.",
        "You may use our assistance services for personal, non-commercial purposes.",
        "Redistribution or resale of our assistance services is strictly prohibited.",
        "You agree to use our services in good faith and provide accurate information during consultations.",
        "Misuse of our services or providing false information may result in service termination."
      ]
    },
    {
      title: "5. Payment and Billing",
      content: [
        "Assistance service fees are charged based on the package or consultation selected.",
        "Fees are subject to our Refund Policy, which allows refunds within 7-15 days of service delivery.",
        "Pricing will be clearly communicated before you agree to any assistance services.",
        "HorizonCast TV uses secure third-party payment processors for all transactions.",
        "Separate assistance fees apply to all services. There are no subscriptions or automatic renewals."
      ]
    },
    {
      title: "6. Prohibited Activities",
      content: [
        "You may not share your account credentials with others outside your household.",
        "Commercial resale or redistribution of our assistance services is strictly prohibited.",
        "You may not attempt to hack, reverse engineer, or compromise our systems.",
        "Creating multiple accounts or using false information is prohibited.",
        "Any illegal or harmful activities using our services will result in immediate termination."
      ]
    },
    {
      title: "7. Privacy and Data",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.",
        "HorizonCast TV collects consultation and usage data to improve assistance quality.",
        "We implement industry-standard security measures to protect your personal information.",
        "You can control privacy settings through your account preferences.",
        "We do not sell your personal information to third parties."
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "HorizonCast TV's liability is limited to the amount you paid for assistance services in the past 12 months.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Some jurisdictions do not allow limitation of liability, so these limits may not apply to you.",
        "Our assistance services are educational and provided without warranties of specific outcomes.",
        "You agree to indemnify HorizonCast TV against claims arising from your use of the service."
      ]
    },
    {
      title: "9. Termination",
      content: [
        "You may close your account at any time through your account settings.",
        "HorizonCast TV may terminate your account for violation of these Terms.",
        "Upon termination, your access to assistance services will cease immediately.",
        "Educational materials provided during consultations remain available per our data retention policy.",
        "These Terms survive termination where applicable by law."
      ]
    },
    {
      title: "10. Governing Law",
      content: [
        "These Terms are governed by the laws of the jurisdiction where HorizonCast TV operates.",
        "Any disputes will be resolved through binding arbitration.",
        "Class action lawsuits are waived except where prohibited by law.",
        "If any provision of these Terms is invalid, the remaining provisions remain in effect.",
        "These Terms constitute the entire agreement between you and HorizonCast TV regarding the assistance services."
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <FileText className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully. By using HorizonCast TV, you agree to be bound by these Terms of Service.
                HorizonCast TV is an independent third-party cable, internet, and streaming assistance service founded in 2025.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium p-8 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                    <p className="text-muted-foreground">
                      These Terms of Service were last updated on January 1, 2025. 
                      HorizonCast TV reserves the right to modify these terms at any time. 
                      Continued use of the assistance services after changes constitutes acceptance of the new terms.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Last Updated: January 1, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="w-4 h-4" />
                    <span>Founded: 2025 | Independent Service</span>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <AnimatedSection key={section.title} delay={index * 100}>
                <Card className="card-premium p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Questions About These <span className="text-gradient">Terms?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                If you have any questions about these Terms of Service, please contact our legal team. 
                We're here to help clarify any aspect of your agreement with AB Textiles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Legal Department</h3>
                  <p className="text-muted-foreground mb-2">HorizonCast TV Legal Team</p>
                  <p className="text-muted-foreground">legal@horizoncasttv.com</p>
                </Card>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
                  <p className="text-muted-foreground mb-2">General Inquiries</p>
                  <p className="text-muted-foreground mb-4">support@horizoncasttv.com</p>
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Button className="btn-hero w-full">
                      Contact Support
                    </Button>
                  </Link>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;