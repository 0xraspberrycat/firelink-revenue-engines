
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "Home", sectionId: "hero" },
    { name: "Problem", sectionId: "problem" },
    { name: "Solution", sectionId: "solution" },
    { name: "Case Studies", sectionId: "case-studies" },
    { name: "Contact", sectionId: "book-a-call" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-white">Fire<span>Link</span></span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Button
              variant="outline"
              className="border-white text-black bg-white hover:bg-gray-200 hover:text-black"
              onClick={scrollToBookCall}
            >
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:ermiasauto@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    Email (Ermias)
                  </a>
                </li>
                <li>
                  <a href="mailto:paulxautomation@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    Email (Paul)
                  </a>
                </li>
                <li>
                  <a href="https://x.com/ErmiasAuto" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    X (Ermias)
                  </a>
                </li>
                <li>
                  <a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    X (Paul)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {currentYear} FireLink. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
