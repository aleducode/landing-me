import type { MetaFunction } from "@remix-run/cloudflare";
import Layout from "~/components/Layout";
import { useTranslation } from "~/hooks/useTranslation";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Alejandro Duque - CTO/Developer" },
    { name: "description", content: "Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape my creative vision." },
  ];
};

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-yellow">
      <Layout>
        {/* Intro Section */}
        <section className="bg-yellow-400/3 border-b border-white/10 px-6 md:px-12 pt-14 pb-12 relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-12">
            <div className="flex-1 max-w-full md:max-w-[400px]">
              <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 text-xs font-medium text-yellow-300 w-fit mb-3">
                {t('about')}
              </div>
              <h1 className="font-medium text-2xl md:text-[32px] leading-tight text-white tracking-tight mb-3">
                {t('about_title')}
              </h1>
              <p className="font-medium text-sm leading-tight text-white/50 max-w-full md:max-w-[360px]">
                {t('about_description')}
              </p>
            </div>
            <div className="flex items-center justify-start relative">
              {/* Memoji 2 - Front (z-3) */}
              <div className="bg-yellow-400 border border-yellow-400/10 rounded-full p-3 md:p-4 flex items-center justify-start relative z-[3] mr-[-20px] md:mr-[-28px] backdrop-blur-[50px]">
                <div className="relative shrink-0 size-20 md:size-24">
                  <img src="/images/main2.png" alt="Memoji 2" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              
              {/* Memoji 1 - Middle (z-2) */}
              <div className="bg-yellow-400/35 border border-yellow-400/10 rounded-full p-3 md:p-4 flex items-center justify-start relative z-[2] mr-[-20px] md:mr-[-28px] backdrop-blur-[50px]">
                <div className="relative shrink-0 size-20 md:size-24">
                  <img src="/images/main.png" alt="Memoji 1" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              
              {/* Memoji 3 - Back (z-1) */}
              <div className="bg-yellow-400/10 border border-yellow-400/10 rounded-full p-3 md:p-4 flex items-center justify-start relative z-[1] mr-[-20px] md:mr-[-28px] backdrop-blur-[50px]">
                <div className="relative shrink-0 size-20 md:size-24">
                  <img src="/images/main2.png" alt="Memoji 3" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="px-6 md:px-12 py-8 md:py-10 border-b border-white/10 relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="flex-1 max-w-full md:max-w-[240px]">
              <h2 className="font-medium text-xl md:text-2xl leading-tight text-white">{t('about_content_title')}</h2>
            </div>
            <div className="flex-1 max-w-full md:max-w-[464px]">
              <div className="font-medium text-sm leading-tight text-white/50">
                <p className="mb-4">{t('about_content_text_1')}</p>
                <p>{t('about_content_text_2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-6 md:px-12 py-8 md:py-10 border-b border-white/10 relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="flex-1 max-w-full md:max-w-[240px]">
              <h2 className="font-medium text-xl md:text-2xl leading-tight text-white">{t('about_skills_title')}</h2>
            </div>
            <div className="flex-1 max-w-full md:max-w-[464px]">
              <div className="flex flex-wrap gap-1.5 max-w-full md:max-w-[440px]">
                {[
                  "Django & Django REST Framework",
                  "Python & Backend Development", 
                  "Docker & Containerization",
                  "AWS Cloud Architecture",
                  "PostgreSQL & Database Design",
                  "Data Engineering & Analytics",
                  "Blockchain & Ethereum",
                  "Microservices Architecture",
                  "Universidad EIA Engineering",
                  "Team Leadership & CTO Experience"
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
        <section className="px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-col md:gap-12 items-start">
            <div className="flex-1 max-w-full md:max-w-[240px]">
              <h2 className="font-medium text-xl md:text-2xl leading-tight text-white">{t('about_awards_title')}</h2>
            </div>
            <div className="flex-1 max-w-full md:max-w-[464px]">
              <div className="flex flex-col gap-2">
                <div className="bg-yellow-400/5 rounded-xl p-3 md:p-3 px-4 md:px-5 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                  <div className="flex flex-col md:flex-row gap-3 items-start md:items-center flex-1">
                    <div className="font-medium text-sm text-yellow-300 flex-1">{t('innovative_web_developer')}</div>
                    <div className="font-medium text-sm text-yellow-400/35 text-left md:text-right w-10">2024</div>
                  </div>
                  <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 min-w-[32px] text-center">
                    #2
                  </div>
                </div>
                
                <div className="bg-yellow-400/5 rounded-xl p-3 md:p-3 px-4 md:px-5 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                  <div className="flex flex-col md:flex-row gap-3 items-start md:items-center flex-1">
                    <div className="font-medium text-sm text-yellow-300 flex-1">{t('top_emerging_tech_talent')}</div>
                    <div className="font-medium text-sm text-yellow-400/35 text-left md:text-right w-10">2024</div>
                  </div>
                  <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 min-w-[32px] text-center">
                    {t('about')}
                  </div>
                </div>
                
                <div className="bg-yellow-400/5 rounded-xl p-3 md:p-3 px-4 md:px-5 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                  <div className="flex flex-col md:flex-row gap-3 items-start md:items-center flex-1">
                    <div className="font-medium text-sm text-yellow-300 flex-1">{t('best_app_developer')}</div>
                    <div className="font-medium text-sm text-yellow-400/35 text-left md:text-right w-10">2024</div>
                  </div>
                  <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 font-medium text-xs text-yellow-300 min-w-[32px] text-center">
                    #1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}