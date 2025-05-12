
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
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
              <span className="text-white">Fire<span className="text-white">LINK</span></span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={scrollToBookCall}
            >
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lead Gen Automation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campaign Monitoring</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Response Filtering</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Client Reporting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://x.com/ErmiasAuto" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">X (Ermias)</a></li>
                <li><a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">X (Paul)</a></li>
                <li><a href="mailto:ermiasauto@gmail.com" className="text-gray-300 hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {currentYear} FireLINK. All rights reserved.</p>
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
