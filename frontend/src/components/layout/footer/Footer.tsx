'use client';

import React from 'react';
import Image from 'next/image';
import { SOCIAL_ICONS } from '@/static/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { NavLinks } from '../navigation/NavLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from 'src/lib/utils';
import FooterBackground from './FooterBackground';

type Props = {
  isMainDisplay?: boolean;
};

const Footer = ({ isMainDisplay = false }: Props) => {
  const pathName = usePathname();
  const isHomepage = pathName === '/';

  return (
    <footer
      className={cn(
        // Below lg (< ~1000px): plain solid dark footer — the wide mountain
        // scene only reads well on desktop. lg+ shows the image (cover/center).
        'relative w-full overflow-hidden max-lg:bg-[#0b0e13] text-white ',
        !isMainDisplay && 'mt-12 lg:mt-20',
      )}
    >
      <div>
        <Image
          src="/footer-bg.png"
          alt="Footer Background"
          fill
          className=" hidden lg:block max-xl:object-cover"
        />
      </div>
      <div className="page-wrapper relative z-10 mx-auto max-w-[1920px] px-6 py-12 md:px-8 lg:px-20 lg:pt-50 lg:pb-7">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-[40px]">
          {/* Left: Quick Links */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h3 className="font-poppins text-lg font-semibold lg:text-xl">
              Quick Links
            </h3>
            <NavLinks className="flex-row gap-5 lg:flex-col lg:items-start lg:gap-[8px]" />
          </div>

          {/* Center: Branding & Socials */}
          <div className="flex flex-col items-center text-center gap-[8px]">
            <SectionHeader
              title="Trails Nepal"
              description="A web-based platform to inform about the trek plans in Nepal"
              light
            />
            <p className="font-poppins text-base text-white/90">
              Kathmandu, Nepal
            </p>

            <div className="flex gap-4 pt-2 lg:pt-4">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-110"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Collaborations */}

          <div className="flex flex-col items-center lg:items-end justify-center lg:justify-end lg:shrink-0 gap-6">
            {/* Presented by */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-poppins text-[11px] uppercase tracking-wider text-white/90">
                Presented by
              </p>
              <div className="flex items-center justify-center rounded-md bg-white px-7 py-2">
                <Link href="https://buildfornepal.org/" target="_blank">
                  <Image
                    src="/icons/BNF.svg"
                    alt="Build For Nepal"
                    width={80}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Collaboration with */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-poppins text-[11px] uppercase tracking-wider text-white/90 ">
                Collaboration with
              </p>
              <div className="flex items-center justify-center rounded-md bg-white px-3 py-2">
                <Link href="https://techgaun.com" target="_blank">
                  <Image
                    src="/icons/TG.svg"
                    alt="Tech Gaun"
                    width={80}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[32px] w-full border-t border-white/20 pt-[20px] text-center lg:mt-[50px]">
          <p className="font-poppins text-[12px] tracking-tight text-white/70">
            &copy; {new Date().getFullYear()} Trails Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
