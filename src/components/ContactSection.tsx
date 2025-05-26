
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="pb-16 bg-gray-50">
      <div className="section-container max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
          Other Ways to Connect
        </h3>
        
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          <div className="card-grain bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-5 text-gray-800">Email Us:</h3>
            <div>
              <a 
                href="mailto:paulxautomation@gmail.com"
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-5 w-5 mr-3" />
                <span>paulxautomation@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
