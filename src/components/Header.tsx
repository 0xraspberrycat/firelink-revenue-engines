
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isOpen) setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", sectionId: "hero" },
    { name: "Problem", sectionId: "problem" },
    { name: "Solution", sectionId: "solution" },
    { name: "Lead Gen Offer", sectionId: "lead-gen-offer" },
    { name: "Case Studies", sectionId: "case-studies" },
    { name: "Contact", sectionId: "contact" }
  ];

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
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-firelink-dark hover:text-firelink-purple transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button 
              onClick={() => scrollToSection('book-a-call')} 
              className="bg-firelink-dark hover:bg-firelink-purple text-white"
            >
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
      
      {/* Mobile menu - fixed position rather than transform for better accessibility */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-firelink-dark p-2">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        scrollToSection(item.sectionId);
                        setIsOpen(false);
                      }}
                      className="block text-firelink-dark hover:text-firelink-purple transition-colors text-lg w-full text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-8">
              <Button 
                className="bg-firelink-dark hover:bg-firelink-purple text-white w-full"
                onClick={() => {
                  scrollToSection('book-a-call');
                  setIsOpen(false);
                }}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
