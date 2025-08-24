import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Alejandro Duque - CTO/Developer" },
    { name: "description", content: "As a CTO/Developer, I blend code and design to build unique, user-centric experiences. Let's turn your ideas into a dynamic and engaging digital reality!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      {/* Intro Section */}
      <section className="bg-orange-950/5 border-b border-white/10 px-12 pt-14 pb-12 relative">
        <div className="bg-white/5 border border-white/5 rounded-full p-4 inline-block mb-8">
          <div className="size-24 relative">
            <img src="/images/main2.png" alt="Alejandro Duque" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-12">
          <h1 className="font-medium text-[32px] leading-tight text-white tracking-tight max-w-[400px]">
            👋 Hello, I&apos;m Alejandro – Crafting Creative Code!
          </h1>
          <p className="font-medium text-sm leading-tight text-white/50 max-w-[296px]">
            As a CTO/Developer, I blend code and design to build unique, user-centric experiences. Let&apos;s turn your ideas into a dynamic and engaging digital reality!
          </p>
        </div>
      </section>

      {/* Link Blocks Grid */}
      <section className="px-12 pt-10 pb-12">
        <div className="grid grid-cols-2 gap-3">
          <Link to="/about" className="block">
            <div className="bg-yellow-400/10 border border-yellow-400/10 rounded-xl min-h-[200px] p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-full px-2.5 py-2 text-xs font-medium text-yellow-300 w-fit mb-4">
                About
              </div>
              <div className="font-medium text-2xl leading-tight text-yellow-300 max-w-[200px]">
                A Peek into My Creative Journey
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300"></div>
              <div className="absolute -bottom-6 -right-4 bg-yellow-400/5 border border-yellow-400/5 rounded-full w-14 h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-yellow-400/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
          
          <Link to="/portfolio" className="block">
            <div className="bg-orange-500/10 border border-orange-500/10 rounded-xl min-h-[200px] p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-orange-400 w-fit mb-4">
                Portfolio
              </div>
              <div className="font-medium text-2xl leading-tight text-orange-400 max-w-[200px]">
                Top Work and Creative Projects
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400"></div>
              <div className="absolute -bottom-6 -right-4 bg-orange-500/5 border border-orange-500/5 rounded-full w-14 h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-orange-500/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
          
          <Link to="/services" className="block">
            <div className="bg-green-500/10 border border-green-500/10 rounded-xl min-h-[200px] p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-green-500/5 border border-green-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-green-400 w-fit mb-4">
                Services
              </div>
              <div className="font-medium text-2xl leading-tight text-green-400 max-w-[200px]">
                Solutions to Meet Your Goals
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
              <div className="absolute -bottom-6 -right-4 bg-green-500/5 border border-green-500/5 rounded-full w-14 h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-green-500/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
          
          <Link to="/contact" className="block">
            <div className="bg-blue-500/10 border border-blue-500/10 rounded-xl min-h-[200px] p-6 pb-8 relative hover:transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-full px-2.5 py-2 text-xs font-medium text-blue-400 w-fit mb-4">
                Contact
              </div>
              <div className="font-medium text-2xl leading-tight text-blue-400 max-w-[200px]">
                Let&apos;s Start a Conversation
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400"></div>
              <div className="absolute -bottom-6 -right-4 bg-blue-500/5 border border-blue-500/5 rounded-full w-14 h-14"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-blue-500/20 rounded-full blur-[50px]"></div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}