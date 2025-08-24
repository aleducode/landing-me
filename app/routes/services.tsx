import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Services - Alejandro Duque - CTO/Developer" },
    { name: "description", content: "Explore services crafted to bring your vision to life. From innovative solutions to expert support, I offer everything needed for exceptional results." },
  ];
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-400 to-green-600 text-white flex items-center justify-center p-5">
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
          <aside className="bg-black/20 border-r border-white/10 w-[336px] px-8 py-12 flex flex-col relative">
            {/* Profile Section */}
            <div className="mb-10 relative">
              <a href="/" className="block">
                <div className="bg-white/5 border border-white/5 rounded-full p-1.5 w-12 h-12 mb-4 relative">
                  <div className="w-full h-full bg-cover bg-center rounded-full" style={{backgroundImage: "url('/images/main.png')"}}></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <div className="mb-10">
                  <div className="font-medium text-sm text-white mb-1">Alejandro Duque</div>
                  <div className="font-medium text-sm text-white/50">CTO/Developer</div>
                </div>
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 flex flex-col gap-5 mb-10">
              <a href="/about" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">About</span>
              </a>
              
              <a href="/portfolio" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">Portfolio</span>
              </a>
              
              <div className="px-3.5 py-2.5 rounded-lg bg-white/10 flex items-center gap-2.5">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span className="font-medium text-sm text-green-400">Services</span>
              </div>
              
              <a href="/contact" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">Contact</span>
              </a>
            </nav>

            {/* Book Call Button */}
            <div className="relative">
              <a 
                href="https://calendar.notion.so/meet/alejandroduque/kmel84oty" 
                target="_blank" 
                rel="noreferrer" 
                className="block bg-white/10 border border-white/5 rounded-[10px] px-4 py-3 w-full cursor-pointer transition-colors hover:bg-white/15 no-underline"
              >
                <div className="font-medium text-sm text-white/65 text-center">Book a Call</div>
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 flex flex-col overflow-y-auto max-h-full bg-transparent">
            {/* Intro Section */}
            <section className="bg-green-400/3 border-b border-white/10 px-12 pt-14 pb-12 relative">
              <div className="flex justify-between items-center gap-12">
                <div className="flex-1 max-w-[400px]">
                  <div className="bg-green-400/5 border border-green-400/20 rounded-full px-2.5 py-2 text-xs font-medium text-green-400 w-fit mb-4">
                    Services
                  </div>
                  <h1 className="font-medium text-[32px] leading-tight text-white tracking-tight mb-3">
                    Explore My Range of Specialized Services
                  </h1>
                  <p className="font-medium text-sm leading-tight text-white/50 max-w-[360px]">
                    Explore services crafted to bring your vision to life. From innovative solutions to expert support, I offer everything needed for exceptional results.
                  </p>
                </div>
                <div className="flex items-center gap-0 pr-7">
                  <div className="bg-green-400 border border-green-400/10 rounded-full p-8 w-28 h-28 flex items-center justify-center relative z-[3] -mr-7 backdrop-blur-[50px]">
                    <div className="size-14 flex items-center justify-center text-4xl">💻</div>
                  </div>
                  <div className="bg-green-400/35 border border-green-400/10 rounded-full p-8 w-28 h-28 flex items-center justify-center relative z-[2] -mr-7 backdrop-blur-[50px]">
                    <div className="size-14 flex items-center justify-center text-4xl">⚙️</div>
                  </div>
                  <div className="bg-green-400/10 border border-green-400/10 rounded-full p-8 w-28 h-28 flex items-center justify-center relative z-[1] backdrop-blur-[50px]">
                    <div className="size-14 flex items-center justify-center text-4xl">🏌️</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Grid Section */}
            <section className="px-12 py-10 border-b border-white/10">
              <div className="grid grid-cols-2 gap-3">
                {/* Web Development */}
                <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-green-400/20 rounded-full blur-[50px]"></div>
                  <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-5 w-14 h-14 flex items-center justify-center mb-8">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-400">
                      <path d="M14 2L2 8L14 14L26 8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 20L14 26L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 14L14 20L26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-2xl leading-tight text-green-400 mb-2">Web Development</h3>
                  <p className="font-medium text-sm leading-tight text-white/50 mb-8">
                    Custom, high-performance websites that combine modern design with functionality, tailored to meet your specific needs.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Responsive Design", "CMS Integration", "Custom Features", "Performance Boost"].map((tag) => (
                      <div key={tag} className="bg-green-400/5 border border-green-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-green-400 whitespace-nowrap">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                </div>

                {/* Full-Stack Development */}
                <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-green-400/20 rounded-full blur-[50px]"></div>
                  <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-5 w-14 h-14 flex items-center justify-center mb-8">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-400">
                      <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-2xl leading-tight text-green-400 mb-2">Full-Stack Development</h3>
                  <p className="font-medium text-sm leading-tight text-white/50 mb-8">
                    End-to-end development services, covering both front-end and back-end, to create robust and scalable web applications.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Front-End UI", "Back-End Logic", "Database Setup", "API Integration"].map((tag) => (
                      <div key={tag} className="bg-green-400/5 border border-green-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-green-400 whitespace-nowrap">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                </div>

                {/* E-Commerce Solutions */}
                <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-green-400/20 rounded-full blur-[50px]"></div>
                  <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-5 w-14 h-14 flex items-center justify-center mb-8">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-400">
                      <path d="M6 2L3 6V22C3 22.5304 3.21071 23.0391 3.58579 23.4142C3.96086 23.7893 4.46957 24 5 24H21C21.5304 24 22.0391 23.7893 22.4142 23.4142C22.7893 23.0391 23 22.5304 23 22V6L20 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-2xl leading-tight text-green-400 mb-2">E-Commerce Solutions</h3>
                  <p className="font-medium text-sm leading-tight text-white/50 mb-8">
                    Create and optimize E-Commerce platforms that offer a seamless shopping experience, from storefront design to payment integration.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Storefront Design", "Payment Setup", "Inventory Tools", "Checkout Streamlining"].map((tag) => (
                      <div key={tag} className="bg-green-400/5 border border-green-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-green-400 whitespace-nowrap">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                </div>

                {/* Website Optimization */}
                <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-green-400/20 rounded-full blur-[50px]"></div>
                  <div className="bg-green-400/5 border border-green-400/5 rounded-xl p-5 w-14 h-14 flex items-center justify-center mb-8">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-400">
                      <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 13H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-2xl leading-tight text-green-400 mb-2">Website Optimization</h3>
                  <p className="font-medium text-sm leading-tight text-white/50 mb-8">
                    Improve website performance, speed, and SEO to enhance user experience and ensure better visibility on search engines.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Speed Boost", "SEO Improvement", "Mobile Friendly", "Site Security"].map((tag) => (
                      <div key={tag} className="bg-green-400/5 border border-green-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-green-400 whitespace-nowrap">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                </div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="px-12 py-10">
              <div className="flex gap-3 items-start mb-8">
                <div className="flex-1 max-w-80">
                  <h2 className="font-medium text-2xl leading-tight text-white">🧩 Tools & Technologies Powering My Creations</h2>
                </div>
                <div className="flex-1 max-w-[464px]">
                  <p className="font-medium text-sm leading-tight text-white/50">
                    Explore the cutting-edge tools and technologies I use to build innovative and effective digital solutions, from web and mobile apps to seamless integrations and optimizations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {[
                  {
                    name: "HTML",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
<path d="M13.8494 3H16.1397V5.27089H18.2348V3H20.5252V9.87682H18.2349V7.57405H16.1398V9.87682H13.8496L13.8494 3ZM23.537 5.28045H21.5208V3H27.8448V5.28045H25.8276V9.87682H23.5372L23.537 5.28045ZM28.8484 3H31.2365L32.7055 5.41631L34.1732 3H36.5622V9.87682H34.2814V6.46829L32.7056 8.91338H32.6663L31.0894 6.46829V9.87682H28.8485L28.8484 3ZM37.7021 3H39.9931V7.60374H43.2139V9.87682H37.7021V3Z" fill="#2EF171"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 13.0218L13.7761 49.8996L28.4779 53.9955L43.2203 49.8938L46.5 13.0218H10.5ZM22.5363 29.7146L22.1244 25.083H39.3705L39.774 20.5601H17.199L18.4146 34.2374H34.034L33.5109 40.1033L28.4844 41.4648V41.4652L28.4804 41.4663L23.461 40.1062L23.1401 36.499H18.616L19.2474 43.6006L28.4793 46.1726L28.5 46.1668V46.166L37.7236 43.6006L38.8504 30.9291L38.9604 29.7146H22.5363Z" fill="#2EF171"/>
</svg>
                    )
                  },
                  {
                    name: "CSS",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
  <path d="M18.9723 3H24.4309V5.29102H21.255V7.58203H24.4309V9.87305H18.9723V3Z" fill="#2EF171"/>
  <path d="M25.5226 3H30.9811V4.99219H27.8052V5.39063H30.9811V9.97266H25.5226V7.88086H28.6985V7.48242H25.5226V3Z" fill="#2EF171"/>
  <path d="M32.0728 3H37.5314V4.99219H34.3555V5.39063H37.5314V9.97266H32.0728V7.88086H35.2487V7.48242H32.0728V3Z" fill="#2EF171"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2203 49.898L46.5 13.0227H10.5L13.7762 49.9038L28.478 54L43.2203 49.898ZM39.774 20.5616H17.1989L17.6086 25.085H34.8349L34.4248 29.7169L18.0108 29.7169L18.4148 34.2402L34.034 34.2402L33.5108 40.1066L28.4843 41.4686L28.4801 41.4697L23.4608 40.1095L23.1399 36.5019H18.6158L19.2472 43.6041L28.4791 46.1764L28.4998 46.1706V46.1699L37.7236 43.6042L38.8504 30.9316L38.9604 29.7169L39.774 20.5616Z" fill="#2EF171"/>
</svg>
                    )
                  },
                  {
                    name: "JavaScript",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6H50.5V50H6.5V6ZM40.1357 42.886C38.0964 42.886 36.9433 41.8223 36.057 40.3752L32.6969 42.3273C33.9108 44.7256 36.3915 46.5555 40.2314 46.5555C44.1586 46.5555 47.0828 44.5161 47.0828 40.7935C47.0828 37.3406 45.0993 35.8048 41.5863 34.2983L40.5527 33.8555C38.7787 33.0873 38.0105 32.5851 38.0105 31.3447C38.0105 30.3411 38.778 29.5728 39.9891 29.5728C41.1764 29.5728 41.9411 30.0736 42.65 31.3447L45.8697 29.2774C44.5078 26.8819 42.6179 25.9669 39.9891 25.9669C36.2966 25.9669 33.9338 28.3276 33.9338 31.4285C33.9338 34.7949 35.9159 36.3873 38.8995 37.6584L39.9332 38.1019C41.8189 38.9267 42.9434 39.4288 42.9434 40.8466C42.9434 42.0297 41.8489 42.886 40.1357 42.886ZM24.1121 42.8602C22.6915 42.8602 22.1006 41.8859 21.4511 40.7335L18.0854 42.7711C19.0604 44.8346 20.9776 46.5478 24.2881 46.5478C27.9519 46.5478 30.462 44.5992 30.462 40.3179V26.203H26.3274V40.2621C26.3274 42.3287 25.4705 42.8602 24.1121 42.8602Z" fill="#2EF171"/>
                      </svg>
                    )
                  },
                  {
                    name: "Bootstrap",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                      <path d="M28.7359 19.6595H24.0731V26.3315H28.0005C31.036 26.3315 32.7101 25.0931 32.7101 22.8794C32.7101 20.805 31.2707 19.6595 28.7359 19.6595Z" fill="#2EF171"/>
                      <path d="M24.0731 28.9787V36.3319H28.908C32.0687 36.3319 33.7428 35.047 33.7428 32.6321C33.7428 30.2171 32.0217 28.9787 28.7045 28.9787H24.0731Z" fill="#2EF171"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3004 7C10.3333 7 8.13824 9.63324 8.23635 12.4888C8.3306 15.2319 8.20822 18.7852 7.32584 21.6825C6.44083 24.5887 4.94451 26.4257 2.5 26.6618V29.3382C4.94461 29.5743 6.44083 31.4113 7.32584 34.3175C8.20822 37.2148 8.3306 40.7681 8.23645 43.5113C8.13824 46.3668 10.3333 49 13.3004 49H43.7034C46.6704 49 48.8655 46.3668 48.7674 43.5113C48.6732 40.7681 48.7955 37.2148 49.6778 34.3175C50.5629 31.4113 52.0555 29.5743 54.5 29.3382V26.6618C52.0555 26.4257 50.5629 24.5887 49.6778 21.6825C48.7955 18.7852 48.6732 15.2319 48.7674 12.4888C48.8655 9.63324 46.6704 7 43.7034 7H13.3004ZM37.326 32.8488C37.326 36.7808 34.4313 39.1648 29.6277 39.1648H20.5681V16.8265H29.5808C33.5864 16.8265 36.2151 19.0248 36.2151 22.3995C36.2151 24.768 34.447 26.8888 32.1938 27.2603V27.3842C35.2606 27.7248 37.326 29.8766 37.326 32.8488Z" fill="#2EF171"/>
                    </svg>)
                  },
                  {
                    name: "Python",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                      <path d="M28.2381 6.00037C26.4238 6.0089 24.6912 6.16542 23.1666 6.4383C18.6755 7.24089 17.8601 8.92079 17.8601 12.0188V16.1104H28.4731V17.4742H13.8772C10.7927 17.4742 8.09191 19.3495 7.24713 22.9171C6.27268 27.0063 6.22946 29.558 7.24713 33.8279C8.00154 37.0061 9.80318 39.2707 12.8876 39.2707H16.5366V34.3659C16.5366 30.8224 19.5675 27.6968 23.1666 27.6968H33.7673C36.7181 27.6968 39.0738 25.2391 39.0738 22.2414V12.0188C39.0738 9.1094 36.6474 6.92387 33.7673 6.4383C31.9441 6.13131 30.0524 5.99184 28.2381 6.00037ZM22.4987 9.29112C23.5949 9.29112 24.4902 10.2115 24.4902 11.3431C24.4902 12.4708 23.5949 13.3827 22.4987 13.3827C21.3985 13.3827 20.5072 12.4708 20.5072 11.3431C20.5072 10.2115 21.3985 9.29112 22.4987 9.29112Z" fill="#2EF171"/>
                      <path d="M40.3971 17.4742V22.2414C40.3971 25.9373 37.2994 29.0481 33.767 29.0481H23.1664C20.2627 29.0481 17.8599 31.562 17.8599 34.5035V44.7261C17.8599 47.6355 20.3609 49.3468 23.1664 50.1815C26.5259 51.1807 29.7475 51.3613 33.767 50.1815C36.4389 49.3989 39.0735 47.8241 39.0735 44.7261V40.6345H28.4729V39.2707H44.3801C47.4645 39.2707 48.6139 37.0944 49.6866 33.8278C50.7946 30.4649 50.7474 27.231 49.6866 22.917C48.9243 19.811 47.4684 17.4742 44.3801 17.4742H40.3971ZM34.435 43.3622C35.5352 43.3622 36.4265 44.2741 36.4265 45.4017C36.4265 46.5334 35.5352 47.4538 34.435 47.4538C33.3387 47.4538 32.4435 46.5334 32.4435 45.4017C32.4435 44.2741 33.3387 43.3622 34.435 43.3622Z" fill="#2EF171"/>
                    </svg>
                    )
                  },
                  {
                    name: "Database",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="36" viewBox="0 0 52 36" fill="none">
                        <path d="M51.0144 13.6143C50.8732 13.5 49.5948 12.5445 46.8511 12.5445C46.1413 12.5445 45.4066 12.6139 44.6968 12.7323C44.1779 9.17151 41.1727 7.44828 41.0524 7.35844L40.3177 6.93784L39.8445 7.61161C39.2551 8.51815 38.8026 9.5431 38.5453 10.5885C38.0472 12.6139 38.3543 14.5209 39.3962 16.1502C38.1426 16.8485 36.1087 17.0118 35.6812 17.0363H2.08852C1.21269 17.0363 0.502899 17.7346 0.502899 18.5962C0.45724 21.4832 0.951189 24.3661 1.96814 27.0898C3.12622 30.0667 4.85297 32.2799 7.07781 33.6275C9.58492 35.1384 13.6776 36 18.2892 36C20.3688 36 22.4525 35.8122 24.5113 35.4406C27.3754 34.9301 30.1191 33.9501 32.6469 32.5331C34.7306 31.3448 36.5985 29.8339 38.1841 28.0658C40.8573 25.1093 42.4429 21.8058 43.601 18.8739C43.767 18.8739 43.9081 18.8739 44.0742 18.8739C46.9839 18.8739 48.7812 17.7346 49.7733 16.7545C50.4374 16.1502 50.9313 15.4029 51.2883 14.5658L51.5 13.9614L51.0144 13.6143ZM30.2228 16.0808H34.7182C34.9299 16.0808 35.1208 15.9174 35.1208 15.6847V11.7278C35.1208 11.5195 34.9548 11.3317 34.7182 11.3317H30.2228C30.0112 11.3317 29.8202 11.495 29.8202 11.7278V15.6847C29.8451 15.9174 30.0112 16.0808 30.2228 16.0808ZM23.9551 4.74909H28.4504C28.6621 4.74909 28.8531 4.58575 28.8531 4.35299V0.396098C28.8531 0.18784 28.6621 0 28.4504 0H23.9551C23.7434 0 23.5525 0.163339 23.5525 0.396098V4.35299C23.5525 4.56125 23.7392 4.74909 23.9551 4.74909ZM23.9551 10.4251H28.4504C28.6621 10.4251 28.8531 10.2373 28.8531 10.029V6.07214C28.8531 5.86388 28.6621 5.67604 28.4504 5.67604H23.9551C23.7434 5.67604 23.5525 5.83938 23.5525 6.07214V10.029C23.5525 10.2414 23.7392 10.4251 23.9551 10.4251ZM17.733 10.4251H22.2283C22.44 10.4251 22.631 10.2373 22.631 10.029V6.07214C22.631 5.86388 22.4649 5.67604 22.2283 5.67604H17.733C17.5213 5.67604 17.3304 5.83938 17.3304 6.07214V10.029C17.3304 10.2414 17.4964 10.4251 17.733 10.4251ZM11.4154 10.4251H15.9108C16.1225 10.4251 16.3134 10.2373 16.3134 10.029V6.07214C16.3134 5.86388 16.1474 5.67604 15.9108 5.67604H11.4154C11.2037 5.67604 11.0128 5.83938 11.0128 6.07214V10.029C11.0377 10.2414 11.2037 10.4251 11.4154 10.4251ZM23.9551 16.0808H28.4504C28.6621 16.0808 28.8531 15.9174 28.8531 15.6847V11.7278C28.8531 11.5195 28.687 11.3317 28.4504 11.3317H23.9551C23.7434 11.3317 23.5525 11.495 23.5525 11.7278V15.6847C23.5525 15.9174 23.7392 16.0808 23.9551 16.0808ZM17.733 16.0808H22.2283C22.44 16.0808 22.631 15.9174 22.631 15.6847V11.7278C22.631 11.5195 22.4649 11.3317 22.2283 11.3317H17.733C17.5213 11.3317 17.3304 11.495 17.3304 11.7278V15.6847C17.3304 15.9174 17.4964 16.0808 17.733 16.0808ZM11.4154 16.0808H15.9108C16.1225 16.0808 16.3134 15.9174 16.3134 15.6847V11.7278C16.3134 11.5195 16.1474 11.3317 15.9108 11.3317H11.4154C11.2037 11.3317 11.0128 11.495 11.0128 11.7278V15.6847C11.0377 15.9174 11.2037 16.0808 11.4154 16.0808ZM5.21824 16.0808H9.71359C9.92528 16.0808 10.1162 15.9174 10.1162 15.6847V11.7278C10.1162 11.5195 9.95019 11.3317 9.71359 11.3317H5.21824C5.00655 11.3317 4.81561 11.495 4.81561 11.7278V15.6847C4.84052 15.9174 5.00655 16.0808 5.21824 16.0808Z" fill="#2EF171" />
                      </svg>
                    )
                  },
                  {
                    name: "API",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.5182 6C16.3427 6 6.5 16.0833 6.5 28.5577C6.5 38.5292 12.8066 46.9698 21.5554 49.9572C22.6493 50.1818 23.0499 49.4718 23.0499 48.8746C23.0499 48.3517 23.0139 46.5591 23.0139 44.6914C16.8889 46.0362 15.6135 42.0024 15.6135 42.0024C14.6292 39.3881 13.1707 38.7162 13.1707 38.7162C11.166 37.3343 13.3167 37.3343 13.3167 37.3343C15.5405 37.4837 16.7073 39.6498 16.7073 39.6498C18.6755 43.0854 21.847 42.1147 23.1229 41.517C23.305 40.0604 23.8887 39.0521 24.5084 38.492C19.6233 37.9691 14.4836 36.0271 14.4836 27.3624C14.4836 24.8975 15.3579 22.8808 16.7434 21.3124C16.5248 20.7523 15.7591 18.4364 16.9624 15.3367C16.9624 15.3367 18.8215 14.739 23.0134 17.6522C24.8081 17.1584 26.659 16.9072 28.5182 16.9051C30.3773 16.9051 32.2725 17.1668 34.0225 17.6522C38.2149 14.739 40.074 15.3367 40.074 15.3367C41.2774 18.4364 40.5112 20.7523 40.2926 21.3124C41.7145 22.8808 42.5528 24.8975 42.5528 27.3624C42.5528 36.0271 37.4131 37.9315 32.4915 38.492C33.2938 39.2015 33.986 40.5458 33.986 42.6748C33.986 45.6998 33.95 48.1275 33.95 48.8742C33.95 49.4718 34.3511 50.1818 35.4445 49.9576C44.1933 46.9693 50.4999 38.5292 50.4999 28.5577C50.536 16.0833 40.6572 6 28.5182 6Z" fill="#2EF171" />
                      </svg>
                    )
                  }
                ].map((tech) => (
                  <div key={tech.name} className="bg-green-400/5 border border-green-400/5 rounded-xl p-12 flex items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <div className="text-green-400">{tech.icon}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/20 border-t border-white/10 px-12 py-6 flex justify-between items-center mt-auto">
              <div className="font-medium text-xs text-white/30">© 2024, All Rights Reserved</div>
              <div className="font-medium text-xs text-white/30">Licenses</div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}