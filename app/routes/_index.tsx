import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { useTranslation } from "~/hooks/useTranslation";

export const meta: MetaFunction = () => {
  return [
    { title: "Alejandro Duque - CTO/Tech Leader" },
    { name: "description", content: "Dynamic CTO with +8 years driving innovation. Specializing in Django, Docker, PostgreSQL - delivering scalable solutions serving millions of users." },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Intro Section */}
      <section className="bg-orange-950/5 border-b border-white/10 px-6 md:px-12 pt-14 pb-12 relative">
        <div className="bg-white/5 border border-white/5 rounded-full p-4 inline-block mb-8">
          <div className="size-20 md:size-24 relative">
            <img src="/images/main2.png" alt="Alejandro Duque" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-12">
          <h1 className="font-medium text-2xl md:text-[32px] leading-tight text-white tracking-tight max-w-full md:max-w-[400px]">
            {t('hello_intro')}
          </h1>
          <p className="font-medium text-sm leading-tight text-white/50 max-w-full md:max-w-[296px]">
            {t('intro_description')}
          </p>
        </div>
      </section>

      {/* Link Blocks Grid */}
      <section className="px-6 md:px-12 pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link to="/about" className="block">
            <div className="bg-yellow-400/10 border border-yellow-400/10 rounded-xl min-h-[160px] md:min-h-[200px] p-5 md:p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 text-xs font-medium text-yellow-300 w-fit mb-4">
                {t('about')}
              </div>
              <div className="font-medium text-lg md:text-2xl leading-tight text-yellow-300 max-w-full md:max-w-[200px]">
                {t('creative_journey')}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300"></div>
              <div className="absolute -bottom-6 -right-4 bg-yellow-400/5 border border-yellow-400/5 rounded-full w-12 h-12 md:w-14 md:h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 md:w-60 h-16 bg-yellow-400/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
          
          <Link to="/portfolio" className="block">
            <div className="bg-orange-500/10 border border-orange-500/10 rounded-xl min-h-[160px] md:min-h-[200px] p-5 md:p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-orange-400 w-fit mb-4">
                {t('portfolio')}
              </div>
              <div className="font-medium text-lg md:text-2xl leading-tight text-orange-400 max-w-full md:max-w-[200px]">
                {t('top_work_projects')}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400"></div>
              <div className="absolute -bottom-6 -right-4 bg-orange-500/5 border border-orange-500/5 rounded-full w-12 h-12 md:w-14 md:h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 md:w-60 h-16 bg-orange-500/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
          
          <Link to="/services" className="block">
            <div className="bg-green-500/10 border border-green-500/10 rounded-xl min-h-[160px] md:min-h-[200px] p-5 md:p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-green-500/5 border border-green-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-green-400 w-fit mb-4">
                {t('services')}
              </div>
              <div className="font-medium text-lg md:text-2xl leading-tight text-green-400 max-w-full md:max-w-[200px]">
                {t('solutions_goals')}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
              <div className="absolute -bottom-6 -right-4 bg-green-500/5 border border-green-500/5 rounded-full w-12 h-12 md:w-14 md:h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 md:w-60 h-16 bg-green-500/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
          
          <Link to="/contact" className="block">
            <div className="bg-blue-500/10 border border-blue-500/10 rounded-xl min-h-[160px] md:min-h-[200px] p-5 md:p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-blue-400 w-fit mb-4">
                {t('contact')}
              </div>
              <div className="font-medium text-lg md:text-2xl leading-tight text-blue-400 max-w-full md:max-w-[200px]">
                {t('start_conversation')}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400"></div>
              <div className="absolute -bottom-6 -right-4 bg-blue-500/5 border border-blue-500/5 rounded-full w-12 h-12 md:w-14 md:h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 md:w-60 h-16 bg-blue-500/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}