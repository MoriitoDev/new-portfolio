import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';

import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { TextScramble } from '../ui/text-scramble';

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const buttonIcons = {
    CV: CV,
    Chat: Chat,
  };

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
      />

      {/* Text Area */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-4xl font-black tracking-tighter lg:text-5xl select-none">
          <TextScramble text={name} autostart className="w-full" />
        </h1>
        <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
          {title}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 text-[15px] leading-snug text-neutral-500 dark:text-neutral-400">
          {renderDescription()}
        </div>
      </div>

      {/* Buttons & Social Links */}
      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {buttons.map((button, index) => {
            const IconComponent =
              buttonIcons[button.icon as keyof typeof buttonIcons];
            return (
              <Button
                key={index}
                variant={button.variant as 'outline' | 'default'}
                className={cn(
                  'w-full justify-start gap-2 h-11 text-[15px] font-bold rounded-xl px-4',
                  button.variant === 'outline' && 'bg-neutral-100 dark:bg-neutral-900 border-none hover:bg-neutral-200 dark:hover:bg-neutral-800',
                  button.variant === 'default' && 'bg-destructive text-white hover:bg-destructive/90'
                )}

                asChild
              >
                <Link href={button.href}>
                  {IconComponent && <IconComponent className="size-4" />}
                  {button.text}
                </Link>
              </Button>
            );
          })}
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-4 px-1">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  key={link.name}
                  target="_blank"
                  className="text-neutral-400 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <span className="size-6 block [&>svg]:size-full">{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
