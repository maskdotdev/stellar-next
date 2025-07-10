"use client";

import PageHeader from "@/components/page-header";

export default function HeroSection() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Go beyond simple notes. Understand more, forget less."
            description="Unlock your full learning potential with an intelligent learning environment that transforms static documents into dynamic, interactive knowledge."
          >
            ⭐ Your AI-Powered Study Companion
          </PageHeader>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                className="btn text-lg text-gray-100 bg-gray-900/80 hover:bg-gray-800/80 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white/80"
                onClick={() => {
                  document.getElementById('download-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Start Learning Faster
              </button>
              <button className="btn text-teal-600 bg-transparent border-teal-600 hover:bg-teal-50 text-lg px-8 py-3">
                Watch Demo
              </button>
            </div>

            {/* Demo Image Placeholder */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-2xl border border-teal-300/30 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/hYfBvOY3Ups?autoplay=1&mute=1"
                      title="Stellar Simple Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
