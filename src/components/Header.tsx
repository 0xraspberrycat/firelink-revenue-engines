
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

  return (
    <header className="sticky top-0 bg-white z-40 shadow-sm">
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
                    Video Guide
                  </Link>
                </li>
              </ul>
            </nav>
            
            <Button asChild className="cta-button">
              <a href="#book-call">Book a Call</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-firelink-dark p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
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
                  Video Guide
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-8">
            <Button 
              asChild 
              className="cta-button w-full"
              onClick={() => setIsOpen(false)}
            >
              <a href="#book-call">Book a Call</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
