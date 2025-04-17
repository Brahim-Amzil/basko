import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Basko Media",
  description: "Our commitment to protecting your privacy and personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last Updated: Mars 15, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                At Basko Media, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or engage with our services.
              </p>
              <p className="text-gray-700">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                please do not access our website or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect personal identification information from you in a variety of ways, including, but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>When you visit our website, fill out a form, or engage with our content</li>
                <li>When you sign up for our newsletter or request information about our services</li>
                <li>When you contact us through our contact form, email, or phone</li>
                <li>When you engage with us on social media platforms</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The personal information we collect may include your name, email address, phone number, company name, 
                and information about your project requirements.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may use the information we collect from you for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To improve, personalize, and expand our website and services</li>
                <li>To understand and analyze how you use our website</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you, including for customer service, updates, and marketing purposes</li>
                <li>To process transactions and send related information including confirmations and invoices</li>
                <li>To prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We may use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                Cookies are files with a small amount of data which may include an anonymous unique identifier. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p className="text-gray-700">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To maintain your session while you navigate our website</li>
                <li>To understand your preferences based on previous or current site activity</li>
                <li>To compile aggregate data about site traffic and site interactions</li>
                <li>To assist in our marketing efforts</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Third-Party Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties 
                unless we provide users with advance notice. This does not include website hosting partners and other parties 
                who assist us in operating our website, conducting our business, or serving our users, so long as those parties 
                agree to keep this information confidential.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement a variety of security measures to maintain the safety of your personal information when you enter, 
                submit, or access your personal information. However, no method of transmission over the Internet or method of 
                electronic storage is 100% secure, and we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Your Data Protection Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The right to access the personal information we have about you</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to request the deletion of your personal information</li>
                <li>The right to restrict or object to the processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy 
                periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: contact@baskomedia.com<br />
                Phone: +34613658220
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}