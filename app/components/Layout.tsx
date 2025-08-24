import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside (equivalent to base.js functionality)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const hamburger = document.querySelector('.hamburger-menu');
      const sideMenu = document.querySelector('.side-menu');
      
      if (hamburger && sideMenu && 
          !hamburger.contains(target) && 
          !sideMenu.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-5">
      <div className="bg-black/85 rounded-[18px] border border-white/15 w-full max-w-[1400px] h-[900px] relative overflow-hidden">
        {/* Header */}
        <header className="bg-black/20 border-b border-white/10 rounded-t-4 px-5 py-[18px] flex items-center justify-between relative">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-sm text-white/30 whitespace-nowrap">
            Alejandro Duque
          </div>
        </header>

        {/* Main Content */}
        <div className="flex h-[calc(100%-73px)]">
          {/* Side Menu */}
          <aside className={`bg-black/20 border-r border-white/10 w-[336px] px-8 py-12 flex flex-col relative side-menu
            md:flex md:relative md:w-[336px] md:translate-x-0
            ${isMobileMenuOpen ? 
              'fixed top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-xl z-[1000] translate-x-0 pt-20' : 
              'hidden md:flex'
            }`}>
            {/* Profile Section */}
            <div className="mb-10 relative">
              <Link to="/" className="block">
                <div className="bg-white/5 border border-white/5 rounded-full p-1.5 w-12 h-12 mb-4 relative">
                  <div className="w-full h-full bg-cover bg-center rounded-full" style={{backgroundImage: "url('/images/main.png')"}}></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <div className="mb-10">
                  <div className="font-medium text-sm text-white mb-1">Alejandro Duque</div>
                  <div className="font-medium text-sm text-white/50">CTO/Developer</div>
                </div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 flex flex-col gap-5 mb-10">
              <Link to="/about" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/about') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/about') && <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/about') ? 'text-yellow-300' : 'text-white'}`}>
                    About
                  </span>
                </div>
              </Link>
              
              <Link to="/portfolio" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/portfolio') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/portfolio') && <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/portfolio') ? 'text-yellow-300' : 'text-white'}`}>
                    Portfolio
                  </span>
                </div>
              </Link>
              
              <Link to="/services" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/services') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/services') && <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/services') ? 'text-yellow-300' : 'text-white'}`}>
                    Services
                  </span>
                </div>
              </Link>
              
              <Link to="/contact" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/contact') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/contact') && <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/contact') ? 'text-yellow-300' : 'text-white'}`}>
                    Contact
                  </span>
                </div>
              </Link>
            </nav>

            {/* Book Call Button */}
            <div className="relative">
              <a 
                href="https://calendar.notion.so/meet/alejandroduque/kmel84oty" 
                target="_blank" 
                rel="noreferrer" 
                className="block bg-white/10 border border-white/5 rounded-[10px] px-4 py-3 w-full cursor-pointer transition-colors hover:bg-white/15 text-decoration-none"
              >
                <div className="font-medium text-sm text-white/65 text-center">Book a Call</div>
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 flex flex-col overflow-y-auto max-h-full bg-transparent">
            {children}
            
            {/* Footer */}
            <footer className="bg-black/20 border-t border-white/10 px-12 py-6 flex justify-between items-center mt-auto">
              <div className="font-medium text-xs text-white/30">© 2024, All Rights Reserved</div>
              <div className="font-medium text-xs text-white/30">Licenses</div>
            </footer>
          </main>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className={`md:hidden absolute top-5 right-5 bg-white/10 border border-white/20 rounded-lg p-2.5 cursor-pointer backdrop-blur-[50px] w-10 h-10 z-[1001] transition-all hover:bg-white/20 hover:border-white/30 hamburger-menu flex flex-col justify-center items-center gap-1 ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
    </div>
  );
}