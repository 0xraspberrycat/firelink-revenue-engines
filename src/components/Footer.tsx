
import { ArrowRight, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-firelink-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Fire<span className="text-firelink-purple">link</span></span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              We build revenue engines that operate without you—freeing you from operational chaos while increasing your profits.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-firelink-purple transition-colors">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/paul-automations/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-firelink-purple transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@firelinkautomations" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-firelink-purple transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-firelink-purple transition-colors">Home</a></li>
              <li><a href="#problem" className="text-gray-400 hover:text-firelink-purple transition-colors">Problem</a></li>
              <li><a href="#solution" className="text-gray-400 hover:text-firelink-purple transition-colors">Solution</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-firelink-purple transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#book-call" className="text-gray-400 hover:text-firelink-purple transition-colors flex items-center group">Book a Call <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></a></li>
              <li><a href="mailto:paulxautomation@gmail.com" className="text-gray-400 hover:text-firelink-purple transition-colors flex items-center">
                <Mail className="mr-2 h-4 w-4" />paulxautomation@gmail.com
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Firelink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
