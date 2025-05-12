
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";

const Header = () => {
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

  const scrollToSection = (sectionId: string) => {
    // If Home is clicked, scroll to top first
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          
          {/* Desktop Navigation */}
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
          
          {/* Mobile Drawer Navigation */}
          {isMobile && (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu size={24} />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh] rounded-t-xl">
                <div className="py-4 px-6">
                  <div className="flex items-center justify-between mb-6">
                    <Link 
                      to="/" 
                      className="font-bold text-xl text-gray-900"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      FireLink
                    </Link>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon">
                        <X size={24} />
                      </Button>
                    </DrawerClose>
                  </div>
                  
                  <nav className="pb-6">
                    <ul className="space-y-4">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <DrawerClose asChild>
                            <button
                              onClick={() => scrollToSection(item.sectionId)}
                              className="block w-full text-left text-gray-900 hover:text-gray-600 font-bold transition-colors text-lg py-2"
                            >
                              {item.name}
                            </button>
                          </DrawerClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <DrawerClose asChild>
                      <Button 
                        className="bg-black hover:bg-gray-800 text-white w-full font-bold py-6 mt-4"
                        size="lg"
                        onClick={() => scrollToSection('book-a-call')}
                      >
                        Book a Call
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
