
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Check if the current page should hide the header
  const hideHeader = ['/thank-you', '/video'].includes(location.pathname);

  // If on a page where header should be hidden, don't render anything
  if (hideHeader) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // If Home is clicked, scroll to top first
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (isOpen) setIsOpen(false);
      return;
    }
    
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
    { name: "Case Studies", sectionId: "case-studies" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-bold text-xl text-gray-900">FireLink</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-gray-700 hover:text-gray-900 font-bold tracking-tight text-sm transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button 
              onClick={() => scrollToSection('book-a-call')} 
              className="bg-black hover:bg-gray-800 text-white font-bold"
            >
              Book a Call
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - Fixed fullscreen with improved styling */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center px-6 h-16 border-b border-gray-100">
            <Link to="/" className="flex items-center" onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}>
              <span className="font-bold text-xl text-gray-900">FireLink</span>
            </Link>
            <button onClick={toggleMenu} className="text-gray-900 p-2">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col overflow-auto">
            <nav className="py-8 px-6">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        scrollToSection(item.sectionId);
                        setIsOpen(false);
                      }}
                      className="block text-gray-900 hover:text-gray-600 font-bold transition-colors text-xl w-full text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-auto px-6 py-8 border-t border-gray-100">
              <Button 
                className="bg-black hover:bg-gray-800 text-white w-full font-bold py-6"
                size="lg"
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
