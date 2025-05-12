
import { ArrowRight, Mail, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">Fire<span className="text-navy-300">link</span></span>
            </Link>
            <p className="text-white/60 max-w-xs font-grotesk">
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

          <div className="space-y-8">
            <h3 className="text-lg font-bold mb-6 tracking-tight">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Home</a></li>
              <li><a href="#problem" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Problem</a></li>
              <li><a href="#solution" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Solution</a></li>
              <li><a href="#lead-gen-offer" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Lead Gen Offer</a></li>
              <li><a href="#case-studies" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Case Studies</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-bold mb-6 tracking-tight">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="#book-a-call" className="text-white/60 hover:text-navy-300 transition-colors flex items-center group font-grotesk">
                  <span>Book a Call</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a href="mailto:ermiasauto@gmail.com" className="text-white/60 hover:text-navy-300 transition-colors flex items-center font-grotesk">
                  <Mail className="mr-2 h-4 w-4" />ermiasauto@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:paulxautomation@gmail.com" className="text-white/60 hover:text-navy-300 transition-colors flex items-center font-grotesk">
                  <Mail className="mr-2 h-4 w-4" />paulxautomation@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-lg font-bold mb-6 tracking-tight">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-navy-300 transition-colors font-grotesk">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10 text-white/40 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="font-grotesk">&copy; {currentYear} Firelink. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-grotesk">Designed for lead generation agencies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
