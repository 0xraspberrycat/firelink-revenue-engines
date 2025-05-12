
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-gray-900">
              Fire<span>LINK</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a 
              href="#problem" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('problem'); }}
            >
              Problem
            </a>
            <a 
              href="#lead-gen-offer" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('lead-gen-offer'); }}
            >
              Solution
            </a>
            <a 
              href="#case-studies" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('case-studies'); }}
            >
              Case Studies
            </a>
            <Button 
              className="bg-black text-white hover:bg-gray-900" 
              onClick={() => handleScrollToSection('book-a-call')}
            >
              Book a Call
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#problem" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('problem'); }}
            >
              Problem
            </a>
            <a 
              href="#lead-gen-offer" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('lead-gen-offer'); }}
            >
              Solution
            </a>
            <a 
              href="#case-studies" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('case-studies'); }}
            >
              Case Studies
            </a>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-black text-white hover:bg-gray-900" 
                onClick={() => handleScrollToSection('book-a-call')}
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
