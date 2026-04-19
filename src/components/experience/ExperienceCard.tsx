'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Skill from '../common/Skill';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-4 border-b border-neutral-100 dark:border-neutral-900 pb-8 last:border-0 last:pb-0">
      {/* Main Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between group">
        {/* Left Side: Logo & Info */}
        <div className="flex items-start gap-4 flex-1">
          {/* Logo Box */}
          <div className="size-12 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={experience.image}
              alt={experience.company}
              width={48}
              height={48}
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  'text-lg font-bold tracking-tight',
                  experience.isBlur ? 'blur-[5px]' : 'blur-none',
                )}
              >
                {experience.company}
              </h3>
              
              {/* Globe Icon */}
              {experience.website && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-neutral-400 hover:text-primary transition-colors"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">Visit Website</TooltipContent>
                </Tooltip>
              )}

              {/* Chevron Icon (Expand) */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "size-7 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 transition-all duration-300",
                  isExpanded && "rotate-180"
                )}
              >
                <ChevronDown className="size-3.5" />
              </Button>

              {experience.isCurrent && (
                <div className="flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                  <div className="size-1.5 animate-pulse rounded-full bg-green-500"></div>
                  Working
                </div>
              )}
            </div>
            
            <p className="text-neutral-500 dark:text-neutral-400 font-medium">
              {experience.position}
            </p>
          </div>
        </div>

        {/* Right Side: Date & Location */}
        <div className="flex flex-col md:items-end text-sm text-neutral-500 dark:text-neutral-400 font-medium pt-1">
          <p>
            {experience.startDate} —{' '}
            {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-2 flex flex-col gap-6 pl-16">
              {/* Technologies */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <Skill 
                      key={i}
                      name={tech.name}
                      href={tech.href}
                    >
                      {tech.icon}
                    </Skill>
                  ))}
                </div>
              </div>

              {/* Description Points */}
              <ul className="flex flex-col gap-3 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                {experience.description.map((point, i) => (
                  <li 
                    key={i}
                    className="flex gap-3"
                  >
                    <span className="mt-2 size-1 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span dangerouslySetInnerHTML={{ __html: parseDescription(point) }} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
