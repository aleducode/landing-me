import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Alejandro Duque - CTO/Developer" },
    { name: "description", content: "Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape my creative vision." },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-white flex items-center justify-center p-5">
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
              <div className="px-3.5 py-2.5 rounded-lg bg-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-1">
                  <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                  <span className="font-medium text-sm text-yellow-300">About</span>
                </div>
              </div>
              
              <a href="/portfolio" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">Portfolio</span>
              </a>
              
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
          <main className="flex-1 flex flex-col overflow-y-auto max-h-full bg-transparent">
            {/* Intro Section */}
            <section className="bg-yellow-400/3 border-b border-white/10 px-12 pt-14 pb-12 relative">
              <div className="flex justify-between items-center gap-12">
                <div className="flex-1 max-w-[400px]">
                  <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 text-xs font-medium text-yellow-300 w-fit mb-3">
                    About
                  </div>
                  <h1 className="font-medium text-[32px] leading-tight text-white tracking-tight mb-3">
                    Inside My World – The Story Behind Work
                  </h1>
                  <p className="font-medium text-sm leading-tight text-white/50 max-w-[360px]">
                    Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape my creative vision.
                  </p>
                </div>
                <div className="flex items-center justify-start relative">
                  {/* Memoji 2 - Front (z-3) */}
                  <div className="bg-yellow-400 border border-yellow-400/10 rounded-full p-4 flex items-center justify-start relative z-[3] mr-[-28px] backdrop-blur-[50px]">
                    <div className="relative shrink-0 size-24">
                      <img src="/images/main2.png" alt="Memoji 2" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  
                  {/* Memoji 1 - Middle (z-2) */}
                  <div className="bg-yellow-400/35 border border-yellow-400/10 rounded-full p-4 flex items-center justify-start relative z-[2] mr-[-28px] backdrop-blur-[50px]">
                    <div className="relative shrink-0 size-24">
                      <img src="/images/main.png" alt="Memoji 1" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  
                  {/* Memoji 3 - Back (z-1) */}
                  <div className="bg-yellow-400/10 border border-yellow-400/10 rounded-full p-4 flex items-center justify-start relative z-[1] mr-[-28px] backdrop-blur-[50px]">
                    <div className="relative shrink-0 size-24">
                      <img src="/images/main2.png" alt="Memoji 3" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Content Section */}
            <section className="px-12 py-10 border-b border-white/10 relative">
              <div className="flex gap-12 items-start">
                <div className="flex-1 max-w-[240px]">
                  <h2 className="font-medium text-2xl leading-tight text-white">✨ The Drive, Passion, and Vision Behind My Work</h2>
                </div>
                <div className="flex-1 max-w-[464px]">
                  <div className="font-medium text-sm leading-tight text-white/50">
                    <p className="mb-4">I&apos;m Alejandro Duque, a CTO/Developer passionate about turning ideas into engaging digital experiences. Starting in New Jersey, my love for tech and design grew from building simple sites to developing complex applications.</p>
                    <p>I blend technical skill with design to create seamless, user-friendly solutions, always pushing boundaries to exceed expectations.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="px-12 py-10 border-b border-white/10 relative">
              <div className="flex gap-12 items-start">
                <div className="flex-1 max-w-[240px]">
                  <h2 className="font-medium text-2xl leading-tight text-white">🔆 Unleashing My Skillful Superpowers</h2>
                </div>
                <div className="flex-1 max-w-[464px]">
                  <div className="flex flex-wrap gap-1.5 max-w-[440px]">
                    {[
                      "Front-End Development",
                      "UI/UX Design", 
                      "Animation & Interactivity",
                      "Prototyping",
                      "Responsive Design",
                      "Mobile Development",
                      "User Research",
                      "Creative Coding",
                      "Data Visualization"
                    ].map((skill) => (
                      <div key={skill} className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 whitespace-nowrap">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Awards Section */}
            <section className="px-12 py-10">
              <div className="flex gap-12 items-start">
                <div className="flex-1 max-w-[240px]">
                  <h2 className="font-medium text-2xl leading-tight text-white">🏆 Showcasing My Awards and Honors</h2>
                </div>
                <div className="flex-1 max-w-[464px]">
                  <div className="flex flex-col gap-2">
                    <div className="bg-yellow-400/5 rounded-xl p-3 px-5 flex gap-3 items-center justify-between">
                      <div className="flex gap-3 items-center flex-1">
                        <div className="font-medium text-sm text-yellow-300 flex-1">🏆 Innovative Web Developer</div>
                        <div className="font-medium text-sm text-yellow-400/35 text-right w-10">2024</div>
                      </div>
                      <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 min-w-[32px] text-center">
                        #2
                      </div>
                    </div>
                    
                    <div className="bg-yellow-400/5 rounded-xl p-3 px-5 flex gap-3 items-center justify-between">
                      <div className="flex gap-3 items-center flex-1">
                        <div className="font-medium text-sm text-yellow-300 flex-1">🏅 Top Emerging Tech Talent</div>
                        <div className="font-medium text-sm text-yellow-400/35 text-right w-10">2024</div>
                      </div>
                      <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 min-w-[32px] text-center">
                        About
                      </div>
                    </div>
                    
                    <div className="bg-yellow-400/5 rounded-xl p-3 px-5 flex gap-3 items-center justify-between">
                      <div className="flex gap-3 items-center flex-1">
                        <div className="font-medium text-sm text-yellow-300 flex-1">🥇 Best App Developer</div>
                        <div className="font-medium text-sm text-yellow-400/35 text-right w-10">2024</div>
                      </div>
                      <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 min-w-[32px] text-center">
                        #1
                      </div>
                    </div>
                  </div>
                </div>
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