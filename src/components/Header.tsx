
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-firelink-dark">Fire<span className="text-firelink-purple">link</span></span>
            </a>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-600 hover:text-firelink-purple transition-colors">Problem</a>
            <a href="#solution" className="text-gray-600 hover:text-firelink-purple transition-colors">Solution</a>
            <a href="#case-studies" className="text-gray-600 hover:text-firelink-purple transition-colors">Case Studies</a>
            <Button asChild className="cta-button">
              <a href="#book-call">Book a Call</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-firelink-purple focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a 
              href="#problem" 
              className="block text-gray-600 hover:text-firelink-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              className="block text-gray-600 hover:text-firelink-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#case-studies" 
              className="block text-gray-600 hover:text-firelink-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <Button asChild className="cta-button w-full" onClick={() => setMobileMenuOpen(false)}>
              <a href="#book-call">Book a Call</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
