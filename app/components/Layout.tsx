import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useTranslation, LanguageSwitcher } from "~/hooks/useTranslation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
    <div className="min-h-screen text-white flex items-center justify-center p-5">
      <div className="bg-black/85 rounded-[18px] border border-white/15 w-full max-w-[1400px] h-[900px] relative overflow-hidden">
        {/* Header */}
        <header className="bg-black/20 border-b border-white/10 rounded-t-4 px-5 py-[18px] flex items-center justify-between relative">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-sm text-white/30 whitespace-nowrap">
            {t('alejandro_duque')}
          </div>
        </header>

        {/* Main Content */}
        <div className="flex h-[calc(100%-73px)]">
          {/* Side Menu */}
          <aside className={`bg-black/20 border-r border-white/10 w-[336px] px-8 py-12 flex flex-col relative side-menu
            md:flex md:relative md:w-[336px] md:translate-x-0
            ${isMobileMenuOpen ? 
              'fixed top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-xl z-[1000] translate-x-0 pt-20 flex flex-col' : 
              'hidden md:flex'
            }`}>
            
            {/* Close Button - Only visible on mobile when menu is open */}
            {isMobileMenuOpen && (
              <button
                onClick={toggleMobileMenu}
                className="absolute top-6 right-6 bg-white/10 border border-white/20 rounded-xl p-2.5 hover:bg-white/20 transition-colors md:hidden"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            {/* Profile Section */}
            <div className="mb-8 md:mb-10 relative">
              <Link to="/" className="block">
                <div className="bg-white/5 border border-white/5 rounded-full p-1.5 w-12 h-12 mb-4 relative">
                  <div className="w-full h-full bg-cover bg-center rounded-full" style={{backgroundImage: "url('/images/main.png')"}}></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <div className="mb-8 md:mb-10">
                  <div className="font-medium text-sm text-white mb-1">{t('alejandro_duque')}</div>
                  <div className="font-medium text-sm text-white/50">{t('cto_developer')}</div>
                </div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 flex flex-col gap-4 md:gap-5 mb-6 md:mb-10">
              <Link to="/about" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/about') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/about') && <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/about') ? 'text-yellow-300' : 'text-white'}`}>
                    {t('about')}
                  </span>
                </div>
              </Link>
              
              <Link to="/portfolio" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/portfolio') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/portfolio') && <div className="w-1 h-1 bg-orange-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/portfolio') ? 'text-orange-300' : 'text-white'}`}>
                    {t('portfolio')}
                  </span>
                </div>
              </Link>
              
              <Link to="/services" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/services') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/services') && <div className="w-1 h-1 bg-green-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/services') ? 'text-green-300' : 'text-white'}`}>
                    {t('services')}
                  </span>
                </div>
              </Link>
              
              <Link to="/contact" className={`px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5 ${
                isActive('/contact') ? 'bg-white/10' : ''
              }`}>
                <div className="flex items-center gap-2.5">
                  {isActive('/contact') && <div className="w-1 h-1 bg-blue-300 rounded-full"></div>}
                  <span className={`font-medium text-sm ${isActive('/contact') ? 'text-blue-300' : 'text-white'}`}>
                    {t('contact')}
                  </span>
                </div>
              </Link>
            </nav>

            {/* Book Call Button */}
            <div className="relative mt-auto pb-6 md:pb-0">
              <a 
                href="https://calendar.notion.so/meet/alejandroduque/kmel84oty" 
                target="_blank" 
                rel="noreferrer" 
                className="block bg-white/10 border border-white/5 rounded-[10px] px-4 py-3 w-full cursor-pointer transition-colors hover:bg-white/15 text-decoration-none"
              >
                <div className="font-medium text-sm text-white/65 text-center">{t('book_a_call')}</div>
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 flex flex-col overflow-y-auto max-h-full bg-transparent relative">
            {/* Hamburger Menu Button - Positioned at top right of content area */}
            <button
              className={`absolute top-6 right-6 md:right-12 bg-white/5 border border-white/10 rounded-xl p-2.5 cursor-pointer backdrop-blur-[50px] w-10 h-10 z-[1001] transition-all hover:bg-white/10 hover:border-white/20 hamburger-menu flex flex-col justify-center items-center gap-1 md:hidden ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {children}
            
            {/* Footer */}
            <footer className="bg-black/20 border-t border-white/10 px-12 py-6 flex justify-between items-center mt-auto">
              <div className="font-medium text-xs text-white/30">{t('all_rights_reserved')}</div>
              <div className="font-medium text-xs text-white/30">{t('licenses')}</div>
            </footer>
          </main>
        </div>

        {/* Remove the old mobile hamburger menu button */}
      </div>
    </div>
  );
}