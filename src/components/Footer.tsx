
import { ArrowRight, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-firelink-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Fire<span className="text-firelink-purple">link</span></span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Firelink builds intelligent automation systems for lead generation agencies, transforming manual campaign monitoring into streamlined operations that run 24/7 without human dependency.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ErmiasAuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-firelink-purple transition-colors">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-firelink-purple transition-colors">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-firelink-purple transition-colors">Home</a></li>
              <li><a href="#problem" className="text-gray-400 hover:text-firelink-purple transition-colors">Problem</a></li>
              <li><a href="#solution" className="text-gray-400 hover:text-firelink-purple transition-colors">Solution</a></li>
              <li><a href="#lead-gen-offer" className="text-gray-400 hover:text-firelink-purple transition-colors">Lead Gen Offer</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-firelink-purple transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-firelink-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#book-a-call" className="text-gray-400 hover:text-firelink-purple transition-colors flex items-center group">Book a Call <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></a></li>
              <li><a href="mailto:ermiasauto@gmail.com" className="text-gray-400 hover:text-firelink-purple transition-colors flex items-center">
                <Mail className="mr-2 h-4 w-4" />ermiasauto@gmail.com
              </a></li>
              <li><a href="mailto:paulxautomation@gmail.com" className="text-gray-400 hover:text-firelink-purple transition-colors flex items-center">
                <Mail className="mr-2 h-4 w-4" />paulxautomation@gmail.com
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Firelink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
