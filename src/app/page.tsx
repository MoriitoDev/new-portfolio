import About from '@/components/landing/About';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Sidebar */}
        <aside className="lg:w-[350px] lg:sticky lg:top-24 h-fit">
          <Hero />
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-24">
          <Experience />
          <Work />
          <About />
          <Github />
          <CTA />
        </main>
      </div>
    </div>
  );
}