
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: March 27, 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using JP Strategies services ("Services"), you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p className="mb-4">
              JP Strategies provides a range of business consulting, digital solutions, and software services. 
              These include but are not limited to strategic consulting, digital transformation, scheduling services, 
              custom software development, and data analytics. We may integrate with third-party services to provide these functions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              You may need to create an account to use some of our Services. You are responsible for maintaining the 
              confidentiality of your account information and for all activities that occur under your account. 
              You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Violate or encourage others to violate the rights of third parties, including intellectual property rights</li>
              <li>Attempt to gain unauthorized access to the Services or to other users' accounts</li>
              <li>Interfere with or disrupt the Services or servers connected to the Services</li>
              <li>Impersonate another person or entity</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Engage in any activity that could damage, disable, or impair the Services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of the Services, including but not limited to text, graphics, logos, 
              icons, images, software, and user interface, are owned by JP Strategies and are protected by international 
              copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="mb-4">
              Our Services may contain links to third-party websites or services that are not owned or controlled by JP Strategies. 
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
              third-party websites or services. You acknowledge and agree that JP Strategies shall not be responsible or liable 
              for any damage or loss caused by or in connection with use of or reliance on any such content, goods, or services 
              available on or through any such websites or services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Payment Terms</h2>
            <p className="mb-4">
              Certain Services may require payment. By using such Services, you agree to pay all fees and charges associated 
              with your account on a timely basis. All payments are non-refundable unless explicitly stated otherwise. 
              We reserve the right to change our prices with reasonable notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              JP Strategies and its affiliates, employees, contractors, agents, officers, and directors shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, 
              resulting from your access to or use of or inability to access or use the Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
            <p className="mb-4">
              The Services are provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, 
              either express or implied. JP Strategies disclaims all warranties, including any implied warranties of 
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              We will provide notice of any changes by posting the new Terms on our website. Your continued use 
              of the Services after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
              JP Strategies operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at: legal@jpstrategies.xyz
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

export default TermsOfService;
