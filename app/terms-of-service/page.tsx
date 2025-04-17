import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Basko Media",
  description: "Terms and conditions for using Basko Media services",
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last Updated: Mars 15, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Basko Media. These Terms of Service ("Terms") govern your use of our website and services. 
                By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                Please read these Terms carefully before using our website or services. If you do not agree to these Terms, 
                you must not access our website or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Basko Media provides digital solutions including web development, mobile app development, 
                AI assistants, chatbots, and workflow automation. The specific services to be provided will be 
                outlined in a separate agreement or statement of work between Basko Media and the client.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Use of Our Website</h2>
              <p className="text-gray-700 mb-4">
                You may use our website for lawful purposes only. You must not use our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>In any way that breaches any applicable local, national, or international law or regulation</li>
                <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect</li>
                <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, or any other harmful programs</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The content on our website, including but not limited to text, graphics, logos, images, and software, 
                is the property of Basko Media or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                For client projects, the ownership of intellectual property rights will be specified in the client agreement. 
                Unless otherwise stated in writing, upon full payment, clients typically receive ownership of the custom code 
                and content created specifically for their project, while Basko Media retains ownership of pre-existing 
                code, frameworks, and tools used in the development process.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms for our services will be outlined in the client agreement or statement of work. 
                Typically, we require a deposit before beginning work, with the remaining balance due upon completion 
                or according to a predetermined payment schedule.
              </p>
              <p className="text-gray-700 mb-4">
                All invoices are due within 30 days of the invoice date unless otherwise specified. Late payments may 
                incur additional fees or interest charges as permitted by law.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Project Delivery and Acceptance</h2>
              <p className="text-gray-700 mb-4">
                We strive to deliver all projects according to the agreed-upon timeline. However, timelines may be 
                adjusted due to changes in project scope, delays in receiving client feedback or materials, or other 
                factors outside our control.
              </p>
              <p className="text-gray-700 mb-4">
                Upon delivery, clients will have a specified period (typically 14 days) to review the deliverables 
                and request revisions within the original project scope. After this period, or upon client approval, 
                the project will be considered accepted.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Basko Media shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, 
                resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your use or inability to use our website or services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate a service agreement with written notice if the other party materially 
                breaches the agreement and fails to remedy the breach within 30 days of receiving notice.
              </p>
              <p className="text-gray-700 mb-4">
                Upon termination, the client shall pay for all services rendered up to the termination date. 
                If the client terminates the agreement without cause, they may be responsible for paying a 
                cancellation fee as specified in the client agreement.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the state of California, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 mb-4">
                Any disputes arising under or in connection with these Terms shall be subject to the exclusive 
                jurisdiction of the courts located in San Francisco, California.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Changes to These Terms</h2>
              <p className="text-gray-700 mb-4">
                We may revise these Terms at any time by amending this page. Please check this page regularly 
                to take notice of any changes we made, as they are binding on you.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us at:
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