
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: March 27, 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              JP Strategies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website, 
              use our services, and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data We Collect</h2>
            <p className="mb-4">We may collect and process the following data:</p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Identity Data: Name, username or similar identifier</li>
              <li>Contact Data: Email address, telephone number, address</li>
              <li>Business Data: Company information, role, industry</li>
              <li>Technical Data: IP address, browser type, device information, time zone setting</li>
              <li>Usage Data: Information about how you use our website and services</li>
              <li>Service-specific Data: When you use specific services (such as calendar, scheduling, software tools), we collect data necessary to provide those services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <p className="mb-4">We use your data to:</p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Personalize your experience</li>
              <li>Notify you about changes to our services</li>
              <li>Allow you to participate in interactive features</li>
              <li>Provide customer support</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Maintain security of our services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              Our services may integrate with third-party services such as Google Cloud, Microsoft services, 
              analytics providers, and other business tools. When you connect these services, you are subject 
              to their respective privacy policies as well.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We have implemented appropriate security measures to prevent your personal data from being 
              accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit 
              access to your personal data to employees, agents, contractors and other third parties who 
              have a business need to know.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent where we rely on consent to process your personal data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">International Transfers</h2>
            <p className="mb-4">
              Your data may be transferred to, and processed in, countries other than the country in which 
              you are resident. We will take appropriate safeguards to ensure your data remains protected 
              according to this privacy policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at: privacy@jpstrategies.xyz
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-12 text-center">
            <p className="text-gray-500">© 2025 JP Strategies. All rights reserved.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
