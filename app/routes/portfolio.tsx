import type { MetaFunction } from "@remix-run/cloudflare";
import Layout from "~/components/Layout";
import { useTranslation } from "~/hooks/useTranslation";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio - Alejandro Duque - CTO/Developer" },
    { name: "description", content: "Explore a selection of my top digital projects, where creativity meets innovation. Each piece reflects my commitment to delivering impactful solutions." },
  ];
};

export default function Portfolio() {
  const { t } = useTranslation();
  const projects = [
    { name: "Hacku", type: "CTO • Top 100 LATAM Startup", image: "/images/project1.jpg" },
    { name: "Medicato", type: "VP Engineering • 30K Users", image: "/images/project2.jpg" },
    { name: "Argentina Gov", type: "Full Stack • 2M Users", image: "/images/project3.jpg" },
    { name: "Universidad EIA", type: "Engineering Graduate • 2011-2018", image: "/images/project4.jpg" },
    { name: "AWS & Blockchain", type: "Platzi Certified • Expert", image: "/images/project5.jpg" },
    { name: "Data Engineering", type: "Stanford + Platzi • Analytics", image: "/images/project6.jpg" }
  ];

  return (
    <div className="min-h-screen bg-orange">
      <Layout>
        {/* Intro Section */}
        <section className="bg-orange-500/3 border-b border-white/10 px-6 md:px-12 pt-14 pb-12 relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-12">
            <div className="flex-1 max-w-full md:max-w-[400px]">
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-orange-400 w-fit mb-4">
                {t('portfolio')}
              </div>
              <h1 className="font-medium text-2xl md:text-[32px] leading-tight text-white tracking-tight mb-4">
                {t('portfolio_title')}
              </h1>
              <p className="font-medium text-sm leading-tight text-white/50 max-w-full md:max-w-[296px]">
                {t('portfolio_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="px-6 md:px-12 pt-8 md:pt-14 pb-12 bg-orange-500/3">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Mobile: Single column layout */}
            <div className="flex flex-col gap-6 md:hidden">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-4 cursor-pointer hover:transform hover:-translate-y-1 transition-transform">
                  <div 
                    className="h-[327px] rounded-lg border border-white/10 bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gray-800"
                    style={{
                      background: `linear-gradient(135deg, ${['#ff6b35', '#2d7dd2', '#8e44ad', '#27ae60', '#e67e22', '#3498db'][index]} 0%, ${['#f7931e', '#009fe3', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'][index]} 100%)`
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-lg font-medium">{project.name}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 px-2">
                    <div className="font-medium text-sm text-white">{project.name}</div>
                    <div className="font-medium text-xs text-white/50">{project.type}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:flex flex-col gap-8">
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
          </div>
        </section>
      </Layout>
    </div>
  );
}