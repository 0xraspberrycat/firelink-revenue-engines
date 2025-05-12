
import { ArrowRight, Mail, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-firelink-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">Fire<span className="text-firelink-purple">link</span></span>
            </Link>
            <p className="text-white/60 max-w-xs">
              Intelligent automation systems for lead generation agencies, transforming manual operations into streamlined systems.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ErmiasAuto" target="_blank" rel="noopener noreferrer" 
                className="p-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                <Twitter className="h-5 w-5 text-white/60" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer" 
                className="p-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                <Twitter className="h-5 w-5 text-white/60" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-white/60 hover:text-firelink-purple transition-colors">Home</a></li>
              <li><a href="#problem" className="text-white/60 hover:text-firelink-purple transition-colors">Problem</a></li>
              <li><a href="#solution" className="text-white/60 hover:text-firelink-purple transition-colors">Solution</a></li>
              <li><a href="#lead-gen-offer" className="text-white/60 hover:text-firelink-purple transition-colors">Lead Gen Offer</a></li>
              <li><a href="#case-studies" className="text-white/60 hover:text-firelink-purple transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-firelink-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="#book-a-call" className="text-white/60 hover:text-firelink-purple transition-colors flex items-center group">
                  <span>Book a Call</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a href="mailto:ermiasauto@gmail.com" className="text-white/60 hover:text-firelink-purple transition-colors flex items-center">
                  <Mail className="mr-2 h-4 w-4" />ermiasauto@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:paulxautomation@gmail.com" className="text-white/60 hover:text-firelink-purple transition-colors flex items-center">
                  <Mail className="mr-2 h-4 w-4" />paulxautomation@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-firelink-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-firelink-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-white/40 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Firelink. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for lead generation agencies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
