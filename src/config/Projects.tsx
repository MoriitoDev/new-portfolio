import Appwrite from '@/components/technologies/Appwrite';
import Astro from '@/components/technologies/Astro';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Zen nodes',
    description:
      'Minecraft server hosting service, simple and reliable.',
    image: '/project/zennodes.png',
    link: 'https://frontdev-tools.pages.dev/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react"/>},
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Supabase', icon: <Supabase key="supabase"/>},
    ],
    github: 'https://github.com/MoriitoDev/front-tools',
    live: 'https://frontdev-tools.pages.dev/',
    details: true,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Front tools',
    description:
      'A curated collection of tools to help front end developers',
    image: '/project/front-tools.png',
    link: 'https://frontdev-tools.pages.dev/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Astro', icon: <Astro key="astro" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },

    ],
    github: 'https://github.com/MoriitoDev/front-tools',
    live: 'https://frontdev-tools.pages.dev/',
    details: true,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'C2 Theme',
    description:
      'Custom theme made for pelican panel, based on C.C. from Code geass.',
    image: '/project/c2-theme.png',
    link: '#',
    technologies: [
      { name: 'CSS', icon: <CSS key="tailwindcss" /> },

    ],
    github: 'https://github.com/MoriitoDev/c2-theme',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
];
