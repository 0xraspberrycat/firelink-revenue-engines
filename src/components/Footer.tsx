
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">Fire<span className="text-gray-400">link</span></span>
            </Link>
            <p className="text-white/60 max-w-xs">
              Intelligent automation systems for lead generation agencies, transforming manual operations into streamlined systems.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ErmiasAuto" target="_blank" rel="noopener noreferrer" 
                className="p-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                <svg className="h-5 w-5 text-white/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer" 
                className="p-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                <svg className="h-5 w-5 text-white/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-4 tracking-tight">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-white/60 hover:text-white/90 transition-colors">Home</a></li>
              <li><a href="#problem" className="text-white/60 hover:text-white/90 transition-colors">Problem</a></li>
              <li><a href="#lead-gen-offer" className="text-white/60 hover:text-white/90 transition-colors">Solution</a></li>
              <li><a href="#case-studies" className="text-white/60 hover:text-white/90 transition-colors">Case Studies</a></li>
              <li><a href="#book-a-call" className="text-white/60 hover:text-white/90 transition-colors">Book a Call</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white/90 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-4 tracking-tight">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="#book-a-call" className="text-white/60 hover:text-white/90 transition-colors flex items-center group">
                  <span>Book a Call</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a href="mailto:ermiasauto@gmail.com" className="text-white/60 hover:text-white/90 transition-colors flex items-center">
                  <Mail className="mr-2 h-4 w-4" />ermiasauto@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:paulxautomation@gmail.com" className="text-white/60 hover:text-white/90 transition-colors flex items-center">
                  <Mail className="mr-2 h-4 w-4" />paulxautomation@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-4 tracking-tight">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white/90 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white/90 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-white/40 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Firelink. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for lead generation agencies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
