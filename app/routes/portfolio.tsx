import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio - Alejandro Duque - CTO/Developer" },
    { name: "description", content: "Explore a selection of my top digital projects, where creativity meets innovation. Each piece reflects my commitment to delivering impactful solutions." },
  ];
};

export default function Portfolio() {
  const projects = [
    { name: "Rick Brown", type: "Website", image: "/images/project1.jpg" },
    { name: "IT/CONF", type: "Website", image: "/images/project2.jpg" },
    { name: "ADZEN", type: "Website", image: "/images/project3.jpg" },
    { name: "Andrew Williams", type: "Website", image: "/images/project4.jpg" },
    { name: "Squash", type: "Website", image: "/images/project5.jpg" },
    { name: "Cipherly", type: "Website", image: "/images/project6.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 text-white flex items-center justify-center p-5">
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
              
              <div className="px-3.5 py-2.5 rounded-lg bg-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-1">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span className="font-medium text-sm text-orange-400">Portfolio</span>
                </div>
                <div className="bg-white/10 text-white/65 text-xs font-medium px-1.5 py-1 rounded text-center min-w-[16px]">6</div>
              </div>
              
              <a href="/services" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">Services</span>
              </a>
              
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
          <main className="flex-1 flex flex-col overflow-y-auto max-h-full bg-orange-500/3">
            {/* Intro Section */}
            <section className="bg-orange-500/3 border-b border-white/10 px-12 pt-14 pb-12 relative">
              <div className="flex justify-between items-start gap-12">
                <div className="flex-1 max-w-[400px]">
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-orange-400 w-fit mb-4">
                    Portfolio
                  </div>
                  <h1 className="font-medium text-[32px] leading-tight text-white tracking-tight mb-4">
                    Collection of My Exceptional Solutions
                  </h1>
                  <p className="font-medium text-sm leading-tight text-white/50 max-w-[296px]">
                    Explore a selection of my top digital projects, where creativity meets innovation. Each piece reflects my commitment to delivering impactful solutions.
                  </p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="px-12 pt-14 pb-12 bg-orange-500/3">
              <div className="flex flex-col gap-8">
                {/* First Row */}
                <div className="flex gap-3">
                  {projects.slice(0, 3).map((project, index) => (
                    <div key={index} className="flex-1 flex flex-col gap-4 cursor-pointer hover:transform hover:-translate-y-1 transition-transform">
                      <div 
                        className="h-[356px] rounded-xl border border-white/10 bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gray-800"
                        style={{
                          background: `linear-gradient(135deg, ${['#ff6b35', '#2d7dd2', '#8e44ad'][index]} 0%, ${['#f7931e', '#009fe3', '#e74c3c'][index]} 100%)`
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-lg font-medium">{project.name}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center px-3 h-4">
                        <div className="font-medium text-sm text-white whitespace-nowrap">{project.name}</div>
                        <div className="font-medium text-xs text-white/50 whitespace-nowrap">{project.type}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row */}
                <div className="flex gap-3">
                  {projects.slice(3, 6).map((project, index) => (
                    <div key={index + 3} className="flex-1 flex flex-col gap-4 cursor-pointer hover:transform hover:-translate-y-1 transition-transform">
                      <div 
                        className="h-[356px] rounded-xl border border-white/10 bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gray-800"
                        style={{
                          background: `linear-gradient(135deg, ${['#27ae60', '#e67e22', '#3498db'][index]} 0%, ${['#2ecc71', '#f39c12', '#9b59b6'][index]} 100%)`
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-lg font-medium">{project.name}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center px-3 h-4">
                        <div className="font-medium text-sm text-white whitespace-nowrap">{project.name}</div>
                        <div className="font-medium text-xs text-white/50 whitespace-nowrap">{project.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-orange-500/3 border-t border-white/10 px-12 py-6 flex justify-between items-center mt-auto">
              <div className="font-medium text-xs text-white/30">© 2024, All Rights Reserved</div>
              <div className="font-medium text-xs text-white/30">Licenses</div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}