import { heroConfig } from '@/config/Hero';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="flex items-center gap-2 p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
          <Image
            className="size-6 rounded-full border border-gray-200 bg-blue-300 dark:bg-yellow-300"
            src={heroConfig.avatar}
            alt={heroConfig.name}
            width={24}
            height={24}
          />
          <span className="font-bold text-sm hidden sm:block">{heroConfig.name}</span>
        </Link>
        
        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-1" />
        
        <nav className="flex items-center gap-1">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-1" />

        <div className="flex items-center pr-1">
          <ThemeToggleButton variant="circle" />
        </div>
      </div>
    </div>
  );
}
