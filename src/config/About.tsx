import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <ReactIcon key="react" />,
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <Supabase key="supabase" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <TailwindCss key="tailwindcss" />,
];

export const about = {
  name: 'Mori',
  image: '/assets/logo.jpg', 
  description: `I craft clean, minimal websites that feel effortless. Focused on intuitive UX and purposeful design — nothing extra, nothing missing.`,
};
