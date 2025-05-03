
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isOpen) setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-firelink-dark">Firelink</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-firelink-dark hover:text-firelink-purple transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/video" className="text-firelink-dark hover:text-firelink-purple transition-colors">
                    Video
                  </Link>
                </li>
                <li>
                  <Link to="/thank-you" className="text-firelink-dark hover:text-firelink-purple transition-colors">
                    Thank You
                  </Link>
                </li>
              </ul>
            </nav>
            
            <Button onClick={scrollToBookCall} className="bg-firelink-dark hover:bg-firelink-purple text-white">
              Book a Call
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-firelink-dark p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-firelink-dark p-2">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-firelink-dark hover:text-firelink-purple transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/video" 
                  className="block text-firelink-dark hover:text-firelink-purple transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Video
                </Link>
              </li>
              <li>
                <Link 
                  to="/thank-you" 
                  className="block text-firelink-dark hover:text-firelink-purple transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Thank You
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-8">
            <Button 
              className="bg-firelink-dark hover:bg-firelink-purple text-white w-full"
              onClick={scrollToBookCall}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
